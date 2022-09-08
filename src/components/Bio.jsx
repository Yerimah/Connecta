import React, { useState } from 'react'
import Profile from '../assets/profileIcon.svg'

const Bio = () => {
  const [userDetails, setUserDetails] = useState({
    name: 'Daniel Yerimah',
    about: 'Building Dyv.io - Learn and Be more',
  })

  const updateUserDetails = (e) => {
    e.preventDefault()
    setUserDetails({
      name: e.target.nameOfUser.value,
      about: e.target.aboutUser.value,
    })
  }

    const editForm = (
      <form onSubmit={(event) => updateUserDetails(event)}>
        <input type="text" id='' name="nameOfUser" placeholder='Your name'/>
        <input type="text" id='' name="aboutUser" placeholder='About you'/>
        <br />
        <button type='button' className='cancel-button'>Cancel</button>
        <button type='submit'>Save</button>
      </form>
    )
  return (
    <section className='bio'>
      <div className="profile-photo" role="button" title="click to edit photo">
        <img src={Profile} alt="Profile Icon" />
      </div>
      <div className="profile-info">
        <p className="name">{userDetails.name}</p>
        <p className="about">{userDetails.about}</p>
      </div>
      <button>Edit</button>
      {editForm}
    </section>
  )
}

export default Bio