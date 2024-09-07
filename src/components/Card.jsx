import React from "react";

const Card = () => {
    const data = [
        {
          src: "https://images.unsplash.com/photo-1413708617479-50918bc877eb?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          heading: "Laptop-1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, neque tempore id libero obcaecati quas.",
          stock:true,
        },
        {
            src:'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            heading:'Laptop-2',
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odio, tempore id libero obcaecati quas.',
            stock:false,
        },
        {
            src:'https://images.unsplash.com/photo-1637496652486-99d500bcdd18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            heading:'Iphone',
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odio, tempore id libero obcaecati quas.',
            stock:true,
        },
        {
          src:'https://images.unsplash.com/photo-1680113728550-d0c450c578e6?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          heading:'Samsung',
          content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odio, tempore id libero obcaecati quas.',
          stock:false,
      },
      ];
  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center gap-10">
      {data.map((val,indx)=>(
        <div className="w-52 bg-zinc-100  left-1/2 top-1/2 rounded overflow-hidden">
          <div className="w-full h-32 bg-blue-300">
            <img
              className=" w-full h-full object-cover rounded " 
              src={val.src}
              alt=""
            />
          </div>
          <div className="w-full px-3 py-4 ">
            <h2 className="font-semibold">{val.heading}</h2>
            <p className="text-xs mt-3">
              {val.content}
            </p>
            <button className={`px-3 py-2 ${val.stock ? "bg-blue-500" : "bg-red-500"} mt-5 text-sm text-slate-100 rounded`}>{val.stock ? "In Stock" : "Out of Stock"}</button>
          </div>
      </div>
      ))}
      </div>
  );
};
export default Card;