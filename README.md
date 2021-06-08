# William's MyLife Take Home

This is my submission for MyLife's 2 hour take home assignment. Simply clone the repo and run yarn start on your terminal. 
This should start your project on an open local port. 

## Features
- Used React Hooks to make a simple web page that shows home (all categories combined), authors, quotes, and locations through routes. 
I decided to make the api call on the main App.js component and send in the content data through props and routes. 
- The selectable filters I had were a user-typed search input and a dropdown for sorting the content by alphabetical order. 
If the json data had prices, I could implement that using a filter function. 
- Added very simple styling using CSS Grid primarily to separate individual items. 

## Improvements / Work to fix up
- My filter functions use array.slice(). In a real world setting, this is not the best method due to memory issues and being unnecessarily expensive but due to time constraints I wanted to get a working app out. 
- CORS. My proxy in package.json didn't do the trick. To solve this issue, I'd probably have to make the request through a proxy express server
  - In the meanwhile, I moved the JSON file into the assets folder and directly brought it into the app. I commented out the axios request to show what it would've looked like with no CORS error. 