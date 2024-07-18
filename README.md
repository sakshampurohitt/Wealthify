# Wealthify

Wealthify is a personal finance tracker web app designed specifically for students to efficiently manage their wealth. With Wealthify, users can track their income, expenses, and overall financial health, all from a single, intuitive interface.

## Features

- **Firebase Authentication**: Secure login with Google or Email/Password.
- **Firebase Firestore**: Real-time data storage and retrieval for transactions.
- **Ant Design**: Sleek and responsive UI components for a modern look and feel.
- **Income and Expense Tracking**: Easily add, manage, and categorize your transactions.
- **Financial Statistics**: Visualize your spending and income trends with interactive charts.
- **CSV Export**: Export your transactions to CSV for offline analysis.

## Getting Started

To run Wealthify locally, follow these steps:

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **npm**: Node Package Manager (npm) comes with Node.js. You can verify the installation by running `npm -v` in your terminal.

### Clone the Repository

```bash
git clone https://github.com/sakshampurohitt/wealthify.git
cd wealthify
Install Dependencies
Run the following command to install all the necessary packages:

##npm install

Set Up Firebase
Create a Firebase Project: Go to the Firebase Console and create a new project.
Enable Authentication: Under the "Build" section, go to "Authentication" and enable Google and Email/Password sign-in methods.
Create a Firestore Database: Under the "Build" section, go to "Firestore Database" and create a new database.
Add Firebase Configuration: Replace the Firebase configuration in src/firebase.js with your project's configuration details. You can find this information in your Firebase project settings.
Run the Application
Start the development server:

npm start
Contributing
If you'd like to contribute to Wealthify, please follow these steps:

Fork the Repository: Click the "Fork" button at the top right of the repository page.
Create a New Branch: Create a new branch for your changes.
git checkout -b feature/your-feature

git commit -am 'Add new feature'
git commit -am 'Add new feature'
Push to the Branch: Push your changes to your forked repository
git push origin feature/your-feature
'''
Submit a Pull Request: Go to the original repository and open a pull request with a description of your changes.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
For any questions or feedback, please reach out to:

Email: 02saksham.purohit@gmail.com
GitHub: sakshampurohitt
Thank you for using Wealthify! We hope it helps you manage your personal finances with ease.
