# Todo App

## Project Goal

Despite the name of the repository, this project in its current form is the front end of a todo app. The user is able to add and edit tasks as they see fit. Moreover, they can either delete or mark a task as complete when they want. 

This project uses React and Redux as well as some supplementary node packages like react-paginate. 

A long-term stretch goal would be to convert this project into a full stack web application by adding authentication and authorisation (this would require both a proper back end as well as some sort of a database ) and then to deploy it.


## Installation and Usage

### Local Client Setup

1. Download or Clone this repo
2. Enter the client directory, then run these commands:

```
npm i && npm start
```

Browser should automatically open to the default `localhost:3000/`

## Wins and Challenges

### Wins

- [x] Succesfully implemented redux to avoid any kind of prop drilling.
- [x] Successfully coded a range of components.
- [x] Managed to integrate the node package react-paginate so the user does not have to scroll down if they have many tasks (more than 5)
- [x] Ensured that even after the user refreshes the page the tasks that have been added are still on the page through using localStorage to store info related to added tasks.
- [x] Users have the option of deleting, editing and completing tasks through clicking various buttons which will either update the task or delete it.
- [x] Added modals for both adding and editing tasks.
- [x] Offer the user the option of picking a date and time for the task to be completed.
- [x] Using the current time and date to calculate the days, hours, minutes and seconds left until the task has to be completed - assumes user has selected at least the date that the task has to be finished by.
- [x] Building some kind of timer component


### Challenges to be completed

- [] Improving the appearance of the UI since the CSS is very minimal as of right now.
- [] Turning this into a full stack application by adding both authentication and authorisation.


## Technologies

- React
- Redux
- HTML5,CSS3
- Node packages such as react-paginate and react-datepicker
- NPM


