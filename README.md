# Joineazy Frontend Internship Task - Assignment Dashboard

A responsive React.js application built as a technical task for the Joineazy Frontend Internship. This project simulates a dashboard for managing student assignments with two distinct roles: Student and Admin.

---

### **Live Demo**

[**Link to your deployed website**] <-- *We will fill this in tomorrow after we deploy it to Netlify/Vercel.*

---

### **Tech Stack**

* **Framework:** React.js
* **Styling:** Tailwind CSS
* **Language:** JavaScript (ES6+)

---

### **Features**

* **Role-Based Login:** A simple login page to select either a "Student" or "Admin" view.
* **Student Dashboard:**
    * [cite_start]Displays a list of all assignments from a mock JSON data source[cite: 1414, 1429].
    * [cite_start]Implements a **double-verification flow** (`window.confirm`) for confirming assignment submissions[cite: 1415].
    * [cite_start]Dynamically updates the UI to show "Submitted" status using React state[cite: 1419].
* **Admin Dashboard:**
    * [cite_start]Displays a list of all students and their assignment progress[cite: 1418].
    * [cite_start]Features a reusable **progress bar component** to visually represent data[cite: 1418].
* [cite_start]**Fully Responsive:** Designed with Tailwind CSS to be responsive across desktop and mobile devices[cite: 1419, 1426].

---

### **Core Concepts & Hooks Implemented**

This project demonstrates a practical application of core React concepts:

* **`createBrowserRouter` (React Router):** Used to set up the client-side routes for `/`, `/student`, and `/admin`.
* **`useNavigate`:** Used on the Login page to programmatically navigate to the correct dashboard.
* **`useState`:** Used in the Student Dashboard to manage the state of the assignments list, allowing for real-time status updates on confirmation.
* **Component-Based Architecture:** The app is broken into reusable components like `AssignmentCard.jsx` and `ProgressBar.jsx`.
* **Props:** Used to pass data (assignment details, progress percentage) down to child components.
* **`.map()` Method:** Used to render lists of components from the `fakeData.js` arrays.

---

### **How to Run Locally**

To get a local copy up and running, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/](https://github.com/)[Your-Username]/joineazy-task.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd joineazy-task
    ```
3.  **Install NPM packages:**
    ```bash
    npm install
    ```
4.  **Run the application:**
    ```bash
    npm run dev
    ```
