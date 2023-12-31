# README.md Generator

## Description

See below for application details, and for screenshots of example responses and of the README.md file they generate; reference the YouTube link for a walkthrough demonstration of the application and its tests.

### About the Application

This application was created to help avoid the tedium of writing a README.md file from scratch; the application will generate a README.md template, and autopopulate the respective README fields based on user input in the terminal.

### Screenshots

Example of required input responses:

![Sample inputs](/assets/Screenshot%202023-06-21%20at%205.53.35%20PM.png)

### Links

Walkthrough Demo:
https://www.youtube.com/watch?v=2Mk_4NiyUM0

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Contact](#contact)

## Installation

The Node.js runtime environment is required to run the contents of this application. You can download Node.js here:
https://nodejs.org/en

After installing Node.js, the application will still require Inquirer.js to run. To set this up, initialize a node package, and then install the appropriate version of Inquirer.js; open a terminal and run the following commands, sequentially...

```
npm init -y

npm install --save inquirer@^8.0.0
```

## Usage

1. Open a terminal
2. Navigate to the "Develop" folder in the repository
3. Type the following command:

```
node index.js
```

4. Follow the prompts to input the information you want included in your README.md file. You will be prompted to provide the following: ...

   ... a title

   ... a description

   ... installation procedures

   ... usage instructions

   ... license information

   ... contributor information

   ... testing measures

   ... your github username as well as an email at which you can be reached

5. A new README.md file will be generated within the "Develop" folder with autopopulated user inputs.

## Credits

Please reference the folder titled "source-code" for the starter code provided for the challenge assignment.

The developer utilized tutoring available through the University of Denver's Full-Stack Coding Boot Camp for portions of the code; all other code was scripted by the repository owner (see [Contact](#contact) below for details).

## License

N/A

## Tests

N/A

## Contact

GitHub Username: ryantixier

GitHub Profile: https://github.com/ryantixier

Email: ryan.m.tixier@gmail.com
