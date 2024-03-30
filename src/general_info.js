import { useState } from "react";

const General_form=()=>{
  const [Name,setname]=useState('')
  const[email,setemail]=useState('')
  const[number,setnumber]=useState('')
  const[isSubmit,setisSubmit]=useState(false)
  const[isedit,setisedit]=useState(false)
  const handleSubmit=(e)=>{
     e.preventDefault()
     setisSubmit(true)
     setisedit(false)
  }
   const handleEdit=()=>{
       setisedit(true)
       setisSubmit(false)
   }
    return(
        <div className="general_info">
          <h2>General Informations</h2>
         {  (!isSubmit || isedit) && <form  onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" value={Name}  onChange={(e)=>setname(e.target.value)}></input>
            <label>Email:</label>
            <input type="email"  value={email}  onChange={(e)=> setemail(e.target.value)}></input>
            <label>Phone No:</label>
            <input  type="text"  value={number}  onChange={(e)=> setnumber(e.target.value)}></input>
            <button>Submit</button>
         </form> }
         {isSubmit && (
            <div>
                <p>{Name}</p>
                <p>{email}</p>
                <p>{number}</p>
                <button  onClick={handleEdit}>Edit</button>
                </div>
         )}
      </div>
    ) 
}

 export default General_form;