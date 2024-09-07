import React from "react"
const Music = ()=>{
        const data = [  { 
            src:"https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name:"Night Changes",
            description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, autem."
        },
        {
            src:"https://images.unsplash.com/photo-1474959783111-a0f551bdad25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name:"Perfect",
            description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, autem."
        },
        {
            src:"https://images.unsplash.com/photo-1483393458019-411bc6bd104e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name:"Darling",
            description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, autem."
        },
    ];
    
    const btnClicked=()=>{window.alert("button clicked")};
    return (
        <div className=" w-full h-screen bg-slate-300 flex items-center justify-center gap-4">
           {data.map((val, indx)=>(
             <div className=" w-60 bg-slate-100 rounded overflow-hidden ">
             <div className="">
                 <img className="object-cover" src={val.src} alt="" />
             </div>
             <div className="px-1 pb-1">
                 <h3 className="font-semibold mt-2">{val.name}</h3>
                 <p className="text-xs mt-2 w-full">{val.description}</p>
                 <button onClick={btnClicked} className="px-1 py-1 bg-blue-500 rounded mt-2 text-slate-100 text-sm">Download</button>
             </div>
         </div>
           )
           )
           }
        </div>
    )
}

export default Music;