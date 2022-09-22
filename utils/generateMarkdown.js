// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license;
  let chosenLicense = '';
  if (licenseType === 'MIT') {
    return chosenLicense = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (licenseType === 'APACHE') {
    return chosenLicense = '![ApacheBadge](https://img.shields.io/badge/License-APACHE-blue)';
  } else if (licenseType === 'GPL') {
    return chosenLicense = '![GPLBadge](https://img.shields.io/badge/License-GPL-blue)';
  } else {
    return chosenLicense = '';
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseType = license;
  let link = '';
  if (licenseType === 'MIT') {
    return link = 'https://choosealicense.com/licenses/mit/';
  } else if (licenseType === 'APACHE') {
    return link = 'https://www.apache.org/licenses/LICENSE-2.0';
  } else if (licenseType === 'GPL') {
    return link = 'https://www.gnu.org/licenses/gpl-3.0.en.html';
  } else {
    return link = '';
  }
}

// Function to generate markdown for README with data from user input
function generateMarkdown(data) {
  return `
# ${data.projectTitle} ${renderLicenseBadge(data.license)}

## Description
${data.descr}

## Table of Contents
* Installation Instructions
* Usage Information
* License
* Contribution Guidelines
* Test Instructions
* Questions

## Installation Instructions
Follow the instructions below to install:
\`\`\`
${data.installation}
\`\`\`

## Usage Information
${data.usage}

## License
${data.license}: ${renderLicenseLink(data.license)}


## Contribution Guidelines
${data.contribution}

## Test Instructions
${data.tests}

## Questions
If there are any questions, please contact me through these options provided below:

${data.GitHub}
${data.email}
`;
}

module.exports = generateMarkdown;
