import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const pageSize = 5;
  const apikey = process.env.REACT_APP_NEWS_APIKEY;

  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <LoadingBar height={2} color="#f11946" progress={progress} />
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <News 
              setProgress={setProgress}
              apiKey={apikey}
              key="general"
              pagesize={pageSize}
              country="in"
              category="general"
            />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <News
              setProgress={setProgress}
              apiKey={apikey}
              key="science"
              pagesize={pageSize}
              country="in"
              category="science"
            />
          }
        />
        <Route
          exact
          path="/technology"
          element={
            <News
              setProgress={setProgress}
              apiKey={apikey}
              key="technology"
              pagesize={pageSize}
              country="in"
              category="technology"
            />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <News
              setProgress={setProgress}
              apiKey={apikey}
              key="sports"
              pagesize={pageSize}
              country="in"
              category="sports"
            />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <News
              setProgress={setProgress}
              apiKey={apikey}
              key="health"
              pagesize={pageSize}
              country="in"
              category="health"
            />
          }
        />
        <Route
          exact
          path="/business"
          element={
            <News
              setProgress={setProgress}
              apiKey={apikey}
              key="business"
              pagesize={pageSize}
              country="in"
              category="business"
            />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <News
              setProgress={setProgress}
              apiKey={apikey}
              key="entertainment"
              pagesize={pageSize}
              country="in"
              category="entertainment"
            />
          }
        />
      </Routes>
    </Router>
  );
};
export default App;
