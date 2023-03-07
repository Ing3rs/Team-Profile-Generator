# Team Profile Generator

## Description
My task was to produce a Node.js command-line application which will take in information about employees on a software engineering team, then generate an HTML webpage that displays summaries for each person. 

I was also presented with a series of failed tests, which I was required to ensure run successfully.


## Table of contents

* [Installation](#Installation)
* [Usage](#Usage)
* [Next steps](#Next-steps)
* [Notes](#Notes)
* [License](#License)


## Installation

To install this application, open the command line and run 'npm install' to install the following dependencies: 

* jest
* inquirer
* fs


## Usage

Once installed, the application can be invoked by using the following command:

```bash
node index.js
```

Answer each prompt and when completed an HTML file titled 'team.html' will be automatically generated in the output file using your input.

Styling will also be applied, which is conveniently stored in the same output folder, under css. If you do not require styling, or want to add your own, simply delete this file.

Once generated, the page will look similar to the below: 

![screenshot](https://github.com/Ing3rs/Team-Profile-Generator/blob/main/assets/team-profile-screenshot.png)


## Next steps

In future, I would like to: 
* add validation for fields, such as email, to ensure they are in the proper format
* improve the application so that it runs directly in the broswer
* create styling options for users to choose from before generating the file (i.e. dark/light versions, colour specific themes based on company colours etc.)

## Notes

Thank you to lospec.com for the wonderful colour palettes:
* https://lospec.com/palette-list/cyber-ping-pong
* https://lospec.com/palette-list/twilight-5


## Licence

![License](https://img.shields.io/badge/License-MIT-yellow.svg)

Copyright (c) ing3rs. All rights reserved.

Licensed under the [MIT](https://github.com/Ing3rs/Team-Profile-Generator/blob/main/LICENSE) license.
