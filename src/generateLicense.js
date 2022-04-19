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

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string  
  const renderLicenseBadge = (license) => {
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
  
  // TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
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

  module.exports = { renderLicenseBadge, renderLicenseSection };