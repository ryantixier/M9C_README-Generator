function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}
  
  ## Table of Contents
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
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

  
  ## Contributors
  
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
