// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseArr = [
  {
    license: 'IBM Public License Version 1.0',
    name: 'IPL 1.0',
    imgLink: 'IPL_1.0',
    licenseLink: 'IPL-1.0',
    color: 'blue'
  },
  {
    license: 'MIT License',
    name: 'MIT',
    imgLink: 'MIT',
    licenseLink: 'MIT',
    color: 'yellow'
  },
  {
    license: 'Mozilla Public License 2.0',
    name: 'MPL 2.0',
    imgLink: 'MPL_2.0',
    licenseLink: 'MPL-2.0',
    color: 'brightgreen'
  },
  {
    license: 'Attribution License (BY)',
    name: 'Open Data Commons Attribution',
    imgLink: 'ODC_BY',
    licenseLink: 'by',
    color: 'brightgreen'
  },
  {
    license: 'Perl License',
    name: 'Artistic-2.0',
    imgLink: 'Perl',
    licenseLink: 'Artistic-2.0',
    color: '0298c3'
  }
];

function renderLicenseBadge(license, licenseArr) {
  if (license[0] === 'None' || !license.length) {
    return '';
  }
  
  for (let i = 0; i < licenseArr.length; i++) {
    if (licenseArr[i].license === license[0]) {
      const newArr = licenseArr[i];
      return '[![License: ' + newArr.name + '](https://img.shields.io/badge/License-' + newArr.imgLink + '-' + newArr.color + '.svg)](https://opensource.org/licenses/' + newArr.licenseLink + ')';
    };
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(newArr) {
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license[0] === 'None' || !license.length) {
    return '';
  }

  return `
  ## License
  Licensed under the ${license[0]}.
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, installation, usage, license, contribution, tests } = data;
  const { github, email } = data.contact[0];

  return `
  # ${title}
  ${renderLicenseBadge(license, licenseArr)}

  ## Description
  ${description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)

  ## Installation
  ${installation}

  ## Usage
  ${usage}
  ${renderLicenseSection(license)}
  ## Contributing
  ${contribution}

  ## Tests
  ${tests}
  
  ## Questions
  - GitHub Profile: https://github.com/${github}
  - If you have any additional questions, please feel free to contact me by email.
    E-mail Address: <${email}>
`;
}

module.exports = generateMarkdown;
