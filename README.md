# Project Title

Application to find venues across the world

# Project Description

This Project is about finding venues based on user location.

# Tech Stack

Application uses a number of open source projects to work properly:

* [react]
* [redux]
* [ES6]
* [node.js]
* [Babel]
* [Jest]
* [enzyme]
* [ESLint]
* [StyleLint]
* [GooleMapAPI]

# Installation

Requires [Node.js](https://nodejs.org/) to run.

Install the dependencies to start local server.

```
$ git clone ${REPO_URL}
$ cd venuesmap
$ npm install
$ npm start
$ Open 'localhost:3000' in browser
```

### Unit Testing

```
$ cd venuesmap
$ npm test

```

# To Do

- Provide more filters to search page
- Show distance of venue from current location of user
- show images of venue
- use different marker icons based on venue type 
- Pagination for long venue list
- Loading Spinners for venue list

# Application Flow

- User will be prompted to share his location.
- Based on his location, list of venues will be displayed with their exact location in google map
- User can also search for any other place in the world.
- User can make use of filter provided to narrow down venue list based on his interests.
- User can click on any venue in list and relevant position will be highlighted in google map.
