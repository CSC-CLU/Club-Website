import {BrowserRouter as Router, Route, Routes} from "react-router-dom"; // Note the use of `Routes` instead of `Switch`
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Navigation_Bar from "./components/nav_bar";

function App() {
    return (
        <div className="page-wrapper">
            <Router>
                <Navigation_Bar></Navigation_Bar>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/about" element={<About></About>}></Route>
                    <Route path="/contact" element={<Contact></Contact>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;