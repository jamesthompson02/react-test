# Todo App

## Project Goal

Despite the name of the repository, this 


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


### Challenges to be completed

- [] Improving the appearance of the UI since the CSS is very minimal as of right now.
- [] Offer the user the option of picking a date and time for the task to be completed.
- [] Using the current time and date to calculate the days, hours, minutes and seconds left until the task has to be completed - assumes user has selected both date and time.
- [] Building some kind of timer component
- [] Turning this into a full stack application by adding both authentication and authorisation.


## Technologies

- React
- Redux
- HTML5,CSS3
- Node packages such as react-paginate and react-datepicker
- NPM


