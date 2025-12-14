# Dynamic Dashboard – Frontend Assignment

This project is a dynamic dashboard built as part of a Frontend Trainee assignment.

The dashboard allows users to manage widgets under different categories.  
All data is handled locally and the UI updates dynamically without page reloads.

---

## 🚀 Features

- Dashboard built dynamically using JSON data
- Multiple categories (e.g. CSPM Executive Dashboard, CWPP Dashboard)
- Add new widgets to a category
- Remove widgets using a close (✕) icon
- Search across all widgets
- Local state management using React Context API

---

## 🛠 Tech Stack

- React.js
- Context API (State Management)
- JavaScript (ES6)
- CSS
- Create React App

---

## 📁 Project Structure

src/
├── components/
│ ├── Dashboard.jsx
│ ├── Category.jsx
│ ├── Widget.jsx
│ ├── AddWidgetModal.jsx
│ └── SearchBar.jsx
├── context/
│ └── DashboardContext.js
├── data/
│ └── dashboardData.json
├── styles.css
├── App.js
└── index.js

yaml
Copy code

---

## ▶️ How to Run Locally

1. Install Node.js
2. Clone the repository
3. Open terminal inside the project folder
4. Run the following commands:

```bash
npm install
npm start
The application will run on:

arduino
Copy code
http://localhost:3000
🌐 Deployment
The project is deployed using Netlify.

👩‍💻 Author
Aanya Shukla
Frontend Developer (Fresher)

yaml
Copy code

---

## 4️⃣ SAVE FILE

---

## 5️⃣ PUSH README UPDATE TO GITHUB

In **PowerShell** (inside `dashboard-widgets`):

```powershell
git add README.md
git commit -m "Updated README with project details"
git push
