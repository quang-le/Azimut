#Project Azimut#

*last update 22/10/2018

1. Context
Personal project for the self-directed learning phase of the BeCode training. It stemmed from a friend's request to extract coordinates from Google Maps. I decided to build a React app around it as a way to learn new technologies and because I wanted to go through the process of building an app from A to Z.

2. Stack
- Learn: Node, MongoDB,  Material UI, react-router, Express, Google Maps API.
- Delve deeper: React, Firebase (auth).

3. Log
- 11/10/2018: started the Node course on OpenClassrooms
- 12/10/2018: developped the prototype in vanilla JS
- 13/10/2018: ported the prototype to React
- 15/10/2018: started the MongoDB course on OpenClassrooms
- 17/10/2018: attended [Cédric Fournier's Firebase workshop](https://github.com/Cedric-Fournier/Becode-Workshop-Firebase) at BeCode
- 19/10/2018: implemented routes with react-router
- 20/10/2018: implemented login with Firebase

4. Learning outcomes

- It's obvious but: make a mockup of the app. It may be very clear in your mind, but when you have to hop from one new tech to the other, it's good to have a mockup to use as a reference to keep track of what you're actually doing, and to organize your work more efficiently. I did a large part without and it was confusing as hell.

- If you're working alone, start with the routes. Similar idea as the mockup: it's easier to debug when you have one page per feature. It's also easier to weave everything together. Again: pretty obvious, but when you work alone, you sometimes tend to trust your ability to keep everything in mind too much.

5. Current bugs

- Routing: routing + firebase auth creat a memory leak error
- conflict between react-router and Material UI: router's components used with Material UI component cancel Material's styling

6. Features to add

- CRUD in the MungoDB after login/signup
- Use info stored in DB to display coordinates on Google Maps
- Use info stored in DB to set up Google Maps preferences (e.g.zoom level)
- Display saved coordinates for logged in users
- Allow logged in users to save new coordinates
- Create "copy" button to copy JSON displayed in text-area
- Implement automatic redirections on login and log out
- General Layout
- Deploy on DigitalOcean with API key in environmenal variable