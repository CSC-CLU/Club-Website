import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Navigation_Bar_Props {
    nav_bar_title: string;
    onNavLinkClick: (new_title: string) => void;
}

function Navigation_Bar({nav_bar_title, onNavLinkClick}: Navigation_Bar_Props)  {
    const [scrollToId, setScrollToId] = useState<string | null>(null);

    useEffect(() => {
        if (scrollToId) {
            const element = document.getElementById(scrollToId);
            if (element) {
                const navbarHeight = document.querySelector('.nav-bar')?.clientHeight || 0;
                const computedStyles = window.getComputedStyle(element);
                const paddingTop = parseInt(computedStyles.paddingTop, 10) || 0;
                const scrollOffset = paddingTop + (navbarHeight / 3); // Add additional offset if needed
                const scrollToPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight - scrollOffset;
                window.scrollTo({
                    top: scrollToPosition,
                    behavior: 'smooth'
                });
            }
        }
    }, [scrollToId]);

    return (
        <div className="nav-container">
            <nav className="nav-bar">
                <div className="left">
                    <a href="https://www.callutheran.edu/">
                        <img src="https://news.callutheran.edu/wp-content/uploads/sites/23/2023/01/wp-logo-1x.png" alt="CLU Logo" />
                    </a>
                    <h2>{nav_bar_title}</h2>
                </div>

                <ul className="right">
                    <Link to="/" onClick={() => { onNavLinkClick("CLU CS Club"); setScrollToId('home'); }}>Home</Link>
                    <Link to="/" onClick={() => { onNavLinkClick("CLU CS Club"); setScrollToId('about'); }}>About</Link>
                    <Link to="/" onClick={() => { onNavLinkClick("CLU CS Club"); setScrollToId('missions'); }}>Mission</Link>
                    <Link to="/" onClick={() => { onNavLinkClick("CLU CS Club"); setScrollToId('board'); }}>Officers</Link>
                    <Link to="/" onClick={() => { onNavLinkClick("CLU CS Club"); setScrollToId('projects'); }}>Projects</Link>
                    <Link to="/" onClick={() => { onNavLinkClick("CLU CS Club"); setScrollToId('contact'); }}>Contact</Link>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation_Bar;