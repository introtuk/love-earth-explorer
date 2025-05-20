# 🌍 Love Earth Project

**Love Earth** is an eco-conscious web application designed to educate, inspire, and empower individuals to take action for the environment. The platform provides insights into major environmental challenges like deforestation, climate change, water pollution, and more—along with practical, everyday solutions.

Features include:

- **Tree Calculator** to estimate how many trees to plant based on your carbon footprint.
- **Educational content** on pressing environmental issues and their solutions.
- **Action steps** to make a real-world impact.
- **Join Us** section to engage with the community and stay informed.

Built with a clean, responsive UI using React, TypeScript, Tailwind CSS, and shadcn-ui, the project is hosted on Firebase at [loveearth1a.web.app](https://loveearth1a.web.app).

---

## 🔗 [Live Website](https://loveearth1a.web.app)

## 📦 Tech Stack

- **Framework:** React (with Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn-ui
- **Hosting:** Firebase

---

# 🚀 Run the Project Locally

This guide will walk you through the complete process of setting up and running the Love Earth project on your local machine.

## 🛠 Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (Recommended: LTS version)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/)

## 📥 Step 1: Clone the Repository

```bash
git clone https://github.com/introtuk/love-earth-explorer.git
cd love-earth-explorer
```

## 📦 Step 2: Install Dependencies

Install all the required dependencies for the project:

```bash
npm install
```

## ⚙️ Step 3: Configure Environment Variables (if needed)

If the project requires environment variables:

1. Locate the `.env.example` file in the project root
2. Create a copy and rename it to `.env`
3. Fill in the required values of database configurations

```bash
cp .env.example .env
```

## 🧪 Step 4: Run Development Server

Start the local development server:

```bash
npm run dev
```

This will start the Vite development server, typically at `http://localhost:8080`.

## 👀 Step 5: View the Application

Open your browser and navigate to:

```
http://localhost:8080
```

You should now see the Love Earth application running locally.

## 🏗️ Step 6: Building for Production (Optional)

If you want to create a production build:

```bash
npm run build
```

This will generate optimized files in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## 🔍 Troubleshooting Common Issues

- **Installation errors**: If you encounter errors during dependency installation, try deleting the `node_modules` folder and `package-lock.json` file, then run `npm install` again.
- **Missing dependencies**: If you see errors about missing dependencies, make sure you're using the recommended Node.js version and run `npm install` again.

## 🧩 Additional Development Information

- **Code formatting**: Run `npm run format` to format code using Prettier
- **Linting**: Run `npm run lint` to check for code issues
- **Type checking**: Run `npm run typecheck` to verify TypeScript types

Happy coding! 🌍💚
