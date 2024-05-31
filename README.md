# 🏪 Simple Shop Management Web App

Welcome to the **Simple Shop Management Web App**! This application allows you to manage your shops, bills, and receipts effortlessly.

## 🚀 Features

- Add and view shops.
- Add, update, and delete bills and receipts.
- View transaction history with net balance.
- Generate and preview PDF reports of transactions.

## 📋 Table of Contents

- [Features](#-features)
- [Installation](#-installation)
- [Usage](#-usage)
- [File Structure](#-file-structure)
- [Technologies Used](#-technologies-used)
- [Contributing](#-contributing)
- [Acknowledgements](#-acknowledgements)
- [Contact](#-contact)

## 🛠 Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/simple-shop-management-web-app.git
    cd simple-shop-management-web-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up MongoDB:**

    Make sure MongoDB is running on your local machine. You can install it from the [MongoDB Download Center](https://www.mongodb.com/try/download/community).

4. **Start the application:**

    ```bash
    npm start
    ```

    The app will be running at `http://localhost:3000`.

## 🖥 Usage

- **Add a New Shop:**
  - Navigate to the home page.
  - Fill in the shop name in the "Add a New Shop" form.
  - Click the "Add Shop" button.

- **View and Manage Transactions:**
  - Click on a shop name to view its transactions.
  - Add bills or receipts using the provided forms.
  - Double-click on a transaction to edit or delete it.

- **Generate PDF Report:**
  - Click the "Preview Transactions PDF" link to view the PDF.
  - You can choose to download it after previewing.

## 📂 File Structure

```plaintext
simple-shop-management-web-app/
├── public/
│   ├── styles.css         # CSS styles
│   ├── index.css   
├── routes/
│   ├── billRoutes.js      # Routes for bills
│   ├── receiptRoutes.js   # Routes for receipts
│   ├── shopRoutes.js      # Routes for shops
│   ├── index.js           # Main routes
├── views/
│   ├── home.ejs           # Home page view
│   ├── shop.ejs           # Shop details view
│   ├── pdfTemplate.ejs    # PDF template view
├── models/
│   ├── shop.js            # Shop model
│   ├── bill.js            # Bill model
│   ├── receipt.js         # Receipt model
├── app.js                 # Main application file
├── package.json           # NPM package file
├── README.md              # Readme file
## 🧰 Technologies Used

**Frontend:**

- HTML
- CSS
- JavaScript
- EJS (Embedded JavaScript templates)

**Backend:**

- Node.js
- Express.js

**Database:**

- MongoDB

**Other Libraries:**

- Body-parser
- Mongoose
- HTML-PDF (for generating PDFs)

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any bug fixes or enhancements.

## 🙏 Acknowledgements

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [EJS](https://ejs.co/)
- [html-pdf](https://www.npmjs.com/package/html-pdf)

## 📬 Contact

Feel free to reach out if you have any questions or suggestions!

- **Email**: lokeshleelaprasad@gmail.com
- **GitHub**: [lokeshleela04](https://github.com/lokeshleela04)
