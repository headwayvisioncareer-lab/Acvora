# FMC Project

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Tech Stack](#tech-stack)
- [Usage](#usage)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

FMC is a comprehensive web application designed to provide information and services related to colleges, student loans, scholarships, and more. The platform offers a user-friendly interface for students, administrators, and other stakeholders to interact with various educational resources, forms, and data visualizations.

## Features

Below is a detailed explanation of the features that have been implemented in the FMC project:

1. **College Exploration and Detailed Information**
   - Users can browse, search, and view detailed information about various colleges.
   - Components: `CollegeCard.js`, `CollegeCardItem.js`, `ExploreCollegesPage.js`, `UniversityDetails.js`.

2. **Student Loan and Scholarship Information**
   - Dedicated pages and components provide information and application options for student loans and scholarships.
   - Components: `StudentLoanPage.jsx`, `EducationLoanPage.jsx`, `Scholarship.js`, `components/student-loans/`.

3. **User Authentication (Google, Facebook, Custom)**
   - Supports user authentication via Google, Facebook, and custom email/password.
   - Components: `GoogleAuth.js`, `FacebookAuth.js`, `LoginModal.js`, `RegistrationModal.js`, `SignupModal.js`.

4. **Admin Dashboard for Managing Content**
   - Admins can manage content, review submissions, and moderate user activity.
   - Components: `adminComponents/` (e.g., `AdminMain.jsx`, `ReviewForm.jsx`, `UserForm.jsx`).

5. **Responsive Design with Tailwind CSS**
   - The UI is fully responsive and styled using Tailwind CSS for a modern look and feel.
   - Configuration: `tailwind.config.js`, `postcss.config.js`.

6. **Modular React Component Structure**
   - The codebase is organized into reusable and modular React components for maintainability and scalability.
   - Example: `components/`, `FooterComponents/`, `FooterPages/`.

7. **Contact and Newsletter Subscription Forms**
   - Users can contact the team or subscribe to newsletters for updates.
   - Components: `ContactHeroSection.js`, `Newsletter.js`, `Contact.js`.

8. **Review and Feedback System**
   - Users can submit and view reviews and feedback about colleges and services.
   - Components: `Reviews.js`, `ReviewsItem.js`, `adminComponents/ReviewForm.jsx`.

9. **News Alerts and Notifications**
   - Users receive important updates and notifications via a dedicated news alert system.
   - Component: `NewsAlerts.jsx`.

10. **Footer and Additional Informational Pages**
    - The application includes a structured footer and several additional pages for resources and information.
    - Components: `Footer.js`, `FooterComponents/`, `FooterPages/`.

## Folder Structure

```
FMC/
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── public/
│   └── ... (static assets, images, favicon, index.html)
├── src/
│   ├── App.js, App.css, index.js, index.css
│   ├── adminComponents/ (Admin dashboard and related components)
│   ├── components/ (UI components, forms, authentication, etc.)
│   ├── FooterComponents/ (Footer UI elements)
│   ├── FooterPages/ (Footer-linked pages)
│   ├── Images/ (Project images)
│   ├── Modals/ (Modal dialogs for login, registration, etc.)
│   └── Pages/ (Main application pages)
└── README.md
```

### Key Directories
- **src/components/**: Reusable UI components (cards, forms, authentication, etc.)
- **src/adminComponents/**: Components for admin functionalities
- **src/Pages/**: Main pages (Home, CollegeData, Contact, etc.)
- **src/Modals/**: Modal dialogs for user actions
- **src/Images/**: Image assets

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd FMC
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm start
   ```
   The app will run at `http://localhost:3000` by default.

## Available Scripts

- `npm start` — Runs the app in development mode.
- `npm run build` — Builds the app for production.
- `npm test` — Runs tests (if available).
- `npm run eject` — Ejects the app from Create React App (not recommended).

## Tech Stack
- **Frontend:** React.js
- **Styling:** Tailwind CSS, custom CSS
- **State Management:** React hooks, context (if used)
- **Authentication:** Google, Facebook, custom
- **Build Tools:** Create React App, PostCSS

## Usage

- **Explore Colleges:** Browse and search for colleges, view details, and compare options.
- **Student Loans & Scholarships:** Access information and apply for loans or scholarships.
- **User Registration & Login:** Sign up or log in using email, Google, or Facebook.
- **Admin Panel:** Manage content, review submissions, and moderate user activity (admin access required).
- **Contact & Newsletter:** Submit queries or subscribe to updates.

## Customization

- **Add New Components:** Place new components in `src/components/` or relevant subfolders.
- **Styling:** Use Tailwind CSS classes or add custom styles in CSS files.
- **Configuration:** Update `tailwind.config.js` and `postcss.config.js` as needed.
- **Assets:** Add images to `public/` or `src/Images/`.

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

For any questions or support, please contact the project maintainer.

## Pages Added

The following main pages have been added to the project to support the described features:

- **Home.js**: The landing page introducing the platform and its offerings.
- **ExploreCollegesPage.js**: Allows users to browse and search for colleges with various filters and details.
- **CollegeData.js**: Displays data and statistics about colleges.
- **UniversityDetails.js**: Shows detailed information about a selected university or college.
- **StudentLoanPage.jsx**: Provides information and application options for student loans.
- **EducationLoanPage.jsx**: Offers details and resources for education loans.
- **Scholarship.js**: Lists available scholarships and application processes.
- **Contact.js**: Contact form for users to reach out to the team.
- **Counsellingpage.js**: Offers counseling resources and booking options.
- **Login.js**, **Registeration.js**, **PasswordReset.js**: User authentication and account management pages.

### Example Screenshot Attachment

To include a screenshot of a page in your documentation, use the following Markdown syntax:

```markdown
![Screenshot of Explore Colleges Page](public/images/explore-colleges-screenshot.png)
```

> **Note:** Replace the path with the actual location and filename of your screenshot image. Place your screenshot in the `public/images/` directory or another appropriate location in your project.
