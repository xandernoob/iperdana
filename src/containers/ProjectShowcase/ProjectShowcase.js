import React, { Component } from 'react';

import classes from './ProjectShowcase.module.scss'

import { ProjectData } from '../../shared/ProjectData';

class ProjectShowcase extends Component {
    state = {
        project: ProjectData
    }

    render () {
        return (
            <div className={classes.ProjectContainer}>
                {this.state.project.map((key, title) => {
                    return (
                        <div className={classes.ProjectContainerInner}>
                            <h2>{key.title}</h2>
                            <img src={key.image}></img>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default ProjectShowcase;