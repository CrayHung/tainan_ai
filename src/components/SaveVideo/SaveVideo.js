import React from 'react'

export default function SaveVideo({props}) {
    //console.log(props)
    const videosrc = '"'+'./video/' + props+'"'
  return (
    <>
    <a href={videosrc} download>
        <button>下載</button>
    </a>
    </>
  )
}
