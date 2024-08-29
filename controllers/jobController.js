import Job from '../models/JobModel.js';
import { StatusCodes } from 'http-status-codes';
import mongoose from 'mongoose';
import day from 'dayjs';

export const getAllJobs = async (req, res) => {
  const { search, jobStatus, jobType, sort } = req.query;

  const queryObject = {
    createdBy: req.user.userId,
  };

  if (search) {
    queryObject.$or = [
      { position: { $regex: search, $options: 'i' } },
      { company: { $regex: search, $options: 'i' } },
    ];
  }

  if (jobStatus && jobStatus !== 'All') {
    queryObject.jobStatus = jobStatus;
  }

  if (jobType && jobType !== 'All') {
    queryObject.jobType = jobType;
  }

  const sortOptions = {
    Newest: '-createdAt',
    Oldest: 'createdAt',
    'A-Z': 'position',
    'Z-A': '-position',
  };
  const sortKey = sortOptions[sort] || sortOptions.Newest;

  // Setup pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const jobs = await Job.find(queryObject).sort(sortKey).skip(skip).limit(limit);
  const totalJobs = await Job.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalJobs / limit);
  res.status(StatusCodes.OK).json({ totalJobs, numOfPages, currentPage: page, jobs });
};

export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  // Create job in database
  const job = await Job.create(req.body);
  // Respond with created job
  res.status(StatusCodes.CREATED).json({ job });
};

export const getJob = async (req, res) => {
  // Retrieve id from request params
  const { id } = req.params;

  // Find job from database by ID
  const job = await Job.findById(id);

  // Respond with found job
  res.status(StatusCodes.OK).json({ job });
};

export const updateJob = async (req, res) => {
  // Retrieve job id from request params
  const { id } = req.params;

  const updatedJob = await Job.findByIdAndUpdate(id, req.body, { new: true });

  // Update job details and respond w/ updated job
  res
    .status(StatusCodes.OK)
    .json({ msg: 'Job successfully modified!', job: updatedJob });
};

export const deleteJob = async (req, res) => {
  // Retrieve job id from request params
  const { id } = req.params;

  // Delete job from database by ID
  const removedJob = await Job.findByIdAndDelete(id);

  // Respond w/ success msg
  res
    .status(StatusCodes.OK)
    .json({ msg: 'Job succesfully deleted!', job: removedJob });
};

export const showStats = async (req, res) => {
  let stats = await Job.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: '$jobStatus', count: { $sum: 1 } } },
  ]);

  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const defaultStats = {
    pending: stats.Pending || 0,
    interview: stats.Interview || 0,
    declined: stats.Declined || 0,
  };

  let monthlyApplications = await Job.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } },
        count: { $sum: 1 },
      },
    },
    { $sort: { '_id.year': -1, '_id.month': -1 } },
    { $limit: 6 },
  ]);

  monthlyApplications = monthlyApplications
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;

      const date = day()
        .month(month - 1)
        .year(year)
        .format('MMM YY');
      return { date, count };
    })
    .reverse();

  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
};
