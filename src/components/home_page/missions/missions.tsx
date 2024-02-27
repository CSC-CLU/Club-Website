import FadeInUp from "../../fade_in_up";

function Missions() {
    return (
        <FadeInUp>
            <div className="missions-page">
                <div className="mission-cards">
                    <h2>Our Mission</h2>

                    <div className="card">
                        <div className="title-container">
                            <h3>Connectivity</h3>
                        </div>
                        <p>At the heart of the club's ethos is the promotion of connectivity among computer science enthusiasts. Serving as a hub for networking, the club provides a welcoming space where like-minded students can come together, exchange ideas, and build lasting connections. Beyond the realm of code, the club has a tradition of hosting social events, including the legendary pizza parties, creating an environment where members can forge friendships that extend beyond the lines of code. Through these initiatives, the club aims to strengthen the sense of community among computer science students.</p>
                    </div>

                    <div className="card">
                        <div className="title-container">
                            <h3>Educate and Prepare</h3>
                        </div>
                        <p>The club is dedicated to the mission of educating and preparing its members for the dynamic field of computer science. Through a series of engaging workshops, ranging from cutting-edge technology and programming sessions to career-centric resume workshops, the club ensures that its members are well-equipped with the skills and knowledge necessary for success in the ever-evolving tech industry. By fostering a culture of continuous learning, the club aims to empower its members to confidently tackle challenges and excel in their professional pursuits.</p>
                    </div>

                    <div className="card">
                        <div className="title-container">
                            <h3>Develop</h3>
                        </div>
                            <p>Enabling members to transform theoretical knowledge into practical skills, the club's mission is to facilitate the development of projects that showcase the creative and innovative capacities of its members. By providing resources and fostering collaborative projects, often involving multiple members, the club nurtures an environment where individuals can contribute their unique skills to a collective endeavor. Through this emphasis on development, the club not only supports individual growth but also promotes a culture of teamwork, ensuring that members gain valuable experience in working on real-world projects in the collaborative spirit of the tech industry.</p>
                    </div>
                </div>
            </div>
        </FadeInUp>
    );
}

export default Missions;