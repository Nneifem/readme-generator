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
function generateMarkdown({title, description, /*toc*/ installation, usage, contribution, test, /*question,*/ license, github, email}) {
  return `# ${title}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${installation}

## Usage
${usage}

## Contribution 
${contribution}

## License
${license}

## Test
${test}
    
## Questions
- GitHub Profile: ${github}
- If any additional questions my email is ${email}
`;
}

module.exports = generateMarkdown;