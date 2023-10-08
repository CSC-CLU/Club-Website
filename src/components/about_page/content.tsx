import About_Content from "../../../content/about_content";

function Content() {
    let content_list: any[] = [];
    for (let i = 0; i < About_Content.length; i += 4) {
        const image = About_Content[i][0];
        // const background_image = {
        //     backgroundImage: `url(${image})`
        // }
        const name = About_Content[i][1];
        const position = About_Content[i][2];
        const description = About_Content[i][3];

        content_list.push(
            <div className="profile">
                <div className="left">
                    {/* <div className="profile-image" style={background_image}></div> */}
                    <div className="profile-image">
                        <img src={image}></img>
                    </div>
                    {/* <h5>{name}</h5>
                    <p>{position}</p> */}
                </div>
                <div className="right">
                    <h5>{`${name} - ${position}`}</h5>
                    <p>{description}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="content">
            <h3>Club Officers</h3>
            {content_list}
        </div>
    )
}

export default Content;