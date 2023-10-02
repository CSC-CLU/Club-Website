import Project1 from "./content/project1";
import Project2 from "./content/project2";
import Project3 from "./content/project3";

// import Projects_Array from "./content/projects_array";

function Content() {
    let url: string = window.location.pathname;
    // console.log(url);
    let content: string[] = [];
    switch (url) {
        case "/Project-Title-1":
            content = Project1
            break;
        case "/Project-Title-2":
            content = Project2
            break;
        case "/Project-Title-3":
            content = Project3
            break;
    }

    // let content = null;
    // for (let i = 0; i < Projects_Array.length; i++) {
    //     if ("/" + Projects_Array[i][1].replace(/\s/g, "-") === projectId) {
    //         content = Projects_Array[i];
    //         break;
    //     }
    // }

    // let content: string[] = Project1;
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
                    <iframe width="840" height="630" src={youtube}></iframe>
                )
                break;
            case "I":
                image = content[i + 1];
                content_list.push(
                    <img width="840" height="630" src={image}></img>
                );
                break;
            case "P":
                paragraph = content[i + 1];
                content_list.push(
                    <p>{paragraph}</p>
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