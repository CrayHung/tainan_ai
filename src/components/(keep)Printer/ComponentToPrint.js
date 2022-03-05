/*
將要列印的components放在<div>中, 用空格隔開即可
*/

import React from 'react'
import BodyTable from '../BodyTable/BodyTable.js';


export const ComponentToPrint = React.forwardRef((props, ref) => {
    return (
      <div style={{ display: "none" }}>
            <div ref={ref}>
            <BodyTable/>
            
            </div> 
      </div>
    );
  });

//            