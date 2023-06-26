import {useState} from 'react';

const Correct = ({data, setData, item, setKey,}) => {
  const [text, setText] = useState(item.text);
  const saveTodo = () =>{
    if(text.trim()){
      setData(data.map(element =>{
        if(element.id === item.id){
          return{
            ...element,
            text: text.trim(),
            correct: false,
          }
        } else {
          return element
        }
      }))
    }
  }
  return(
    <>
      <input onChange={e =>{
        setText(e.target.value)
      }} value={text} type="text" />
      <button onClick={()=>{
        setKey('correct', item.id)
      }}>cancel</button>
      <button onClick={saveTodo}>save</button>
    </>
  );
}

export default Correct;