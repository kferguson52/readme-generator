// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  // [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
  // [![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (data.license != null){
   license = data.license;
   ui.log.write(license);
  } else {
    return license = "";
  }
}

// TODO: Create a function to generate markdown for README

// ## ${data.title}
// ## ${data.description}
// ## ${data.username}
function generateMarkdown(data) {
  return `
  # ${data.title + " Project"}
  ## ${"Description"}
     ${data.description}
  ## ${"Installation"}
     ${data.installation}
  ## ${"Usage"}
     ${data.usage}
  ## ${"Contributing"}
     ${data.contribution}
  ## ${"Tests"}
    ${data.test}
  ## ${"Questions"}
    ${"For any questions please contact me at https://github.com/" + data.username}
  ## ${"License"}
    ${"This package is covered under the " + data.license}
`;
}

module.exports = generateMarkdown;
