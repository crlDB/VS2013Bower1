# BOWER & VS213

### install chocolatey
https://chocolatey.org/


### install node.js  
Node.js is runtime environment for server-side applications.  Node.js applications are written in javascript and run in node.js runtime.

check `nodejs` already installed
```
> node --version  
```
install `nodejs`  
```
> choco nodejs  
```
upgrade `nodejs`  
```
> choco upgrade nodejs
```

### install npm
Npm is a package manager for javascript, is the default for node.js, after installing node.js, the npm as already installed.

check `npm` already installed
```
> npm --version  
```
install `npm`  
```
> choco nodejs  
```
upgrade `nodejs`  
```
> choco upgrade nodejs
```

### install bower
check `bower` already installed
```
> bower --version  
```
install `bower`  
```
> npm install -g bower
```




create project web-project

### delete current packages
1. open de package manager console
2. uninstall-package respond
3. uninstall-package Modernizr
4. uninstall-package Microsoft.jQuery.Unobtrusive.Validation
5. uninstall-package jQuery.Validation
6. uninstall-package jQuery
7. uninstall-package bootstrap


### install bower
1. open `manage nuget packages`
2. online / search for bower
3. install `bower`  
![alt text](Images/bower1.png?raw=true "add cpu")


### init bower
1. open `command prompt` as administrator
2. select directory `scripts`
3. `bower init`, accept all default values
4. file `bower.json` is created in folder `scripts`
5. in solution explorer add existing item `bower.json`
```
    {
      "name": "Scripts",
      "version": "0.0.0",
      "license": "MIT",
      "ignore": [
        "**/.*",
        "node_modules",
        "bower_components",
        "test",
        "tests"
      ]
    }
```

### add .bowerrc
1. in folder `scripts` add file `.bowerrc`
