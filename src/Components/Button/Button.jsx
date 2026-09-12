import "./Button.css";
export default function Button({hello,children,link,OnClick}){
    return(
        <a href={link} onClick={OnClick}  rel="noopener noreferrer" className="custom-button">
            {children} {hello}
          </a>
    )
}