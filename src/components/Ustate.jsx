import React, { useState } from "react";
//basic
// const Ustate=()=>{
//     const [score, setScore]=useState(false)
//     return (
//         <div className="px-2 py-2">
//             <h2>{score.toString()}</h2>
//             <button onClick={()=>setScore(!score)} className="px-2 py-2 bg-blue-500 rounded font-semibold text-slate-100">change</button>
//         </div>

//     )
// }

//intermediate
// const Ustate=()=>{
//     const [score, setScore]=useState(12)
//     return (
//         <div className="px-2 py-2">
//             <h2>{score}</h2>
//             <button onClick={()=>setScore((prev)=>prev+1)} className="px-2 py-2 bg-blue-500 rounded font-semibold text-slate-100">change</button>
//         </div>

//     )
// }

//intermediate
// const Ustate=()=>{
//     const [score, setScore]=useState({name:'raushan', isBanned:false})
//     return (
//         <div className="px-2 py-2">
//             <h2>{score.name}</h2>
//             <h2>{score.isBanned.toString()}</h2>
//             <button onClick={()=>setScore({...score, isBanned:!score.isBanned})} className={`px-2 py-2 ${score.isBanned ? "bg-blue-500":"bg-red-500"} rounded font-semibold text-slate-100`}>change</button>
//         </div>

//     )
// }

//advanced(revise it)

// const Ustate = () => {
//   const [score, setScore] = useState({ name: "raushan", isBanned: false });
//   return (
//     <div className="px-2 py-2">
//       <h2>{score.name}</h2>
//       <h2>{score.isBanned.toString()}</h2>
//       <button
//         onClick={ () => {
//            setScore({ ...score, college1:'amrita' });
//            console.log(score);
//         }}
//         className="px-2 py-2 bg-blue-500 rounded font-semibold text-slate-100"
//       >
//         change
//       </button>
//     </div>
//   );
// };

// useState in array
// const Ustate = () => {
//   const [score, setScore] = useState([1, 2, 3, 4, 5]);
//   return (
//     <div className="px-2 py-2">
//       <h2>
//         {score.map((item) => (
//           <h2>{item}</h2>
//         ))}
//       </h2>
//       <button
//         onClick={() => setScore((score)=>{
//             return score.filter((item1, indx)=>indx!=score.length-1)
//         })}
//         className="px-2 py-2 bg-blue-500 rounded font-semibold text-slate-100"
//       >
//         remove
//       </button>
//     </div>
//   );
// };

const Ustate = () => {
  const [person, setPerson] = useState([
    { name: "raushan", age: 19 },
    { name: "shivam", age: 18 },
    { name: "rishu", age: 21 },
  ]);
  return (
    <div className="px-2 py-2">
      <h2>
        {person.map((item) => (
          <div>
            <h2>{item.name}</h2>
            <h2>{item.age}</h2>
          </div>
        ))}
      </h2>
      <button onClick={()=>setPerson(()=>person.map(item=>item.name==="shivam"?({name:'shivam', age:20}) :item))} className="px-2 py-2 bg-blue-500 rounded font-semibold text-slate-100">
        change
      </button>
    </div>
  );
};
export default Ustate;
