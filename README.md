# Ticket Manager App

A simple ticket management application built with **React + TypeScript + Vite** and Redux Toolkit. The project follows a modular architecture with shared UI components, widgets, pages, and global state management.

---

## 🚀 Tech Stack

* React
* TypeScript
* Vite
* Redux Toolkit
* SCSS Modules

---

## 📁 Project Structure

* `app/` – app entry point, global styles, theme
* `pages/` – application pages
* `widgets/` – large feature blocks (Header, Ticket, Forms)
* `shared/` – reusable UI components, hooks, and types
* `store/` – Redux slices and store setup
* `assets/` – static assets

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Zirolio/MiniRequestSystem.git
cd MiniRequestSystem
```

Install dependencies:

```bash
npm install
```

---

## 🧪 Development

Run the development server:

```bash
npm run dev
```

The app will be available at:

```
http://localhost:5173
```

---

## 📦 Build

Create a production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## 🧹 Linting

Run ESLint:

```bash
npm run lint
```

---

## 📌 Notes

* State management is handled via Redux Toolkit (`store/`)
* UI is split into reusable components (`shared/ui`) and feature widgets (`widgets`)
* Styling is done using SCSS modules
