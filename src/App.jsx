import { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Task from './pages/Task/Task';
import {images} from "./db/images";
import { useBrowser } from "./context/browser-context";

function App() {

  const { name, browserDispatch } = useBrowser();
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {

    const bgImage = images[Math.floor(Math.random() * images.length)].image;
    setBackgroundImage(bgImage);

    const name = localStorage.getItem("userName");
    console.log(name)

    browserDispatch({
      type: "USER_NAME",
      payload: name
    });

  }, [])

  
  return (
    <div className='app' style={{backgroundImage: `url("${backgroundImage}")`}}>
      {name ? <Task /> : <Home />}
    </div>
  );
}

export default App;
