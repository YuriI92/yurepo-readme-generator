const storeContents = (license, contribution, tests, confirmContact, github, email) => {
  let contentArr = [];
  let sectionsArr = [];
  let contentData = '';
  let sectionsData = '';

    if (license[0] !== 'None') {
      contentArr.push('- [License](#license)\n');
    }
    
    if (contribution !== '') {
      contentArr.push('- [Contributing](#contributing)\n');
      sectionsArr.push(`
## Contributing
${contribution}
      `);
    }
    
    if (tests !== '') {
      contentArr.push('- [Tests](#tests)\n');
      sectionsArr.push(`
## Tests
${tests}
      `);
    }
    
    if (confirmContact) {
      contentArr.push('- [Questions](#questions)\n');
      sectionsArr.push(`
## Questions
- GitHub Profile: https://github.com/${github}
- If you have any additional questions, please feel free to contact me by email.
  E-mail Address: <${email}>
      `);
    }
    
    for (let i = 0; i < contentArr.length; i++) {
      contentData += contentArr[i];
    }

    for (let i = 0; i < sectionsArr.length; i++) {
      sectionsData += sectionsArr[i];
    }

    return { contentData, sectionsData };
};

module.exports = { storeContents };