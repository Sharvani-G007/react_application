// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App

import React, { useEffect, useState} from 'react';
import './App.css';
import Images from './assets/index.jsx'
import Button from './components/UI/button/index.jsx'


const App = () => {
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setData(users))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <h2>Explore Users</h2>
      <p className="description">
        Click View Details to see user information.
      </p>

      <div className="user-grid">
        {data.map((user) => (
          <div className="user-card" key={user.id}>
            <div className="avatar">
              {user.name.charAt(0)}
            </div>

            <h3>{user.name}</h3>
            <p className="username">@{user.username}</p>

            <div className="info">
              <p>Email: {user.email}</p>
              <p>City: {user.address.city}</p>
              <p>Company: {user.company.name}</p>
            </div>

            <button onClick={() => setSelectedUser(user)}>
              View Details
            </button>
          </div>
        ))}
      </div>

      {selectedUser && (
        <div className="popup-bg" onClick={() => setSelectedUser(null)}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setSelectedUser(null)}>
              X
            </button>

            <h2>{selectedUser.name}</h2>
            <p>Email: {selectedUser.email}</p>
            <p>Phone: {selectedUser.phone}</p>
            <p>Website: {selectedUser.website}</p>
            <p>Street: {selectedUser.address.street}</p>
            <p>City: {selectedUser.address.city}</p>
            <p>Company: {selectedUser.company.name}</p>

            <button onClick={() => setSelectedUser(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;


// const App = () => {
//   const[counter, setCounter]= useState(0);
//   const[data,setData] = useState([]);

//   useEffect(()=>{
//     const fetchData = async ()=>{
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       const data = await response.json();
//       setData(data);
//     };
//     fetchData();
//   },[]);

//   console.log(data,"data")
//   return (
//     <div>
//       <h1 className="greet">Hello React</h1>
//       <p>Welcome to your new React application.</p>
//       <br></br>

//       <img src={Images.hero}alt="Hero Image"/><br></br>

//       <label htmlFor="name">Enter your name:</label>
//       <input type="text"id="name"name="name"></input>
//       <br></br>
//       <label htmlFor="email">Enter your email:</label>
//       <input type="email"id="email" name="email"/>
//       <br></br> 
//        <Button name="Click the Button" onClick={() => alert('Button clicked')}/> <br></br>
//       <label htmlFor="counter">Counter: {counter}</label>
//       <br></br><Button name ={'Increment'} onClick={()=> setCounter(counter+1)}/>
//         <Button name={'Decrement'} onClick={()=> setCounter(counter-1)}/>
//     </div>
//   );
// }
// export default App; 