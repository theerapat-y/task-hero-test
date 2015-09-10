# Innovation NodeJS shared setting

## !REMEMBER update your nodejs verion to v4.0.0


### How to run project

1. Start server with lint and jscs (auto code formating)
    
    **Run `Gulp start-dev`**
2. Start server in production mode
    
    **Run `npm start`**
    
3. Start interactive test
  
    **Run `npm test`**
    
#### Gulp tasks
1. lint : Run jshint against the code.
2. jscs : Run JSCS to format the code automatically
3. code-quality = Group of task (lint and jscs)
4. bower : Run to copy dist file to the `public`
5. start-dev = **Recommend to run while developing.**
6. default = Use fro build production release version.

### Test frameworks

1. [Mochajs](https://mochajs.org/) : Test executor and framework
2. [Supertest](https://github.com/visionmedia/supertest) : Testing HTTP server agent and testing api level.


### Code convention

[JSCS](http://jscs.info/) is a code style linter for programmatically enforcing your style guide. See style config at `.jscsrc` file.

[JSHint](http://jshint.com/docs/) is a code quality tool which helps to flags suspicious line of code againsting rules. See rule config in `.jshintrc` file.

#### JSHint plugin for editor.
[jshint with Sublime](https://github.com/Kronuz/SublimeLinter)

[jshint with Atom](https://github.com/AtomLinter/linter-jshint)

[jshint with Emacs](https://github.com/daleharvey/jshint-mode)


## Hosting and Deployment tools

##### Github repository

##### Heroku Nodejs Platform

##### deploybot.com
