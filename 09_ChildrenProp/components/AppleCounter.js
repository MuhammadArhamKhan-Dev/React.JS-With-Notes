import Button from "./Button"
import LeftArrow from "url:../assets/images/leftArrow.png"
import RightArrow from "url:../assets/images/rightArrow.png"
import "./AppleCounter.css"
import Basket from "./Basket"
import { useState } from "react"




const AppleCounter = () => {

    const totalAppleCount = 10
    console.log(useState(0))
    const [rightAppleCount, setRightAppleCount] = useState(0)
    const [leftAppleCount, setLeftAppleCount] = useState(totalAppleCount - rightAppleCount)

    const leftButtonHandler = () => {

        if (rightAppleCount > 0) {
            setRightAppleCount(rightAppleCount - 1)
            setLeftAppleCount(leftAppleCount + 1)
        }
    }

    const rightButtonHandler = () => { 

        if (leftAppleCount > 0) {
            setRightAppleCount(rightAppleCount + 1)
            setLeftAppleCount(leftAppleCount - 1)
        }
    }

    return (
        <>
            <section>
                <div className="basket-content left">
                    <Basket count={leftAppleCount} basketNumber={0}>
                    </Basket>
                    <Button buttonClickHandler={leftButtonHandler} name="leftArrow" imageUrl={LeftArrow} />
                </div>
                <div className="basket-content right">
                    <Basket count={rightAppleCount} basketNumber={1} />
                    <Button buttonClickHandler={rightButtonHandler} name="rightArrow" imageUrl={RightArrow} />
                </div>

            </section>
        </>

    )
}

export default AppleCounter