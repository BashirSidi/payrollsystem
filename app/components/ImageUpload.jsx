/* eslint-disable @next/next/no-img-element */
import { 
  Box
} from '@mui/material'
import React from 'react'

const ImageUpload = ({
  onChange,
  src
}) => {
  return (
    <Box>
      <label htmlFor="photo-upload" className="custom-file-upload fas">
        <div className="img-wrap img-upload" >
          <img alt='image upload' for="photo-upload" src={src}/>
        </div>
        <input id="photo-upload" type="file" onChange={onChange}/> 
      </label>
    </Box>
  )
}

export default ImageUpload