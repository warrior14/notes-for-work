// // SQL Notes Structured Query Language 


// // sql is a language which is used to interact with relational database management systems. Which is basically just a software application
// // which we can use to create and manage different databases.
// // a relational database is a database made up of tables and the relationships between tables.
// // a table is a 'grid' of data. It's made of rows and columns.



// // SELECT count(*)
// // FROM person;              - this is to see how many rows a table has


// // SELECT * FROM person LIMIT 10;       - LIMIT is to limit how many rows you want to view in the query


// // SELECT DISTINCT type FROM crime_scene_report;      - DISTINCT is to filter the query so things don't repeat themselves


// // SELECT * FROM person WHERE name = 'Kinsey Erickson'           - This query to retrieve a specific person


// // Insert - create new record in a table 
// // Select - read records from a table or it can be a combination of multiple joined tables 
// // Update - update the records in a table
// // Delete - delete records in a table 
// // And - is used to string together multiple filering criteria so that the filtered results meet each and every one of the criteria
// // Or - is used to return rows that match any of the criteria
// // Limit - is to limit how many rows you want to view in the query
// // Distinct - is to filter the query so data does not appear twice
// // _ is a wildcard that means match the rest of the text; 'B_b' ; 'Bob' ; 'Bub'



// // A SQL query can contain:
// // SQL keywords (like the ​SELECT​ and ​FROM​ above)
// // Column names (like the ​name​ column above)
// // Table names (like the ​person​ table above)
// // Wildcard characters (such as ​%)
// // Functions
// // Specific filtering criteria
// // Etc


// // SQL Keywords 

// // SELECT​ allows us to grab data for specific columns from the database

// // FROM​ allows us to specify which table(s) we care about; to select multiple tables, list the table names and use commas to separate them

// // ​WHERE​ clause in a query is used to filter results by specific criteria

// // AND​ keyword is used to string together multiple filtering criteria so that the filtered results meet each and every one of the criteria

// // OR keyword is used to return rows that match any of the criteria



// // 11/10/21
// // % wildcard in a query string, the SQL system will return results that match the rest of the string exactly, and have anything (or nothing) where the wildcard is. 
// // For example, 'Ca%a' matches Canada and California


// // _ wildcard This one means 'match the rest of the text, as long as there's exactly one character in exactly the position of the _, no matter what it is. 
// // So, 'B_b' would match 'Bob' and 'Bub' but not 'Babe' or 'Bb'.


// // Important: When using wildcards, you don't use the = symbol; instead, you use LIKE.


// // SQL also supports numeric comparisons like < (less than) and > (greater than). You can also use the keywords BETWEEN and AND -- and all of those work with words as well as numbers.

// // SQL commands are not case-sensitive, but WHERE querie values for = and LIKE are

// // UPPER() and LOWER() cane be used if you want to be case sensitve specific


// // The SQL NOT EXISTS Operator will act quite opposite to EXISTS Operator. It is used to restrict the number of rows returned by the SELECT Statement. The NOT EXISTS 
// // in SQL Server will check the Subquery for rows existence, and if there are no rows then it will return TRUE, otherwise FALSE.


// // An aggregate function performs a calculation on a set of values, and returns a single value. Except for COUNT(*) , aggregate functions ignore null values. Aggregate 
// // functions are often used with the GROUP BY clause of the SELECT statement. All aggregate functions are deterministic.

// // MAX finds the maximum value
// // MIN finds the mininum value
// // SUM calculates the sum of the specified column values
// // AVG calculates the average of the specified column values 
// // COUNT counts the number of specified column values 


// // ORDER BY goes in "ascending" (smallest to largest, or A to Z) order, but you can be specific with ASC for ascending, or you can reverse it with DESC.
// // SELECT * FROM drivers_license ORDER BY age ASC LIMIT 10



// // Write a query that identifies the first witness
// // SELECT * FROM person 
// // WHERE address_street_name = 'Northwestern Dr' 
// // ORDER BY address_number DESC LIMIT 5;

// //  INNER, OUTER, LEFT and RIGHT joins
// // you can join as many times as you want


// // The most common way to join is using primary keys and foreign keys columns
// // SELECT person.name, income.annual_income 
// // FROM income 
// // JOIN person 
// //   ON income.ssn = person.ssn 
// // WHERE annual_income > 300000



