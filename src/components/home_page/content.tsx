function Content() {
    const content = [
        "src/assets/demo_img.png", "Project Title 1", "Short Description 1: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "src/assets/demo_img.png", "Project Title 2", "Short Description 2: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "src/assets/demo_img.png", "Project Title 3", "Short Description 3: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    ];

    let image: string = "";
    let title: string = "";
    let descritpion: string = "";
    let content_list = [];

    for (let i = 0; i < content.length; i += 3) {
        image = content[i];
        title = content[i + 1];
        descritpion = content[i + 2];

        content_list.push(
            <div className="content-card">
                <img src={image}></img>
                <div className="info">
                    <h3>{title}</h3>
                    <p>{descritpion}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="content">
            {content_list}
        </div>
    )
}

export default Content;