import React, {Component} from 'react';
import work from '../Cards/images/work.PNG';
import  work1 from '../Cards/images/work1.PNG';
import work2 from '../Cards/images/work2.PNG';

class WorkCard extends Component {
    render() {
        return (
            <div className="card-inner" id="works-card">
                <div className="card-wrap">
                    <div className="content works">
                        <div className="title">Recent Works</div>

                        <div className="filter-menu filter-button-group">
                            <div className="f_btn active">
                                <label><input type="radio" name="fl_radio"value="grid-item" />All </label>
                            </div>
                            <div className="f_btn">
                                <label><input type="radio" name="fl_radio" value="photo"/>Photo</label>
                            </div>
                            <div className="f_btn">
                                <label><input type="radio" name="fl_radio" value="video"/>Video</label>
                            </div>
                            <div className="f_btn">
                                <label><input type="radio" name="fl_radio" value="music"/>Music</label>
                            </div>
                            <div className="f_btn">
                                <label><input type="radio" name="fl_radio" value="design"/>Design</label>
                            </div>
                        </div>

                        <div className="row grid-items">
                            <div className="col-col-d-6 col-t-6 col-m-12 grid-item photo border-line-h">
                                <div className="box-item">
                                    <div className="image">
                                        <a href={work} className="has-popup-image">
                                            <img src={work} alt="/"/>
                                            <span className="info">
                                                <span className="ion"></span>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="desc">
                                        <a href={work} className="name has-popup-image">Datespace.co</a>
                                        <div className="category">Photo</div>
                                    </div>;
                                </div>
                            </div>
                            <div className="col-col-d-6 col-t-6 col-m-12 grid-item photo border-line-h">
                                <div className="box-item">
                                    <div className="image">
                                        <a href={work1} className="has-popup-image">
                                            <img src={work1} alt="/"/>
                                            <span className="info">
                                                <span className="ion"></span>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="desc">
                                        <a href={work1} className="name has-popup-image">Cityserve.com.ng</a>
                                        <div className="category">Photo</div>
                                    </div>;
                                </div>
                            </div>
                            <div className="col-col-d-6 col-t-6 col-m-12 grid-item photo border-line-h">
                                <div className="box-item">
                                    <div className="image">
                                        <a href={work2} className="has-popup-image">
                                            <img src={work2} alt="/"/>
                                            <span className="info">
                                                <span className="ion"></span>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="desc">
                                        <a href={work2} className="name has-popup-image">Nerd25coding</a>
                                        <div className="category">Photo</div>
                                    </div>;
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default WorkCard;