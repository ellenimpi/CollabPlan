//clas based component because it needs to have a state

import React, { Component } from 'react'
import Projectlist from './Projectlist'
import Notifications from './Notifications'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Redirect} from 'react-router-dom'


class Dashboard extends Component {
  render() {
      const { projects, auth } = this.props;
      console.log("state is:", auth.uid);
      if (!auth.uid) return <Redirect to ='/signin'/>
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <Projectlist projects = { projects } />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
    console.log("dashboard state: ", state);
    return{
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'projects'}
  ])
)(Dashboard)