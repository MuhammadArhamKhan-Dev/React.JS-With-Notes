// const h2 = React.createElement('h2', {className : "subheading", id : "subtitle"}, "Hello React")


// root.render(h2)

// OR (METHOD 2)
// React Element is simply an object and a very simple one at that


// root.render({
    //     $$typeof: Symbol.for("react.element"),
    //     type: "h2",
    //     ref: null,
    //     props:{
        //         children: "Hello React",
//     }
// })

const container = React.createElement("div", {className: "container", id: "container"}, "React.JS", [

    React.createElement('section', {},
        
        React.createElement('p', {}, "The library for web and native user interfaces."),
    ),
])

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(container)