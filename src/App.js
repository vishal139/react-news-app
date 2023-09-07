import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  const pageSize = 9;
  const apikey = process.env.REACT_APP_API_KEY;
  return (
    <>
      <Router>
        <div>
          <Navbar />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="general"
                  pageSize={pageSize}
                  apikey={apikey}
                  heading={"general"}
                  Country={"IN"}
                  category={"general"}
                />
              }
            >
              {" "}
            </Route>
            <Route
              exact
              path="/Business"
              element={
                <News
                  key="business"
                  pageSize={pageSize}
                  apikey={apikey}
                  heading={"business"}
                  Country={"IN"}
                  category={"business"}
                />
              }
            >
              {" "}
            </Route>
            <Route
              exact
              path="/Entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={pageSize}
                  apikey={apikey}
                  heading={"entertainment"}
                  Country={"IN"}
                  category={"entertainment"}
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={pageSize}
                  apikey={apikey}
                  heading={"health"}
                  Country={"IN"}
                  category={"health"}
                />
              }
            >
              {" "}
            </Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={pageSize}
                  apikey={apikey}
                  heading={"science"}
                  Country={"IN"}
                  category={"science"}
                />
              }
            >
              {" "}
            </Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={pageSize}
                  apikey={apikey}
                  heading={"sports"}
                  Country={"IN"}
                  category={"sports"}
                />
              }
            >
              {" "}
            </Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={pageSize}
                  apikey={apikey}
                  heading={"technology"}
                  Country={"IN"}
                  category={"technology"}
                />
              }
            >
              {" "}
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
