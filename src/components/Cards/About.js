import React, {Component} from 'react';
import datespace from '../Cards/images/datespace-logo.png'
import  cityserve from '../Cards/images/cityserve.jpg';
import client_3 from '../Cards/images/client_3.png';
import client_4 from '../Cards/images/client_4.png';

class About extends Component {
    render() {
        return (
            <div className="card-inner animated active" id="about-card">
                <div className="card-wrap">
                    <div className="content about">
                        <div className="title">About me</div>

                        <div className="row">
                            <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                                <div className="text-box">
                                    <p>
                                        I am Patrick Umukoro, Frontend Developer from Lagos, Nigeria. I have rich experience in
                                        web site design, building and customization, also I am good at Bootstrap, React, Node js, Postgres, amongst others.

                                    </p>
                                </div>
                                <div   className="info-list">
                                    <ul>
                                        <li><strong>Education . . . . .</strong> BSC</li>
                                        <li><strong>Residence . . . . .</strong> Nigeria</li>
                                        <li><strong>Freelance . . . . .</strong> Available</li>
                                        <li><strong>Address . . . . .</strong> Lagos, Nigeria</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="clear"></div>
                        </div>
                    </div>
                    <div className="content services">
                        <div className="title">My Services</div>
                        <div className="row service-items border-line-v">
                            <div className=" col col-d-6 col-t-6 col-m-12 border-line-h">
                                <div className="service-item">
                                    <div className="icon"><span className="ion"><i className="fas fa-bolt"></i></span></div>
                                    <div className="name">Web Development</div>
                                    <p>
                                        Modern and mobile-ready website that will help you
                                        reach all of your marketing.
                                    </p>
                                </div>
                            </div>
                            <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
                                <div className="service-item">
                                    <div className="icon"><span className="ion "><i
                                        className="fas fa-music"></i></span></div>
                                    <div className="name">Music Writing</div>
                                    <p>
                                        Music copying, transcription, arranging and composition services.
                                    </p>
                                </div>
                            </div>
                            <div className="col col-d-6 col-t-6 col-m-12">
                                <div className="service-item">
                                    <div className="icon"><span className="ion "><i
                                        className="fas fa-archive"></i></span></div>
                                    <div className="name">Advetising</div>
                                    <p>
                                        Advertising services include television, radio, print, mail and web.
                                    </p>
                                </div>
                            </div>
                            <div className="col col-d-6 col-t-6 col-m-12">
                                <div className="service-item">
                                    <div className="icon"><span className="ion"><i className="fas fa-gamepad"></i></span></div>
                                    <div className="name">Game Development</div>
                                    <p>
                                        Developing memorable and unique mobile android, ios games.
                                    </p>
                                </div>
                            </div>

                            <div className="clear"></div>
                        </div>
                    </div>
                    <div className="content clients">


                        <div className="title">Clients</div>


                        <div className="row client-items">


                            <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                                <div className="client-item">
                                    <div className="image">
                                        <a target="_blank" href="#">
                                            <img src={datespace} alt=""/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                                <div className="client-item">
                                    <div className="image">
                                        <a target="_blank" href="#">
                                            <img src={cityserve} alt=""/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                                <div className="client-item">
                                    <div className="image">
                                        <a target="_blank" href="#">
                                            <img src={client_3} alt=""/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                                <div className="client-item">
                                    <div className="image">
                                        <a target="_blank" href="#">
                                            <img src={client_4} alt=""/>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="clear"></div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default About;