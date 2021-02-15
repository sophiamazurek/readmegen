// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projecttitle}

  ## Description 
  ${data.description}
  
  
  ## Table of Contents (Optional)
    
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Questions](#questions)
  
  
  ## Installation
  ${data.installationinstructions}  
  
  ## Usage 
  ${data.usageinformation}
  
  Include screenshots as needed.
 
  
  ## Credits
  ${data.contributionguidelines}
  
  
  ## License
  ${data.license}  
  
  ---
  
  🏆 
  
  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
  ![Image of Badge](https://img.shields.io/badge/${data.badges}-100%-blue)

    
  
  ## Features
  ${data.features}
  
  
  ## Contributing
  ${data.contribution}
  
  ## Tests
  ${data.testinstructions}
  
  ## Questions
  https://github.com/${data.githubusername}
  ${data.email}  

`;
}

module.exports = generateMarkdown;
