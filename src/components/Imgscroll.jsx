import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Imgscroll=()=>{
    const [flag, setFlag]=useState(false);
    return (
        <div className="w-full h-screen bg-slate-200 flex justify-center items-center">
            <div className="w-64 h-72 bg-slate-100 flex overflow-hidden relative">
                <img className={`w-full h-full transition-all shrink-0 ${flag===false ? "-translate-x-[0%]": "-translate-x-[100%]"} object-cover rounded`} src="https://images.unsplash.com/photo-1497340525489-441e8427c980?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img className={`w-full h-full transition-all ease-in delay-75 shrink-0 ${flag===false ? "-translate-x-[0%]": "-translate-x-[100%]"} object-cover rounded`} src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <span onClick={()=>setFlag(()=>!flag)} className="w-10 h-10 hover:cursor-pointer flex items-center justify-center rounded-full absolute z-10 bg-[#dadada7b]  bottom-0 left-1/2 -translate-x-[50%] -translate-y-[50%]"><FaArrowRight/></span>
            </div>

        </div>
    )
}

export default Imgscroll;