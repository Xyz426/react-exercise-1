import React from 'react'
import imgUrl from '../assets/avatar.jpg'

const Photograph = () => {
    return(
        <div style = {{textAlign : 'center'}}>
            <img src = {imgUrl} style = {{borderRadius : 50+'%',marginTop:-120+'px'}}/>
        </div>
    )
}

export default Photograph;