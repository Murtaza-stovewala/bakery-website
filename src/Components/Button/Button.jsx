import RippleButton from '@/components/lightswind/ripple-button';
import "./Button.css";
export default function Button({children,link}){
    return(
        <a href={link} className="custom-button">
            {children}
          </a>
    )
}