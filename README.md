# Mood Tracker App

The Mood Tracker App is a simple application designed to help users track their moods over time. This guide explains how to launch the app using Docker Compose.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Docker — https://www.docker.com/get-started
- Docker Compose — https://docs.docker.com/compose/install/

## Getting Started

Follow these steps to build and run the app.

1. Start the services with Docker Compose

The repository contains a top-level `docker-compose.yml` and an `api/docker-compose.yaml` for the API service. Choose one of the options below depending on how you want to run the app.

- Run everything from the repository root (recommended when using the top-level compose):

```bash
docker-compose up --build
```

Add `-d` to any of the commands above to run containers in the background.

## Environment & secrets

The API reads configuration from environment variables. Create an `.env` file in the same directory as the `docker-compose.yml` you run (root or `api/`) and add values similar to the example below. Never commit secrets to version control.

Example `.env` (adjust keys to match the compose/service expects). The real `.env` in this repo uses MySQL-style and DB_* keys:

```env
DB_HOST=db
DB_USER=root
DB_NAME=mood_tracker
DB_PASSWORD=your_db_password
MYSQL_PASSWORD=your_mysql_password
MYSQL_ROOT_PASSWORD=your_mysql_root_password
JWT_SECRET=<GENERATED_SECRET>
```

Generate a strong `JWT_SECRET` using OpenSSL:

```bash
openssl rand -base64 32
```

Copy the output into your `.env` file (replace the placeholder above). Never commit the real `.env` with secrets to source control.

---

Enjoy the Mood Tracker app!