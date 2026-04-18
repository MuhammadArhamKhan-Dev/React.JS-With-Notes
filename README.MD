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

### In the below code, we are using the functional form of setState, which takes a function as an argument. This function receives the previous state (prev) and returns the new state. This is useful when the new state depends on the previous state, as it ensures that we are working with the most up-to-date state value, especially in cases where multiple state updates might be queued.

```javascript
setCount(prev => prev + 1)
```

# 09 Props VS States
## Props:
Props are received from the parent component, they are immutable and read-only. They configure child components and pass data from parent to child.

## States
They are variables, defined and managed within the states. They are mutable and can be updated by the component. They manage data that changes within the component and affects its rendering.

# 10 Children Prop
Children props are used to pass the content between the opening and closing tags of a component.

### First define the content in the Component
(Here the content is a component itself.)
```javascript
import AppleCounter from "./components/AppleCounter"
import Counter from "./components/Counter"

const App = ({root}) => {

    return (
        <>
            <Counter>
                <AppleCounter />
            </Counter>
        </>
    )
}

export default App
```
### Now to access it in the Counter.js Component
```javascript
import { useState } from "react"

const Counter = ({children}) => {

  const [count, setCount] = useState(0)

  // const myStateArr = useState(0)
  // const count = myStateArr[0]
  //const setCount = myStateArr[1]
  return (
    <>
      <h1>Counter App</h1>
      <h1>{count}</h1>
      <button onClick={() => {
        // setCount(count + 1)
        setCount(prev => prev + 1)
        
      }}>Count</button>
      {children}
    </>
  )
}

export default Counter
```
# 11 Scope CSS to a particular Component
## Problem with normal css file in React
All styles defined in a normal CSS file are global, which means they can affect any component in the application. This can lead to unintended side effects and make it difficult to maintain and debug styles.
## How to solve this?
We can use CSS Modules, which is a popular solution for scoping CSS in React applications. With CSS Modules, you can create a CSS file for each component and import it directly into the component. The styles defined in the CSS file will be scoped to that component only, preventing any global scope issues. Here's how you can implement CSS Modules in your React application:

Create a CSS file for your component, for example, `Basket.module.css`.

Define your styles in the CSS file as usual.

Import the CSS file into your component using the `import` statement, and assign it to a variable, for example, `styles`.

Use the imported styles in your component by referencing the class names defined in the CSS file, for example, `className={styles.appleBasket}`.

This way, the styles will be scoped to the `Basket` component and won't affect any other.

# 12 useEffect Hook

#### Consider the following code
```javascript
fetch("https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital")
    .then((res)=>res.json())
    .then((data)=>{
        setCountriesData(data)
    })
```
#### here `setCountriesData`is a setState function, now every time setState Function is called, the whole component re-renders, and that's where the performance gets downgrade. Fetch is being called on every re-render.

### How to fix?
### Option 1: Use If
```javascript
if(countriesData.length === 0){

    fetch("https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital")
    .then((res)=>res.json())
    .then((data)=>{
        setCountriesData(data)
    })
}
```
#### Now, this actually upgrades the performance but, nobody writes this logic in this way.
#### Why? Suppose you have to set the `countriesData` length to 0 in any other case, then what you'd do?

### Option2: Only call fetch() the first time component gets re-rendered.
### Another way of saying this is: useEffect

```javascript
useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital")
            .then((res) => res.json())
            .then((data) => {
                setCountriesData(data)
            })
    }, [])
```
### Explanation: the whole code runs only
#### 1: When the component first gets rendered
#### 2: When the dependency is changed.
### Dependency: `[]` (in the last of useEffect)
#### right now the dependency array is empty, meaning, the whole fetch() code will run first time when the component get rendered, and then it won't run because there is no dependency there.
```javascript
useEffect(()=>{
    console.log("hi")

    return() => {
        console.log("cleanup function")
    }
}, [count])
```
#### in the above code, console.log() runs when the component gets rendered first time and every time the count variable is changed.

#### the last callback function is called when the component gets unmount, removed from the page (concept in routing.)
# 13 Routing in React
React.js works on single page application. Now, obviously, there is a very low chance that your application is of single page. You'd have Contact Us, About Us page and etc. To solve this problem `React Router` comes in play.
## Set up a Basic Router
`npm i react-router-dom`

`index.jsx`
```javascript
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/contact",
        element: <Contact />
    }
])
root.render(<RouterProvider router={router} />)
```
With the above code, you have set up a basic router which routes you to the `App` component on `/` path and, to the `Contact` component on `/contact` path.

