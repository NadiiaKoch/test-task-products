# React-Redux Web App

This is a simple web application that allows users to view and filter product listings from a database.

[DEMOLINK](https://nadiiakoch.github.io/test-task-products/)

---

## Technologies

The following technologies were used in this project:

   <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" align="center" alt="react" width="40" height="40"/> 
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" align="center" alt="typescript" width="40" height="40"/>
  </a>
  <a href="https://redux.js.org/" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" align="center" alt="redux" width="40" height="40"/>
  </a>
  <a href="https://formik.org/" target="_blank" rel="noreferrer"> 
    <img src="https://user-images.githubusercontent.com/4060187/61057426-4e5a4600-a3c3-11e9-9114-630743e05814.png" align="center" alt="formik" width="40" height="40"/>
  </a>

---

## Screenshot

## ![](demo.png)

## Project functionality

This project consists of the following components:

- Header
- Search field
- Product list
- Form for adding a new product

With React Router, it is possible to switch between pages. Redux is used to manage the application state. It is possible to add, delete, and update products.

The product list component receives data from the Redux store and displays it as a table with columns: ID, name, description, price, photo, rating, stock, category. Sorting and filtering of products are available for each column.

The search field allows users to search for products by name or category. The product list component is automatically updated when the user enters a query in the search field.

The form for adding a new product uses Formik and Yup to validate the entered data. The form contains fields: name, author, publication year, rating.

---

## Running the project

To run the project, execute the following commands:
⚠️ Using [Yarn Package Manager](https://yarnpkg.com) is recommended over `npm`.

1. Clone the repository to your local machine, open terminal and clone repo with command bellow.

```
$ git clone https://github.com/NadiiaKoch/test-task-products.git
```

2. Open project in terminal.
   Set up project and install necessary packages:

```
$ cd test-task-products
```

3. Set up project and install necessary packages:

```
$ yarn install
```

4. Add command to terminal:

```
$ yarn start
```

5. Open application in your browser http://localhost:3000/
