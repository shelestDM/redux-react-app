const Button = (props) => {
    return (
        <button
            onClick={props.clickHandler}
            className="bg-green-400 rounded-xl py-3 px-5 text-white font-bold"
            id={props.id}
            type={props.type}
        >
            {props.title}
        </button>
    );
}

export default Button;