# Multi-Vendor Medicine Selling E-commerce Website (MediStore)
---



## Admin Username: admin@medistore.com



## Admin Password: admin123



## Seller Username: seller@medistore.com



## Seller Password: seller123
## Overview

MediStore is a fully-featured multi-vendor e-commerce platform built with the MERN stack. It allows users to purchase medicines and healthcare products, while sellers can manage their products, track payments, and advertise products. Admins have full control over users, categories, and sales reports. The platform features role-based access, secure payments via Stripe, and a responsive design for seamless use across devices.

## Live Demo

[https://medistore-anisulhaque.netlify.app](https://medistore-anisulhaque.netlify.app)

## Technologies Used

*   MERN Stack (MongoDB, Express.js, React, Node.js)
*   Stripe
*   [Add other technologies used, e.g., specific UI libraries, state management solutions, etc.]

## Core Features

*   User Authentication (Sign-up, Login, Social Login)
*   Role-based Access Control (Users, Sellers, Admins)
*   Responsive Design
*   Product Management (Sellers & Admins)
*   Stripe Integration (Secure Payments)
*   Sales Reports (Admin)
*   Banner Advertisements (Admin)
*   Real-time Notifications
*   Invoice Generation
*   Seller Dashboard

## Dependencies

*   `express`
*   `react`
*   `react-dom`
*   `mongodb`
*   `stripe`
*   `[List all other dependencies]`

## Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/AnisulHaqueNiloy/Your-MediStore-Repository.git](https://www.google.com/search?q=https://github.com/AnisulHaqueNiloy/Your-MediStore-Repository.git) *(Replace with your repo URL)*
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd Your-MediStore-Repository *(Or your project's folder name)*
    ```

3.  **Install dependencies (Client-side - React):**

    ```bash
    cd client
    npm install  # or yarn install
    ```

4.  **Install dependencies (Server-side - Node.js/Express):**

    ```bash
    cd server
    npm install # or yarn install
    ```

5.  **Configure Environment Variables:**

    *   Create `.env` files in both the `client` and `server` directories.
    *   Add the required environment variables.  Examples:

        *   `client/.env`:
            ```
            REACT_APP_API_URL=http://localhost:5000/api  *(Or your API URL)*
            REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
            ```

        *   `server/.env`:
            ```
            MONGODB_URI=your_mongodb_uri
            STRIPE_SECRET_KEY=your_stripe_secret_key
            PORT=5000 *(Or your port number)*
            JWT_SECRET=your_jwt_secret *(If using JWT for authentication)*
            ```

6.  **Start the development servers:**

    *   **Client:**
        ```bash
        cd client
        npm start  # or yarn start
        ```

    *   **Server:**
        ```bash
        cd server
        npm start  # or nodemon server.js if using nodemon
        ```

7.  **Open the application:** The React app should be running at `http://localhost:3000` (or similar).

