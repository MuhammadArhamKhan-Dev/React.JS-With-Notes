const Button = ({imageUrl, name, onClick}) => {

    return (
        <button onClick={onClick} title={name}>
            <img src={imageUrl} alt={name} />
        </button>
    )
}

export default Button