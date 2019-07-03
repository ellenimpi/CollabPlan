
import React from 'react'
import { Link } from 'react-router-dom'
import Signedinlinks from './Signedinlinks'
import Signedoutlinks from './Signedoutlinks'
import { connect } from 'react-redux'

const Navbar = (props) => {

  const { auth, profile } = props;
  const links = auth.uid ? <Signedinlinks profile = {profile}/> : <Signedoutlinks/>
  console.log("initials:", profile);
  return (
    <nav className="nav-wrapper grey darken-4">
      <div className="container">
        <Link to='/' className="brand-logo">ProjectPlan</Link>
        { links }
      </div>
    </nav>
  )
}

const mapStateToProps = (state) =>{
  console.log("state:",state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

//connect connects this component to the redux store
export default connect(mapStateToProps)(Navbar)