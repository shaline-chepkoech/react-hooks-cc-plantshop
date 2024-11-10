# Phase 2 Code Challenge: Plantsy

### Author : Shaline Chepkoech November 9th 2024
****
## Project Description
Welcome to Plantsy! This is the admin side of a plant store management app. The project includes various functionalities that allow administrators to view, add, and manage plant listings. While designers have provided the components and styles, it’s up to me to implement the logic that makes Plantsy functional, interactive, and persistent with backend data.
******
## Project Overview
Plantsy allows users to:

View all plants available in the store.
Add new plants to the inventory.
Mark plants as "sold out" to update their availability.
Delete Plants.
Update plant prices.
Search for plants by name to display a filtered list.
The app's primary goal is to facilitate easy management of plant listings and inventory through intuitive and straightforward functionality.

********
## SetUp Instruction
### Requirements
* [css](Framework URL)
* Text editor eg [Visual Studio Code](https://code.visualstudio.com/download)


### Getting Files
* Fork the repo
>  Clone repository
- Create a new branch in your terminal (git checkout -b improve-feature)
- Install Dependencies:[npm install]
-Run the Backend Server: [npm run server]
* Open the folder location on terminal and use the following command to run app:[npm start]
- Make appropriate changes in file(s)
- Add the changes and commit them (git commit -am "Improve App")
- Push to the branch (git push origin improve-app)
- Create a Pull request

### Endpoints
The backend API runs on http://localhost:6001. The app uses the following endpoint(s):
>GET /plants: Retrieves a list of all plants.
>POST /plants: Adds a new plant to the backend.
>PATCH /plants/
: Updates an existing plant (e.g., to mark as "sold out").

### Core Features
The app implements the following core features according to user stories:

View All Plants: Upon starting the app, all available plants are displayed on the main page.
Add New Plant: Users can submit a form to add a new plant. The plant will be added both on the frontend and persisted in the backend.
Mark Plant as Sold Out: Users can mark a plant as "sold out," updating its availability status.
Search Plants by Name: Users can search for plants by name, and the app displays a filtered list of matching plants.

## Dependencies
- Google fonts
- Font awesome Icons
- Particles JS
*****
## Technologies Used
1. React
2. CSS
3. JavaScript
*****
## Contact Information
* Email : chepkoechshaline726@gmail.com
*****
## [License](LICENSE)
MIT License
Copyright (c) 2024 shaline Chepkoech

