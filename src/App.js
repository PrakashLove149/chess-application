// import React from 'react';
// import Chessboard from './components/Chessboard';
// import './App.css';

// const App = () => {
//   return (
//     <div className="app">
//       <h1>Chess App</h1>
//       <Chessboard />
//     </div>
//   );
// };

// export default App;




import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
       
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
     
  };

  
  return (
    <div  >
      <h1 style={{textAlign:"center"}}>Table</h1>
      <table style={{border:"1px"}} >
 
      <tr >
<td >Sno</td>
<td>Title</td>
<td>Body</td>

      </tr>
      <tbody >
        {data.map((item, i) => (
          <tr  key={i}>
          <td >{item.id}</td>
          <td>{item.title}</td>
          <td>{item.body}</td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
};

export default App;




