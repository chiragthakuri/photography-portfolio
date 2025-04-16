# 📸 Photography Portfolio

This is a photography portfolio website built using **React** and **Bootstrap**. It showcases a collection of photographs in a responsive and visually appealing layout. The project is hosted on **GitHub Pages** and follows a **CI/CD pipeline** with separate branches for development and production.

## 🌐 Live Demo

🔗 **Production Site**: [https://chiragthakuri.github.io/photography-portfolio/](https://chiragthakuri.github.io/photography-portfolio/)


## 🚀 Features

- Clean and modern UI with Bootstrap
- Responsive design for mobile and desktop
- Gallery-style layout to display photos
- Simple navigation and contact section
- Hosted on GitHub Pages
- CI/CD workflow with dev and prod branches

## 🛠️ Tech Stack

- **Frontend**: React, Bootstrap
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions (Dev → Prod pipeline)

## 🧩 Folder Structure

photography-portfolio/ ├── public/ ├── src/ │ ├── components/ │ ├── assets/ │ ├── App.js │ └── ... ├── .github/workflows/ │ └── deploy.yml (CI/CD pipeline) ├── package.json └── README.md

## 🚧 Branch Strategy

- `dev` – development and testing
- `main` – production-ready code

Changes are merged from `dev` to `main` via pull requests. Deployment to GitHub Pages happens automatically when changes are pushed to the `main` branch.

## 🌐 Live Demo

🔗 [View Portfolio on GitHub Pages](https://chiragthakuri.github.io/photography-portfolio/)

## 📦 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/chiragthakuri/photography-portfolio.git
   cd photography-portfolio

    Install dependencies

npm install

Run locally

npm run dev

Build for production

npm run build

Deploy (if needed manually)

    npm run deploy

🤖 CI/CD Pipeline

    GitHub Actions workflow defined in .github/workflows/deploy.yml

    Automatically builds and deploys when code is pushed to main

    Ensures continuous integration and delivery with minimal downtime

📝 License

This project is open source and available under the MIT License.
🙌 Acknowledgments

    React

    Bootstrap

    GitHub Pages

    GitHub Actions

Feel free to fork, contribute, or suggest improvements!
