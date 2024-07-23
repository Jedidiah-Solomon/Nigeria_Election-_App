# Roadmap

Requirements

## A. Functional Requirements

1. User Registration and Authentication:
   Voters should be able to register and log in securely.
2. Candidate Management:
   Admins should be able to add, update, and remove candidates.
3. Voting Mechanism:
   Implement a secure and transparent voting process where each registered user can vote only once.
4. Results Calculation:
   Provide real-time or post-election tallying of votes.
5. Admin Dashboard:
   Interface for managing the election, including viewing real-time statistics and results.
6. User Dashboard:
   Allow voters to view candidate information and their voting status.
7. Security:
   Implement strong security measures to prevent fraud and ensure data integrity.
8. Scalability:
   Design to handle a large number of concurrent users during peak voting times.

## B. Non-Functional Requirements

1. Usability:
   Create a user-friendly interface for both voters and administrators.
2. Reliability:
   Ensure high availability and minimal downtime, especially during voting periods.
3. Performance:
   Ensure fast response times and efficient handling of database queries.
4. Compliance:
   Adhere to Nigerian electoral laws and data privacy regulations.

## Structure

1. Frontend | ReactJS:
   Used for building the user interface.
2. Backend | Express.js:
   Used for building the RESTful API.
3. Database | MongoDB:
   Used for storing user and voting data.
4. Authentication and Authorization | JWT (JSON Web Tokens):
   For securing API endpoints and managing user sessions.

## Roles and Permissions:

Defined roles for voters and admins with appropriate permissions.

## Needs

1. Domain and Hosting:
   Secure and reliable hosting for the web application.
2. SSL Certificates:
   For encrypting data transmission.
3. Backup and Recovery Plan:
   Regular backups and a plan for data recovery.
4. Testing and QA:
   Thorough testing to ensure security, performance, and reliability.
5. Legal Compliance:
6. Ensure the app complies with Nigerian electoral laws and data privacy regulations.
7. User Training and Support:
   Provide support and training for users and administrators.

## Election Structure

**Election Types:**

1. Presidential Election: 1 seat, 10 candidates.
2. Governorship Election: 36 seats (one per state), 10 candidates per seat.
3. Senate Election: 109 seats, 10 candidates per seat.
4. House of Representatives Election: 306 seats, 10 candidates per seat.
5. House of Assembly Election: 774 seats (one per LGA), 10 candidates per seat.
6. Local Government Chairman Election: 774 seats (one per LGA), 10 candidates per seat.

## File Structure

```
NIGERIA_ELECTION_APP/
│
├── .gitignore
├── README.md
├── Roadmap.md
├── Frontend/
│   ├── index.html
│   │
│   ├── src/
│   │   ├── assets/
│   │   │   ├── styles/
│   │   │   │   ├── input.css
│   │   │   │   └── style.css
│   │   │   └── img/
│   │   ├── components/
│   │   ├── main.jsx
│   │   ├── App.jsx
│   ├── package.json
│   ├── package-lock.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── vite.config.js
├── Backend/
└── License

```

```
/Backend
|-- /config
|   |-- db.js
|-- /controllers
|   |-- electionController.js
|   |-- voterController.js
|   |-- contestantController.js
|-- /middleware
|   |-- authMiddleware.js
|-- /models
|   |-- electionModel.js
|   |-- voterModel.js
|   |-- contestantModel.js
|-- /routes
|   |-- electionRoutes.js
|   |-- voterRoutes.js
|   |-- contestantRoutes.js
|-- /utils
|   |-- helperFunctions.js
|-- /data
|   |-- seedData.js
|-- .env
|-- server.js
```

### Workflow

1. Development: Start the development server with:

`npm run start` or `npm start`

This will allow you to work on your application with live reloading and development features.

2. CSS Processing (if needed): If you have changes in your CSS files and you want to process them manually, run:

`npm run postcss:build`

3. Build for Production: When you’re ready to create a production build, run:

`npm run build`

This command will optimize your application and prepare it for deployment.

4. Preview Production Build: After building, preview the production build with:

`npm run serve`

5. Code Quality: Regularly check for code quality issues with:

`npm run lint`
