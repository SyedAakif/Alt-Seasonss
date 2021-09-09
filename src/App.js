import axios from "axios";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./scss/style.scss";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

// Pages
const Login = React.lazy(() => import("./views/pages/login/Login"));
const Register = React.lazy(() => import("./views/pages/register/Register"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));

window.axios = axios.create({
  baseURL: "https://dashboard.test.altseasons.com/admin/",
  timeout: 10000,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
});

class App extends Component {
  componentDidMount() {
    // axios.post("https://dashboard.test.altseasons.com/auth/token", {
    //   code: "b0d733c3-a316-4930-a5a5-3bec17b43fcb.cb8a144d-c92a-48bf-9752-76a82aa9f815.a4667de5-99dd-4f6c-9c16-9a10f2c1929b",
    //   redirectUri: "http://localhost:3000/admin",
    // })
    //   .then(res => {
    //     ;
    //   console.log(res.data);
    // })
  }

  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              exact
              path="/login"
              name="Login Page"
              render={(props) => <Login {...props} />}
            />
            <Route
              exact
              path="/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            />
            <Route
              exact
              path="/404"
              name="Page 404"
              render={(props) => <Page404 {...props} />}
            />
            <Route
              exact
              path="/500"
              name="Page 500"
              render={(props) => <Page500 {...props} />}
            />
            <Route
              path="/"
              name="Home"
              render={(props) => <TheLayout {...props} />}
            />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
