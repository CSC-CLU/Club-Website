function Navigation_Bar() {
    return <div className="nav-container">
        <nav className="nav-bar">
            <div className="left">
                <a href="https://www.callutheran.edu/"><img src="https://news.callutheran.edu/wp-content/uploads/sites/23/2023/01/wp-logo-1x.png" alt="CLU Logo"></img></a>
                <h2>Club Projects and Activites</h2>
            </div>

            <ul className="right">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </div>;
}

export default Navigation_Bar;