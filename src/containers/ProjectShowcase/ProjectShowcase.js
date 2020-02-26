import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Header from '../../components/Navigation/Header/Header';

import classes from './ProjectShowcase.module.scss';

import { ProjectData } from '../../shared/ProjectData';

class ProjectShowcase extends Component {
    state = {
        project: ProjectData
    }

    moreInfo = () => {
        this.props.history.push({
            pathname: '/project',
        })
    }


    render () {
        return (
            <>
            <Header />
            <div className={classes.ProjectContainer}>
                {this.state.project.map((project) => {
                    return (
                        <div key={project.ids} className={classes.ProjectContainerInner}>
                            <h2>{project.title}</h2>
                            <img onClick={this.moreInfo} src={project.image}></img>
                        </div>
                    )
                })}
            </div>
            </>
        );
    }
}

export default ProjectShowcase;