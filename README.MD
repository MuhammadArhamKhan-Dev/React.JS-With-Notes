# React.js Notes

# 01_React_Element

React.js is nothing but a Javascript library or some call it a framework (and why not because it is nothing less than a framework), you can create an HTML element using it.

### In Js creating & appending an element is lengthy
```javascript
const newParagraph = document.createElement("p");

        // Step 2: Add text content
        newParagraph.textContent = "Hello! I was created using JavaScript.";

        // Step 3: Optionally add attributes or styles
        newParagraph.style.color = "blue";
        newParagraph.setAttribute("id", "myParagraph");

        // Step 4: Append the element to an existing element in the DOM
        document.getElementById("container").appendChild(newParagraph);
```

### Now compare it with React.js

first create a container named "root", and then
```javascript
const h2 = React.createElement('h2', {className : "subheading", id : "subtitle"}, "Hello React")

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(h2)
```
That's it!

### React Element is simply a Javascript object, and a very simple one at that.
```javascript
{
        $$typeof: Symbol.for("react.element"),
        type: "h2",
        ref: null,
        props:{
                children: "Hello React",
    }
}
```
That's it. Here Key is optional, if you are using elements wihout siblings.

# 02_JSX_And_Babel

### JSX (Javascript XML) allows us to write HTML in React.
You might've noticed in the previous code that writing HTML without JSX even in React is lengthy and difficult.
So to solve this problem, JSX is used.
```javascript
const user = "Muhammad"

const h2 = <h2>Hello <b>{user}</b></h2>

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(h2)
```
See, how short and efficient the code becomes.

### Babel is simply a bridge between JSX and the browser.
To render this JSX code you need to have Babel as a compiler, otherwise the code won't be run.
### How to install Babel?
### 01 Create package.json
```bash
npm init -y
```
### 02 Install npm modules
```bash
npm install --save-dev @babel/core @babel/cli @babel/preset-react
```
### 03 In package.json under "scripts" add this
#### replace src with your script.js destination
```bash
"build": "babel src -d lib"
```

### 04 Create .babelrc file and write this
```bash
{
  "presets": ["@babel/preset-react"]
}
```
### 05 Finally run
```bash
npm run build
```
# 03_SourceMaps

### What are Source Maps?
When you run
```bash
npm run build
```
And if you see your script.js code in browser, it wont't show you "your code" instead, it'll show you the lib/script.js, when is different from your code.
So if you don't see your code in the browser how will you debug it?
And that's where Source Maps come.
When you run your npm run build using source maps, request is sent to lib/script.js, which then sends the request to script.js.map, and then the script.js.map file sends the browser "your code" in script.js file.

So in simple words, by using source maps you can see and hence debug your own written code in script.js in browser.

### How to use them?
### Option 1
Just add this in package.json under scripts
(remember you should provide your destination of script.js file in this)
```bash
"build": "babel ./script.js -d lib --source-maps"
```
### Option 2
in .babelrc after presets write
```bash
"sourceMaps": true
```
you should run npm run build after this OR see the Tip.
### Tip
To avoid typing npm run build everytime after making changes in the code, 
add this --watch at the end in build
```bash
"build": "babel ./script.js -d lib --source-maps --watch"
```
# 04 Bundlers (Parcel)

#### Node modules are not for browser, browser doesn't run these modules. Now when you install react and react dom, you can't yet use react code on browser, yes they are on your node_modules folders, but you can't use react code from it.
So to solve this problem, Bundlers are used, in this case Parcel.
```bash
npm init -y
npm i react react-dom
npm i parcel -D
```
Now, Parcel itself uses Babel behind the scenes, but now you don't have to explicitly install Babel and/ or want to configure source maps, just have to install Parcel and it just bundles all the files for you to use React and use source maps, hence the name.

#### Because of source maps if you debug your code in browser you see your written code, but if you disable source map you'll see Parcel's .js file (in dist folder) your code (in this case -6 loc) is transformed into almost 20000 loc, which in this case is the entire app.
So you see the browser isn't rendering your script.js file instead it renders the Parcel's .js file and the reason you see your code in browser instead of Parcel's it because of source map.