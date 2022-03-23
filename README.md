#![](https://img.shields.io/badge/Microverse-blueviolet)

# Space Travelers' Hub

> This is a React-Redux-based project, built with pair programming and Gitflow, following [this kanban workflow](https://github.com/JohnFTitor/space-travelers-hub/projects/1). The page has a global state that holds the Rockets and missions from the SpaceX API and allows you to reserve them, displaying on your profile section the missions that you own.

![Preview](./preview.gif)

Take a view on the SpaceX rockets and missions, reserve them, and have a register of what you reserved for yourself in your profile! The page will render dynamically in your profile when you reserve or cancel the missions and rockets from the oficial spaceX API

## Live Version 

[Netlify](https://jf-ls-space-travelers-hub.netlify.app/)

## Built With

- HTML/SCSS and JavaScript
- React Framework, Redux
- Visual Studio Code

## Getting Started

To get a local copy up and running follow these simple example steps.

- Clone this repository with git clone```git@github.com:JohnFTitor/space-travelers-hub.git``` using your terminal or command line.
- Change to the project directory by entering : <br>
```cd space-travelers-hub``` in the terminal

### Prerequisites

You need to make sure to have installed the latest version of Node.js and npm on your computer.

### Setup

You can clone this repository or simply download the files as a .zip
If you want to set up a personal repository based on this one, you can as well fork it.

### Install

After clone it and before working on it, you have to run ```npm install``` so that all the dependencies of the project get downloaded in your pc locally.
Such dependencies include React app and linters checks, for which you have to install the files following the ```wget``` commands inside linters.yml file.   
   
### Usage

You're free to use this project however you like it for educational purposes. Just keep in mind the acknowledgment described below

To work on the project, run ```npm start``` in your terminal to deploy a live version of the development. This works in watch mode so it automatically reloads any need change you make to the files. 

### Run linters checks

Linter Checks are automatically run with Github actions when there's a pull request. If you want to run them locally, remember to have the config file in the root of the local project.

## Testing

Run ```npm test``` to check prepared test cases related to the website functionality simulating user interaction. Remember to update the snapshots if you make changes to the UI.

## Deployment

Netlify is set to automatically deploy the production branch (main branch) of this project, so you don't need to worry about it.
Heroku is manually deployed by our team whenever required. That is, when the main branch gets updated.

## Authors

👤 **Andrés Felipe Arroyave Naranjo**

- GitHub: [@JohnFTitor](https://github.com/JohnFTitor)
- Twitter: [@johnftitor](https://twitter.com/johnftitor)
- LinkedIn: [Andres](https://www.linkedin.com/in/andresarroyavenaranjo/?locale=en_US)

👤 **Lisandro Seia**

- GitHub: [@lisandroseia](https://github.com/lisandroseia)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/lisandroseia/) 

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](./MIT.md) licensed.
