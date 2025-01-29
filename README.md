# Backend HNG Task 0

## Description
This is a simple backend API built with Express.js. It provides an endpoint that returns essential details, including the developer's email, the current datetime, and a link to the project's GitHub repository. The API is lightweight and serves as an introduction to backend development.

## Features
- Returns developer email.
- Provides the current datetime dynamically.
- Includes a link to the GitHub repository.
- CORS enabled for cross-origin requests.

## Tech Stack
- **Node.js** - JavaScript runtime environment.
- **Express.js** - Web framework for Node.js.
- **CORS** - Middleware to handle cross-origin resource sharing.

## Setup Instructions
### Prerequisites
Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (comes with Node.js)

### Installation & Running Locally
1. Clone the repository:
   ```sh
   git clone https://github.com/G4EVA-dev/backend-hng-task-0.git
   ```
2. Navigate into the project directory:
   ```sh
   cd backend-hng-task-0
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the server:
   ```sh
   node index.js
   ```
5. The API will be available at:
   ```
   http://localhost:3000/
   ```

## API Documentation
### Endpoint: GET /
#### URL:
```
http://localhost:3000/
```

#### Response Format:
- **200 OK**
- JSON response with the following structure:
  ```json
  {
    "email": "tanzeglenn@gmail.com",
    "current_datetime": "2025-01-01T12:00:00.000Z",
    "github_url": "https://github.com/G4EVA-dev/backend-hng-task-0"
  }
