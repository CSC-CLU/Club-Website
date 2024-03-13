import FadeInUp from '../../fade_in_up';
import ProjectCardsContent from './project_cards_content';

function ProjectCards() {
    return (
        <div className="project_cards_page" id="projects">
            <FadeInUp>
                <h2>Projects</h2>
            </FadeInUp>
            <ProjectCardsContent></ProjectCardsContent>
        </div>
    );
}

export default ProjectCards;
