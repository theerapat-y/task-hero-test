# Innovation NodeJS shared setting

## !REMEMBER update your nodejs verion to v4.0.0

Which ES6 features ship with Node.js by default (no runtime flag required)
[Here](https://nodejs.org/en/docs/es6/)

Check out what are new things coming 

`node --v8-options | grep "in progress"` (11/9/2015)

  	--harmony_modules (enable "harmony modules" (in progress))
  	--harmony_array_includes (enable "harmony Array.prototype.includes" (in progress))
  	--harmony_regexps (enable "harmony regular expression extensions" (in progress))
  	--harmony_proxies (enable "harmony proxies" (in progress))
  	--harmony_sloppy (enable "harmony features in sloppy mode" (in progress))
  	--harmony_unicode_regexps (enable "harmony unicode regexps" (in progress))
  	--harmony_reflect (enable "harmony Reflect API" (in progress))
  	--harmony_destructuring (enable "harmony destructuring" (in progress))
  	--harmony_sharedarraybuffer (enable "harmony sharedarraybuffer" (in progress))
  	--harmony_atomics (enable "harmony atomics" (in progress))
  	--harmony_new_target (enable "harmony new.target" (in progress))
  	
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
