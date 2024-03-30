import { useState } from "react";

const Educational_Form=({isedit,isSubmit})=>{
    const[schoolname,setschoolname]=useState('')
    const[titleofstudy,settitleofstudy]=useState('')
    const[date,setdate]=useState('')
    return(
     <div  className="educational_info">
        <h2>Educational Experience</h2>
        {(!isSubmit ||  isedit) && <form>
        <label>School Name:</label>
        <input type="text"  value={schoolname}  onChange={(e)=> setschoolname(e.target.value)}></input>
        <label>Title of study:</label>
        <input type="text"  value={titleofstudy} onChange={(e)=>  settitleofstudy(e.target.value)}></input>
        <label>Date of study:</label>
        <input type="date"  value={date}  onChange={(e)=> setdate(e.target.value)}></input>
       </form>}
         {isSubmit  && (
            <div>
                <p>{schoolname}</p>
                <p>{titleofstudy}</p>
                <p>{date}</p>
                
                
            </div>
         )}
     </div>
    )

}
 export default Educational_Form;