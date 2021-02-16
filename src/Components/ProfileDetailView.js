import React from 'react'
import { useParams } from 'react-router-dom'

const ProfileDetailView = ({ resources }) => {
  const { id } = useParams()
  const user = resources[id]

  return (
    <div className="master">
      <h1>{user.name.first} {user.name.last}</h1>
      {/*<div>{JSON.stringify(user)}</div>*/}
      <div className="image-container">
        <img className="user-picture" src={user.picture.large} alt="Profile Picture"/>
      </div>
      <div className="info-container">
        <p className="category">Personal Info</p>
        <div className="biology">
          <div>{user.name.title}</div>
          <div>{user.gender}</div>
          <div>{user.dob.age}</div>
        </div>
        
        <p className="category">Location</p>
        <div className="location">
        <b>Address: </b>
          <div>{user.location.street.number} {user.location.street.name}</div>
          <div>{user.location.city}</div>
          <div>{user.location.country}</div>
        </div>

        <p className="category">Contact</p>
        <div className="contact">
          <div><b>Email: </b>{user.email}</div>
          <div><b>Cell: </b> {user.cell}</div>
          <div><b>Phone: </b>{user.phone}</div>
        </div>

        <p className="category">Profile Lifetime</p>
        <div className="profile">
          <div>{user.registered.date}</div>
          <div>Total Duration: {user.registered.age} years</div>
        </div>
      </div>

       
    </div>
  )
}

export default ProfileDetailView
