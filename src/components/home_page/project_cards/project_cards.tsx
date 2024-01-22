import {Link} from "react-router-dom";
import Projects_Content from "../../../../content/projects_content";

function Project_Cards() {
    let content_list: any[] = [];

    for (let i = 0; i < Projects_Content.length; i++) {
        const path: string = "/" + Projects_Content[i][1][1].replace(/\s/g, "-");
        
        const image: string = Projects_Content[i][0][0];
        const title: string = Projects_Content[i][0][1];
        const description: string = Projects_Content[i][0][2];

        content_list.push(
            <div className="content-card">
                <Link to={path }>
                    <img src={image} alt={title}></img>
                </Link>
                <div className="info">
                    <h3>
                        <Link to={path}>
                            {title}
                        </Link>
                    </h3>
                    <p>{description}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="content">
            {content_list}
        </div>
    )
}

export default Project_Cards;