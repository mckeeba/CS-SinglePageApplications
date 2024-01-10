# REST API for a simple Blog Application

Getting Started:<br>
1. Clone this repository
2. Run npm install
3. Run npm run start

The API is hosted at localhost:3000
The following endpoints are available

GET /api/blog<br>
Returns the list of posts<br><br>
GET /api/blog/:postTitle<br>
Returns the post with the given title<br><br>
POST /api/blog<br>
Adds a new post to the database<br>
Expects a Post object in the request body<br><br>
PUT /api/blog/:originalTitle/edit<br>
Edits an existing post in the database<br>
Expects a body in the form<br>
{<br>
    newTitle: string,<br>
    newContents: string,<br>
    newAuthor: string,<br>
    newDate: date<br>
}<br><br>
DELETE /api/blog/postTitle<br>
Deletes the post with the given title from the database<br>
