

// **************************** MVC NOTES *********************************
// 11/10/21
// Steps of the flow 
// 1. user wants to see all the animals in the kennel, so they make a request to in the url bar https://kennel.nss.com
// 2. The request is gets handled by an nss server, the code running on the server knows that the user wants to see the web page, with all the animals on it 
// so the server makes a call to the database to ask for all the saved information on the animals
// 3. the server then takes the animal data returned by the database and dynamically creates an html page, which is razor
// 4. the server sends the generated html page back to the browser along with css and js needed 

// Web User > Web Server > ASP.NET Controller > Database > ASP.NET Controller > Razor > Web User


// Model is a kind of class whose properties match columns in a particular database table. We say it's a C# representation of a database table.


// This is what a creating a table looks like 
// CREATE TABLE Animal (
//     Id      integer NOT NULL PRIMARY KEY IDENTITY,
//     [Name]  varchar(80) NOT NULL,
//     Breed   varchar(80),
//     OwnerId integer NOT NULL,

//     CONSTRAINT FK_AnimalOwner FOREIGN KEY(OwnerId) REFERENCES [Owner](Id)
// );



// This is what a Model.cs file looks like 
// using System.Collections.Generic;
// using System.ComponentModel;
// using System.ComponentModel.DataAnnotations;

// namespace Kennel.Models
// {
//     public class Animal
//     {
//         public int Id { get; set; }
//         public string Name { get; set; }
//         public string Breed { get; set; }
//         public int OwnerId { get; set; }
//         public Owner Owner { get; set; }
//     }
// }



// View is sometimes referred to as part of the Presentation Layer. It is an HTML template written in a language called "razor", and is similar to the JSX code you are used to
// writing in react except it has the power of C# instead of JS

// This is an example of razor
// @model List<Kennel.Models.Animal>

// <h1>All The Animals</h2>
// @foreach(Animal animal in Model)
// {
//     <div class="animal__card">
//         <h3>@animal.Name</h3>
//         <h5>Breed: @animal.Breed</h5>
//         <span>Animal is owned by @animal.Owner.Name</span>
//     </div>
// }
// The First line of this code @model List<Kennel.Models.Animal> is telling the view what type of object is going to be passed to it. In this case, the view is going to be passed a List of
//  Animal objects. When the server has to respond a request for the homepage, the view will iterate over the list of animals and create a div element for each one. 
// The html that gets generated will be what the server sends back to a user's browser.

// Controllers are just classes
// The job of a controller is to handle incoming http request

// The controller has all of the logic needed to generate the response requested by the client, it can validate the user, validate request data, validate request data, query the database,
// contain logic for manipulating the data and generate an html response 

// Here is an example of a controller
// public class AnimalsController : Controller
// {
//     public ActionResult Index()
//     {
//         AnimalRepository repo = new AnimalRepository();
//         List<Animal> animals = repo.GetAllAnimals();

//         return View(animals);
//     }
// }


// in the code above, the controller is simply getting all the animals from the database and handing it to the view


// When creating a new project, the location should be in the workspace and the solution and project should not be in the same directory

// wwwroot folder which contains some static assets like javascript and css files

// appsettings.json file is an application configuration file used to store configuration settings such as database connection strings , any application scope global variables, etch
// If you open the asp.net core appsettings.json file then you see the following code by default which is created by visual studio













// ****************** SQL NOTES ******************************************************************************************************************
// SELECT count(*)
// FROM person;              - this is to see how many rows a table has


// SELECT * FROM person LIMIT 10;       - LIMIT is to limit how many rows you want to view in the query


// SELECT DISTINCT type FROM crime_scene_report;      - DISTINCT is to filter the query so things don't repeat themselves


// SELECT * FROM person WHERE name = 'Kinsey Erickson'           - This query to retrieve a specific person




// A SQL query can contain:

// SQL keywords (like the ​SELECT​ and ​FROM​ above)
// Column names (like the ​name​ column above)
// Table names (like the ​person​ table above)
// Wildcard characters (such as ​%)
// Functions
// Specific filtering criteria
// Etc




// SQL Keywords 

// SELECT​ allows us to grab data for specific columns from the database

// FROM​ allows us to specify which table(s) we care about; to select multiple tables, list the table names and use commas to separate them

// ​WHERE​ clause in a query is used to filter results by specific criteria

// AND​ keyword is used to string together multiple filtering criteria so that the filtered results meet each and every one of the criteria

// OR keyword is used to return rows that match any of the criteria



// 11/10/21
// % wildcard in a query string, the SQL system will return results that match the rest of the string exactly, and have anything (or nothing) where the wildcard is. 
// For example, 'Ca%a' matches Canada and California


// _ wildcard This one means 'match the rest of the text, as long as there's exactly one character in exactly the position of the _, no matter what it is. 
// So, 'B_b' would match 'Bob' and 'Bub' but not 'Babe' or 'Bb'.


// Important: When using wildcards, you don't use the = symbol; instead, you use LIKE.


// SQL also supports numeric comparisons like < (less than) and > (greater than). You can also use the keywords BETWEEN and AND -- and all of those work with words as well as numbers.

// SQL commands are not case-sensitive, but WHERE querie values for = and LIKE are

// UPPER() and LOWER() cane be used if you want to be case sensitve specific


// The SQL NOT EXISTS Operator will act quite opposite to EXISTS Operator. It is used to restrict the number of rows returned by the SELECT Statement. The NOT EXISTS 
// in SQL Server will check the Subquery for rows existence, and if there are no rows then it will return TRUE, otherwise FALSE.


// An aggregate function performs a calculation on a set of values, and returns a single value. Except for COUNT(*) , aggregate functions ignore null values. Aggregate 
// functions are often used with the GROUP BY clause of the SELECT statement. All aggregate functions are deterministic.

// MAX finds the maximum value
// MIN finds the mininum value
// SUM calculates the sum of the specified column values
// AVG calculates the average of the specified column values 
// COUNT counts the number of specified column values 


// ORDER BY goes in "ascending" (smallest to largest, or A to Z) order, but you can be specific with ASC for ascending, or you can reverse it with DESC.
// SELECT * FROM drivers_license ORDER BY age ASC LIMIT 10



