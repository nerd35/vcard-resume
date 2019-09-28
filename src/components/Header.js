import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="top-menu">
                    <ul>
                        <li className="active">
                            <a href="#about-card">
                                <span className="icon"><i className="fas fa-user-tie"></i></span>
                                <span className="link">About</span>
                            </a>
                        </li>
                        <li>
                            <a href="#resume-card">
                                <span className="icon"><i className="fas fa-th-list"></i></span>
                                <span className="link">Resume</span>
                            </a>
                        </li>
                        <li>
                            <a href="#works-card">
                                <span className="icon"><i className="fas fa-paint-brush"></i></span>
                                <span className="link">Works</span>
                            </a>
                        </li>
                        <li>
                            <a href="#blog-card">
                                <span className="icon"><i className="fas fa-comment-alt"></i></span>
                                <span className="link">Blog</span>
                            </a>
                        </li>

                        <li>
                            <a href="#contacts-card">
                                <span className="icon"><i className="fas fa-at"></i></span>
                                <span className="link">Contact</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;