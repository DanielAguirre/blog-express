### NODE/Express

##Expres 
It is a ligthweigth framework that iclude the basic modules to start a web server nad allows to indluce more modules to the server depending of the project neceties. this modules are know as middleware that are responsible to handle one task there are alot midlewarres but alot taks but also express allow you create your own middlewares for your own necesities

##Starting
Start a server it's very simple There should start an express instance, start the sever an able a port to listen the request the blow example show how to staart a simple http server.

```
/// server.js
const express = require('express');

const app = express();

app.listen(3000, () => console.log(`Listening at port: 3000`));

```

This snipt requires the express modules, create an instance and listen at port 3000  and whe the servers start there should print  the `Listening at port: 3000`.

To run this script should follow the next steps on the comand line

1. npm i express   // install express
2. node server.js


##Routes
Well this is not the must sofisticated server on the world so there will add some routes to the server 

```
const express = require('express');

const app = express();

app.get('/hello', (req, res) => res.json({ ok: true}));

app.get('/bye', (req, res) => res.json({ ok: false}));

app.listen(3000, () => console.log(`Listening at port: 3000`))

```
Now there are 2 routes in the server that response in a json format whe the service run and hit the `/hello` will receive the beloww response

```
/// Request
curl "localhost:3000/hello"

/// Response

curl "localhost:3000/hello"

```

This way  to add routes to the server it's bpretty basic and it's works if your api has just a couple of endpoints, whe you server start to grow this will not be hte best way to handle your routes

Supposing your creating APi to get the user information ther should be creating and routes filel to jhandle your urls for user

```
// user/route.js
const express = require('express');
const router = express.Router()
const userController = require('./userController');

router.get('/user', bookController.get);

router
    .route('/user/:id')
    .get(userController.findOne)
    .post(userController.create())
    .put(userController.uodate())
    .all(userController.remove())
    ;

module.exports = router;
```

The above example show how to usee the Router APi to group all the url with a asimilar source in this cas e Users the lien `router.get('/use', bookController.get);` attahc a function from the bookController fo the `/user` endpoint. for the endpoint `user/:id` wrapsT.POST, PUT, DELETE and each method reacieve a function that will execute when the api hits the respective endpoitn and method als it's usefull for extra configurations like validations, authorization or error handlig  midlewares.

and the server will change a bit with the route it will loks like below

```
    // server.js
const express = require('express');
const userRoutes = require('./user/router');

const app = express();

app.use('/api', userRoutes)

app.listen(3000, () => console.log(`Listening at port: 3000`))

```
##Midleware
BY default express does not ahndle the POST, PUT and DELETE method for that each developrs should incloud the body-parser midleware like belows

```
const bodyParser = require('body-parser');
...

app.use(bodyParser.json());

...

```
With this now all the http methods should work but  it faces another problem by default the servers not allow the acces from a nother server origin also know as the CORS fo this there is a cors midleware by express

```
const cors = require('cors');
...

app.use(corss())
...

```
The above example open allow the acces from diferent origins that the actual from the server but should be carfeul in production it should allow acces just to secure origins to avoid any secury breachs

Well the last two midleware are enought to continue working on the serivces for the moment.


##Controller

Before it was mention the user controller for the user route now will work on how should it looks this controler 
*Note*: for this example ther are not DB so it's using and plain object for the concurrency

This controller should handel the request and search or create on the DB the information for an specific user or if ther is not and id available migth reutrn all users

