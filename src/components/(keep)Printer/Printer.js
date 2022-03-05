/*
呼叫ComponentToPrint.js中的components
*/
import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { ComponentToPrint } from './ComponentToPrint.js';


const Printer = () => {
  const componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => <button>列印</button>}
        content={() => componentRef.current}
      />
      
      <ComponentToPrint ref={componentRef} />
    </div>
  );
};

export default Printer