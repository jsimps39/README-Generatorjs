// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![GitHub license](https://img.shields.io/badge/license-${license})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `[${license}](https://opensource.org/licenses/${license})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `[${renderLicenseBadge(license)}](https://opensource.org/licenses/${license})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ${renderLicenseSection(data.license)}

  ## Description
  
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  
  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License
  
  This project is licensed under the ${renderLicenseLink(data.license)} license.

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.test}
  
  ## Questions

  If you have any questions about the repo open an
  issue or contact me directly at ${data.email}
  You can find more of my work at [workname] (https://github.com/${data.github}/).



`;
}

module.exports = generateMarkdown;
