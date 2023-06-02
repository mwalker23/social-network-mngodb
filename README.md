# social-network-mongodb

# NoSQL: Social Network API

## Task

MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. 

The Challenge is to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Using Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the packages, also being used is the native JavaScript `Date` object to format timestamps.


## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Screenshot 

![screenshot](Screenshot%202023-06-01%20at%208.02.06%20PM.png)

## Video 

[![](https://markdown-videos.deta.dev/youtube/{EceiKLIAJZY})](https://youtu.be/{EceiKLIAJZY})

