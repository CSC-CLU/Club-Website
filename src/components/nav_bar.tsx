import {Link} from "react-router-dom";

interface Navigation_Bar_Props {
    nav_bar_title: string;
    onNavLinkClick: (new_title: string) => void;
}

function Navigation_Bar({nav_bar_title, onNavLinkClick}: Navigation_Bar_Props) {
    return (
        <div className="nav-container">
            <nav className="nav-bar">
                <div className="left">
                    <a href="https://www.callutheran.edu/"><img src="https://news.callutheran.edu/wp-content/uploads/sites/23/2023/01/wp-logo-1x.png" alt="CLU Logo"></img></a>
                    <h2>{nav_bar_title}</h2>
                </div>

                <ul className="right">
                    <Link to="/" onClick={() => onNavLinkClick("Club Projects and Activities")}>Home</Link>
                    <Link to="/about" onClick={() => onNavLinkClick("About The Club")}>About</Link>
                    <Link to="/contact" onClick={() => onNavLinkClick("Contact The Club")}>Contact</Link>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation_Bar;