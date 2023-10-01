import {Link} from "react-router-dom";

function Navigation_Bar() {
    return (
        <div className="nav-container">
            <nav className="nav-bar">
                <div className="left">
                    <a href="https://www.callutheran.edu/"><img src="https://news.callutheran.edu/wp-content/uploads/sites/23/2023/01/wp-logo-1x.png" alt="CLU Logo"></img></a>
                    <h2>Club Projects and Activites</h2>
                </div>

                <ul className="right">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation_Bar;