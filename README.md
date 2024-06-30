# fspt27-final project - Inroduction

- This project is called How to life. It is your go-to resource for mastering essential adult skills you may not have learned in school or just in general. We understand that navigating adulthood can be daunting, whether it's managing finances, cooking nutritious meals, or understanding complex paperwork.

At How to Life, we're here to simplify the learning process with clear, step-by-step guides and expert advice. Our mission is to empower you with practical knowledge and skills, helping you tackle everyday challenges with confidence. Whether you're starting out on your own or looking to refine existing skills, our platform provides the tools and community support you need to thrive.

It is an application built with Express for the backend server, MySQL as the database and REACT for the front-end.

## Database Prep

- Access the MySQL interface in your terminal by running `mysql -u root -p`
- Create a new database called how_to_life `how_to_life`
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

### Database schema
