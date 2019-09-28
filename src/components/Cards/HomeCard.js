import React, {Component} from 'react';
import "./Card.css";
import nedum from '../Cards/images/nedum.jpg';

class HomeCard extends Component {
    render() {
        return (
            <div className="card-started" id="home-card">
                <div className="profile">
                    <div className="slide"></div>
                    <div className="image">
                        <img src={nedum} alt="nedum"/>
                    </div>
                    <div className="title">Patrick Mukolo</div>
                    <div className="subtitle"> Frontend Developer</div>
                    <div className="social">
                        <a target="_blank" href="#"><i className="fab fa-facebook-square"></i></a>
                        <a target="_blank" href="#"><i className="fab fa-twitter-square"></i></a>
                        <a target="_blank" href="#"><i className="fab fa-instagram"></i></a>
                        <a target="_blank" href="#"><i className="fab fa-linkedin"></i></a>
                        <a target="_blank" href="#"><i className="fab fa-whatsapp"></i></a>
                    </div>
                    <div className="lnks">
                        <a href="#" className="lnk">
                            <span className="text">Download CV</span>
                        </a>
                        <a href="#" className="lnk discover">
                            <span className="text">Contact Me</span>
                            <span className="arrow"></span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeCard;