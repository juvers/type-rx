### Boiler plate for rxjs & typescript
---
> web-type = webpack + typescript

---
##### Steps to create

1. Create folder and initialize package.json
```
mkdir rxjs && cd rxjs
yarn init -y
```

2. Add RxJS and Typescript
```
yarn add rxjs webpack webpack-dev-server typescript ts-loader
```

3. install webpack-cli as a dev-dependency
```
yarn add webpack-cli --dev
```

4. modify package.json
> N.B. use webpack serve instead of webpack-dev-server to start script
```
{
  "name": "rxjs",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",

  // Add this

  "scripts": {
    "start": "webpack serve --mode development"
  }
```

5. Create a webpack.config.js and paste the ff:

```
const path = require('path');

module.exports = {
  entry: './src/code.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js', '.tsx' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```
> N.B.The only important part to note here is that we're defining our app's entry point to 
./src/code.ts -- this is where our code will be written. 
Notice the .ts extension, this is for TypeScript. If you didn't want to use TypeScript, you would just change this to a regular .js

6. Create tsconfig.json
> N.B. This config allows us to use es2017 JavaScript 
(es8) while compiling down to 2015 (es6).
and paste the following config settings:

```
{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "module": "es6",
    "moduleResolution": "node",
    "sourceMap": true,
    "target": "es6",
    "typeRoots": [
      "node_modules/@types"
    ],
    "lib": [
      "es2017",
      "dom"
    ]
  }
}
```
7. Create index.html as entry markup

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Title</title>

    <style>
        body { font-family: 'Arial'; background: #ececec; }
        ul { list-style-type: none; padding: 20px; }
        li { padding: 20px; background: white; margin-bottom: 5px; }
    </style>
</head>
<body>
    <ul id="output"></ul>

    <script src="/bundle.js"></script>
</body>
</html>
```
8. Create src/code.ts and add script for selector
```
function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}
```

9. yarn run start / npm run start
start app on http://localhost:8080

10. 
```
├── README.md
├── index.html
├── package.json
├── src
│   └── code.ts
├── tsconfig.json
├── webpack.config.js
└── yarn.lock
```