/*
* 此component未用到
* 但這種寫法可以列印多個組件
* 先留著 不見得有用
*/

import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import ReactToPrint from "react-to-print";
import Body from "../Body/Body.js"

export default function PrintComponent() {
  let componentRef = useRef();
  return (
    <>
      <div >
        {/* 要列印的component(Body 並先將其不顯示出來) , 如果有多個component要印可以再用一個component包起來*/}
        <div style={{ display: "none" }}>
          <Body ref={(el) => (componentRef = el)} />
        </div>

        {/* 可用超連結 <a href="" 觸發trigger  ,  這邊用<button> */}
        <ReactToPrint
          trigger={() => <Button>列印</Button>}
          content={() => componentRef}
        />

      </div>
    </>
  );
}
