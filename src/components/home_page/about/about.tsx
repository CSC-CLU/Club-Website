import FadeInUp from '../../fade_in_up';

function About() {
    return (
        <FadeInUp>
            <div className="about-page">
                <div className="about-container">

                    <h2>About Us</h2>

                    <div className="introduction">
                        <div className="card-1">
                            <img src="https://sites.callutheran.edu/tug-programs/wp-content/uploads/sites/21/2021/03/56-1.jpg" alt="Card 1"></img>
                            <p>The Computer Science Club is dedicated to creating an energetic community that creates innovative software through interactive group projects and holding educational workshops.</p>
                        </div>

                        <div className="card-2">
                            <p>"With my algorithm and software development work, I’m able to bring real-life experience in a very exciting technical field to the classroom. This engages and motivates my students, letting them know that if they work hard, there are fun and lucrative careers waiting them upon graduation."</p>
                            <iframe src="https://www.youtube.com/embed/j6ul95rxaQA" title="Card 2"></iframe>
                        </div>

                        <div className="card-3">
                            <img src="https://sites.callutheran.edu/tug-programs/wp-content/uploads/sites/21/2021/03/32-1.jpg" alt="Card 3"></img>
                            <p>"Computer Science is becoming an integral part of modern life. It is critical for current and future generations to understand what Computer Science is, how Computer Science transcends, and in what ways Computer Science betters and enriches life."</p>
                        </div>

                        <div className="card-4">
                            <p>"Putting something together and making stuff is the ultimate problem-solving puzzle experiment. It's the trial and error that's the fun part. My first programming course was with Dr. Reinhart, and he realized that I was very interested in programming."</p>
                            <iframe src="https://www.youtube.com/embed/PAxfLkRTsrw" title="Card 4"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </FadeInUp>
    );
}

export default About;