# Title

    user authentication system using different authentication ways.

## Objective

    To create a signup, login and logout responsive page. using Javascript, ReactJs, tailwind css

## Tech Stack

    List the primary technologies, languages required for the Assignment
    (Javascript, ReactJs, tailwind css)

## Completion Instructions

### Functionality

#### Must Have

    List the critical features or tasks mentioned in the Assignment
    
    1. Multi user login 

     -   Multiple users should be able to login.

    2. different authentication ways.
    
     -  multiple ways to authentication



#### Nice to Have
    
    -reset password and username
    


### Guidelines to develop a project

#### Must Have
    
    
    -register login page
    -multi user loging
    - Use localstorage as database storage for user login details.
    - use cookies
    -use JWT
    -use Auth0


#### Nice to Have
    
    

    

### Submission Instructions

#### Must Have

    List the Instructions to follow while submitting the project mentioned in the Assignment, if any
    
    

#### Nice to Have

    List the suggested instructions to follow while submitting the project mentioned in the Assignment, if any

## Resources

### Design files

    List the references of design files required for the Assignment

### APIs

    List the APIs, providing any relevant endpoints, documentation links, or access keys, required for the Assignment if any

### Third-party packages

    List the Third-party packages required for the Assignment, if any
    -Tailwind Css
    -

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`

</details>

### Completion Instructions
<details>
<summary>Functionality to be added</summary>
<br/>s

The app must have the following functionalities

-When the user not registered then the user should register by navigating and providing user details to signup page
-When an unauthenticated user tries to access the Home Route, then the page should be navigated to the --Login Route using the protected route
-When an authenticated user tries to access the Home Route, Products Route or Cart Route, then the page should be navigated to the respective route using the protected route
-API Requests & Responses




### Components Structure
Home
Login
Signup


### Use these files to complete the implementation:

src/App.js
src/components/Login/index.js
src/components/Signup/index.js
src/components/Home/index.js


### Important Note
Click to view
The following instructions are required for the tests to pass

Home route should consist of / in the URL path
Login route should consist of /login in the URL path
Signup route should consist of /signup in the URL path
No need to use the BrowserRouter in App.js as we have already included in index.js


### Resources
Third party packages
Things to Keep in Mind
All components you implement should go in the src/components directory.
Don't change the component folder names as those are the files being imported into the tests.
Do not remove the pre-filled code
Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.