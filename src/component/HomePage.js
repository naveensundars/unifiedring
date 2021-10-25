import React from "react";
import image01 from "./images/image01.png";
import image02 from "./images/image02.png";
import image03 from "./images/image03.png";
class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="HomePage">
                <div className="HomePageSlider">
                    <div className="HomePageSliderContent">
                        <h1>Best VoIP Phone Systems for Small Businesses</h1>
                        <div className="buttonGroup">
                            <button className="colorBtn">
                                14-Day Free Trial
                            </button>
                            <button className="transBtn">
                                Plan Purchase
                            </button>
                        </div>
                    </div>
                </div>
                <div className="HomePageGridSection">
                    <div className="HomePageGridSectionHead">
                        <h1>Unlimited business benefits with UnifiedRing</h1>
                        <p>Manage virtual teams with maximum efficiency.</p>
                    </div>
                    <div className="HomePageGridArea">
                        <div className="divOuter">
                            <div className="divInner">
                                <img src={image01} alt="image01" />
                                <h2>
                                    No installation, no activation fee, and no set-up fee.
                                </h2>
                            </div>
                        </div>
                        <div className="divOuter">
                            <div className="divInner">
                                <img src={image02} alt="image02" />
                                <h2>
                                    Get auto-receptionist to handle calls with customized and informative IVRs.
                                </h2>
                            </div>
                        </div>
                        <div className="divOuter">
                            <div className="divInner">
                                <img src={image03} alt="image03" />
                                <h2>
                                    Chat and collaborate efficiently with your remote teams.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default HomePage;