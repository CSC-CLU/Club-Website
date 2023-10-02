import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Project from "./pages/project"
import About from "./pages/about";
import Contact from "./pages/contact";
import Navigation_Bar from "./components/nav_bar";
import Project_Paths from "./components/project_page/content/project_paths";

function App() {
    let project_routes: any[] = [];
    for (let i = 0; i < Project_Paths.length; i++) {
        project_routes.push (
            <Route path={Project_Paths[i]} element={<Project></Project>}></Route>
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