    const generateHTML = function (teamstring) {

        console.log("Inside gen html");
        return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>TPG</title>
   <link href="https://fonts.googleapis.com/css?family=Bungee+Inline|Bungee+Shade&display=swap" rel="stylesheet">
   <style>
       body {
           background: url(http://cdn.differencebetween.net/wp-content/uploads/2018/01/Difference-between-Coding-and-Programming.jpg) center;
           background-size: 100% 100%;
           background-repeat: no-repeat;
           margin: 0%;
           height: 100vh;
       }

       .header {
           background-color: rgb(87, 245, 129);
           border: solid black;
           text-align: center;
           font-size: 30px;
           font-family: 'Bungee Shade', cursive;  
       }

       .container-body {
           display: flex;
           justify-content: space-evenly;
       }

       .card {
           background-color:rgb(255, 255, 255);
           margin-top: 4%;
           border: solid black;
           font-size: x-large;
       }
       .card-header{
           margin: 10%;
       }
       .card-body{
           margin: 5%;
       }
   </style>
   
</head>
    
    <body>
   <div class=header>
       <h1>My Team</h1>
   </div>
   <div class="container-body">

         ${teamstring} 

         </div>
    <script src="https://kit.fontawesome.com/257de25400.js" crossorigin="anonymous"></script>         
    </body>
    
    </html>`

    }

    //arr is the employee object and looking for the properties in that class
    const generateCard = function (arr) {
        //if else statement
        let role;

        if (arr.title === "Manager") {
            role = `Office Number: ${arr.officeNumber}`
        } else if (arr.title === "Engineer") {
            role = `Github Username: ${arr.github}`
        } else if (arr.title === "Intern") {
            role = `School: ${arr.school}`
        }

        return `<div class="card">
<div class="card-header">
    <h2>${arr.name}</h2>  
    <h2><i class="far fa-user"></i> ${arr.title}</h2>
    <hr>
</div>
<div class="card-body">
    <ul>
        <li>ID: ${arr.id}</li>
        <li>Email: ${arr.email}</li>
        <li>${role} </li>
    </ul>
</div>
</div>`
    }

    exports.generateHTML = generateHTML
    exports.generateCard = generateCard;