import React, { useState } from 'react';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const themeStyles = {
    backgroundColor: darkTheme ? 'black' : 'white',
    color: darkTheme ? 'white' : 'black',
  };

  return (
    <div style={themeStyles}>
      <h1>Приложение</h1>
      <button onClick={toggleTheme}>
        {darkTheme ? 'Светлая тема' : 'Темная тема'}
      </button>
      <p>Некоторый контент на вашей странице.</p>
    </div>
  );
}

export default App;





















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
