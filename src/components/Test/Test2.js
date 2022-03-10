
import React, { useState, useContext } from "react"
import { serverUrl } from '../../auth/cfg';

function Test2() {

/*
  const fetchData = async (str) => {

    const data = []
    if (str === 1) {
      for (let i = 0; i <= 2; i++) {
        let data = {
          "Eventdatetime0": "2022-03-01T00:00:00",
          "Eventdatetime1": "2122-03-01T23:59:59",
          "Event": i,
          "Checked": 0
        }
        query(data)
        async function query(Body) {
          const str = serverUrl + "/querybook/";
          await fetch(str, {
            method: "POST",
            body: JSON.stringify(Body)
          })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
              console.log('response.length='+response.length)
              data[i]=response
            })
        }
      }//end for
      const fdata = Array.prototype.push.apply(data[0],data[1],data[2]);
      console.log(fdata)
    } //end if

    else {
      let data = {
        "Eventdatetime0": "2022-03-01T00:00:00",
        "Eventdatetime1": "2122-03-01T23:59:59",
        "Event": str,
        "Checked": 0
      }
      query(data)
      function query(Body) {
        const str = serverUrl + "/querybook/";
        fetch(str, {
          method: "POST",
          body: JSON.stringify(Body)
        })
          .then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => console.log('Sucess', response))
      }
    }
  }
*/


function combine(){

  const a=[{"ID":1 , "name":"ddd"},{"ID":2 , "name":"ccc"}]
  const b=[{"ID":3 , "name":"eee"},{"ID":4 , "name":"fff"}]
console.log(a)
console.log(b)

}

    return (
      <>
        <button onClick={()=>combine()}> 合併陣列物件 </button>
      </>
    )
}
  
export default Test2;