function Footer() {
    return (
        <div className="footer-container">
            <footer className="footer">
                <div className="columns">
                    <div className="col-1">
                        <img src="https://www.callutheran.edu/_resources/img/logos/stacked-reverse.svg"></img>
                        <address>
                            60 W. Olsen Road
                            <br></br>
                            Thousand Oaks, CA 91360
                        </address>
                        <p className="phone-number">(805) 492-2411</p>
                        <div className="apply-button">
                            <a href="https://www.callutheran.edu/admission/apply.html">APPLY ONLINE</a>
                        </div>
                        <div className="campus-buttons">
                            <a href="https://www.callutheran.edu/tour/">VIRTUAL TOUR</a>
                            <a href="https://www.callutheran.edu/admission/visit.html">VISIT CAMPUS</a>
                        </div>
                        <a href="https://www.callutheran.edu/about/campus-locations.html" className="campus-locations">View all campus locations</a>
                        <ul className="social-medias">
                            <li><a href="https://www.facebook.com/callutheran" className="facebook"></a></li>
                            <li><a href="https://twitter.com/callutheran" className="twitter"></a></li>
                            <li><a href="https://www.instagram.com/callutheran/" className="instagram"></a></li>
                            <li><a href="https://www.linkedin.com/school/california-lutheran-university/" className="linkedin"></a></li>
                            <li><a href="https://www.youtube.com/user/callutheran" className="youtube"></a></li>
                            <li><a href="https://www.tiktok.com/@callutheran" className="tiktok"></a></li>
                        </ul>
                    </div>

                    <div className="col-2">
                        <h5>Student Services</h5>
                        <ul>
                            <li><a href="https://www.callutheran.edu/students/academic-services/">Academic Services & Registrar</a></li>
                            <li><a href="https://www.callutheran.edu/students/academic-services/calendars/">Academic Calendars</a></li>
                            <li><a href="https://www.callutheran.edu/offices/campus-safety/">Campus Safety</a></li>
                            <li><a href="https://www.bkstr.com/californialutheranstore/home">Campus Store</a></li>
                            <li><a href="https://www.callutheran.edu/students/student-accounts/">Student Accounts & Billing</a></li>
                            <li><a href="https://www.callutheran.edu/its/">Technology Support</a></li>
                            <li><a href="https://www.callutheran.edu/veterans/">Veteran Resources</a></li>
                        </ul>
                    </div>

                    <div className="col-3">
                        <h5>Explore Cal Lutheran</h5>
                        <ul>
                            <li><a href="https://www.callutheran.edu/map/">Maps & Parking</a></li>
                            <li><a href="https://www.callutheran.edu/directory/">A-Z Directory</a></li>
                            <li><a href="https://www.callutheran.edu/faculty/">Faculty Directory</a></li>
                            <li><a href="https://www.callutheran.edu/calendar/">Arts & Events</a></li>
                            <li><a href="https://news.callutheran.edu/">News & Stories</a></li>
                            <li><a href="https://news.callutheran.edu/clu-magazine/">CLU Magazine</a></li>
                            <li><a href="https://careers.callutheran.edu/?utm_source=callutheran.edu&utm_medium=referral&utm_campaign=callutheran.edu">Careers & Employment</a></li>
                        </ul>
                    </div>

                    <div className="col-4">
                        <h5>Information For</h5>
                        <ul>
                            <li><a href="https://www.callutheran.edu/students/health-services/covid-19.html">COVID-19</a></li>
                            <li><a href="https://www.callutheran.edu/alumni/">Alumni</a></li>
                            <li><a href="https://www.callutheran.edu/parents-families/">Parents & Families</a></li>
                            <li><a href="https://www.callutheran.edu/community-business/">Community & Business</a></li>
                            <li><a href="https://www.callutheran.edu/students/career-services/employers/">Employers</a></li>
                            <li><a href="https://news.callutheran.edu/for-the-media/">News Media</a></li>
                        </ul>
                    </div>
                </div>

                <div className="bottom-row">
                    <ul>
                        <p className="copyright">© 2023 California Lutheran University</p>
                        <li><a href="https://www.callutheran.edu/directory/contact.html">Contact Info</a></li>
                        <li><a href="https://www.callutheran.edu/about/accessibility.html">Accessibility</a></li>
                        <li><a href="https://www.callutheran.edu/emergency/">Emergency</a></li>
                        <li><a href="https://www.callutheran.edu/title-ix/">Title IX</a></li>
                        <li><a href="https://www.callutheran.edu/incident-reporting/">Report an Incident</a></li>
                        <li><a href="https://www.callutheran.edu/diversity/about/policies.html">Nondiscriminatory Policy</a></li>
                        <li><a href="https://www.callutheran.edu/about/privacy.html">Terms of Use</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Footer;