// Function that returns a license badge based on the license passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
    switch (license) {
      case 'MIT':
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      case 'APACHE 2.0':
        return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      case 'GPL 3.0':
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      case 'BSD 3':
        return '[![License: BSD 3](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      default:
        return '';
    }
  };
  // Function that returns the license link
  // If there is no license, returns an empty string
  function renderLicenseLink(license) {
    switch (license) {
      case 'MIT':
        return '[License: MIT](https://opensource.org/licenses/MIT)';
      case 'APACHE 2.0':
        return '[License: Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
      case 'GPL 3.0':
        return '[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)';
      case 'BSD 3':
        return '[License: BSD 3](https://opensource.org/licenses/BSD-3-Clause)';
      default:
        return '';
    }
  };
  // Function that returns the license section of README
  // If there is no license, returns an empty string
  function renderLicenseSection(license) {
    if (license && license !== 'None') {
      return `This project is licensed under the ${renderLicenseLink(license)}.`;
    }
    return '';
  };
  // Function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For questions about the project, please contact [@${data.github}](https://github.com/${data.github}) or ${data.email}.
  `;
  };
  module.exports = generateMarkdown;