import "./button.css";

const Button = ({ className, onClick, value }) => {
    return (
        <div className={className} onClick={onClick}>
            {value}
        </div>
    );
};

export default { Button };