const Button = ({imageUrl, name, buttonClickHandler}) => {

    return (
        <button onClick={buttonClickHandler} title={name}>
            <img src={imageUrl} alt={name} />
        </button>
    )
}

export default Button