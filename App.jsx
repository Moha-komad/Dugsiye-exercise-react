// import UserCard from "./UserCard";
// import Blog from "./Blog";

// const App = () => {
//   return (
//     <>
//       <UserCard />
//       <Blog />
//     </>
//   );
// };

// export default App;
// import UserCard from "./UserCard";

// const App = () => {
//   return (
//     <div>
//       <UserCard
//         name="John Doe"
//         email="john.doe@example.com"
//       />

//       <UserCard
//         name="Jane Smith"
//         email="jane.smith@example.com"
//       />

//       <UserCard
//         name="Ali Hassan"
//         email="ali.hassan@example.com"
//       />
//     </div>
//   );
// };

// export default App;

// import ToggleButton from "./ToggleButton";

// const App = () => {
//   return (
//     <div>
//       <ToggleButton />
//     </div>
//   );
// };

// export default App;

// import { useState } from "react";

// const App = () => {
//   const [items, setItems] = useState([]);
//   const [input, setInput] = useState("");

//   const addItem = () => {
//     if (input === "") return;

//     setItems([...items, input]);
//     setInput("");
//   };

//   return (
//     <div>
//       <h1>Shopping List</h1>

//       <input
//         type="text"
//         placeholder="Enter an item"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />

//       <button onClick={addItem}>Add Item</button>

//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

// import TodoList from "./TodoList";

// const App = () => {
//   return (
//     <div>
//       <TodoList />
//     </div>
//   );
// };

// export default App;

// import { useState, useEffect } from "react";

// const App = () => {
//   const [title, setTitle] = useState("My React App");

//   useEffect(() => {
//     document.title = title;
//   }, [title]);

//   return (
//     <div>
//       <h1>Change Browser Tab Title</h1>

//       <input
//         type="text"
//         placeholder="Enter a new page title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />

//       <p>Current Page Title: {title}</p>
//     </div>
//   );
// };

// export default App;


// import { useState, useEffect } from "react";

// const App = () => {
//   const [width, setWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", handleResize);

//     // Cleanup function
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Window Resize Event</h1>

//       <h2>Window Width: {width}px</h2>
//     </div>
//   );
// };

// export default App;

// import { useState, useEffect } from "react";

// const App = () => {
//   const [time, setTime] = useState(0);
//   const [running, setRunning] = useState(false);

//   useEffect(() => {
//     let timer;

//     if (running) {
//       timer = setInterval(() => {
//         setTime((prevTime) => prevTime + 1);
//       }, 1000);
//     }

//     return () => clearInterval(timer);
//   }, [running]);

//   const startTimer = () => {
//     setRunning(true);
//   };

//   const stopTimer = () => {
//     setRunning(false);
//   };

//   const resetTimer = () => {
//     setRunning(false);
//     setTime(0);
//   };

//   return (
//     <div>
//       <h1>Stopwatch</h1>

//       <h2>{time} seconds</h2>

//       <button disabled={running} onClick={startTimer}>Start</button>
//       <button disabled={!running} onClick={stopTimer}>Stop</button>
//       <button onClick={resetTimer}>Reset</button>
//     </div>
//   );
// };

// export default App;

// import { useState } from "react";

// const App = () => {
//   const [username, setUsername] = useState("");
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState("");

//   const searchUser = async () => {
//     if (username.trim() === "") return;

//     try {
//       const response = await fetch(
//         `https://api.github.com/users/${username}`
//       );

//       if (!response.ok) {
//         setUser(null);
//         setError("User not found");
//         return;
//       }

//       const data = await response.json();

//       setUser(data);
//       setError("");
//     } catch (error) {
//       setUser(null);
//       setError("Something went wrong");
//     }
//   };

//   return (
//     <div>
//       <h1>GitHub User Search</h1>

//       <input
//         type="text"
//         placeholder="Enter GitHub username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />

//       <button onClick={searchUser}>Search</button>

//       {error && <h2>{error}</h2>}

//       {user && (
//         <div>
//           <h2>{user.name || user.login}</h2>

//           <img
//             src={user.avatar_url}
//             alt={user.login}
//             width="150"
//           />

//           <p>
//             <strong>Username:</strong> {user.login}
//           </p>

//           <p>
//             <strong>Location:</strong> {user.location || "N/A"}
//           </p>

//           <p>
//             <strong>Public Repositories:</strong> {user.public_repos}
//           </p>

//           <p>
//             <strong>Followers:</strong> {user.followers}
//           </p>

//           <p>
//             <strong>Following:</strong> {user.following}
//           </p>

//           <a
//             href={user.html_url}
//             target="_blank"
//             rel="noreferrer"
//           >
//             View GitHub Profile
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
import UserList from "./UserList";

const App = () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
    },
    {
      id: 3,
      name: "Ali Hassan",
      email: "ali@example.com",
    },
  ];

  return (
    <div>
      <UserList users={users} />
    </div>
  );
};

export default App;