// Write a query that identifies the first witness
// SELECT * FROM person 
// WHERE address_street_name = 'Northwestern Dr' 
// ORDER BY address_number DESC LIMIT 5;

//  INNER, OUTER, LEFT and RIGHT joins
// you can join as many times as you want


// The most common way to join is using primary keys and foreign keys columns
// SELECT person.name, income.annual_income 
// FROM income 
// JOIN person 
//   ON income.ssn = person.ssn 
// WHERE annual_income > 300000



// This example shows how to join more than one table. It also, incidentally, shows how you can use 'aliases' for the various tables in your query so that you don't 
// have to type as much. Finally, it shows how you can change how a column name shows up in the results, which can be handy.



// SELECT name, annual_income as income, 
// gender, eye_color as eyes, hair_color as hair
// FROM income i
// JOIN person p
//   ON i.ssn = p.ssn 
// JOIN drivers_license dl
//   ON p.license_id = dl.id
// WHERE annual_income > 450000




// Write a query that shows the interview transcripts for our two subjects.
// There's more than one way to do it, so you may learn the answer even if the results say 'Incorrect'. The official solution does it in one query,
//  but you don't have to. Technically you don't even need to use a JOIN to get the transcripts, but give it a try.
// SELECT person.name, interview.transcript,
// FROM person JOIN INTERVIEW 
// ON person.id = interview.person_id
// WHERE person.id = 14887 OR person.id = 16371;









// ************************** JAVASCRIPT NOTES *****************************************************************************************************


// Encapsulation - reduce complexity and increase reusability

// Abstraction - reduce complexity and isolate impact of changes

// Inheritance - Eliminate redundant code 

// Polymorphism - refactor many if statements and switch cases 







// ~ you can use dot notation or bracket notation to access an array or object

// ~ you can create a new key value pair in an object like this
// let cat = {
//     name: 'Garfield',
//     breed: 'Siamese'
// };

// cat['age'] = 5;

// or 

// cat.weight = 25



// ~ For loop ~ A JavaScript for loop executes a block of code as long as a specified condition is true
// let colors = ['red', 'blue', 'orange', 'yellow'];
// for (let i = 0; i < colors.length; i++) {
//     console.log(`${i + 1} I just made you loop 4 times`)
// };



// ~ For each loop ~ is an Array method that executes a custom callback function on each item in an array
// let shoes = ['nike', 'addidas', 'jordans', 'sketchers'];
// shoes.forEach(shoe => {
//     console.log(`These are the list of shoes I have ... ${shoe}`)
// });




// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// this is how you use a map method (can only use on an array and will return you a new array)
// videoGameArray.map(videoGame => {
//     if(videoGame.genre === 'hack and slash') {
//         console.log('this is my favorite genre')
//     } else {
//         console.log('this is not my favorite genre')
//     }
// });




// ~ if statements ~ The if/else statement executes a block of code if a specified condition is true
// let variable = false;
// if (variable === true) {
//     console.log('chicken does not taste good')
// } else {
//     console.log('chicken does taste good')
// };


// ~ Typeof ~ In JavaScript, the typeof operator returns the data type of its operand in the form of a string
// let variable = true;
// typeof variable;
// answer ~ will be 'boolean'






// this is how you make an array of objects
// let videoGameArray = [
//          {
//         name: 'fortnite',
//         genre: 'shooting'
//         },
//          {
//         name: 'diablo',
//         genre: 'hack and slash'

//         }];



// sorry about that slipped my mind, I believe these commands can resolve that in your terminal, stop React process with ctrl+C
// In that terminal run npm uninstall react-router-dom and wait for it to complete
// Then run npm install --save react-router-dom@5.3 and wait for it to complete











// this is how you do a for loop with it 
// for (let i = 0; i < videoGameArray.length; i++) {
//     if(videoGameArray[i].name === 'diablo') {
//         console.log('this is my favorite game!')
//     } else {
//         console.log('not this game')
//     }
// };





// map will want to return something
// for loop is jack of all trades of loop




// let colors = ['blue', 'green', 'yellow', 'black', 'orange', 'red'];
// for (let i = 0; i < colors.length; i++) {
//     if (colors[i] === 'red') {
//         console.log(`${colors[i]} is my favorite color!`)
//     } else {
//         console.log(`${colors[i]} is not my favorite color!`)
//     };
// };





// this is how you loop through an array of objects
// let artist = [
// 	{
// 	    name: 'drake',
// 	    genre: 'rap'
// 	},
// 	{
// 	    name: 'ariana grande',
// 	    genre: 'pop'
// 	}
// ];
// for (let i = 0; i < artist.length; i++) {
//     if (artist[i].genre === 'pop') {
//         console.log('this is my favorite song genre!')
//     } else {
//         console.log('this is not my favorite song genre')
//     };
// };




// .Trim() method removes white space from both sides of a string

// .Length property returns the length of a string

// .Split() is used to split a string into an array of substrings and returns the new array & it also takes in one parameter 

// parseInt() analyzes a string argument and returns the whole number, interger

// parseFloat() function parses a string and returns a floating point number

// toFixed() method converts a number into a string rounding to a specified number of decimals 

// null is a value that we are referencing that a developer is planning on a setting a value for later putting null in it's place for now

// undefined means something in your code does not exist 

// empty strings that have no space inside are falsey values 

// nan means not a number 

// relational operators also known as comparison operators, they are used to find the relationships between two values or compare relationships between two values

// != means does not equal to

// while loops run until a value is false

// The <script> tag is used to embed a client-side script (JavaScript). The <script> element either contains scripting statements, or it points to an external script file
//  through the src attribute. Common uses for JavaScript are image manipulation, form validation, and dynamic changes of content





// basic commands
// cd - change directory
// pwd - print working directory 
// mkdir - make directory
// ls - list contents of directory
// clear - clear the view
// touch - create file
// cat - read the contents of a file
// cp - copy files and directory
// mv - move files and directory
// rm - remove a single file
// rm -rf is to remove a directory and all of it's contents






// this is how you use the the filter method 
// let games = [
//     {
//         name: 'fortnite',
//         genre: 'shooting'
//     },
//     {
//         name: 'call of duty',
//         genre: 'shooting'
//     },
//     {
//         name: 'diablo',
//         genre: 'hack and slash'
//     }
// ];




