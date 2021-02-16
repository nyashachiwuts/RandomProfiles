import React from 'react'
import { Link } from 'react-router-dom'
import pin from "./home.png";

const ProfileListView = ({ setID, resources }) => {
  return (
    <div className="master">
      <h1>Profiles</h1>
      {resources.map((profile, i) => (
        <Link to={`/user/${i}`} key={i} style={{ textDecoration: 'none' }}>
          <div className="card" onClick={() => setID(profile.login.uuid)}>
            <img className="profile-picture" src={profile.picture.thumbnail} alt="Profile Thumbnail"/>
            <div>
              <h3 className="profile-name">{profile.name.first} {profile.name.last}</h3>
              <p className="profile-city"><img style={{width: '14px', marginRight: '4px', marginTop: '8px'}} src={pin}/>{profile.location.city}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ProfileListView
