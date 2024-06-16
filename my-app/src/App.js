// import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Button from "./components/examples/Button";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => 
      setData(response.data))
      .catch(error =>
      console.log('Error fetching data', error));
  }, []);

  return (
    <div>
      <h1> Welcome to my React App!</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <Button label="Click Me!" />
    </div>
  );
};

export default App;
