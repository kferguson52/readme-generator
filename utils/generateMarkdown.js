// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // if(data.license === "MIT"){
  //   return `
  //   ${"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"}
  //   `;
  // } else if (data.license === "ISC"){
  //   return `
  //   ${"[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"}
  //   `;
  // }else if (data.license === "zLib License"){
  //   return `
  //   ${"[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)"}
  //   `;} else{
  //     return "";
  //   }
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README

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
