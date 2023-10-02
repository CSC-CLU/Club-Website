import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import Projects from "./content/projects";

function Content() {
    let content_list: any[] = [];

    for (let i = 0; i < Projects.length; i += 3) {
        const image: string = Projects[i];
        const title: string = Projects[i + 1];
        const descritpion: string = Projects[i + 2];
        const path: string = "/" + title.replace(/\s/g, "-");

        content_list.push(
            <div className="content-card">
                <Link to={path}>
                    <img src={image} alt={title}></img>
                </Link>
                <div className="info">
                    <h3>
                        <Link to={path}>
                            {title}
                        </Link>
                    </h3>
                    <p>{descritpion}</p>
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

export default Content;