# :computer: How to Life 

How to Life offers a simple interface that helps you get guides to learn things. It's integrated with ChatGPT OpenAI api that gurantees results that will be most helpful to you.We're here to simplify the learning process with clear, step-by-step guides and expert advice. Our mission is to empower you with practical knowledge, helping you tackle everyday challenges with confidence. Whether you're starting out on your own or looking to refine existing skills, our platform provides the tools and community support you need to thrive.

:sparkles: ## Features 

![How to Life](https://github.com/lauracastrotech/how-to-life/blob/documentation/assets/demo_thumbnail.jpg)


- Mobile responsive progressive form
- Login Authentication
- Profile page 
- History saved for registered users
- Text-to-speech
- Answer regeneration

:wrench: ## Setup  

### Dependencies
This application is built with an Express server, MySQL database, and React front end framework. Below is a list of other dependencies that you will need to run the application.

- Run `npm install` in project directory to install server-related dependencies
- `cd client` and run `npm install` to install client dependencies
- Other libraries include `npm install --save animate.css jquery popper react-spinners`

### Database Prep

- Access the MySQL interface in your terminal by running `mysql -u root -p`
- Create a new database called `how_to_life`
- Add a `.env` file to the project folder of this repository containing the MySQL authentication information for MySQL user. For example:

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=how_to_life
  DB_PASS=YOURPASSWORD
```

### Development

- Run `npm start` in project directory to start the Express server on port 3000.

- In another terminal, do `cd client` and run `npm run dev` to start the client in development mode with hot reloading in port 5173.

:rocket: ## Collaborators 

#### Bianca Harris
:email: biancaharris150808@gmail.com 
:octocat: [GitHub Profile](https://github.com/biancajayharris) 
:linkedin: [LinkedIn Profile](https://www.linkedin.com/in/bianca-harris-551758166/) 


Sylwia Orczyk
:email: orczyksylwia@gmail.com
:octocat: [GitHub Profile](https://github.com/sylwiao31) 
:linkedin: [LinkedIn Profile](https://www.linkedin.com/in/sylwia-orczyk-41a6074a/) 

Laura Castro
:email: lauracastrotech@gmail.com 
:octocat: [GitHub Profile](https://github.com/lauracastrotech) 
:linkedin: [LinkedIn Profile](https://www.linkedin.com/in/lccastro/) 

#### CodeOp Fullstack Development Bootcamp
This application was a collaborative effort for the final project in CodeOp bootcamp. The project was managed using Agile Scrum and Jira platform.