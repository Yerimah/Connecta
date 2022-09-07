import React from 'react'
import Pexels4 from '../assets/pexels-4.jpg'
import Pexels5 from '../assets/pexels-5.jpg'
import Pexels6 from '../assets/pexels-6.jpg'
import Pexels7 from '../assets/pexels-7.jpg'

const Gallery = () => {
  return (
    <>
      <input type="file" name='photo' id='addPhotoInput' />
      <label htmlFor='addPhotoInput'>
        <i className="add-photo-button fas fa-plus-square"></i>
      </label>

      <section className="gallery">
        <div className="item">
          <img src={Pexels4} className="item-image" alt='' />
          <button className="delete-button">Delete</button>
        </div>
        <div className="item">
          <img src={Pexels5} className="item-image" alt='' />
          <button className="delete-button">Delete</button>
        </div>
        <div className="item">
          <img src={Pexels6} className="item-image" alt='' />
          <button className="delete-button">Delete</button>
        </div>
        <div className="item">
          <img src={Pexels7} className="item-image" alt='' />
          <button className="delete-button">Delete</button>
        </div>
      </section>
    </>
  )
}

export default Gallery