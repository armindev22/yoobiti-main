import React, { useEffect } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
// import Home from "./Home";
// import Editor from "./Editor";
import { pageLoad } from "./redux/actions/pageAction";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";


const Layout = React.lazy(() => import("./container/Layout"));

function App() {
  const dispatch = useDispatch();



  useEffect(() => {
    pageLoad()(dispatch);
  }, [dispatch]);

  return (
    <BrowserRouter>
      <React.Suspense fallback={<div />}>
        <Switch>
          <Route
            path="/"
            name="Layout"
            render={(props) => <Layout {...props} />}
          />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
