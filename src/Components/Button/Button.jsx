import "./Button.css";
export default function Button({children,link}){
    return(
        <a href={link} target="_blank" rel="noopener noreferrer" className="custom-button">
            {children}
          </a>
    )
}