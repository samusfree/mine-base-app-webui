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

### Building the Docker Image

To build the Docker image for the application, use:

```sh
docker build -t mine-base-app-webui:latest \
--build-arg build_env='your_env_for_example_dev_qa_prd' \
--build-arg REACT_APP_PUBLIC_URL='url_where_will_run_the_frontend' \
--build-arg REACT_APP_API_URL='url_api_that_frontend_will_consume' .
```

for example to run on local use: 
```sh
docker build -t mine-base-app-webui:latest \
--build-arg build_env='dev' \
--build-arg REACT_APP_PUBLIC_URL='http://localhost' \
--build-arg REACT_APP_API_URL='http://localhost:5000/api/v1/' .
```

### Running the Docker Container

To run the Docker container, use:

```sh
docker run -d --name mine-base-app-webui-local -p 80:80 mine-base-app-webui:latest
```

### Local Docker compose

To run on local with docker-compose, use:
```bash
docker compose up -d
```

3. Open your browser and navigate to `http://localhost`.

### Environment Variables

This project uses `env-cmd` to manage environment variables. You can create different `.env` files for different environments.

#### .env.local
```plaintext
REACT_APP_API_URL=http://localhost:5000/api/v1