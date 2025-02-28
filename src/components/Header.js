import '../styles/main.css';
import { Link } from 'react-router-dom';

export function Header(){
    return(
        <div className="header">
        <div className="logo">Logo</div>
        <div className="menu">
        <Link to="/" className="link">Home</Link>
        <Link to="about-us" className="link">About Us</Link>
        </div>
        </div>
    )
}