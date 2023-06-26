

// const Footer = ({status, setStatus}) => {
//     return (
//         <div className="footer">
//             <p>3 items</p>

//             <div className="footer-center">
//          <button onClick={()=>{
//             setStatus('all')
//          }}>all</button>
//          <button onClick={()=>{
//             setStatus('active')
//          }}>active</button>
//          <button onClick={()=>{
//             setStatus('completed')
//          }}>completed</button>
//          <button onClick={()=>{
//             setStatus('cart')
//          }}>cart</button>


//             </div>

//             <button>clear completed</button>


//         </div>
//     );
// }

// export default Footer;





import React from "react";

const Footer = ({ status, setStatus, todoList, data, setData }) => {
  const itemCount = todoList.length;

  return (
    <div className="footer">
      <p>{itemCount} {itemCount === 1 ? 'item' : 'items'}</p>

      <div className="footer-center">
        <button
          className={status === 'all' ? 'active' : ''}
          onClick={() => {
            setStatus('all');
          }}
        >
          all
        </button>
        <button
          className={status === 'active' ? 'active' : ''}
          onClick={() => {
            setStatus('active');
          }}
        >
          active
        </button>
        <button
          className={status === 'completed' ? 'active' : ''}
          onClick={() => {
            setStatus('completed');
          }}
        >
          completed
        </button>
        <button
          className={status === 'cart' ? 'active' : ''}
          onClick={() => {
            setStatus('cart');
          }}
        >
          cart
        </button>
      </div>

      <button>clear completed</button>
    </div>
  );
};

export default Footer;




