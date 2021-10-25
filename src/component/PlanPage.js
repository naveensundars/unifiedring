import React from "react";

class PlanPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="PlanPage">
                <div className="planPageHeader">
                    <h1>Find the Right Plan for your Communication</h1>
                    <div className="planRangeArea">
                        <div className="userSelect">
                            <p>Users Range</p>
                            <ul>
                                <li>1-19</li>
                                <li className="active">20-99</li>
                                <li>100+</li>
                            </ul>
                        </div>
                        <div className="userSelectList">
                            <p>Monthly</p>
                            <ul>
                                <li className="active">12 Months</li>
                                <li>24 Months</li>
                                <li>36 Months</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="planGridArea">
                    <div className="planGridAreaOuter">
                        <div className="planGridAreaInner">
                            <h3>Starter</h3>
                            <h4>£6.99</h4>
                            <p>/user/monthly</p>
                            <div className="buttonGroup">
                                <button className="colorBtn">
                                    Buy Now
                                </button>
                                <button className="transBtn">
                                    14-Day Free Trial
                                </button>
                                <span>No credit card required</span>
                            </div>
                            <div className="planGridAreaDetails">
                                <h5>Startup Plan</h5>
                                <p>Up to 20 users only</p>
                                <p>Business phone or toll-free numbers</p>
                                <p>Unlimited calls within the US/CA*</p>
                                <p>Unlimited business SMS</p>
                                <p>Voicemail-to-text</p>
                                <p>Team messaging</p>
                                <p>Document sharing</p>
                            </div>
                        </div>
                    </div>
                    <div className="planGridAreaOuter">
                        <div className="planGridAreaInner">
                            <h3>Standard</h3>
                            <h4>£12.99</h4>
                            <p>/user/monthly</p>
                            <div className="buttonGroup">
                                <button className="colorBtn">
                                    Buy Now
                                </button>
                                <button className="transBtn">
                                    14-Day Free Trial
                                </button>
                                <span>No credit card required</span>
                            </div>
                            <div className="planGridAreaDetails">
                                <h5>Everything in Startup plus</h5>
                                <p>No limit on number of users </p>
                                <p>Business phone numbers in over 100 countries</p>
                                <p>Unlimited internet fax</p>
                                <p>Unlimited audio conferencing </p>
                                <p>Video meetings with up to 100 participants</p>
                                <p>Up to 24-hour meeting duration</p>
                                <p>Quality-of-service reports</p>
                                <p>Popular integrations including Office 365,</p>
                                <p>G Suite, Slack, and more 24/7 support</p>
                            </div>
                        </div>
                    </div>
                    <div className="planGridAreaOuter">
                        <div className="planGridAreaInner ProfessionalArea">
                            <h3>Professional</h3>
                            <h4>£20.99</h4>
                            <p>/user/monthly</p>
                            <div className="buttonGroup">
                                <button className="colorBtn">
                                    Buy Now
                                </button>
                                <button className="transBtn">
                                    14-Day Free Trial
                                </button>
                                <span>No credit card required</span>
                            </div>
                            <div className="planGridAreaDetails">
                                <h5>Everything in Standard plus</h5>
                                <p>Automatic call recording</p>
                                <p>Single Sign-on</p>
                                <p>Multi-site admin and management</p>
                                <p>Up to 8-digit extensions with site codes</p>
                                <p>Hot desking</p>
                                <p>Advanced call handling including whisper, barge, and more</p>
                                <p>Video meetings with up to 200 participants</p>
                                <p>Real-time analytics</p>
                                <p>Popular CRM integrations with Salesforce, Zendesk, and more</p>
                            </div>
                        </div>
                    </div>
                    <div className="planGridAreaOuter">
                        <div className="planGridAreaInner">
                            <h3>Enterprise</h3>
                            <h4>£26.99</h4>
                            <p>/user/monthly</p>
                            <div className="buttonGroup">
                                <button className="colorBtn">
                                    Buy Now
                                </button>
                                <button className="transBtn">
                                    14-Day Free Trial
                                </button>
                                <span>No credit card required</span>
                            </div>
                            <div className="planGridAreaDetails">
                                <h5>Everything in Standard plus</h5>
                                <p>Device status reports</p>
                                <p>Device status alerts</p>
                                <p>Unlimited storage**</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="comparePlanArea">
                    <h2>Compare Plans</h2>
                    <div className="comparePlanGroupOne">
                        <div className="PlanQues"><p>Have a question? <br></br>
                            Call <a href="tel:1800 856 2145">1800 856 2145</a></p></div>
                        <div className="btnAreaPlan">
                            <h3>Starter</h3>
                            <div className="buttonGroup">
                                <button className="colorBtn">
                                    Buy Now
                                </button>
                                <button className="transBtn">
                                    14-Day Free Trial
                                </button>
                                <span>No credit card required</span>
                            </div>
                        </div>
                        <div className="btnAreaPlan">
                            <h3>Standard</h3>
                            <div className="buttonGroup">
                                <button className="colorBtn">
                                    Buy Now
                                </button>
                                <button className="transBtn">
                                    14-Day Free Trial
                                </button>
                                <span>No credit card required</span>
                            </div>
                        </div>
                        <div className="btnAreaPlan">
                            <h3>Professional</h3>
                            <div className="buttonGroup">
                                <button className="colorBtn">
                                    Buy Now
                                </button>
                                <button className="transBtn">
                                    14-Day Free Trial
                                </button>
                                <span>No credit card required</span>
                            </div>
                        </div>
                        <div className="btnAreaPlan">
                            <h3>Enterprise</h3>
                            <div className="buttonGroup">
                                <button className="colorBtn">
                                    Buy Now
                                </button>
                                <button className="transBtn">
                                    14-Day Free Trial
                                </button>
                                <span>No credit card required</span>
                            </div>
                        </div>
                    </div>
                    <div className="comparePlanGroupGridOuter">
                        <div className="comparePlanGroupGrid">
                            <div className="comparePlanGroupGridMax boderStyle Heading">
                                <p>KEY Features</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                            </div>
                            <div className="comparePlanGroupGridMin">
                            </div>
                            <div className="comparePlanGroupGridMin">
                            </div>
                            <div className="comparePlanGroupGridMin boderStyle">
                            </div>
                        </div>
                        <div className="comparePlanGroupGrid">
                            <div className="comparePlanGroupGridMax">
                                <p>Unlimited Calls</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p></p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p></p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p></p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p></p>
                            </div>
                        </div>
                        <div className="comparePlanGroupGrid">
                            <div className="comparePlanGroupGridMax">
                                <p>Virtual Extensions</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>£2.00</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>£2.00</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>£2.00</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>£2.00</p>
                            </div>
                        </div>
                        <div className="comparePlanGroupGrid">
                            <div className="comparePlanGroupGridMax">
                                <p>Single Sign on</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>-</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>£2.00/Month</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>Free</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>Free</p>
                            </div>
                        </div>
                        <div className="comparePlanGroupGrid">
                            <div className="comparePlanGroupGridMax">
                                <p>Voice Assist</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>£5.00</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>£3.00</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>£2.00</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>Free</p>
                            </div>
                        </div>
                        <div className="comparePlanGroupGrid">
                            <div className="comparePlanGroupGridMax">
                                <p>HD Voice</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>-</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>-</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>Free</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>Free</p>
                            </div>
                        </div>
                        <div className="comparePlanGroupGrid">
                            <div className="comparePlanGroupGridMax">
                                <p>HD Video</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>-</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>-</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>Free</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>Free</p>
                            </div>
                        </div>
                        <div className="comparePlanGroupGrid">
                            <div className="comparePlanGroupGridMax">
                                <p>Multi Level IVR</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>-</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>-</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>Advanced</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>Advanced</p>
                            </div>
                        </div>
                        <div className="comparePlanGroupGrid">
                            <div className="comparePlanGroupGridMax">
                                <h5>Unlimited</h5>
                                <p>Video Conferencing</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>-</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>Up to 8 (Meetings)<br></br> Up to 200 Participants</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>Up to 8 (Meetings)<br></br> Up to 200 Participants</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>Up to 8 (Meetings)<br></br> Up to 200 Participants</p>
                            </div>
                        </div>
                        <div className="comparePlanGroupGrid">
                            <div className="comparePlanGroupGridMax">
                                <h5>Unlimited</h5>
                                <p>Audio Conferencing</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>-</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>Up to 5 Participants</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>Up to 1000 Participants</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>Up to 1000 Participants</p>
                            </div>
                        </div>
                        <div className="comparePlanGroupGrid">
                            <div className="comparePlanGroupGridMax boderStyleBottom">
                                <p>Call Groups</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>-</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>Up to 5 Call Groups</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>Up to 50 Call Groups</p>
                            </div>
                            <div className="comparePlanGroupGridMin boderStyleBottom">
                                <p>Unlimited Call Groups</p>
                            </div>
                        </div>
                    </div>
                    <div className="comparePlanGroupGridOuter">
                        <div className="comparePlanGroupGrid">
                            <div className="comparePlanGroupGridMax boderStyle Heading">
                                <p>KEY Features</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                            </div>
                            <div className="comparePlanGroupGridMin">
                            </div>
                            <div className="comparePlanGroupGridMin">
                            </div>
                            <div className="comparePlanGroupGridMin boderStyle">
                            </div>
                        </div>
                        <div className="comparePlanGroupGrid">
                            <div className="comparePlanGroupGridMax">
                                <p>Unlimited Calls</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p></p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p></p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p></p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p></p>
                            </div>
                        </div>
                        <div className="comparePlanGroupGrid">
                            <div className="comparePlanGroupGridMax">
                                <p>Virtual Extensions</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>£2.00</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>£2.00</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>£2.00</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>£2.00</p>
                            </div>
                        </div>
                        <div className="comparePlanGroupGrid">
                            <div className="comparePlanGroupGridMax">
                                <p>Single Sign on</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>-</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>£2.00/Month</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>Free</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>Free</p>
                            </div>
                        </div>
                        <div className="comparePlanGroupGrid">
                            <div className="comparePlanGroupGridMax">
                                <p>Voice Assist</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>£5.00</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>£3.00</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>£2.00</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>Free</p>
                            </div>
                        </div>
                        <div className="comparePlanGroupGrid">
                            <div className="comparePlanGroupGridMax">
                                <p>HD Voice</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>-</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>-</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>Free</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>Free</p>
                            </div>
                        </div>
                        <div className="comparePlanGroupGrid">
                            <div className="comparePlanGroupGridMax">
                                <p>HD Video</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>-</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>-</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>Free</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>Free</p>
                            </div>
                        </div>
                        <div className="comparePlanGroupGrid">
                            <div className="comparePlanGroupGridMax">
                                <p>Multi Level IVR</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>-</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>-</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>Advanced</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>Advanced</p>
                            </div>
                        </div>
                        <div className="comparePlanGroupGrid">
                            <div className="comparePlanGroupGridMax">
                                <h5>Unlimited</h5>
                                <p>Video Conferencing</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>-</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>Up to 8 (Meetings)<br></br> Up to 200 Participants</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>Up to 8 (Meetings)<br></br> Up to 200 Participants</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>Up to 8 (Meetings)<br></br> Up to 200 Participants</p>
                            </div>
                        </div>
                        <div className="comparePlanGroupGrid">
                            <div className="comparePlanGroupGridMax">
                                <h5>Unlimited</h5>
                                <p>Audio Conferencing</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>-</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>Up to 5 Participants</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>Up to 1000 Participants</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>Up to 1000 Participants</p>
                            </div>
                        </div>
                        <div className="comparePlanGroupGrid">
                            <div className="comparePlanGroupGridMax boderStyleBottom">
                                <p>Call Groups</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>-</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>Up to 5 Call Groups</p>
                            </div>
                            <div className="comparePlanGroupGridMin">
                                <p>Up to 50 Call Groups</p>
                            </div>
                            <div className="comparePlanGroupGridMin boderStyleBottom">
                                <p>Unlimited Call Groups</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}
export default PlanPage;