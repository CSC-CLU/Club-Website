import { Link } from 'react-router-dom';
import FadeInUp from '../../fade_in_up';
import ProjectsContent from '../../../../content/projects_content';

function ProjectCardsContent() {
    let contentList: any[] = [];

    for (let i = 0; i < ProjectsContent.length; i++) {
        const path: string = "/" + ProjectsContent[i][1][1].replace(/\s/g, "-");
        
        const image: string = ProjectsContent[i][0][0];
        const title: string = ProjectsContent[i][0][1];
        const description: string = ProjectsContent[i][0][2];

        contentList.push(
            <FadeInUp key={title}>
                <Link to={path}>
                    <div className="content-card">
                        <img src={image} alt={title} />
                        <div className="info">
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </div>
                    </div>
                </Link>
            </FadeInUp>
        );
    }

    return (
        <div className="content">
            {contentList}
        </div>
    );
}

export default ProjectCardsContent;