# Deploy Service

This is a simple deployment service built with Express.js. It provides endpoints to deploy frontend and backend applications.

## How It Works

The service exposes two endpoints: `/deploy/frontend` and `/deploy/backend`. Both endpoints expect a POST request with a JSON body containing a `secret` key. This `secret` is used to authorize the deployment request.

### Endpoint: `/deploy/frontend`

- **URL:** `/deploy/frontend`
- **Method:** `POST`
- **Body:**
    ```json
    {
        "secret": "yourpassword"
    }
    ```

When a POST request is made to this endpoint with the correct [secret](http://_vscodecontentref_/2), the service will execute a series of shell commands to deploy the frontend application. These commands include:

1. Navigating to the specified deployment directory.
2. Resetting any changes in the Git repository.
3. Pulling the latest changes from the remote repository.
4. Installing any new dependencies.
5. Building the frontend application.

If any of these commands fail, the service will respond with a `500` status code and an error message. If successful, it will respond with a message indicating that the web deployment was successful.

### Endpoint: `/deploy/backend`

- **URL:** `/deploy/backend`
- **Method:** `POST`
- **Body:**
    ```json
    {
        "secret": "yourpassword"
    }
    ```

When a POST request is made to this endpoint with the correct [secret](http://_vscodecontentref_/3), the service will execute a series of shell commands to deploy the backend application. These commands include:

1. Navigating to the specified deployment directory.
2. Resetting any changes in the Git repository.
3. Pulling the latest changes from the remote repository.
4. Installing any new dependencies.
5. Running database migrations using Sequelize.
6. Restarting the backend application using PM2.

If any of these commands fail, the service will respond with a `500` status code and an error message. If successful, it will respond with a message indicating that the backend deployment was successful.

## Security

Make sure to change the [secret](http://_vscodecontentref_/4) in the code to a secure password before making the service public. This is crucial to prevent unauthorized deployments.

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd deploy-service
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the deployment server:
    ```sh
    node deploy-service.js
    ```

2. The server will run on port `3005` by default.

## License

This project is licensed under the ISC License.