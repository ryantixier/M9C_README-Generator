function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)
  - [Contact](#contact)
  
  ## Installation

  ${data.installation}
  
  ## Usage
  
  ${data.usage}

  ## Credits
  
  ${data.credits}
  
  ## License
  
  ${data.license}
  
  ## Tests
  
  ${data.tests}
  
  ## Contact

  GitHub Username: ${data.username}

  GitHub Link: https://github.com/ryantixier

  Email: ${data.email}
  
`;
}

module.exports = generateMarkdown;
