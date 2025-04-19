import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contacts/Contact";
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects";
import SignOff from "./components/SignOff/SignOff";

function App() {
    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route path="/portfolio/" element={<><Hero /> <Contact /> <Skills /> <Projects /> <SignOff /></>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
