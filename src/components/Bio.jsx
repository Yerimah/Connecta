import React, { useState } from 'react'
import getPhotoUrl from 'get-photo-url'
import Profile from '../assets/profileIcon.svg'

const Bio = () => {
  const [userDetails, setUserDetails] = useState({
    name: 'Daniel Yerimah',
    about: 'Building Dyv.io - Learn and Be more',
  })

  const [editFormIsOpen, setEditFormIsOpen] = useState(false)
  const [profilePhoto, setProfilePhoto] = useState(Profile)

  const updateUserDetails = (e) => {
    e.preventDefault()
    setUserDetails({
      name: e.target.nameOfUser.value,
      about: e.target.aboutUser.value,
    })

    setEditFormIsOpen(false)
  }

  const updateProfilePhoto = async () => {
    const newProfilePhoto = await getPhotoUrl('#profilePhotoInput')
    setProfilePhoto(newProfilePhoto)
  }

  const editButton = <button onClick={() => setEditFormIsOpen(true)}>Edit</button>

    const editForm = (
      <form onSubmit={(event) => updateUserDetails(event)}>
        <input type="text" id='' name="nameOfUser" placeholder='Your name'/>
        <input type="text" id='' name="aboutUser" placeholder='About you'/>
        <br />
        <button type='button' className='cancel-button' onClick={() => setEditFormIsOpen(false)}>Cancel</button>
        <button type='submit'>Save</button>
      </form>
    )
  return (
    <section className='bio'>
      <input type="file" accept='image/*' name='photo' id='profilePhotoInput' />
      <label htmlFor='profilePhotoInput' onClick={updateProfilePhoto}>
        <div className="profile-photo" role="button" title="click to edit photo">
          <img src={profilePhoto} alt="Profile Icon" />
        </div>
      </label>
      
      <div className="profile-info">
        <p className="name">{userDetails.name}</p>
        <p className="about">{userDetails.about}</p>
        {editFormIsOpen ? editForm : editButton}
      </div>
      
      
    </section>
  )
}

export default Bio