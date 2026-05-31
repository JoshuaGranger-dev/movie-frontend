# Movie Frontend

A React frontend for a simple movie tracking app.

This project connects to an Express.js backend API and allows users to view, add, delete, and update movies.

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- Fetch API

## Features

- Load movies from the backend
- Add a new movie
- Delete a movie
- Toggle watched status
- Display backend validation errors
- Component-based React structure

## Components

- `App.jsx`
- `MovieForm.jsx`
- `MovieList.jsx`
- `MovieCard.jsx`

## How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/movie-frontend.git
```

2. Go into the project folder:

```bash
cd movie-frontend
```

3. Install dependencies:

```bash
npm install
```

4. Start the React dev server:

```bash
npm run dev
```

5. The frontend usually runs at:

```txt
http://localhost:5173
```

## Backend Requirement

This frontend expects the backend API to be running at:

```txt
http://localhost:5000
```

Backend repo:

```txt
https://github.com/JoshuaGranger-dev/movie-api
```

## What I Practiced

- React state
- Controlled forms
- Passing props
- Component structure
- Fetching data from an API
- POST, DELETE, and PATCH requests from React
- Displaying backend validation errors
- Connecting a React frontend to an Express backend
- Using Git and GitHub
