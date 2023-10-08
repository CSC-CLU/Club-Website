import Header from '../components/about_page/header'
import Introduction from '../components/about_page/introduction';
import Content from "../components/about_page/content";

function About() {
    return (
        <div className="about-page">
            <Header></Header>
            <Introduction></Introduction>
            <Content></Content>
        </div>
    );
}

export default About;