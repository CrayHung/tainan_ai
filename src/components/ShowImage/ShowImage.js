import React, { useState } from 'react'
import ShowLargeImage from '../ShowLargeImage/ShowLargeImage'

export default function ShowImage({props}) {

    const [showImg, setShowImg] = useState(false)

    //console.log('props=')
    //console.log(props)

    //const { props_imagesrc } = props
    //console.log('props_imagesrc=')
    //console.log(props_imagesrc)
    //const { car } = props
    

    const imageSrc = () => {
        const imagesrc = '/image/'+props
        return imagesrc
    }
    let img = imageSrc()
    return (
        <div>
            <img
                src={img}
                alt=""
                width='80%'
                onClick={() => {
                    setShowImg(true);
                }} />
            {showImg && <ShowLargeImage setShowImg={setShowImg} img={img}/>}
        </div>
    )
}
