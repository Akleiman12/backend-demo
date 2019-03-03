# Backend Demo

This project is a test version of a basic backend. There are two repositories for this project: frontend-demo and backend-demo; both are needed to see the whole proyect working.

## Requirements

To serve the whole project you'll need Node.js, npm (comes with Node.js) and Angular 4 to be installed in the system. Common CLI commands of these technologies are used for serving the project. See versions 

## Serve

First it is needed to install dependencies with:
```
npm install
```
on both backend-demo and frontend-demo.

To be able to run the project, first run backend-demo with:
```
npm run start
```
then start frontend-demo with:
```
ng serve
```

This should be enough to run these projects.


## Database

The database used for this project is a MongoDB and it is hosted in mLab.com, no further configuration is required. Although, this means the same database will be used for all instances of this project.

To use a diferent MongoDB instance, a different connection is needed. This can easily be done in the database module by changing some parameters.
