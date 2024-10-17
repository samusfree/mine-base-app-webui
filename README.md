# Base Mine APP WebUI

This is a User CRUD application built with React, Redux, and TypeScript. The application allows you to add, edit, and delete users. It uses Docker for containerization and `env-cmd` for managing environment variables.

## Prerequisites

- Node.js (>= 14.x)
- Docker
- Docker Compose

## Getting Started

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/samusfree/mine-base-app-webui
    cd mine-base-app-webui
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

### Running the Application

#### Using npm

1. Start the development server:
    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

#### Using Docker

1. Build the Docker image:
    ```bash
    docker-compose build
    ```

2. Run the Docker container:
    ```bash
    docker-compose up
    ```

3. Open your browser and navigate to `http://localhost:80`.

### Environment Variables

This project uses `env-cmd` to manage environment variables. You can create different `.env` files for different environments.

#### .env.local
```plaintext
REACT_APP_API_URL=http://localhost:5000/api/v1