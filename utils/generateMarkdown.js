// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = data.license;
  let chosenLicense = '';
  if (licenseType === 'MIT') {
    chosenLicense = '![MITBadge](https://img.shields.io/badge/License-MIT-blue)';
  } else if (licenseType === 'APACHE') {
    chosenLicense = '![ApacheBadge](https://img.shields.io/badge/License-APACHE-blue)';
  } else if (licenseType === 'GPL') {
    chosenLicense = '![GPLBadge](https://img.shields.io/badge/License-GPL-blue)';
  } else {
    chosenLicense = '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${data.projectTitle}

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
    ${data.license}

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
