import React, {Component} from 'react';

class ResumeCard extends Component {
    render() {
        return (
            <div className="card-inner" id="resume-card">
                <div className="card-wrap">

                    <div className="content resume">

                        <div className="title">Resume</div>

                        <div class="row">

                            <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
                                <div class="resume-title border-line-h">
                                    <div class="icon"><i class="ion ion-briefcase"></i></div>
                                    <div class="name">Experience</div>
                                </div>
                                <div class="resume-items">
                                    <div class="resume-item border-line-h active">
                                        <div class="date">2013 - Present</div>
                                        <div class="name">Art Director</div>
                                        <div class="company">Facebook Inc.</div>
                                        <p>
                                            Collaborate with creative and development teams on the execution of ideas.
                                        </p>
                                    </div>
                                    <div class="resume-item border-line-h">
                                        <div class="date">2011 - 2012</div>
                                        <div class="name">Front-end Developer</div>
                                        <div class="company">Google Inc.</div>
                                        <p>
                                            Monitored technical aspects of the front-end delivery for several projects.
                                        </p>
                                    </div>
                                    <div class="resume-item">
                                        <div class="date">2009 - 2010</div>
                                        <div class="name">Senior Developer</div>
                                        <div class="company">Abc Inc.</div>
                                        <p>
                                            Optimize website performance using latest technology.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
                                <div class="resume-title border-line-h">
                                    <div class="icon"><i class="ion ion-university"></i></div>
                                    <div class="name">Education</div>
                                </div>
                                <div class="resume-items">
                                    <div class="resume-item border-line-h">
                                        <div class="date">2006 - 2008</div>
                                        <div class="name">Art University</div>
                                        <div class="company">New York</div>
                                        <p>
                                            Bachelor's Degree in Computer Science ABC Technical Institute, Jefferson, Missouri
                                        </p>
                                    </div>
                                    <div class="resume-item border-line-h">
                                        <div class="date">2005 - 2006</div>
                                        <div class="name">Programming Course</div>
                                        <div class="company">Paris</div>
                                        <p>
                                            Coursework - Git, WordPress, Javascript, iOS, Android.
                                        </p>
                                    </div>
                                    <div class="resume-item">
                                        <div class="date">2004 - 2005</div>
                                        <div class="name">Web Design Course</div>
                                        <div class="company">London</div>
                                        <p>
                                            Converted Photoshop layouts to web pages using HTML, CSS, and JavaScript
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="clear"></div>
                        </div>

                    </div>
                    </div>
                </div>

        );
    }
}

export default ResumeCard;