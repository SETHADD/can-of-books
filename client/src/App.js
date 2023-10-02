import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [render, setRender] = useState("");
  useEffect(() => {
    show();
  }, []);

  const show = async () => {
    const API = "http://localhost:8040/books";
    const results = await axios.get(API);
    console.log(results);
    setRender(results.data);
  };

  return <div className="App">{render[0].title}</div>;
}

export default App;
