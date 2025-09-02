modules in node js
In simpler terms, modules is like {file where we keep the code so to use on next files }

Modules are not avaiable in another unless they are exported.

Modules can preserve their functions and variables.So that they cannot be accessed outside of their module unless exported.

types of modules
core modules --- fs,http,path,os

local modules - self made modules (like we made sum.js , multiply.js etc)

third party modules - express ,lodash etc

es module (ESM .mjs )vs common js module (CJS .cjs)
While using es module we need to tell node js explicitly to interpret the js files. To do so we need to specify type inside our package.json file.

Common js modules is by default in node js meaning you could run the module without specifying the type. Node js will automatically interpret it as a common js module.

Common js modules are synchronous in nature while es module can be used asynchronously also.

Es module is better in most of the cases. Es module supports strict type checking while common js does not.

Why do we need modules?

- Seperation of concerns.
- Clean code
- Readability
- Reuseability {Meaning we can use the same module in every part of our application when needed }