// let variable = games.filter(game => {
//     if (game.genre === 'shooting') {
//         return game;
//     }
// });




// using filter method 
// let shoes = [
//     {
//         name: 'nike',
//         year: 2020
//     },
//     {
//         name: 'addidas',
//         year: 2015
//     },
//     {
//         name: 'jordans',
//         year: 2021
//     },
//     {
//         name: 'sketchers',
//         year: 2015
//     }
// ];





// let variable = shoes.filter(shoe => {
//     if (shoe.year === 2015) {
//         return shoe;
//     }
// });







// function with parameters
// let returnString = (food, place) => {
//     return `I like to eat ${food} from the mountains of ${place}.`
// };
// returnString("burgers", "burgertopia");
// 'I like to eat burgers from the mountains of burgertopia.'




// make a funciton that takes in 2 paramters, 1 parameter is an array of objects, a string of whatve the user wants the function to filter by





// let coolFunction = (arrayParam, criteriaParam) => {
//     return arrayParam.filter(arrayItem => {
//         if (arrayItem.genre === criteriaParam) {
//             return arrayItem;
//         }
//     })
// };

// let returnedGame = coolFunction(games, 'tps');






// having 3 params that filter through an array of objects with a specific condition
// let shoes = [
//     {
//         name: 'nike',
//         year: 2020
//     },
//     {
//         name: 'sketchers',
//         year: 2019
//     },
//     {
//         name: 'addidas',
//         year: 2018
//     }
// ];


// let myFunction = (arrayParam, criteriaParam, specificParam) => {
//     return arrayParam.filter(arrayItem => {
//         if (arrayItem[specificParam] === criteriaParam) {
//             return arrayItem;
//         };
//     });
// };

// let answer = myFunction(shoes, 'addidas', 'name');



// let cars = [
//     {
//         name: 'Audi',
//         year: 2013
//     },
//     {
//         name: 'Mazda',
//         year: 2020
//     },
//     {
//         name: 'Versa',
//         year: 2014
//     }
// ];


// let myFunction = (arrayParam, specificParam, criteriaParam) => {
//     return arrayParam.filter(arrayItem => {
//         if (arrayItem[criteriaParam] === specificParam) {
//             return arrayItem;
//         };
//     });
// };

// let answer = myFunction(cars, 'Versa', 'name');





// // 1. Create two variables, myAge and humanDogRatio
// // 2. Multiply the two together and store the result in myDogAge 
// // 3. Log myDogAge to the console

// let myAge = 26;
// let humanDogRatio = 7;

// let myDogAge = myAge * humanDogRatio;

// console.log(myDogAge);


// when you see multiple redundant code then make a function that makes it easier 


// variables are labels that refer to values, not the value itself.




// here is an example of an event listener 
// document.addEventListener(
// 	"click",
// 	(clickEvent) => {
// 		const itemClicked = clickEvent.target
// 		if (itemClicked.id.startsWith("walker")) {
// 			const [,walkerId] = itemClicked.id.split("--")


// 		for (const walker of walkers) {
// 			if (walker.id === parseInt(walkerId)) {

// 			window.alert(`${walker.name} services ${walker.id}`)
// 				}
// 			}
// 		}
// 	}
// )




// const flowers = [
//     {
//         id: 1,
//         color: "White",
//         species: "Rose",
//         price: 0.90
//     },
//     {
//         id: 2,
//         color: "Red",
//         species: "Tulip",
//         price: 1.10
//     }

// ]


// const addFlower = (flowerObject) => {
//     const lastIndex = flowers.length - 1
//     const currentLastFlower = flowers[lastIndex]
//     const maxId = currentLastFlower.id
//     const idOfNewFlower = maxId + 1
//     flowerObject.id = idOfNewFlower
//     flowers.push(flowerObject)


// const findExpensiveFlowers = () => {
//     const expensiveFlowers = []  // Do not change this code
//     for (const flower of flowers) {
//         if (flower.price >= 1.00) {
//             expensiveFlowers.push(flower)
//         }
//     }

//     /*
//         Write a for..of loop that iterate the array
//         of flowers, and if the price of a flower is
//         greater than or equal to 1.00, it should be
//         added to the `expensiveFlowers` array.
//     */




//     return expensiveFlowers  // Do not change this code
// }



// Make sure you are in your workspace directory
// git clone {github repo SSH string}
// cd into the directory it creates
// npm install to install the testing framework
// code . to open the project code
// Use the serve -p 8080 command to start the web server
// Open the URL provided in Chrome
// Run npm test when you're ready to assess your code



// let lapsCompleted = 0;

// function incrementLap() {
// 	lapsCompleted = lapsCompleted + 1


// incrementLap();
// incrementLap();
// incrementLap();
// }

// console.log(lapsCompleted);





// initialize the count as 0
// listen for the clicks on the increment button 
// increment the count variable when the button is clicked (console log it)
// change the count-el in the html to reflect the new count 



// <h1>People enteered<h1>
// <h2 id="count-el"></h2>
// <button id ="increment-btn" onClick="increment()">Increment</button>



// let countEl = document.getElementById("count-el");

// console.log(countEl)


// let count = 0;


// function increment () {
	
// 	count = count + 1
// 	countEl..innerText = count
	
// };


// real thing 
// <h2 id ="count-el">0</h2>


// let countEl = document.getElementById("count-el");











// A key is used on an object to refer to values about the object. For example, you want to store all of the properties of a patient visiting a doctor's office. You would create an 
// object to store all of those properties in a single data structure instead of in separate variables.
// const megan = {
//     id: 1,
//     age: 31,
//     firstName: "Megan",
//     lastName: "Debity"
// }




// 11/14/21
// vanilla js playlist (full of small projects)

// const string = "hello world"

// console.log(string.length);		length

// console.log(string.toUpperCase())       upper case

// console.log(string.toLowerCase())      lower case

// console.log(string.substring(0, 5))      substring

// console.log(string.substring(0, 5).toUpperCase());       substring with uppercase

// console.log(string.split('')) or console.log(string.split(", ))	split method

// response is giving you the package , actual package 

// response.json allows you to read it, json is what opens it for you and gives you the status code

// study promises , ask sis if any questions
// appending elements and creating elements, 
// event listeners, 




