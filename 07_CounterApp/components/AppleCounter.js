import Button from "./Button"
import LeftArrow from "url:../assets/images/leftArrow.png"
import RightArrow from "url:../assets/images/rightArrow.png"
import "./AppleCounter.css"
import Basket from "./Basket"
import {createRoot} from "react-dom/client"


const root = createRoot(document.querySelector("#root"))


    const totalAppleCount = 10
    let rightAppleCount = 0
    let leftAppleCount = totalAppleCount - rightAppleCount



const AppleCounter = () => {

        const leftButtonHandler = () => {

            if(leftAppleCount > 0){
                leftAppleCount ++
                rightAppleCount --
            }
    }

    const rightButtonHandler = () => {

            if(rightAppleCount < totalAppleCount){
                leftAppleCount --
                rightAppleCount ++
            }
    }

    return (
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
        
    )
}

export default AppleCounter