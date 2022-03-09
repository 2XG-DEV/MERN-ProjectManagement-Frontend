Product feedback app

Thanks to Frontend Mentor for providing the frontend design

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Continued development](#continued-development)

## Overview

The biggest project I have built following no tutorials

I have built this app as part of a Frontend Mentor challenge. I have extended the design to include the login and registration pages.

The app features JWT authentication. A REST API for creating , deleting , updating and reading tasks from a MongoDB database with mongoose.

The user is able to log in , view and alter the tasks by sorting and filtering them , see a roadmap of the tasks and leave comments.

The state of the app is managed with Redux.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, read, update, and delete product feedback requests
- Sort suggestions by most/least upvotes and most/least comments
- Filter suggestions by category
- Add comments and replies to a product feedback request

### Screenshot

![Screenshot](https://github.com/2XG-DEV/MERN-ProjectManagement-Frontend/blob/master/screenshot.PNG)

### Links

- Live Site URL: [MERN Tasks](https://mern-feedbacks.netlify.app/login)

## My process

Started by creating the mongoDB cluster. Started a simple NodeJS and Express server. Added mongoose to create the schemas for the user and the tasks which contained comment and reply schemas , wrote connection and seeder scripts. Populated the database with the given data from Frontend Mentor. Added routes for authentication using JWT , used Bcrypt to hash the password. Wrote an auth middleware to protect the REST endpoints for the task routes , finally created CRUD functions in the task controller and used express router for easy routing.

On the frontend I started by creating the Redux store by adding the constants , reducers and actions for authentication and a reducer for the CRUD methods. I then created the login and registration pages and started the routing using react-router-dom. I then used the design system to create the typography components and added the CSS custom attributes for the colors. I then used the design to identify each component like the header , menu , toolbar , etc and implemented them and then put them together into the bigger pages :

- home where the user can view all of the tasks , sort them from the toolbar or filter them from the menu
- detail where the user can see the comments of the task and reply to them or add their own comment
- edit where the user can change all of the details of the task
- add where the user can create a new task
- roadmap where the user can see in which stage each task is : planned , in-development , live

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- Redux
- Node
- Express
- MongoDB
- Mongoose
- Bcrypt
- JWT

### Continued development

    Refactoring the code for better efficiency and adding error and loading screens.