// The setAttribute() method adds the specified attribute to an element, and gives it the specified value.
// If the specified attribute already exists, only the value is set/changed

// an element has id or another standard attribute, the corresponding property gets created. But that doesn’t happen if the attribute is non-standard.



// indexOf
// Array.isArray










// let eatSomethihg = () => {
//     console.log('I am eating something')
// };
// undefined
// let eatSomethingElse = () => {
//     console.log('I am eating something else ')
// };
// undefined
// let eatSomethingBetter = () => {
//     console.log('I am eating something better')
// };
// undefined
// let promise1 = new Promise((resolve, reject) => {
//     resolve(eatSomethihg())
// });
//  I am eating something
// undefined
// let promise2 = new Promise((resolve, reject) => {
//     resolve(eatSomethingElse())
// });
// I am eating something else 
// undefined
// let promise3 = new Promise((resolve, reject) => {
//     resolve(eatSomethingBetter())
// });
//  I am eating something better


// promise1.then(() => {
//     promise2.then(() => {
//         promise3.then(() => {
//             eatSomethingBetter();
//             })
//         })
//     })
// I am eating something better
// Promise {<fulfilled>: undefined}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: undefined





// Assignment Operators
// An assignment operator assigns a value to its left operand based on the value of its right operand. Here are some of them:

// += addition assignment
// -= subtraction assignment
// *= multiplication assignment
// /= division assignment



// switch cases
// const food = 'salad';

// switch (food) {
//     case 'oyster':
//         console.log('The taste of the sea!');
//         break;
//     case 'pizza':
//         console.log('The taste of Italy!');
//         break;
//     default:
//         console.log('The taste of nature, nice!');
// };
// Output: The taste of nature, nice!




// // Named function
// function rocketToMars() {
//   return 'BOOM!';
// }
 
// // Anonymous function
// const rocketToMars = function() {
//   return 'BOOM!';
// }



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ React Notes ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~***********************
// cd ~/workspace
// npx create-react-app kennels
// # Wait for installation to complete
// cd kennels/src
// rm App*

// dnginore on main folder
// then npm install on main folder


// npm start to start the app

// do this command on the api, 
// json-server -p 8088 -w database.json

// index.js, application views/header or nav, provider, list then card


// useState() is what the React team calls a hook. It is used to store data about the component. You can translate its usage into English with the following statement.
// "My component has its own state to maintain. Therefore, I will use the State hook to store it."


// createContext() - is to create the context to be used by other components that need data

// useContext() - is used by UI components that need data stored in the context and exposed by the provider component


// Every time state is updated, the component will re-render.

// In React, you will use something called a Router to handle the rendering of different components when the user clicks on navigation items. This also allows users to bookmark 
// specific places within a single page app.

// Notice the use of the <Link/> component. This comes from the React Router package you installed. It has an attribute named to. It will render a hyperlink in your DOM, and when 
// clicked, it will change the URL in the browser to the value of the to attribute.


// exact is needed on the first route, otherwise it will also match the other routes, and the Home will render for every route.

// The <Link/> and the <Route/> JSX elements are complementary to each other. If you add a new Link element in your application with a new URL, then you must create a matching Route element.

// As mentioned above, Kennel is a container component. It renders no HTML itself. It simply contains other components that are responsible for the presentation and behavior of the 
// application. In the case of our Kennel, it contains two different kinds of components.

// NavBar: This is a Presentation Component. Directly expresses HTML.

// ApplicationViews: This is a Controller Component. Its only responsibility to to control the behavior of the system and maps URLs to components.

// Now update your index.js by adding a root component of <Router /> which gets imported from the React Router package. Within <Router>, place the <Kennel /> child component. 
// This tells React "I will be placing Routes in my Kennel component."

// In the React library, there is a feature called the Context API. This API provides you with two critical functions.
// createContext() - Create the context to be used by other components that need data.
// useContext() - Used by UI components that need data stored in the context, and exposed by the provider component.



// This code imports the main React library, and two functions that it exports.
// import React, { useState, createContext } from "react"

// We will useState to hold and set the array of animals.


// A context stores a certain kind of data to be used in your application. Therefore, when you create a data provider component in React, you need to create a context.
// export const AnimalContext = createContext()


// Now that the required functions are imported, and an empty context is created, it's time to define the data provider component that will allow other components to use 
// the data 
// in the context.

// export const AnimalProvider = (props) => {

// }


// Next, you will use the useState() hook to define a variable that holds the state of the component, and a function that updates it.

// const [animals, setAnimals] = useState([])




// Here's what the State hook is doing for you with a single line of code.

// // Define the variable which will hold the data.
// let animals = []

// // Define the function to be used to modify that state.
// const setAnimals = animalsData => {
//     if (animalsData !== null && Array.isArray(animalsData)) {
//         animals = animalsData
//     }
// }



// There is more code on their end that goes into it, but that's the basic gist. Instead of you having to write that code for each component, you can now write it in one line.

// const [animals, setAnimals] = useState([])


// With the following code, other components can access the array of objects being stored in the animals variable, and they can invoke the, getAnimal and addAnimal functions. You will see the syntax for using these in an upcoming chapter.

// return (
//     <AnimalContext.Provider value={{
//         animals, getAnimals, addAnimal
//     }}>
//         {props.children}
//     </AnimalContext.Provider>
// )



// The useContext hook allows you to use data structures and functions that a parent provider component exposes.




// The useEffect hook allows the component to reach out into the world for anything that cannot be handled during render. In this case, it is the API call for the animals.

// Be careful setting state within the useEffect. State changes cause a re-render. Re-render can invoke useEffect (depending on the dependency array values). This would result in an infinite
//  loop.



// For those getting the error "A Route is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your
//  <Route> in a <Routes>" @ 1:43:00. react-router-dom v6 has some changes from v5.
// you need to import Routes aswell on line 2 with the Router, Route
// Then you need to wrap both of the 2 <Route> tags together with <Routes>
// Then in the first <Route '/'>  change "render={(props) => ( to "element={"
// Then the second <Route '/about'> change "component={About}" to "element={<About />}"



// it is called state when the data is within the same component when you pass it into other components it becomes a prop, a prop is an object that you can access 
// the properties through
// dot notation


