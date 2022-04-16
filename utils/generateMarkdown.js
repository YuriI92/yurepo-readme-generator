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
  if (license[0] === 'None') {
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
  if (license[0] === 'None') {
    return '';
  }

  return `
  ## License
  Licensed under the ${license[0]}.
  `
}

const generateContribution = contribution => {
  if (!contribution) {
    return '';
}

  return `
  ## Contributing
  ${contribution}
  `;
}

const generateTests = tests => {
  if (!tests) {
    return '';
}

  return `
  ## Tests
  ${tests}
  `;
}

const generateQuestions = (github, email) => {
  if (!github && !email) {
    return '';
  } else if (!github) {
    return `
    ## Questions
    If you have any additional questions, please feel free to contact me by email.
    E-mail Address: <${email}>
    `;
  } else if (!email) {
    return `
    ## Questions
    GitHub Profile: https://github.com/${github}
    `;
  } else {
    return `
    ## Questions
    - GitHub Profile: https://github.com/${github}
    - If you have any additional questions, please feel free to contact me by email.
      E-mail Address: <${email}>
    `;
  }
}

const generateContTable = (license, contribution, tests) => {
  if (license[0] === 'None' && !contribution && !tests) {
    return '';
  } else if (!contribution && !tests) {
    return `
    - [License](#license)
    `;
  } else if (license[0] === 'None' && !tests) {
    return `
    - [Contributing](#contributing)
    `;
  } else if (license[0] === 'None' && !contribution) {
    return `
    - [Tests](#tests)
    `;
  } else if (!tests) {
    return `
    - [License](#license)
    - [Contributing](#contributing)
    `;
  } else if (!contribution) {
    return `
    - [License](#license)
    - [Tests](#tests)
    `;
  } else if (license[0] === 'None') {
    return `
    - [Contributing](#contributing)
    - [Tests](#tests)
    `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { license, contribution, tests, ...required } = data;
  const { github, email } = data.contact[0];

  return `
  # ${required.title}
  ${renderLicenseBadge(license, licenseArr)}

  ## Description
  ${required.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${generateContTable(license, contribution, tests)}
  ## Installation
  ${required.installation}

  ## Usage
  ${required.usage}
  ${renderLicenseSection(license)}
  ${generateContribution(contribution)}
  ${generateTests(tests)}
  ${generateQuestions(github, email)}
`;
}

module.exports = generateMarkdown;
