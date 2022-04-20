const { renderLicenseBadge, renderLicenseSection } = require('../src/generateLicense');
const { storeContents } = require('../src/generateContents');

const generateContTable = contentData => {
  return contentData;
};

const generateOtherSections = sectionsData => {
  return sectionsData;
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  const { license, contribution, tests, ...required } = data;
  const { confirmContact, github, email } = data.contact[0];
  const { contentData, sectionsData } = storeContents(license, contribution, tests, confirmContact, github, email);

  return `
# ${required.title}
${renderLicenseBadge(license)}

## Description
${required.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${generateContTable(contentData)}
## Installation
${required.installation}

## Usage
${required.usage}
${renderLicenseSection(license)}
${generateOtherSections(sectionsData)}
  `;
};

module.exports = generateMarkdown;
