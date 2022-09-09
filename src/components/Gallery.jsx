import getPhotoUrl from 'get-photo-url'
import React, { useEffect, useState } from 'react'
import { db } from '../dexie'

const Gallery = () => {
    const [allPhotos, setAllPhotos] = useState([])

    // useEffect(() => {
    //     const setPhotosFromDb = async () => {
    //         const allPhotosFromDb = await db.gallery.get('images')
    //         allPhotosFromDb && setAllPhotos(allPhotosFromDb)
    //     }
    //     setPhotosFromDb()
    // })

    const addPhoto = async () => {
      const newPhoto = {
        id: Date.now(),
        url: await getPhotoUrl('#addPhotoInput')
      }

      setAllPhotos([newPhoto, ...allPhotos])
    //   await db.gallery.put([newPhoto, ...allPhotos], 'images')
    }

  return (
    <>
      <input type="file" name='photo' id='addPhotoInput' />
      <label htmlFor='addPhotoInput' onClick={addPhoto}>
        <i className="add-photo-button fas fa-plus-square"></i>
      </label>

      <section className="gallery">
        {allPhotos.map((photo) => (
          <div className="item" key={photo.id}>
           <img src={photo.url} className="item-image" alt='photo' />
           <button className="delete-button">Delete</button>
          </div>
        ))}
        
        
      </section>
    </>
  )
}

export default Gallery