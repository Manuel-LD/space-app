import { Link } from "react-router-dom"
import "./Navbar.css"

function NavButton({href, text}){
    return(
        <Link className="nav-btn" to={href}>
            {text}
        </Link>
    );
}

function Navbar({links}){
    const title = "space-app";

    /*const headerStyles = {
        fontSize: "3.5rem",
        margin: "2px",
        background: "-webkit-linear-gradient(#024caa, #ec8305)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
    }*/

    return (
        <nav className="navbar" /*style={{ position: "fixed", top: 0, width: "100vh"}}*/>
            <div className="div-nav">
                <h1>{title}</h1>
            </div>
            <div className="div-nav">
            {links.map((link, idx)  => (
                    <NavButton href={link.href} text={link.text} key={idx} />
                ))}
            </div>
        </nav>
    );
}

export default Navbar;