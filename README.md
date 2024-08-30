# Jobify

**Jobify** is a web application built with the MERN stack to simplify the job application process by offering a more intuitive and feature-rich alternative to traditional spreadsheets. It provides users with powerful tools to track their job applications, view analytics, and manage their profiles.

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Usage](#usage)
4. [API Endpoints](#api-endpoints)
5. [Authentication](#authentication)
6. [Analytics & Charts](#analytics--charts)
7. [File Uploads](#file-uploads)
8. [Future Improvements](#future-improvements)
9. [License](#license)

## Features

- **Job Tracking**: Easily track job applications with statuses like pending, accepted, and rejected.
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

| Method | Endpoint       | Description                                |
| ------ | -------------- | ------------------------------------------ |
| POST   | `/api/register`| Register a new user                        |
| POST   | `/api/login`   | Log in an existing user                    |
| GET    | `/api/jobs`    | Get all job applications for the logged-in user |
| POST   | `/api/jobs`    | Add a new job application                  |
| PUT    | `/api/jobs/:id`| Update a job application                   |
| DELETE | `/api/jobs/:id`| Delete a job application                   |


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
