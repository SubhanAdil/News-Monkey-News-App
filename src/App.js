import "./App.css";
import React, { useState}  from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'

import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

const App =()=> {
  //c= ' hunny';
  let pageSize=10; 

  const [progress,setProgress]=useState(0);


    return (
      <div>
        {/*Hello my first name is {c}*/}
        <Router>
          <NavBar />  
          <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
    
      />
  
          <Routes>
          <Route exect  path="/business" element={<News setProgress={setProgress}key="business" pageSize={pageSize} country={"in"} category={"business"} mine={"warning"} GGG={"SUBHAN"}/> }/>
          <Route exect  path="/entertainment" element={<News setProgress={setProgress}key="entertainment" pageSize={pageSize} country={"in"} category={"entertainment"} mine={"danger"} />}/>
          <Route exect  path="/general" element={<News setProgress={setProgress}key="general" pageSize={pageSize} country={"in"} category={"general"} mine={"success"} />}/>
          <Route exect  path="/health" element={<News setProgress={setProgress}key="health" pageSize={pageSize} country={"in"} category={"health"} mine={"primary"} />}/>
          <Route exect  path="/science" element={<News setProgress={setProgress}key="science" pageSize={pageSize} country={"in"} category={"science"} mine={"info"} />}/>
          <Route exect  path="/sports" element={<News setProgress={setProgress}key="sports" pageSize={pageSize} country={"in"} category={"sports"} mine={"dark"} />}/>
          <Route exect  path="/technology" element={<News setProgress={setProgress}key="technology" pageSize={pageSize} country={"in"} category={"technology"} mine={"secondary"} />}/>
        </Routes>
        </Router>
      </div>
    );
  
}
export default App