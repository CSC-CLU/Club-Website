import Projects from "../../home_page/content/projects"

let Project_Paths: string[] = [];
for (let i = 0; i < Projects.length; i += 3) {
    const project_path: string = "/" + Projects[i + 1].replace(/\s/g, "-"); // Replace spaces with dashes for url
    Project_Paths.push(project_path);
}

export default Project_Paths;