// react runs on the client as a spa (single page app) but can be used to build full stack apps by communicating with a server/api (eg. MERN stack)

// react is often referred to as a front end frame work because it is capable and directly comparable to a framework such as Angular or Vue


// Mongo is a type of database
// express is a back end language
// jquery is a library or low dash


// why use React?
// structure the "view" layer of your application, reusable components with their own state, jsx dynamic markup, interactive ui's with virtual dom, performance & testing,
//  very popular in 
// the industry


// components can have "state" which is an object that determines how a component renders and behaves


// "app" or "global" state refers to state that is available to the entire UI, not just a single component

// before we had to use class based components to use state, now we can use functional components with hooks

// react hooks are functions that let us hook into the React state and lifecycle features from function components


// useState - returns a stateful value and a function to update it
// useEffect - perform side effects in function components

// useEffect is used to make http request when the page loads

// you can find the dependencies in the package json

// react-dom is responsible for rendering the application out to the browser

// eject can be edited if you want to change something in the web pack config


// 3rd party api and rapid api is something that has been created by someone 


// htpp client is a library allows you to implement 3rd party api to your apps, a controller is a new instance of a http client, thers a method to desyralize json to c#, 

// state is immutable



// preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. For example, this can be useful when: 
// Clicking on a "Submit" button, prevent it from submitting a form.










// the build folder is where you push to production


// a json server will allow you to create a mock api

// useEffect is used to create side effects




// Dependency arrays are a concept that is tightly coupled to hooks in React (thus also to function components). Some hooks, like useEffect and useCallback have 2 arguments.
//  The first one is a callback (a function), and the second one is the dependency array. It takes the form of an array of variables.



// setTimeOut is built in




// let timer = () => {

//     let sayStart = () => {
//         console.log('start this please');
//     }


//     let sayStop = () => {
//         console.log('stop this please');
//     }


//     let functions = {
//         start: () => {
//             sayStart();
//         },
//         stop: () => {
//             sayStop();
//         }
//     }

//     return functions;

// }

// timer().stop();
// stop this please -------- this is the result




// let saySomething = () => {
//     console.log('LikaaaaSumboooooodie!')
// };
// undefined
// setTimeout(saySomething, 20000);
// 23572




// Async functions enable us to write promise based code as if it were synchronous, but without blocking the execution thread. ... Using async simply implies that a
//  promise will be returned, and if a promise is not returned, JavaScript automatically wraps it in a resolved promise with its value.


// “async” before a function means one simple thing: a function always returns a promise. 2. The keyword "await" makes JavaScript wait until that promise settles and returns
//  its result.







// For those getting the error "A Route is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in 
// a <Routes>" @ 1:43:00. react-router-dom v6 has some changes from v5.
// you need to import Routes aswell on line 2 with the Router, Route
// Then you need to wrap both of the 2 <Route> tags together with <Routes>
// Then in the first <Route '/'>  change "render={(props) => ( to "element={"
// Then the second <Route '/about'> change "component={About}" to "element={<About />}"





// The useHistory hook gives you access to the history instance that you may use to 
// navigate. import { useHistory } from "react-router-dom"; function HomeButton() { let history = useHistory(); function handleClick() { history.




// React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an 
// array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.




// useParams is one of the Hooks methods that React Router ships with. ... According to the definition in React Router doc, useParams returns: an object of key/value pairs of URL 
// parameters. Use it to access match. params of the current <Route> .



// The optional chaining operator (?.) enables you to read the value of a property located deep within a chain 
// of connected objects without having to check that each reference in the chain is valid.




// Since we start with data from the API, our render displays values based on current state (or props). We need to always keep the current value of an input in the component's state. 
// This allows for mutable state.

// An input form element whose value is controlled by React in this way is called a “controlled component”.








// Here is the flow of the AnimalForm component:
// Component loads and renders - Save button should be disabled since the data is not available yet.
// useEffect() invoked. For the dropdowns get data for locations and customers.
// Determine if this is an edit based on animalId in the URL. If true, invoke getAnimalById() and then setAnimal state
// Render (display new state in DOM)
// User makes changes. As changes are made, state is updated. The DOM always displays what is in state.
// Select Save
// Invoke handleSaveAnimal(). This functions determines if this is a new animal or edit, prepares an object with the animal data and invokes the appropriate provider 
// method (addAnimal or updateAnimal).
// The handleSaveAnimal method will also setIsLoading(true) - this ensures the user cannot repeatedly click the button while the API is being updated.
// Once the API has updated, change the view to display updated data
// This component will populate the input fields with the current values from the API. We will obtain all necessary values using a useEffect() hook.

// Replace 





// onKeyUp() -  is used to trigger the event as soon as the keyboard key is pressed. 



// Components are the building blocks of any React app and a typical React app will have many of these. Simply put, a component is a JavaScript class or function that optionally accepts 
// inputs i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear.





// ********************* Interview Tips ******************************************************************************

// mention graduating (i am part of Cohort 49 which is a full time/full stack c#.net program), then the tech stack, mention that hca went to our demo day but did not have the opportunity to demo my capstone but i am glad able to have this phone interview,
// prior attending nss and pursuing a career in software development i was a healthcare provider and personal trainer, in the process of learning how to buiold a simple html and css website,
//  I found it fascinating and fun to able to 
// create something from scratch, which interested me to learn more about it and my friend who is an nss alumni thought that i would be a great fit for the nss bootcamp, so i did my
// research and realized that this would be something that i would enjoy doing, also the great thing about this career is that from my background in fitness and health I can continue to 
// help others by through technology that makes a difference in people's lives





// The Fit Factory is a workout companion app that will educate and motivate users who want to start their fitness journey. The app displays a timer/cooldown countdown for
//  each exercise chosen that includes text to speech feature with Web Speech external API that will communicate with the user. I built my CRUD app with ReactJS, Web Speech API, 
// JSON Server, Bulma Framework and CSS.






// The Fork To Fit App is a nutrition app that users can utilize to obtain knowledge about healthy macronutrients and customize a meal plan. The app displays a list of healthy carb,
//  fat and protein sources that the users can select from to add to their meal plan. I built this CRUD app with ASP.NET MVC, SQL Server, Bootstrap and CSS.




