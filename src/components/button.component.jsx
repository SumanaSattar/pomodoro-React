const Button = ({title,activeClass,clickHandle}) => {
    return ( 
        <div>
            <button className={activeClass} onClick={clickHandle}>{title}</button>
        </div>
     );
}
 
export default Button;