import General_form from "./general_info";
import  "../src/index.css"
import Educational_Form from "./Educational_info";
import Practical_exp_form from "./Practical_experience";
import { useState } from "react";


function App() {
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
  return (
    <div className="App">

      <General_form  isedit={isedit}   isSubmit={isSubmit}/>
      <Educational_Form  isedit={isedit}   isSubmit={isSubmit}/>
      <Practical_exp_form  handleSubmit={handleSubmit}  handleEdit={handleEdit}   isedit={isedit}   isSubmit={isSubmit} />
      
     
    </div>
  );
}

export default App;
