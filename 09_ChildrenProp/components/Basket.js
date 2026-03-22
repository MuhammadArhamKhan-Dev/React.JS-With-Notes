const Basket = ({count, basketNumber, capacityReached}) => {

    return (
        <div className="apple-basket">
            <h3>{count} Apples</h3>
            <h3>Basket {basketNumber} {count===10 && "Full"}</h3>
        </div>
    )
}

export default Basket
// To solve the global scope problem in CSS
// We can use CSS Modules, which is a popular solution for scoping CSS in React applications. With CSS Modules, you can create a CSS file for each component and import it directly into the component. The styles defined in the CSS file will be scoped to that component only, preventing any global scope issues. Here's how you can implement CSS Modules in your React application:
// 1. Create a CSS file for your component, for example, `Basket.module.css`.
// 2. Define your styles in the CSS file as usual.
// 3. Import the CSS file into your component using the `import` statement, and assign it to a variable, for example, `styles`.
// 4. Use the imported styles in your component by referencing the class names defined in the CSS file, for example, `className={styles.appleBasket}`.
// This way, the styles will be scoped to the `Basket` component and won't affect any other components in your application.