# MawFiNex Website

## Overview

MawFiNex is a Next.js based website designed to provide users with an engaging experience. This project serves as a template for building modern web applications using React and Next.js.

## Features

- Server-side rendering for improved performance and SEO.
- API routes for backend functionality.
- Modular components for easy maintenance and scalability.
- Global and scoped CSS for styling.

## Getting Started

### Prerequisites

- Node.js (version 12 or later)
- npm (Node package manager)

### Installation

1. Clone the repository:
    ```
    git clone https://github.com/yourusername/mawfinex-website.git
    ```
2. Navigate to the project directory:
    ```
    cd mawfinex-website
    ```
3. Install the dependencies:
    ```
    npm install
    ```

### Running the Development Server

To start the development server, run:

```
npm run dev
```

Open your browser and go to `http://localhost:3000` to see the website in action.

### Building for Production

To create an optimized production build, run:

```
npm run build
```

Then, you can start the production server with:

```
npm start
```

## Project Structure

```
mawfinex-website
├── pages
│   ├── index.js
│   ├── about.js
│   ├── _app.js
│   └── api
│       └── hello.js
├── components
│   ├── Header.js
│   ├── Footer.js
│   └── Layout.js
├── styles
│   ├── globals.css
│   └── Home.module.css
├── public
│   └── favicon.ico
├── package.json
├── next.config.js
└── README.md
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
