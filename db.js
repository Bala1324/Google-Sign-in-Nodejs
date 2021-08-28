
const value = require("./views/login.ejs");
// console.log(value.email);


// function onSignIn(googleUser) {
//     var email,id,name,imgUrl
//     var profile = googleUser.getBasicProfile();
//     email = profile.getEmail();
//     id = profile.getId();
//     name=  profile.getName();
//     imgUrl = profile.getImageUrl();
//     console.log('ID: ' + profile.getId());
//     console.log('Name: ' + profile.getName());
//     console.log('Image URL: ' + profile.getImageUrl());
//     console.log('Email: ' + profile.getEmail());

// }



// function signOut() {
//     var auth2 = gapi.auth2.getAuthInstance();
//     auth2.signOut().then(function () {
//         console.log('User signed out.');
//     });
// }


// var MongoClient = require('mongodb').MongoClient;

// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db){
//     if(err) throw err;
//     var dbo = db.db("mydb");
//     var myobj = {name: "Compony Inc", address: "Highway 37"};

//     dbo.collection("customers").insertOne(myobj, function(err,res){
//         if(err) throw err;
//         console.log("1 document inserted");
//         db.close();
//     });
// });