// we recieved help from the instructor, from my understanding, when the back end server starts it up, it communicates with the google api server and ask for public encryption key,
// and when the user signs in to my app with their credentials, username and password, the server pings the firebase which then creates a json web token, then the firebase verifies that token 
// mathches the credentials in its server, to make sure that the username and password matches what it has in the database, if it does match then firebase signs that token with its private
// key, then communicates that back to the back end server, which then can now verify the user which will log them in 
 
// app

// mvc is a design pattern, model view controller, model is a c # represantiaion of tables in the sql server database, whixh has methods and properties, 
// controller are classes that contain the methods from the corresponinding repositories, the repositroes is a clas that contains all the crud operationst thta help us 
// commucnaite with the databse, the  controller is also reponsidble to passing a model to a view, the view contains razor synax, which is a mixture of C# and html which will display the 
// conten of that specific page





// the mdn, its built in, all you have to do is call the class, built in api in the web browser, im able to use the methods already available to the browser, i used
//  the Window.speechsynthesis 
// interface to use the features for text to speech, so that in my app when the user clicks on the start or finish workout then the the speech synthesis will activate,
//  mdn documation,


// eager to learn, i looked up the function for the counter and i understood it, i used the logic as reference, made it on my own and understood


// hca is a renouned company for providing excellent care for the patients and I would love to be part of the culture and contribute to the growth of the company, the core values of the 
// company resonates with me so that is why I believe i am a great canditate for this amazing opportunity


// i am also attending the HCA Lunch and Learn event with NSS on december 6 and looking forward to learning more about the technical residency program.








// ******************************************  C# Notes *******************************************************************************
// Console.Key();
// Console.ReadLine();
// Console.WriteLine();

// if statements, !=, &&, ||

// putting a void in front of a function will let the function not return anything

// you can also put static so that the app does not have any errors

// you must declare the data type first, for example: int number = 14
// same with functions

// int[] intArray = new int[5] {1, 2, 3, 4, 5};       this is a fixed amount

// List <int> intList = new List<int>() { 1, 2, 3 }    but doing it this way can make the list grow 
// intList.Add(4);   adding from list
// intList.Remove(1);   removing from list


// foreach (int i in intList) {
// 	Console.WriteLine(i);
// };



// for (int i = 0; i < intList.Count; i++) {
// 	Console.WriteLine(i + " " + intList[i])
// }



// int i = 0;




// while (i < 5) {
// 	i++;
// }


// do {
// 	i++;
// } while (i < 5);




// C# is an object oriented language

// meaning you can create your own language


// MyClass myClass = new MyClass();



// class MyClass {
// 	float myFloat;
// 	int myInt;
// 	public MyClass() {
// 		// custom constructor
// 	}

// 	void TestFunction() {
// 	// do something
// 	}
// }


// Accessors are public or private (scope)

// make sure to specify public or private 




// System.Console.WriteLine("Hello World!");




// using System;

// Console.Write("Who would you like to say hello to? ");

// string name = Console.ReadLine();

// if (string.IsNullOrWhiteSpace(name))
// {
//     Console.WriteLine("Fine, don't say 'hello'!");
// }
// else
// {
//     Console.WriteLine($"Hello, {name}!");
// }






// using System;

// Console.Write("Who would you like to say hello to? ");

// string name = Console.ReadLine();

// if (string.IsNullOrWhiteSpace(name))
// {
//     Console.WriteLine("Fine, don't say 'hello'!");
// }
// else
// {
//     Console.WriteLine($"Hello, {name}!");
// }








// List <string> foods = new List<string>() 
// {
// 	"Brussel Sprouts", "Toast", "Steak", "Tomato"
// };
// 	foreach (string in foods)
// {
// 	Console.WriteLine($"You can eat {food}.")
// }



// public class Person
// {
//     public string Name { get; set; }
//     public DateTime BirthDay { get; set; }
//     public List<string> Hobbies { get; set; }

//     public Person(string name, DateTime birthday, List<string> hobbies)
//     {
//         this.Name = name;
//         this.Birthday = birthday;
//         this.Hobbies = hobbies;
//     }

//     public void AddHobby(string hobby)
//     {
//         Hobbies.Add(hobby);
//     }
// }




// Person lulu = new Person (
//     "Lulu",
//     new DateTime(1934, 2, 14),
//     new List<string>() { "Knitting", "Break dancing", "Lion taming" }
// );

// // Changing the Name property
// lulu.Name = "Lulu Rodriguez";

// // Calling the AddHobby method
// lulu.AddHobby("World domination");



// // this is how you make a template literal
// void MooseSays(string message)
// {
// 	Console.WriteLine($"{message}")
// }

// MooseSays("Hello, my name is Moose!");






// bool MooseAsk(string question) 
// {
// 	Console.Write($"{question} (Y/N)" );
// }













// ***************** NOTES FOR NSS ********************************************************************************************************************


// json-server database.json -w

// json-server -p 8088 -w database.json
// json-server -p 8088 -w database.json

// you need to type the command => npm start 
// on your top most directory which is kennels

// https://drive.google.com/drive/folders/1DASvxj5ixkNIhD0LdSFJC52HtjmHGEyA

// not serve on src 

// it's npm start on kennels directory lol

// always do npx create-react-app "branch name"

// https://drive.google.com/drive/folders/1DASvxj5ixkNIhD0LdSFJC52HtjmHGEyA?usp=sharing



// capstone
// https://docs.google.com/document/d/1lcd dQzcX-jnH0NiMK6jOy9z2whl2Nw7NTPpoL_G6WBA8k/edit



// below is how to make a new c# directory or project
// dotnet new console -o "name of project in pascal case"



// miro
// https://miro.com/welcomeonboard/V2VoajFzVGtBNFp3c1hrRzNLbUlkU3V4UFliRVVKN0hVWHlxR3NoQlNDSmVjZ0llVWZqTWVTZzltM0hvSkRRVHwzMDc0NDU3MzYwMzI3NzQxODc1


// https://www.linkedin.com/in/me/detail/assessments/React.js/quiz-intro/?channel=FEED_SHOWCASE&vanityNameContext=honeyraeswan 



