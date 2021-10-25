import React from "react";
import { HashRouter as Router, Route } from 'react-router-dom';


import logo from "./images/logo.png";
import callIcons from "./images/call_icon.svg";
import facebook from "./images/facebook.svg";
import linkedin from "./images/linkedin.svg";
import pintrest from "./images/pintrest.svg";
import twitter from "./images/twitter.svg";
import youtube from "./images/youtube.svg";
import chatIcon from "./images/chat.svg";


import HomePage from "./HomePage";
import PlanPage from "./PlanPage";
class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="root-content">
                    <header>
                        <div className="headerLeft">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="headerRight">
                            <img src={callIcons} alt="callicons" />
                            <a href="tel:02034440000">02034440000</a>
                        </div>
                    </header>
                    <Route path="/HomePage" component={HomePage} />
                    <Route path="/PlanPage" component={PlanPage} />
                    <footer>
                        <div className="footerLeft">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="footerCenter">
                            <p>2020 UnifiedRing. All rights reserved</p>
                        </div>
                        <div className="footerRight">
                            <nav>
                                <a href="#"><img src={facebook} alt="facebook" /></a>
                                <a href="#"><img src={linkedin} alt="linkedin" /></a>
                                <a href="#"><img src={pintrest} alt="pintrest" /></a>
                                <a href="#"><img src={twitter} alt="twitter" /></a>
                                <a href="#"><img src={youtube} alt="youtube" /></a>
                            </nav>
                            <button className="chartBtn">
                                <img src={chatIcon} alt="chat" />
                            </button>
                        </div>
                    </footer>
                </div>
            </Router>
        )
    }
}
export default App;