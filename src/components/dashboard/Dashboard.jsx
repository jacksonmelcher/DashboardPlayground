import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../project/ProjectList';
import MyStats from '../dashboard/MyStats';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render () {
    const { projects } = this.props;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s8">
            <ProjectList projects={projects}/>
          </div>
          <div className="col s4">
            <Notifications />
          </div>
          <div className="col s4">
            <MyStats />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  }
}

export default connect(mapStateToProps)(Dashboard);
