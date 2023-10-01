import {useEffect, useState} from 'react';

interface ContentItem {
    image: string;
    title: string;
    description: string;
}

async function fetchData() {
    const content_file = "../home_content.txt";
    const response = await fetch(content_file);
    return await response.text();
}

function ContentCard({image, title, description}: ContentItem) {
    return (
        <div className="content-card">
            <div className="content">
                <img width="300" height="300" src={image} alt="project-image"/>
                <div className="info">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

function Content() {
    const [content, setContent] = useState<ContentItem[]>([]);

    useEffect(() => {
        async function fetchDataAndSetContent() {
            const content_string = await fetchData();
            const content_array = content_string.split("\n");
            const content_objects: ContentItem[] = [];

            for (let i = 0; i < content_array.length; i += 3) {
                const image = content_array[i];
                const title = content_array[i + 1];
                const description = content_array[i + 2];

                content_objects.push({image, title, description});
            }

            setContent(content_objects);
        }

        fetchDataAndSetContent();
    }, []);

    return (
        <div className="content">
            {content.map((item, index) => (
                <ContentCard key={index} image={item.image} title={item.title} description={item.description}></ContentCard>
            ))}
        </div>
    );
}

export default Content;