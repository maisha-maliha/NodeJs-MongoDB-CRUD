# NodeJs-MongoDB-CRUD
In this project i used simple nodejs and mongoDB for CRUD operation in a todo App. You can get the todo App in my other repository = todoApp-90sTheme.

In this repository I tried to follow a MVC structure. 
* I have kept all database codes in Model folder.
* In view folder i have my Javascript files for index.html and also i have the data.json file there which keeps updated list data. 
* I intensionally kept the index.html and main.js files in the main directory. 
* Assets folder has all images and CSS.
* main.js is working here as the controller. main.js is doing all the routing

## DATABASE FILE
I have included a database collection file. The Name of the database is "todo" and the collection name is "item". the database file name is : "item.json". Its in the same directory as the "main.js" file.import it in your MongoDB.

## Demo of the TODOAPP
![Alt text](https://github.com/maisha-maliha/NodeJs-MongoDB-CRUD/blob/master/desktop.png "desktop view")
![Alt text](https://github.com/maisha-maliha/NodeJs-MongoDB-CRUD/blob/master/mobile.png "mobile view")
## Issues
The issue that i faced is when i send data with 'POST' i got encrypted data for which my punctions were converted to ASCII codes. So i simply added 'enctype=text/plain'. This in turn simply sent the data in plain text not encrypted. Yes, buffered data that needs to converted toString(). It's simple todoApp so no need for encryption.
