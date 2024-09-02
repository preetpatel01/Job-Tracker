# Jobify

**Jobify** is a web application built with the MERN stack to simplify the job application process by offering a more intuitive and feature-rich alternative to traditional spreadsheets. It provides users with powerful tools to track their job applications, view analytics, and manage their profiles.

## Table of Contents

1. [Live Demo](#live-demo)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Usage](#usage)
5. [API Endpoints](#api-endpoints)
6. [Authentication](#authentication)
7. [Analytics & Charts](#analytics--charts)
8. [File Uploads](#file-uploads)
9. [Future Improvements](#future-improvements)
10. [License](#license)

## Live Demo
https://jobify-preetpatel.onrender.com/

## Features

- **Job Tracking**: Easily track job applications with statuses like pending, interview, and rejected.
- **Analytics**: Visualize your application process with charts showing applications per month and status distributions.
- **Profile Management**: Upload and manage profile images through a simple interface.
- **Authentication**: Secure login and registration using JWT and cookies.
- **Responsive Design**: Accessible on both desktop and mobile devices.

## Tech Stack

- **Frontend**: React, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Tokens), Cookies
- **File Storage**: Cloudinary for profile image uploads
- **Charts**: Recharts
- **Deployment**: Render

## Usage

Register as a new user, log in, and start tracking your job applications. The main dashboard provides an overview of your application stats, while the profile section allows you to upload a profile picture.

### Main Dashboard

- **Add a Job**: Fill in the details of a job application and save it.
- **View Applications**: Filter and search through your list of job applications.
- **Analytics**: View charts showing your job application trends over time.

### Profile Management

- **Upload Profile Picture**: Upload a profile image using the Cloudinary integration.
- **Edit Profile**: Update your personal information and view application history.

## API Endpoints

| Method | Endpoint                  | Description                                |
| ------ | ------------------------- | ------------------------------------------ |
| POST   | `/api/v1/auth/register`   | Register a new user                        |
| POST   | `/api/v1/auth/login`      | Log in an existing user                    |
| GET    | `/api/v1/jobs`            | Get all job applications for the logged-in user |
| POST   | `/api/v1/jobs`            | Add a new job application                  |
| GET    | `/api/v1/jobs/:id`        | Get a specific job application             |
| PATCH  | `/api/v1/jobs/:id`        | Update a job application                   |
| DELETE | `/api/v1/jobs/:id`        | Delete a job application                   |


## Authentication

Jobify uses **JWT** for secure authentication. The JWT is stored in an HTTP-only cookie to enhance security. Upon successful login, the user receives a token for authenticating subsequent requests.

- **Registration**: Users can register by providing a name, email, and password. Passwords are hashed using bcrypt before being stored in the database.
- **Login**: Users authenticate by providing their credentials, receiving a JWT upon successful authentication.

## Analytics & Charts

Jobify offers visual insights into your job search process. The analytics section includes:

- **Applications per Month**: Track the number of submitted applications each month.
- **Status Breakdown**: View the distribution of your applications across different statuses (pending, accepted, rejected).

These features help you stay organized and understand your job search trends.

## File Uploads

Jobify integrates with **Cloudinary** for uploading and managing profile images. Users can upload, update, or delete their profile images directly from the profile management section.

- **Uploading**: Upload a profile image when registering or updating your profile.
- **Managing**: Replace or remove your profile image anytime.

## Future Improvements

- **Notifications**: Implement notifications for application updates or deadlines.
- **Enhanced Analytics**: Add more charts and graphs for deeper insights.

## License

This project is licensed under the MIT License.
