# School ID Card Generator

A frontend React application that displays school ID card templates from mock data and allows users to generate printable PDFs directly in the browser.

---

## Features

- View a list of people (students and staff) from mock JSON data
- Generate **vertical and horizontal ID card layouts**
- Multiple color themes per layout
- Select individual templates or **select all**
- Download:
  - A single ID card
  - Multiple selected ID cards
- Client-side PDF generation (no backend required)

---

## Tech Stack

- **React** (Vite)
- **React Router**
- **html2pdf.js** for client-side PDF generation
- Plain CSS for styling

---

## Simple Project Structure

```

src/
├── components/
│   ├── IDCard.jsx
│   ├── HorizontalTemplates.jsx
│   └── VerticalTemplates.jsx
├── pages/
│   ├── Table.jsx
│   └── CardLayouts.jsx
├── data/
│   └── data.json
├── App.jsx
└── main.jsx

````

---

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm

### Installation

```bash
git clone https://github.com/ume5hg/schoolIdCardGenerator.git
cd schoolIdCardGenerator
npm install
````

### Run the app

```bash
npm run dev
```

Open the app in your browser at the URL shown in the terminal (usually `http://localhost:5173`).


## How to Use

1. On the home page, select a person from the table.
2. Navigate to the templates page.
3. Browse vertical and horizontal ID card templates.
4. Select one or more templates using checkboxes (or use **Select All**).
5. Click **Download** to generate a printable PDF.


## PDF Generation Notes

* PDFs are generated **entirely in the browser** using `html2pdf.js`.
* A dedicated print container is rendered to ensure:

  * Consistent card size
  * Proper alignment
  * Clean multi-card layout
* The implementation supports both single and multiple card downloads.


## Author

**Umesh Gautam**