// capstone proposal examples:
// One:
// After my mother had a stroke, she suffered from aphasia and was given all kinds of different worksheets and exercises to help with her language rehabilitation. She became overwhelmed, plateaued in her recovery and ultimately gave up on studying on her own. There are no easy apps to help patients once they leave hospital care or for low income families who cannot afford speech therapy. Current applications tend to be aimed toward speech therapists which makes them too verbose for a patient to use independently. They’re also all ugly as hell.
// How your app will address this problem: Simple to use flash card app to improve language skills for those who have aphasia or other word finding problems.
// Two:
// Problem you’re solving: The problem I would like to solve is having an efficient way to keep track of my basketball shooting workouts. I would like to be able to see how many shots I take and make in certain areas of the court so I can pinpoint the areas that I need to spend more time working on. I'd also like to be able to keep track of which gym I worked out in and make a few notes about how I was feeling or anything else I did during the workout.
// How your app will address this problem: My app will address this problem by providing the user a way in which to quickly log the amount of basketball shots taken and made during a workout at various locations on the court. The user will then be able to review prior workouts and monitor any improvements in shooting percentage from workout to workout. The app will track these statistics and calculate the accuracy percentage for each user from each court location which will hopefully help lead the user to better target specific areas to work on improving accuracy.

// elyse dawson
// https://dev.to/pb/10-github-repositories-which-will-help-you-to-become-a-better-javascript-developer-5om

// For each number 1-100, if the number is divisible by 3, print "Fizz", if it's divisible by 5 print "Buzz", if it's divisible by 3 and 5, print "FizzBuzz", otherwise print the number itself.


// 8/25/21
// lauL4$0H

// git branch -m master main

// dotnet add package Microsoft.Data.SqlClient
// dotnet restore


// when you cloned the WisdomAndGrace repo, you already have the Visual Studio project in your workspace, so go to the topmost/root directory where you can see the sln file, then the command you type is:
// start WisdomAndGrace.sln
// Then it will open up the Visual Studio project



// git init 
// git remote add origin ssh key
// git remote push -u origin main





//  npm install react-router-dom@5.3.0

// -------------------+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // you can write to stdout for debugging purposes, e.g.
// // console.log('this is a debug message');

// // function solution(N) {
// //     // write your code in JavaScript (Node.js 8.9.4)
// // }



// let calculate = (number) => {
//     // initialize/define an empty array that will later be populated by the possible numbers.
//     let array = [];
//     // initialize/define a variable that later be used to add the numbers
//     let currentThingInArray;
//     // this loops as many times as the number passed in the parameter 
//     for (let i = 0; i < number; i++) {
//         // we specify a range from negative to positive of what the possible numbers could be
//         let min = -9;
//         let max = 9;
//         // that number gets stored in this variable
//         let randomNumber = Math.floor(Math.random()*(max-min+1)+min);
//         if (array.length === 0) {
//             // if this is the first numbe then add it to the array
//             array.push(randomNumber);
//         } else {
//             // this runs after the  first number has been added to the array
//             // if the number generated is the same as the current number in the loop
//             // then regenerate the number
//             let val = true;
//             while (val === true) {
//                 if (randomNumber === array[i]) {
//                     randomNumber = Math.floor(Math.random()*(max-min+1)+min);
//                 } else {
//                     array.push(randomNumber);
//                     val = false; 
//                 }
               
//             }
           
//         }
        
//     }
//         // this loops through the array of numbers made above
//         for (i = 0; i < array.length; i++) {
//             // this first condition will only trigger the first time to add the first value into the currentThingInArray variable
//             if (i === 0) {
//                 // it puts the first number of the array in the variable
//                 currentThingInArray = array[i];
//             } else {
//                 // after looping once, the rest of the times it will add the next number in the array to whatever number is currently in the array, until it finishes the looping
//                 currentThingInArray += array[i]
//             }
//         }
//         // if the result is not equal to 0 it runs the whole function again from the start 
//         if (currentThingInArray !== 0) {
//             calculate(number);
//         } else {
//             // once it finds the right combination that added up equals to 0, then it returns the array
//             return array;
//         }
// }






// let solution = (number) => {
//     // this variable allows the while looping to keep going 
//     let val = false;
//     // the while loop will keep invoking the calculate function as long as val is false
//     while (val === false) {
//         let arr = calculate(number)
//         // if the value returned is not undefined then change val to true and return the array
//         if(typeof arr !== 'undefined') {
//             // because val has changed to true the while loop ends
//             val = true;
//             return arr;
//         }
//     }
// }

// solution(4);

// // I could not make the function to not allow repeated numbers in the array, this is all I could come up with.




// updated version
// let solution = (number) => {
// // This variable allows the while loop to keep going
//     let val = false;
// // The while loop will keep invoking the calculate function as long as val is false
//     while (val === false) {
//         let arr = calculate(number)
// // If the value returned is not undefined then change val to true and return the array.
//         if (typeof arr !== 'undefined') {
// // Because val has changed to true the while loop ends.
//             val = true;
//             return arr;
//         }
//     }
// }
// white_check_mark
// eyes
// raised_hands





// 
// let calculate = (thing) => {
//     let array = [];
//     let currentThingInArray;

//     for (let i = 0; i < thing; i++) {
//         let min = -9;
//         let max = 9;
//         let randomNumber = Math.floor(Math.random()*(max-min+1)+min);
//         if (array.length === 0) {
//          // If this is the first number then just add it to the array.
//          array.push(randomNumber);
//         } else {
//             // this runs after the first number has been added to the array.
//             // if the number generated is the same as the current number in the loop then re generate the number.
//             let val = true;
//             while(val === true) {
//                 if(randomNumber === array[i - 1]) {
//                     randomNumber = Math.floor(Math.random()*(max-min+1)+min);

//                 } else {
//                      // once the number isnt the same then add it.
//                     array.push(randomNumber);
//                     val = false;
//                 }
//             }
//         }
//     }

    

//     for (i = 0; i < array.length; i++) {
//         if (i === 0) {
//             currentThingInArray =  array[i];
//         } else {
//             currentThingInArray += array[i];
//         }
//     }
//         if (currentThingInArray !== 0) {
//             calculate(thing);
//         } else {
//             return array;
//         }
// }
// 
// solution(4)


// ********************************************************* Intro *****************************************************

