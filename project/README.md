# Roomly

A web application for browsing, booking, and managing room rentals. This application connects hosts who want to list their properties with users looking for a place to stay.

## Features

### User Features
- **Browse Homes:** View a list of available properties.
- **View Home Details:** See more information about a specific property.
- **Book a Room:** Make a reservation for a room (booking functionality is planned).
- **Favorites:** Add or remove properties from a personal list of favorites.

### Host Features
- **Add a Home:** List a new property with details and images.
- **View Host Homes:** See a list of all properties listed by the host.
- **Edit a Home:** Update the details of an existing property.
- **Delete a Home:** Remove a property listing.

## Technology Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **View Engine:** EJS (Embedded JavaScript templates)
- **Authentication:** express-session with connect-mongodb-session
- **Styling:** Tailwind CSS

## Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - The MongoDB connection string is currently hardcoded in `app.js`. For production, it is recommended to use environment variables.

4. **Run the application:**
   ```bash
   npm start
   ```

## Available Scripts

- `npm start`: Starts the application using `nodemon`, which automatically restarts the server on file changes.
- `npm run tailwind`: Compiles the Tailwind CSS files.
- `npm test`: (Not yet implemented)

## Project Structure

```
project/
├── controllers/      # Contains the application logic for handling requests
├── models/           # Defines the Mongoose schemas for the database
├── public/           # Contains static assets like CSS and images
├── routes/           # Defines the application's routes and associates them with controllers
├── views/            # Contains the EJS templates for rendering pages
├── app.js            # The main application file
├── package.json      # Lists the project's dependencies and scripts
└── README.md         # This file
```