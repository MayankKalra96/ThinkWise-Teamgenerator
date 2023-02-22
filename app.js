const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const html = require("./templates/htmltemp");



const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let TeamMayankArray = [];
let teamstring = ``;

async function main() {
     try {
          await prompt()

          for (let i = 0; i < TeamMayankArray.length; i++) {
               teamstring = teamstring + html.generateCard(TeamMayankArray[i]);
          }

          let finalHTML = html.generateHTML(teamstring)

          console.log(teamstring)


          writeFileAsync("./output/index.html", finalHTML)


     } catch (err) {
          return console.log(err);
     }

};

async function prompt() {
     let respDn = "";
     do {
          try {
               response = await inquirer.prompt([

                    {
                         type: "input",
                         name: "name",
                         message: "What is the employee's name?: "
                    },
                    {
                         type: "input",
                         name: "id",
                         message: "Enter the employee's ID: "
                    },
                    {
                         type: "input",
                         name: "email",
                         message: "Enter the employee's email address: "
                    },
                    {
                         type: "list",
                         name: "role",
                         message: "What what is the employee's role:",
                         choices: [
                              "Engineer",
                              "Intern",
                              "Manager"
                         ]
                    }
               ]);

               let response2 = ""
              

               if (response.role === "Engineer") {
                    response2 = await inquirer.prompt([{
                         type: "input",
                         name: "x",
                         message: "What is the employee's github username?:",
                    }, ]);
                
                    const engineer = new Engineer(response.name, response.id, response.email, response2.x);
                    TeamMayankArray.push(engineer);
               } else if (response.role === "Intern") {
                    response2 = await inquirer.prompt([{
                         type: "input",

                       
                         name: "x",
                         message: "What school is the employee attending?:",
                    }, ]);
                
                    const intern = new Intern(response.name, response.id, response.email, response2.x);
                    TeamMayankArray.push(intern);
               } else if (response.role === "Manager") {
                    response2 = await inquirer.prompt([{
                         type: "input",
                         name: "x",
                         message: "What is the employee's office number?:",
                    }, ]);
                    
                    const manager = new Manager(response.name, response.id, response.email, response2.x);
                    TeamMayankArray.push(manager);
               }
          } catch (err) {
               return console.log(err);
          }
          console.log(TeamMayankArray)
          

          respDn = await inquirer.prompt([{
               type: "list",
               name: "finish",
               message: "Do you want to continue?: ",
               choices: [
                    "Yes",
                    "No"
               ]
          }, ]);

     } while (respDn.finish === "Yes");
}







main();


