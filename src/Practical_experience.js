import { useState } from "react";

const Practical_exp_form=({handleSubmit,isSubmit,isedit ,handleEdit})=>{
    const[companyname,setcompanyname]=useState('')
    const[Position,setposition]=useState('')
    const[Responsibilites,setresponsibilities]=useState('')
    const[date,setdate]=useState('')
    return(
     <div  className="practical_info">
        <h2>Practical experience</h2>
       {(!isSubmit || isedit) &&  <form>
       <label>Company Name:</label>
       <input type="text"   value={companyname}  onChange={(e)=>setcompanyname(e.target.value)}></input>
       <label>Position:</label>
       <input  type="text"  value={Position}  onChange={(e)=>setposition(e.target.value)}></input>
       <label>Main  Responsibilites:</label>
        <textarea  value={Responsibilites} onChange={(e)=>setresponsibilities(e.target.value)}></textarea>
       <label>date from and until when you worked for the company</label>
       <input type="text"  value={date}  onChange={(e)=>setdate(e.target.value)}></input>

      

       <button onClick={handleSubmit}>Submit</button>
        </form>}
       {isSubmit && (
        <div>
        <p>{companyname}</p>
        <p>{Position}</p>
        <p>{Responsibilites}</p>
        <p>{date}</p>
        <button onClick={handleEdit}>Edit</button>
        </div>
       )}
     </div>
    )
}
export default Practical_exp_form;