// // This example shows how to join more than one table. It also, incidentally, shows how you can use 'aliases' for the various tables in your query so that you don't 
// // have to type as much. Finally, it shows how you can change how a column name shows up in the results, which can be handy.



// // SELECT name, annual_income as income, 
// // gender, eye_color as eyes, hair_color as hair
// // FROM income i
// // JOIN person p
// //   ON i.ssn = p.ssn 
// // JOIN drivers_license dl
// //   ON p.license_id = dl.id
// // WHERE annual_income > 450000



// // Write a query that shows the interview transcripts for our two subjects.
// // There's more than one way to do it, so you may learn the answer even if the results say 'Incorrect'. The official solution does it in one query,
// //  but you don't have to. Technically you don't even need to use a JOIN to get the transcripts, but give it a try.
// // SELECT person.name, interview.transcript,
// // FROM person JOIN INTERVIEW 
// // ON person.id = interview.person_id
// // WHERE person.id = 14887 OR person.id = 16371;


//  // a database is where you can store, retrieve and manipulate data

//  // each column is an attribute 

//  // each row  is the actual data

//  // relational database - a database structured to recognize relations among stored items of information or a relation between 1 or more tables

//  // how is data stored? it is stored in tables, formed by columns and rows

//  // psql is the interactive server 

//  // A relationship is a link between a primary key in one table and a foreign key in another table (or, possibly, the same table).

//  // SQL Server Management Studio
// The (currently) most popular tool for managing SQL Server. It is mature and full of features that DBAs love. It's only available on Windows.

// What is a relational database? A relational database is one that stores data in tables and allows you to specify the relationships between 
// records in those tables.


// this is how to specify viewing all the rows in a table, you can specify every column in a table 
// SELECT
//     Id,
//     Title,
//     SongLength,
//     ReleaseDate,
//     GenreId,
//     ArtistId,
//     AlbumId
// FROM Song;


// A shortcut that you can use during development (but never in the final production code) is the asterisk - which mean select all columns. 
// The following query is will return that same set of results that the first query above returned.
// SELECT * FROM Song;


// The WHERE clause on a SQL query will filter the results. If you want to find songs that have a duration greater than 100 seconds, you 
// would use the following query.
// SELECT
//     Id,
//     Title,
//     SongLength,
//     ReleaseDate,
//     GenreId,
//     ArtistId,
//     AlbumId
// FROM Song
// WHERE SongLength > 100;


// Use JOINs to combine tables together into one result set.
// SELECT s.Title,
//        a.ArtistName
//   FROM Song s
//        LEFT JOIN Artist a on s.ArtistId = a.id;


// Create a new row in the Genre table to represent techno music.
// INSERT INTO Genre (Name) VALUES ('Techno');


// Change the length (in seconds) for one of the songs.

// select SongLength from Song where Id = 18;

// -- The following is the output you get when you run the query above.
// > 237

// update Song
// set SongLength = 515
// where Id = 18;

// -- Once you run the update statement, in order to make sure the value has changed, we run the select query again.
// select SongLength from Song where Id = 18;
// > 515


// You can use the DELETE keyword to remove rows from your database tables.
// delete from Song where Id = 18;


// Be wary of leaving off the WHERE clause. The following SQL statement will remove ALL ROWS from the table.
// delete from Song;              (this might delete everything)



// Operator	Condition	SQL Example
// =, !=, < <=, >, >=	Standard numerical operators	col_name != 4
// BETWEEN … AND …	Number is within range of two values (inclusive)	col_name BETWEEN 1.5 AND 10.5
// NOT BETWEEN … AND …	Number is not within range of two values (inclusive)	col_name NOT BETWEEN 1 AND 10
// IN (…)	Number exists in a list	col_name IN (2, 4, 6)
// NOT IN (…)	Number does not exist in a list	col_name NOT IN (1, 3, 5)


// find the movie with a row of id of 6
// SELECT Id, Title FROM Movies 
// WHERE Id = 6;


// find the the movies released in the years between 2000 and 2010
// SELECT title, year FROM Movies WHERE year BETWEEN 2000 AND 2010;


// find the movies not released in the years between 2000 and 2010
// SELECT title, year, FROM Movies WHERE year < 2000 OR year > 2010;    


