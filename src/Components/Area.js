import React from 'react';
import { useState } from 'react';

function fun (ele )
{
  console.log(ele);
  ele.readOnly= true;
  console.log("Chal rha he");

}

function handleButtonOnClick (setEligibility)
{
  setEligibility(true);
}

function handleAreaOnClick(eligibility, event, setEligibility)
{

  if(eligibility){

    console.log(event.clientX);
    console.log(event.clientY);
    

    var e = document.querySelector('.appendtext');
    console.log(e);
    var x = document.createElement("TEXTAREA");
    x.style.position = "absolute";
    x.style.left = event.clientX+'px';
    x.style.top = event.clientY+'px';
  
    e.appendChild(x);
    x.addEventListener("click", fun, false);
    setEligibility(false);}

}


function Area() {
  const [eligibility, setEligibility] = useState(false);

  return (
    <div className='container' onClick={(event)=>handleAreaOnClick(eligibility, event, setEligibility)}>
      <button type="button" className="btn btn-light" onClick={()=>handleButtonOnClick(setEligibility) } >Text</button>
      <div  className='appendtext' style={{backgroundColor : "white", height: "400px" , width : "800px"}}></div>

    </div>
  )
}

export default Area;