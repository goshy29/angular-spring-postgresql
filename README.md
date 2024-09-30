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
9. Open the application in your browser: http://localhost:4200

## Example Data to Enter in the User Form: 
1. title: Fig, nut & seed bread with ricotta & fruit
2. name: John Doe
3. email: johndoe@gmail.com
4. recipe: This healthy loaf is closer to banana bread than traditional cake. It's made with dried figs, sultanas, oats, nuts, seeds and black tea, all of which provide a natural boost of energy. Heat oven to 170C/150C fan/gas 3½. Pour the tea into a large bowl and stir in the figs, sultanas and oats. Set aside to soak. Meanwhile, line the base and sides of a 1kg loaf tin with baking parchment. Mix together the flour, baking powder, nuts and seeds. Beat the egg into the cooled fruit mixture, then stir the dry ingredients into the wet. Pour into the tin, then level the top and scatter with the extra nuts and sesame seeds.

## PostgreSQL Connection:
You will find this connection settings at directory "src/main/resources/application.properties" into the spring project.

spring.datasource.url=jdbc:postgresql://localhost:5432/database \
spring.datasource.username=username \
spring.datasource.password=password 

Replace that connection properties("database", "username", "password") with your own database credentials for PostgreSQL.

**Note: At the root directory of the spring project you will find file "cake_blog_create_table_script.txt" that include creating table script. Be sure that you will run first this script into PostgreSQL before starting using this application.**
