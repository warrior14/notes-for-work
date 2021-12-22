// SQL Notes Structured Query Language 


// sql is a language which is used to interact with relational database management systems. Which is basically just a software application
// which we can use to create and manage different databases.
// a relational database is a database made up of tables and the relationships between tables.
// a table is a 'grid' of data. It's made of rows and columns.



// SELECT count(*)
// FROM person;              - this is to see how many rows a table has


// SELECT * FROM person LIMIT 10;       - LIMIT is to limit how many rows you want to view in the query


// SELECT DISTINCT type FROM crime_scene_report;      - DISTINCT is to filter the query so things don't repeat themselves


// SELECT * FROM person WHERE name = 'Kinsey Erickson'           - This query to retrieve a specific person


// Insert - create new record in a table 
// Select - read records from a table or it can be a combination of multiple joined tables 
// Update - update the records in a table
// Delete - delete records in a table 
// And - is used to string together multiple filering criteria so that the filtered results meet each and every one of the criteria
// Or - is used to return rows that match any of the criteria
// Limit - is to limit how many rows you want to view in the query
// Distinct - is to filter the query so data does not appear twice
// _ is a wildcard that means match the rest of the text; 'B_b' ; 'Bob' ; 'Bub'



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