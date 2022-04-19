const { renderLicenseBadge, renderLicenseSection } = require('../src/generateLicense');
const { storeContents, contentData, sectionsData } = require('../src/generateContents');

const generateContTable = () => {
  return contentData;
};

const generateOtherSections = () => {
  return sectionsData;
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  const { license, contribution, tests, ...required } = data;
  const { confirmContact, github, email } = data.contact[0];
  console.log(confirmContact);
  storeContents(license, contribution, tests, confirmContact, github, email);

  return `
# ${required.title}
${renderLicenseBadge(license)}

## Description
${required.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${generateContTable()}
## Installation
${required.installation}

## Usage
${required.usage}
${renderLicenseSection(license)}
${generateOtherSections()}
  `;
};

module.exports = generateMarkdown;
