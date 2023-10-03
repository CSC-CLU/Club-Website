import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Project from "./pages/project"
import About from "./pages/about";
import Contact from "./pages/contact";
import Navigation_Bar from "./components/nav_bar";
import Projects_Content from "./content/projects_content";

function App() {
    // let project_path: string = "";
    let project_routes: any[] = [];
    for (let i = 0; i < Projects_Content.length; i++) {
        // project_path = "/:" + Projects_Content[i][1][1].replace(/\s/g, "-"); // Replace spaces with dashes for url
        project_routes.push (
            // Project_Content[i][1][1] gets first element after descriptor from project page (should probably be a title)
            <Route path={`/:${Projects_Content[i][1][1].replace(/\s/g, "-")}`} element={<Project></Project>}></Route>
        )
    }

    return (
        <div className="page-wrapper">
            <Router>
                <Navigation_Bar></Navigation_Bar>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    {project_routes}
                    <Route path="/about" element={<About></About>}></Route>
                    <Route path="/contact" element={<Contact></Contact>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;