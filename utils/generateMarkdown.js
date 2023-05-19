// getting the badge of the license choices and returning empty string if there is no license
function renderLicenseBadge(license) {
    if(license === 'MIT'){
        license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
        return license;
    }
    else if(license === 'Apache'){
        license = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
        return license;
    }
    else if(license === 'ISC'){
        license = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]`
        return license;
    }
    else if(license === 'none'){
        return '';
    }
}

// getting the link of the license choices and returning empty string if there is no license
function renderLicenseLink(license) {
    if(license === 'MIT'){
        license = `(https://opensource.org/licenses/MIT)`
        return license;
    }
    else if(license === 'Apache'){
        license = `(https://opensource.org/licenses/Apache-2.0)`
        return license;
    }
    else if(license === 'ISC'){
        license = `(https://opensource.org/licenses/ISC)`
        return license;
    }
    else if(license === 'none'){
        return '';
    }
}

// combining the two functions above 
function renderLicenseSection(license) {
    return renderLicenseBadge(license) + renderLicenseLink(license)
}

// the format of the README file 
function generateMarkdown({title, description, installation, usage, contribution, test, license, github, email}) {
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
${renderLicenseSection(license)}

## Test
${test}
    
## Questions
- GitHub Profile: [${github}](https://github.com/Nneifem)
- If any additional questions my email is ${email}
`;
}

module.exports = generateMarkdown;