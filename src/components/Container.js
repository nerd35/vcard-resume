import React, {Component} from 'react';
import Header from "./Header";
import HomeCard from "./Cards/HomeCard";
import About from "./Cards/About";

class Container extends Component {
    render() {
        return (
            <div className="container opened" data-animation-in="fadeInLeft" data-animation-out="fadeOutLeft">
                <Header/>
                <HomeCard/>
                <About/>
            </div>
        );
    }
}

export default Container;