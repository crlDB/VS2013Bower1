# BOWER & VS213

create project wrb-project

### delete current packages
1. open de package manager console
2. uninstall-package respond
3. uninstall-package Modernizr
4. uninstall-package Microsoft.jQuery.Unobtrusive.Validation
5. uninstall-package jQuery.Validation
6. uninstall-package jQuery
7. uninstall-package bootstrap

Bower need `git`, `npm`, `nodejs`

> check if 'git' is installed
```
git --version
```

> check if 'npm' is installed
```
npm -v
```

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
