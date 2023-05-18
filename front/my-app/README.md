# React-Redux-Django Template

This project is a template for building a full-stack web application using React, Redux, and Django. The template includes functionality for user authentication and product full-CRUD operations. 

## Project Structure

The project consists of two folders: "back" for Django and "front" for React.

### Back

The "back" folder contains the Django code for the server-side of the application. 

### Front

The "front" folder contains the React code for the client-side of the application. 

#### app

The "app" folder contains hooks and store.ts file.

#### features

The "features" folder contains the code for user authentication and product CRUD operations. 

##### Register

The "Register" component allows users to register with a username and password. The registration data is sent to the backend and a token is saved to the session storage.

The "registerSlice.ts" file contains the reducer for handling user registration, and the "registerAPI.ts" file contains the API calls for sending registration data to the backend.

##### Login

The "Login" component allows users to log in with a username and password. The login data is sent to the backend and a token is saved to the session storage.

The "loginSlice.ts" file contains the reducer for handling user login, and the "loginAPI.ts" file contains the API calls for sending login data to the backend.

##### Product CRUD

The "CRUD" component displays a list of products and allows users to add, update, and delete products. The product data is sent to the backend for CRUD operations.

The "CRUDSlice.ts" file contains the reducer for handling product CRUD operations, and the "CRUDAPI.ts" file contains the API calls for sending product data to the backend.

##### Models

The "Models" folder contains the "Product.ts" file where the Product Class is defined.

##### Counter

The "Counter" component is a simple example of using Redux for a counter application.

## How to Use

1. Clone the repository
2. Navigate to the "front" folder and run `npm install`
3. Navigate to the "back" folder and create a virtual environment with `python -m venv venv`
4. Activate the virtual environment with `source venv/bin/activate`
5. Install the required packages with `pip install -r requirements.txt`
6. Run the Django server with `python manage.py runserver`
7. In another terminal window, navigate to the "front" folder and run `npm start`
8. Open a web browser and navigate to http://localhost:3000/ to see the running application.

## Contributing

This app was built as a basic template of multiple components, authentication, and full CRUD.
Contributions to this template are welcome. Please feel free to fork the repository and submit pull requests.
