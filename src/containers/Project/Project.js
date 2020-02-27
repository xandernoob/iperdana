import React, { Component } from 'react';

import classes from './Project.module.scss';

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
            <div>
                <Header />
                <div className={classes.mainContainer}>
                    <img src={Data[0].kv} />
                </div>
                <h1>{Data[0].title}</h1>
            </div>
        )
    }
}

export default Project;