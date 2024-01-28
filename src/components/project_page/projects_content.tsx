import Projects_Content from "../../../content/projects_content";

function Content() {
    let url: string = window.location.pathname;
    
    let content: string[] = [];
    for (let i = 0; i < Projects_Content.length; i++) {
        if ("/" + Projects_Content[i][1][1].replace(/\s/g, "-") == url) {
            content = Projects_Content[i][1];
        }
    }

    let title: string = "";
    let youtube: string = "";
    let image: string = "";
    let paragraph: string = "";

    let content_list: any[] = [];
    for (let i = 0; i < content.length; i += 2) {
        switch(content[i]) {
            case "T":
                title = content[i + 1];
                content_list.push(
                    <h3>{title}</h3>
                );
                break;
            case "Y":
                youtube = content[i + 1];
                content_list.push(
                    <div className="youtube-container">
                        <iframe src={youtube}></iframe>
                    </div>
                )
                break;
            case "I":
                image = content[i + 1];
                content_list.push(
                    <div className="image-container">
                        <img src={image}></img>
                    </div>
                );
                break;
            case "P":
                paragraph = content[i + 1];
                content_list.push(
                    <div className="text-container">
                        <p>{paragraph}</p>
                    </div>
                );
                break;
        }
    }

    return (
        <div className="content">
            {content_list}
        </div>
    );
}

export default Content;