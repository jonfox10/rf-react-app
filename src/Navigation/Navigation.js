import React from 'react';
import './Navigation.scss';
import navLogo from '../images/Small.svg';
import orgLogo from '../images/horizon.png';
import searchIcon from '../images/searchIcon.png';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guide: false,
            attendees: true,
            content: false,
            exhibitors: false
        }
    }

    handleMenuLink = (value) => {
        this.setState({
            guide: false,
            attendees: false,
            content: false,
            exhibitors: false
        });

        this.setState((prevState) => ({
            [value]: !prevState[value]
        }));
    }

    render() {
        return (
            <div className="navigation-container">
                <div className="nav-left">
                    <div className="top">
                        <div className="nav-logo">
                            <img src={navLogo} className="rf-logo" alt="logo" />
                        </div>
                        <div className="nav-org">
                            <img src={orgLogo} className="org-logo" alt="logo" />
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="nav-user">
                            <div className="user-initials">FL</div>
                        </div>
                    </div>
                </div>
                <div className="nav-right ">
                    <div className="event-title">
                        <h3>RainFocus Summit</h3>
                    </div>
                    <div className="event-details">
                        <span className="location">Lehi, UT</span> ﹒ <span className="month-day">December 15th</span>
                    </div>
                    <div className="nav-search">
                        <img src={searchIcon} className="search-icon" alt="logo" />
                        <input className="nav-input" placeholder={"Search"}/>
                    </div>
                    <div className="nav-links">
                        <ul>
                            <li className={`nav-link ${this.state.guide ? 'highlight' : null}`} value="guide" onClick={() => this.handleMenuLink("guide")}><span className="circle"></span>Guide</li>
                            <li className={`nav-link ${this.state.attendees ? 'highlight' : null}`} value="attendees" onClick={() => this.handleMenuLink("attendees")}><span className="circle"></span>Attendees</li>
                            { this.state.attendees ?
                                <ul className="sub-nav">
                                    <li className="sub-nav-item">Attendees</li>
                                    <li className="sub-nav-item">Attendee types</li>
                                    <li className="sub-nav-item">Packages</li>
                                    <li className="sub-nav-item">Reg codes</li>
                                    <li className="sub-nav-item">Discounts</li>
                                </ul>
                                : null
                            }
                            <li className={`nav-link ${this.state.content ? 'highlight' : null}`} value="Content" onClick={() => this.handleMenuLink("content")}><span className="circle"></span>Content</li>
                            <li className={`nav-link ${this.state.exhibitors ? 'highlight' : null}`} value="exhibitors" onClick={() => this.handleMenuLink("exhibitors")}><span className="circle"></span>Exhibitors</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    };
}

export default Navigation;