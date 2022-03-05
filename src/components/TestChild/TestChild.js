import React from 'react'

export default function TestChild({playVideo}) {

    return (
        <>
        <button id='playButton' onClick={playVideo}>Play!</button>
        </>
    );
}
/*
<img
                    onClick={
                        ()=>{setOpenChild(false)
                        }}
                    className='img'
                    src="https://i.epochtimes.com/assets/uploads/2019/02/1902152328382224-450x300.jpg" alt="" />
 */