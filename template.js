function generateTemplate(data) {
  return `# ${data.projectTitle}
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)


#Table Of Contents 
[Description](#description)
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributers](#contributers)
[Tests](#tests)
[Issues](#issues)
[Username](#username)
[Email](#email)

  ## Description
${data.description}

## Installation
${data.installation}

## Usage 
${data.usage}

## License
${data.license}

## Contributers
${data.contributers}

## Tests
${data.tests}

## Issues 
${data.issues}


If you have any questions, please feel free to contact ${data.email}.
You can see more of my projects at [${data.github}](https://github.com/${data.usename}
`;
}

module.exports = generateTemplate;