## Displaying same Component Again
If a component is being used in almost every page, for e.g. `Header.jsx` so, one way to display it that you use it inside the fragment in `RouterProvider`.
```javascript
root.render(<>
    <Header />
    <RouterProvider router={router} />
    </>
)
```
But, this isn't the good practice.
To do this, `<Outlet />` is used.
The Outlet component in React Router is a powerful tool for rendering nested routes. It acts as a placeholder in the parent route's component, where the child routes will be rendered. If no child route matches, it renders nothing.

Now, all the code is cut from the `<App />` component to a new component `<Home />`.

`App.jsx`
```javascript
import { useState } from "react"
import { Outlet } from "react-router"
import Header from "./components/Header"

const App = () => {

    const [query, setQuery] = useState('')

    const handleSearch = (e) => {
        setQuery(e.target.value.toLowerCase())
    }

    return (
        <>
            <Header />
            <Outlet />
        </>
    )

}

export default App
```
This code means that when the `<App />` component is rendered, `<Header />` component will be rendered and, all the matching child routes will also be renderd.

`index.jsx`
```javascript
import { createRoot } from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router'
import Contact from './components/Contact';
import Home from './components/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    },
])

const root = createRoot(document.querySelector("#root"))

root.render(<>
    <RouterProvider router={router} />
</>)
```
Now, the children contains `<Home />` on path `/` and `<Contact />` on path `/contact`.
## Error page
You can also create your own custom error page.

`Error.jsx`
```javascript
import { useRouteError } from "react-router"

const Error = () => {
    const error = useRouteError()
  return (
    <>
      <h1>Oops...Something Went Wrong {error.status}</h1>
    </>
  )
}

export default Error
```
Now, use this in `index.jsx`
```javascript
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    },
])
```
## Link in React
To avoid loading page, when going from one page to another, Use `Link` tag by `react-router`. It uses the DOM History API to update the URL and manage the history stack.
Just replace the `a` tag with `Link` tag.
## Dynamic Routing
`www.some-domain.com/country?name=Pakistan`
This URL is fine, but good practice is that for every country name there should exist a new page like
`www.some-domain.com/Pakistan`
`www.some-domain.com/Iran`
This is called `Dynamic Routing`.
### How to do this?
First you have to declare the `country` path dynamic in `index.jsx`
```javascript
{
    path: "/:country",
    element: <CountryDetail />
}
```
in `CountryDetail.jsx`
```javascript
const params = useParams()
const countryName = params.country
```
in `CountryCard.jsx`

change the url to this
```javascript
<Link to={`/${name}`}>
```
# 14 Lifting State Up
In React, “lifting state up” means moving state from child components into their closest common parent so that multiple children can share and synchronize the same data. Instead of duplicating state in each child, the parent holds it and passes it down via props.

### Example:
Imagine you have two components:

`TemperatureInput` (lets user type Celsius or Fahrenheit)

`BoilingVerdict` (shows if water would boil at that temperature)

If each component managed its own state, they wouldn’t stay in sync. Instead:
```javascript
function Calculator() {
  const [temperature, setTemperature] = useState('');

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={temperature}
        onTemperatureChange={setTemperature}
      />
      <BoilingVerdict temperature={temperature} />
    </div>
  );
}
```
`Parent (Calculator)` holds the state.

`Children (TemperatureInput, BoilingVerdict)` receive state and update functions via props.

Now both components always reflect the same temperature value.

# 15 Context API
### Problem (Prop Driling):
If a prop is passed between parent to its child to its child and so on... This is called Prop Driling. To avoid this `Context API` is used.

### 1. Create a Context API
```javascript
import { createContext } from "react";

export const ThemeContext = createContext()
```
### 2. Wrap it using Provider
```javascript
return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
        <Header />
        <Outlet />
    </ThemeContext.Provider>
)
```
now, all of the Components is wrapped inside the `ThemeContext`. All of them now directly use the value which is wrapped using the `ThemeContext`.

### 3. Use it
`Home.jsx`
```javascript
const [isDark] = useContext(ThemeContext)
```
see, how the `OutletContext` is now removed.

# 16 Custom Hooks
Hooks are nothing but functions, provides reusable codes. If you want to use a functionality again and again, better way is to create a hook which performs that functionality and use that hook again & again instead of writing the whole code again.

### Create a custom hook
In this example a `useTheme` hook returns the `isDark` and `setIsDark` state variables, from the `ThemeContext`.

`useTheme.js`
```javascript
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export function useTheme() {
    
    return useContext(ThemeContext)
}
```
now If you want to access `isDark` or `setIsDark` instead of calling the `useContext(useTheme)` you just call this `useTheme.js` hook.

`Home.jsx`
```javascript
import { useState } from "react"
import { useTheme } from "../hooks/useTheme"
const Home = () => {

    const [query, setQuery] = useState('')
    const [isDark] = useTheme()
```