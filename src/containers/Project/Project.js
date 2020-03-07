import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import './Project.scss';

import "animate.css/animate.min.css";

import Header from '../../components/Navigation/Header/Header';
import { ProjectData } from '../../shared/ProjectData';

class Project extends Component {
    
    render () {
        let Data = ProjectData.filter((data) => {
            return data.id.toString() === this.props.match.params.id
        });
        console.log(Data);
        console.log(ProjectData);
        return (
            <>
                <Header />
                <div className="mainContainer">
                    <div className="imageContainer">
                        <img src={Data[0].kv} alt={Data[0].title}/>
                    </div>
                    <div className="contentContainer">
                        <div className="contentContainer__left">
                            <h1>{Data[0].title}</h1>
                            <h2>{Data[0].projectHeading}</h2>
                            <p>{Data[0].projectDesc}</p>
                            <p>{Data[0].projectDesc2}</p>
                        </div>
                        <div className="contentContainer__right">
                            <ScrollAnimation 
                            animateIn='fadeIn'
                            initiallyVisible={false}>
                                <img src={Data[0].projectLogo} alt={Data[0].title}/>
                            </ScrollAnimation>
                        </div>
                        <div className="contentContainer__showcase">
                            {}
                            {Data[0].showcasePic.map((arr,index) => {
                                console.log(index);
                                return(
                                    <ScrollAnimation 
                                    animateIn='fadeIn'
                                    key={index}>
                                        <div className={"contentContainer__showcase-inner" + index}>
                                            <img src={arr}></img>
                                        </div>
                                    </ScrollAnimation>
                                )
                            })}
                            
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Project;