// * Prior to pursuing a career in software development and attending NSS, I was a healthcare provider and personal trainer back in Texas. Which gave me a passion for helping others achieve
//  their goals by creating customized mealplans and workout programs which involved problem solving aspects by making sure I create a balanced regimen of nutrition and 
// exercises for my clients.
// * And so I wanted to increase my reach in community by building a a website, so I asked a client and friend to help me create a simple html and css website. Through the 
// process of learning how to create it from scatch, I found it fascinating and fun that I could channel my creativity and leverage 
// technologyto make more of difference in people's lives. 
// *My friend saw my interest in coding and thought I would be a great fit to attend NSS and recommended me to enroll. So I did my reasearch, followed some basic coding tutorials on youtube
// and freecodecamp,
// and decided this would be a great opportunity for a career change where I can feel fulfilled in helping others while enjoying what I do. 
// *Now that I have recently graduated from NSS and made this career change, this has been one of the best decisions in my life and I look forward to learning everyday and improving my skills.
// *In terms of the tech stack that I learned at NSS, for the client side I learned HTML, CSS, JavaScript, React framework, and JSON server as a local database. For the server side, I learned
// C#, .NET, ASP.NET MVC, and SQL for database management. Since graduating, I have been reviewing what I have learned by re-creating the previous exercises and making the projects we did
// my own to solidify everything I have learned so far.


// *Personally, I like both the front-end and the back-end. Because in front-end I like how I can express my creativity more and any interactive changes I make in my code are
// reflected more immediately on the DOM. On the other hand, I like the back end as well because you have to be more declarative with the data types, any runtime and compilation errors are
// easier to spot on the stack trace, and you can do more complex and robust data interactions with SQL queries. 



// Front End
// This was challenging because have 2 countdown functions within the timer function. The First is for the start workout timer, and the second one is cool down timer. 
// These functions use setTimeout() to wait for 1 second before they subtract 1 from what the user passed it on the minus and seconds until it reaches 0. Once the Sets count down 
// function ends it triggers the cool down Function and once that ends it triggers the Set count down function again and again in a loop until the minus and seconds both reach 0.


// Back End
// Calorie Tracker:
// The way this works is that each time the user adds a food to their meal plan it adds the calories of that food to the database, in the meal plan calorie tracker column. Every time
//  the user adds a new food it adds it to the previous calories, if its removed it subtracts it.





// What to expect for first job:
// *What I'm looking for in my first job is a nurturing enviroment with a collaborative team where I can thrive and contribute to the success and productivity of my team. Open communication
// and being able to ask my peers and mentors any question that I have whenever I have a roadblock because that is how I can best learn and improve as a junior developer.

// Where you see self in 5 years:
// *In 5 years, I see myself as a valuable contributing member of my team, where I have honed my skills and improved myself as a developer. However, I still see myself as a forever student
// and someone who is eager to keep learning new technologies because there are always new things to learn which is something I look forward to and what I also like about this field.

// Which of your projects you liked the most
// *I liked both capstone projects and I am proud of what I built. Though I liked being able to make complex data interactions with SQL on the back-end, I would choose my front-end project
// because I was able to express more of my creativity and make powerful features and layouts.
// *With React, I was able to build a single page app that is interactive where I can make the illusion of whenever the user clicks on a link, to make it seem like they are going to a
// different page when in fact, I am just routing them to a different component or view.

// *Teams are great because we get to bounce ideas off of each other and complete projects more efficiently and effectively. Collaborating with others is always great because each member
// has something to contribute in terms of their experience or knowledge that can help the team be productive.
// *For example, I have worked on at least 5 group projects in NSS in a remote setting which was a great experience for me and I felt that not only did I contribute as a member, but I also
// learned a lot from my peers and became a better team player in the process.

// Something you've done that you're proud of and what made you proud of it/name what you did for capstone and why you chose to do it/struggled with and overcame
// *Gabe's prompts

// API:
// *An API stands for Application Programming Interface which is a middle man that allows two softwares to communicate with each other.

// *Although I have not implemented a RESTFUL API on my apps yet but I plan to learn more about it and implement it in the future,
//  I did use the text-to-speech functionality of the Web Speech API which is 
// available and built in to the browser to allow my app 
// to tell the user the start and end times of their workout (the speech syntheis methods/class is built in the browser and I used that to make the app speak )
// WHAT IS A RESTFUL API: To be honest, I am not too familiar with building restful apis as it was not really covered in NSS, however, I think that a Restful API in simple terms is an
// architectural style (how you structure the API) that uses HTTP requests to access and use data (GET, POST, PUT, DELETE call to API, etc).

// *How Does REST API work? A REST API works essentially the same way that any website does. A call is made from a client to a server, and data is received back over the HTTP protocol.


// *Inheritance: A child/subclass/derived class can inherit the properties and methods from a parent/base class (with a colon) and can override those methods to do something else/have
// a different behavior. This helps reduce redundancy or repetitive code and makes the code more scalable. For example, you can have a Dog and Cat class that inherit (name, color properties
// and makeNoise() method) from an Animal parent class because they share those attributes. In the Dog class, you can override the makeNoise() method it inherits from the Animal class
// so that when you make a new instance object of a Dog, it can print "Woof" to the console. Similarly, you can override the same method in the Cat class for the new Cat instance object
// to say "Meow" instead.

// *Interface: It's a contract between the interface and the class that implements that interface where the implementing class must use the properties and methods of the interface 
// (colon), but the class can decide how to implement them.
// In the interface file, you only declare the properties and methods, but don't define them meaning don't describe what it does
// For example, you also have a IPredator interface where you use the Cat class to make a Lion object and create another Snake class and both will implement the IPredator interface and use
// as an example the huntPrey() method (for the Lion, it hunts deer and for the snake it hunts a mouse). In C# unlike in JavaScript, you cannot create a list of the same data types,
// but with an interface, you can make a collection of different class types that implement that interface (example, normally you can't make a list of Lions and Snakes into one collection,
// but you can make a list of IPredator that contain both since both classes implement the interface).




// If I was blessed enough to work for your company, What are the expectations of a newly hired junior devloper like myself?


// What are the plans for the company over the next 5 to 10 years and how could I help you achieve them?


// What do you love most about your job and the team you work with?

// What is like work culture like & How does the team celebrate success?


// ******************** Sales force **********************
// Crm applications

// 1 1 1 principle
