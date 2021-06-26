function generateTemplate(data) {
  return `# ${data.projectTitle}
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
[![License: GPL v3](https://img.shields.io/badge/License-${data.license}-blue.svg)]
[![License: MIT](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/MIT)
[![License](https://img.shields.io/badge/License-${data.license}--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
[![License: IPL 1.0](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/IPL-1.0)






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
