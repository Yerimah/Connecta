import React from 'react'
import Profile from '../assets/profileIcon.svg'

const Bio = () => {
    const editForm = (
      <form>
        <input type="text" id='' placeholder='Your name'/>
        <input type="text" id='' placeholder='About you'/>
        <br />
        <button type='button' className='cancel-button'>Cancel</button>
        <button type='button' className='save-button'>Save</button>
      </form>
    )
  return (
    <section className='bio'>
      <div className="profile-photo" role="button" title="click to edit photo">
        <img src={Profile} alt="Profile Icon" />
      </div>
      <div className="profile-info">
        <p className="name">Daniel Yerimah</p>
        <p className="about">Building Dyv.io - Learn and Be more</p>
      </div>
      <button>Edit</button>
      {editForm}
    </section>
  )
}

export default Bio