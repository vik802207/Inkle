# Inkle Frontend Assignment – React Table & Edit Modal

This project is built as part of the **Inkle Frontend Intern Assignment**.  
It demonstrates building a real-world table UI using **@tanstack/react-table**, API integration, and a clean edit flow with a modal.

---
## 🌐 Live Demo

🔗 **Live Project URL:**  
https://keen-nougat-6bac4c.netlify.app/

## 🚀 Features

- 📊 Data table built **only using @tanstack/react-table**
- ✏️ Edit customer details via modal
- 🌍 Country dropdown populated from API
- 🔄 Update data using PUT API (existing + updated fields)
- 🎨 Clean, modern, dashboard-style UI
- 🧩 Modular and readable code structure

---

## 🧱 Tech Stack

- React (TypeScript)
- @tanstack/react-table
- Axios
- CSS (custom, no heavy UI library)

---

## 🔗 APIs Used

- **Taxes API**  
  https://685013d7e7c42cfd17974a33.mockapi.io/taxes

- **Countries API**  
  https://685013d7e7c42cfd17974a33.mockapi.io/countries

---
## 📁 Project Structure
```bash
src/
├── api/
│ ├── taxesApi.ts
│ └── countriesApi.ts
├── components/
│ ├── Table.tsx
│ └── EditModal.tsx
├── pages/
│ └── Home.tsx
├── styles/
│ ├── global.css
│ ├── table.css
│ └── modal.css
├── App.tsx
└── main.tsx
```
---

## 🧑‍💻 User Flow

1. User lands on the table view
2. Table displays data fetched from Taxes API
3. Clicking the edit icon opens a modal
4. User can update:
   - Name
   - Country (dropdown from Countries API)
5. On save:
   - PUT request is sent with existing + updated data
6. Table refreshes with updated values

---

## ▶️ Running the Project Locally

### 1️⃣ Install dependencies
```bash
npm install
npm run dev
```

## 📁 Project Structure

