import React, { Component } from 'react';

import classes from './Project.module.scss';

import Header from '../../components/Navigation/Header/Header';
import { ProjectData } from '../../shared/ProjectData';

class Project extends Component {
    state = {
        project: ProjectData
    }

    render () {
        return (
            <div>
                <Header />
                <div className={classes.mainContainer}>
                    <img src={this.state.project[0].kv} />
                </div>
                <h1>{this.state.project[0].title}</h1>
                {console.log(this.state.project[0].title)}
            </div>
        )
    }
}

export default Project;