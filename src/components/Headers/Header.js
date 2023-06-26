// import { useState } from "react";


// const Header = ({data, setData}) => {
//     const [text, setText]=useState('')
//     const addTodo = () =>{
//         setData([{
//         completed:false,
//         important:false,
//         delected:false,
//         correct:false,
//         id:Math.random(),
//         text,
//         }, ...data])
//     }
//     return (
//         <div className="header">
//             <button onClick={addTodo} className="circle-btn">+</button>
//             <input onChange={e =>{
//                 setText(e.target.value)
//             }} type="text" />
//         </div>
//     );
// }

// export default Header;



import React, { useState } from "react";


const Header = ({ data, setData, handleAddTodo }) => {
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim() !== "") {
      setData([
        {
          completed: false,
          important: false,
          deleted: false,
          correct: false,
          id: Math.random(),
          text,
        },
        ...data,
      ]);
      setText("");
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="header">
      <button onClick={addTodo} className="circle-btn">
        +
      </button>
      <input onChange={handleChange} type="text" value={text} />
    </div>
  );
};

export default Header;
