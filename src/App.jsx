import { useState } from "react";


const App = () => {
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [Task, setTask] = useState([])
  const submithandler =(e) => {
e.preventDefault()
const copyTask = [...Task];
copyTask.push({title,details});
setTask(copyTask);
console.log(copyTask);

setTitle("");
setDetails("");
  }
  const deleteNote = (idx)=>{
    const copyTask = [...Task];
    copyTask.splice(idx,1);
    setTask(copyTask)

  }
  return (
    <div className='h-screen bg-black lg:flex  text-white '>
      <form onSubmit={ (e) => {submithandler(e)}} className='flex p-10 lg:w-1/2 items-start  flex-col gap-4 '>
        <h1 className='text-3xl font-bold '>Add Notes</h1>
     
      
       { /* pahla input for heading */}

          <input value={title} onChange={(e)=>{ setTitle(e.target.value) }} className='px-5 outline-none font-medium w-full py-2 border-2 rounded  ' type="text" placeholder=' Enter Notes heading  '/>
     
       { /* DETAILED INPUT */}
          
        <textarea value={details}  onChange={(e)=>{
          setDetails(e.target.value)
        }} className='px-2  font-medium  w-full h-30 rounded border-2 ' type="text" placeholder='Write Details' />
       
        <button className='px-5 w-full py-2 bg-white rounded text-black active:scale-95 '>Add Notes</button>
   
      
      </form>
     <div className='lg:w-1/2 lg:border-l p-10 '>
      <h1 className='text-3xl font-bold '>Your Notes</h1>
     <div className='flex mt-5 overflow-auto  gap-5 h-[90%] justify-start items-start flex-wrap'>
            
             
             {Task.map(function(elem,idx){
              return <div key= {idx} className="flex justify-between flex-col items-start relative h-52 py-9 px-4 w-40 rounded-xl bg-cover bg-[url('https://imgs.search.brave.com/pCoCe5YPIJki9c8Eu94uAF4g55o-BawHsAQTImhJCok/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzcv/MTUyLzY3MS9zbWFs/bC9zdGlja3ktbm90/ZS1wYXBlci1iYWNr/Z3JvdW5kLWZyZWUt/cG5nLnBuZw')] "> 
                 
             <div>
 <h3 className="text-black text-lg leading-tight font-bold">{elem.title}</h3>
              <p className=" mt-3 text-xs font-medium text-gray-700 leading-tight ">
                {elem.details}
              </p>

             </div>
<button onClick={()=>{
  deleteNote(idx)
}} className="w-full active:scale-95 bg-red-600 py-1 text-xs rounded font-bold text-white"> Delete </button>
              </div>
             })}          
     </div>
     </div>
    </div>
  )
}

export default App