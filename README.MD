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

# 05 Rendering Multiple Elements
#### One of the most important and useful thing in React.js is that you can render multiple elements in it, writing code of just one.

#### Now if you want to render multiple cards, then

### Here first create the function
```javascript
function renderCard(imgSrc, name, price, key){
    return <div className="card" key={key}>

    <img src={imgSrc} alt="iphone" />
    <b><hr /></b>
    <div className="content">
    <h2>{name}</h2>
    <h2>{price} $</h2>
    </div>
</div>
}
```
#### This function returns a div in which card properties are defined.

### Now, create a container of multiple cards just by calling the function you defined above.

```javascript
fetch('https://dummyjson.com/products/search?q=phone')
.then((res) => res.json())
.then((data) => {
    console.log(data.products)
    const container = data.products.map((products)=>{
        return renderCard(products.thumbnail, products.title, products.price, products.id)
    })
    root.render(<div className="container">{container}</div>)
    
});
```
#### If you wrote this code in HTML, you'd have written many many loc.

### Most Important:
#### You have to remember that render function only renders one element, so in order to render multiple elements you have created container as a single array and put all the elements in it.

# 06 React Component
### What is a React Component?
#### A React Component is simply a function which returns a JSX (React Element). It is used as a reusable UI Component.
Example:
```javascript
function RenderCard(props){
    const {imgSrc, name, price} = props
    
    return <div className="card">

    <img src={imgSrc} alt="iphone" />
    <b><hr /></b>
    <div className="content">
    <h2>{name}</h2>
    <h2>{price} $</h2>
    </div>
</div>
}
```
#### Now you can use it as a React Component
#### React makes the component like this behind the scenes
```javascript
root.render({
    $$typeof: Symbol.for('react.element'),
    type: RenderCard,
    ref: null,
    props:{}

})
```
#### OR Using React.createElement()
```javascript
root.render(
    React.createElement(RenderCard, { imgSrc: "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/thumbnail.webp", name: "AirPods", price: "20 $", key: 1 })
);
```
#### Using JSX
```javascript
root.render(<RenderCard imgSrc= "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/thumbnail.webp" name= "AirPods" price= "20 $" key = {1} />);
```
#### You can see [here](https://babeljs.io/repl#?config_lz=N4IgZglgNgpgdgQwLYxALhAJxgBygOgCsBnADxABoQdtiYAXY9AbWZHgDdLR6FMBzBkwwATGGAQBXKIwoACOAHt6ciDDkBGDfKUq1AfSSKARpo2UQRkdJjCJUOlWOT-kUrfT1MkmAF8AuhRs2AgAxvTcWJJw9BAo6CBS9IpICLGhIAFBIMS8ggC0AEyRYqGKmGnlxABqMJjEEIpwCYUADIUAzPlaFjgQODBQEHAwAAqYijiKxAhQCQAWYQDWmf6BOYqSmKEwACoAngMJVjaZQA&code_lz=BQHgSgpgdgJhBOBhAhvGACAlgWwOYGV4BjAXnQCIALAF2oAcBnALgHoWiYoA6GAV22wBPAFYMA9tyJjsLOvDF8i1ALQ5kuCAxbYxAI0wAbCMuREim8fEyaWyOnSMnM8OgobLsyAB7KGhgG4ILNSU_LpQyIZcAO4QunTk6BHYEGTkAILOAApuiXKY5mkATAAM6AAkiQDWEILoZADeAIwAvugsAHwAlADcQA&lineWrap=true&version=7.29.2) that the above JSX is compiled into the React.createElement()

#### In short React Component is a React Element, in which the type is a function (which returns a React Element)

# 07 Counter App
#### This is a simple counter app, which increase the count of each basket. Thing to note here is that you can make components and reuse them in your code, instead of writing the whole HTML code again.

### components/ folder contains all the components except for the main component App.js (or App.jsx).
### Button Component
```javascript
const Button = ({imageUrl, name, onClick}) => {

    return (
        <button onClick={onClick} title={name}>
            <img src={imageUrl} alt={name} />
        </button>
    )
}

export default Button
```
#### Notice how the props (arguments in object) are being passed and then are being used.

### Reuse Components
#### The Button component and other components now are being used in the AppleCounter.js (which itsel is a component)
```javascript
<>
<section>
    <div className="basket-content left">
        <Basket count={leftAppleCount} basketNumber={0} />
        <Button onClick={leftButtonHandler()} name="leftArrow" imageUrl={LeftArrow} />
    </div>
    <div className="basket-content right">
        <Basket count={rightAppleCount} basketNumber={1} />
        <Button onClick={rightButtonHandler()} name="rightArrow" imageUrl={RightArrow}/>
    </div>
    
</section>
    <p>
        <button onClick={()=>{root.render(<AppleCounter />)}}>re -render</button>
</p>
</>
```

### Notice, to change the count of each basket, the component has to be re-rendered, which in this case we are doing it, which is not a good practice, obviously if we have to do it by ourselves then what is the use of React?
### Now what is this magic thing React uses to re-render the component by itself?

# 08 States
#### In React, a state is a built-in object used to store data that can change over time and affect how a component renders. When the state changes, React automatically re-renders the component to reflect the new data.

### Use State
#### Use State is simply an array which contains 2 elements. One is the initial value, and second is the function to upadate that value. That's it!

### See the code in the Counter.js component
```javascript
import { useState } from "react"

const Counter = () => {

    const [count ,setCount] = useState(0)

    // const myStateArr = useState(0)
    // const count = myStateArr[0]
    //const setCount = myStateArr[1]
  return (
    <>
      <h1>Counter App</h1>
      <h1>{count}</h1>
      <button onClick={()=> {
        setCount(count + 1)
      }}>Count</button>
    </>
  )
}

export default Counter
```
### To understand it a basic level see the commented code.
### See, how you don't need to tell React to update the DOM, meanwhile in Vanilla JS you have to first update the variable, and then you have to update the DOM.