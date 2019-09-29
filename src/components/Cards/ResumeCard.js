import React, {Component} from 'react';

class ResumeCard extends Component {
    render() {
        return (
            <div className="card-inner" id="resume-card">
                <div className="card-wrap">

                    <div className="content resume">

                        <div className="title">Resume</div>

                        <div className="row">

                            <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                                <div className="resume-title border-line-h">
                                    <div className="icon"><i className="ion ion-briefcase"></i></div>
                                    <div className="name">Experience</div>
                                </div>
                                <div className="resume-items">
                                    <div className="resume-item border-line-h active">
                                        <div className="date">2019 - Present</div>
                                        <div className="name">Frontend Developer</div>
                                        <div className="company">Ekaruz Technologies.</div>
                                        <p>
                                            Collaborate with creative and development teams on the execution of ideas.
                                        </p>
                                    </div>
                                    <div className="resume-item border-line-h">
                                        <div className="date">2015 - 2018</div>
                                        <div className="name">Data Analyst</div>
                                        <div className="company">Careers24 Nigeria.</div>
                                        <p>
                                            Search for recruiters online, ensure jobs are legit and follow up on jobs posted.
                                        </p>
                                    </div>
                                    <div className="resume-item">
                                        <div className="date">2014 - 2015</div>
                                        <div className="name">Stock Supervisor</div>
                                        <div className="company">Accessories2Die4</div>
                                        <p>
                                            Prepare barcodes, items and stock sheets for outlets and also take stock inventories when neccessary
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                                <div className="resume-title border-line-h">
                                    <div className="icon"><i class="ion ion-university"></i></div>
                                    <div className="name">Education</div>
                                </div>
                                <div className="resume-items">
                                    <div className="resume-item border-line-h">
                                        <div className="date">2008 - 2009</div>
                                        <div className="name">NYSC</div>
                                        <div className="company">Nigeria</div>
                                        <p>
                                            National Youth Service corps
                                        </p>
                                    </div>
                                    <div className="resume-item">
                                        <div className="date">2000 - 2008</div>
                                        <div className="name">Babcock University</div>
                                        <div className="company">Nigeria</div>
                                        <p>
                                            Bachelor's Degree in Business Administration
                                        </p>
                                    </div>
                                    <div className="resume-item border-line-h">
                                        <div className="date">1994 - 2000</div>
                                        <div className="name">WEAC Certificate</div>
                                        <div className="company">Edo State, Nigeria</div>
                                        <p>
                                            WEAC Certificate from Covenant Christian Academy.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="clear"></div>
                        </div>
                        <div className="content skills">
                            <div className="title">My Skills</div>
                            <div className="row">
                                <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                                    <div className="skills-list">
                                        <div className="skill-title border-line-h">
                                            <div className="icon>"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

        );
    }
}

export default ResumeCard;