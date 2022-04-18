// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseArr = [
  {
    license: 'Apache 2.0 License',
    name: '',
    imgLink: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    licenseLink: 'https://opensource.org/licenses/Apache-2.0'
  },
  {
    license: 'Eclipse Public License 1.0',
    name: '',
    imgLink: 'https://img.shields.io/badge/License-EPL_1.0-red.svg',
    licenseLink: 'https://opensource.org/licenses/EPL-1.0'
  },
  {
    license: 'MIT License',
    name: 'MIT',
    imgLink: 'https://img.shields.io/badge/License-MIT-yellow.svg',
    licenseLink: 'https://opensource.org/licenses/MIT'
  },
  {
    license: 'Attribution License (BY)',
    name: 'Open Data Commons Attribution',
    imgLink: 'https://img.shields.io/badge/License-ODC_BY-brightgreen.svg',
    licenseLink: 'https://opendatacommons.org/licenses/by/'
  },
  {
    license: 'Perl License',
    name: 'Artistic-2.0',
    imgLink: 'https://img.shields.io/badge/License-Perl-0298c3.svg',
    licenseLink: 'https://opensource.org/licenses/Artistic-2.0'
  }
];

function renderLicenseBadge(license, licenseArr) {
  if (license[0] === 'None') {
    return '';
  }
  
  for (let i = 0; i < licenseArr.length; i++) {
    if (licenseArr[i].license === license[0]) {
      const newArr = licenseArr[i];
      return '[![License: ' + newArr.name + '](' + newArr.imgLink + ')](' + newArr.licenseLink + ')';
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

  for (let i = 0; i < licenseArr.length; i++) {
    if (licenseArr[i].license === license[0]) {
      const licenseLink = licenseArr[i].licenseLink;

      return `
  ## License
  Licensed under the [${license[0]}](${licenseLink}).
      `;
    };
  }
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

const generateQuestions = (confirm, github, email) => {
  if (!confirm) {
    return '';
  } else {
    return `
  ## Questions
  - GitHub Profile: https://github.com/${github}
  - If you have any additional questions, please feel free to contact me by email.
    E-mail Address: <${email}>
    `;
  }
}

const generateContTable = (license, contribution, tests, confirmContact) => {
  if (license[0] === 'None' && !contribution && !tests && !confirmContact) {
    return '';
  } else if (!contribution && !tests && !confirmContact) {
    return `
  - [License](#license)
    `;
  } else if (license[0] === 'None' && !tests && !confirmContact) {
    return `
  - [Contributing](#contributing)
    `;
  } else if (license[0] === 'None' && !contribution && !confirmContact) {
    return `
  - [Tests](#tests)
    `;
  } else if (license[0] === 'None' && !contribution && !tests) {
  return `
  - [Questions](#questions)
  `;
  } else if (!tests && !confirmContact) {
    return `
  - [License](#license)
  - [Contributing](#contributing)
    `;
  } else if (!contribution && !confirmContact) {
    return `
  - [License](#license)
  - [Tests](#tests)
    `;
  } else if (!contribution && !tests) {
    return `
  - [License](#license)
  - [Questions](#questions)
    `;
  } else if (license[0] === 'None' && !confirmContact) {
    return `
  - [Contributing](#contributing)
  - [Tests](#tests)
    `;
  } else if (license[0] === 'None' && !tests) {
    return `
  - [Contributing](#contributing)
  - [Questions](#questions)
    `;
  } else if (license[0] === 'None' && !contribution) {
    return `
  - [Tests](#tests)
  - [Questions](#questions)
    `;
  }
  else if (!confirmContact) {
    return `
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
    `;
  } else if (!tests) {
    return `
  - [License](#license)
  - [Contributing](#contributing)
  - [Questions](#questions)
    `;
  } else if (!contribution) {
    return `
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)
    `;
  } else if (license[0] === 'None') {
    return `
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
    `;  
  } else {
    return `
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
    `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { license, contribution, tests, ...required } = data;
  const { confirmContact, github, email } = data.contact[0];

  return `
  # ${required.title}
  ${renderLicenseBadge(license, licenseArr)}

  ## Description
  ${required.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${generateContTable(license, contribution, tests, confirmContact)}
  ## Installation
  ${required.installation}

  ## Usage
  ${required.usage}
  ${renderLicenseSection(license)}
  ${generateContribution(contribution)}
  ${generateTests(tests)}
  ${generateQuestions(confirmContact, github, email)}
`;
}

module.exports = generateMarkdown;
