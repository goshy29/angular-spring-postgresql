# Angular Project + Spring Boot + PostgreSQL
## Project Description:
This Full-Stack Project which I called Cake World with Angular, Spring Boot and PostgreSQL is a web application that combines frontend built with Angular and backend using Spring Boot and PostgreSQL. Тhe purpose of this application is to share a recipe of your favorite cake, which recipe will be posted at the Blog from the Menu and saved in PostgreSQL. Information at the Blog includes a title, user name, email and recipe. The application allows you to delete someones blog. Also you will find Cakes from the menu where you can read some interesting articles about desserts which are in-memory loaded.

## Features:
1. Responsive Design: The application is fully responsive, ensuring an optimal viewing experience across a wide range of devices, from desktops to mobile phones.
2. Full-Stack Architecture: Combines a Angular frontend with an Spring Boot backend and PostgreSQL database.
3. Blog: Allows users to post recipes with title, user details, and the recipe itself. Provides functionality to delete blog posts.
4. In-Memory Articles: Displays articles about desserts that are in-memory loaded for quick access.

## Technologies Used:
1. Frontend: Angular, HTML, CSS.
2. Backend: Java, Spring Boot.
3. Database: PostgreSQL, Spring Data JPA.
4. State Management: Angular Services.
5. Routing: Angular Router.
6. Version Control: Git, GitHub.

## Project Structure:
Frontend: Contains all Angular components and frontend logic.
  1. Components: Components(some of them reusable) for different sections of the project, including Menu.
  2. Pages: Separate pages for Home, Cakes, Blog and Share Recipe.

Backend: Contains all Spring Boot server-side code and database logic.  
  1. Controllers: Handle the HTTP requests and responses.
  2. Services: Contain the business logic of the application.
  3. Repositories: Interface with the PostgreSQL database using Spring Data JPA.
  4. Models: Define the entity classes mapped to the database tables.
  5. Config: Configuration files, including database connection settings.

## To run this project locally, follow these steps:
1. GitHub: https://github.com/goshy29/angular-spring-postgresql
2. Clone the repository: git clone https://github.com/goshy29/angular-spring-postgresql.git 
3. Open the project with your code editor(IntelliJ IDEA) and open New Terminal
4. To install frontend dependencies, at the Terminal navigate to "cd src/main/frontend" and run: npm install
5. Ensure PostgreSQL is installed and running
6. Create a database and update file "application.properties" with your database credentials
7. Start the Spring Boot application 
8. Start the frontend development server: npm start
9. Open the application in your browser: http://localhost:3000 
