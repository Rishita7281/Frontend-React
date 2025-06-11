MedAppoint: Your Seamless Healthcare Management System
MedAppoint is a modern, responsive web application designed to simplify your healthcare journey. It provides real-time information on hospitals, bed availability, specialist services, and allows for instant appointment booking. With the newly integrated user authentication, you can now securely manage your bookings and favorite hospitals.

✨ Features
Hospital Directory: Browse a comprehensive list of hospitals with detailed information.

Search & Filter: Easily find hospitals by name, specialty, or location.

Real-time Availability: Check general and ICU bed availability in hospitals.

Blood Bank Status: View current blood unit counts for various blood types.

Appointment Booking: Book services with specific doctors and manage your appointments.

Favorites: Mark hospitals as favorites for quick access.

Emergency Services: Quick access to emergency helplines and nearest hospitals.

User Authentication (New!):

Login: Securely sign in to your account.

Sign Up: Create a new user account with basic details.

Personalized experience for bookings and favorites.




🔒 Login & Sign Up
MedAppoint now features dedicated login and signup pages to provide a personalized user experience.

Login Page
Users can sign in using their registered email and password.

The clean and intuitive login interface.

Sign Up Page
New users can easily create an account by providing their full name, email address, phone number, and setting up a secure password.

The simple signup form to create a new MedAppoint account.

🛠️ Technologies Used
React.js: A JavaScript library for building user interfaces.

Tailwind CSS: A utility-first CSS framework for rapid UI development.

Lucide React: A beautiful and consistent icon library for React.

🚀 Getting Started
Follow these steps to get a local copy of the project up and running on your machine.

Prerequisites
Node.js (LTS version recommended)

npm or yarn

Installation
Clone the repository:

git clone https://github.com/your-username/medappoint.git
cd medappoint

(Note: Replace https://github.com/your-username/medappoint.git with your actual repository URL.)

Install dependencies:
Using npm:

npm install

Or using yarn:

yarn install

Tailwind CSS Setup (if not already configured):
Ensure your tailwind.config.js and postcss.config.js are correctly set up and your index.css (or equivalent) includes the Tailwind directives. If you're building this from scratch, refer to the Tailwind CSS React guide.
For a quick local test (e.g., if you're directly opening an HTML file wrapping this React app), ensure you have the Tailwind CDN script in your index.html:

<!-- public/index.html -->
<head>
  <!-- ... other head elements ... -->
  <script src="https://cdn.tailwindcss.com"></script>
</head>

Running the Application
Once dependencies are installed, you can start the development server:

Using npm:

npm start

Or using yarn:

yarn start

This will open the application in your default browser at http://localhost:3000 (or another available port).

💡 Usage
Navigate: Use the header buttons to switch between the main hospital view, your bookings, emergency services, login, and signup.

Search & Filter: Type into the search bar or click on specialty buttons to refine your hospital search.

Book Appointments: Click the "Book" button next to a service to add it to your appointments. (Requires login)

Manage Bookings: Visit the "Bookings" tab to see your scheduled appointments and cancel them.

Favorites: Click the heart icon on a hospital card to add/remove it from your favorites. (Requires login)

⏭️ Future Enhancements
Backend Integration: Implement a robust backend (e.g., Node.js with Express, Python with Django/Flask, or a BaaS like Firebase) for persistent user authentication, data storage, and booking management.

User Profiles: Allow users to manage their personal information.

Advanced Search & Filters: More granular filtering options (e.g., by rating, distance, specific doctors).

Notifications: Implement real-time notifications for appointment reminders or changes.

Doctor Profiles: Detailed profiles for doctors, allowing users to choose based on expertise.

Payment Gateway Integration: For paid services or consultations.

Mapping Integration: Display hospital locations on an interactive map.
