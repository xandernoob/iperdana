import React, { Component } from 'react';

import Header from '../../components/Navigation/Header/Header';

import classes from './ProjectShowcase.module.scss';

import { ProjectData } from '../../shared/ProjectData';

class ProjectShowcase extends Component {
    state = {
        project: ProjectData,
    }

    moreInfo = (id) => {
        console.log(id);
        this.props.history.push({
            pathname: '/project' + id 
        })
    }


    render () {
        return (
            <>
            <Header />
            <div className={classes.ProjectContainer}>
                {this.state.project.map((project) => {
                    return (
                        <div key={project.id} className={classes.ProjectContainerInner}>
                            <h2>{project.title}</h2>
                            <img onClick={() => this.moreInfo(project.id)} src={project.image} alt={project.title}></img>
                            {/* {USE A TAG} */}
                        </div>
                    )
                })}
            </div>
            </>
        );
    }
}

export default ProjectShowcase;