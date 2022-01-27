import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Redirect,
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import "./App.css";
import Collection from "./pages/collections/Collection";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Search from "./pages/search/Search";
import Signup from "./pages/sign-up/Signup";
import Trending from "./pages/trending/Trending";
import Verified from "./pages/verified/Verified";
import { userAction } from "./redux/user";
import Layout from "./ui/Layout";
import "./App.css";

const PrivateRoutes = ({ component: Component, ...rest }) => {
  const isLogin = useSelector((s) => s.user.isLogin);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? (
          <Component {...props} />
        ) : (
          <>
            <Redirect to="/login" />
          </>
        )
      }
    />
  );
};
// const PrivateRoutes = ({ children, ...rest }) => {
//   const isLogin = useSelector((s) => s.user.isLogin);
//   return (
//     <Route
//       {...rest}
//       render={() => (isLogin ? children : <Redirect to="/login" />)}
//     />
//   );
// };
const PublicRoutes = ({ component: Component, ...rest }) => {
  const isLogin = useSelector((s) => s.user.isLogin);

  return (
    <Route
      {...rest}
      render={(props) =>
        !isLogin ? (
          <Component {...props} />
        ) : (
          <>
            <Redirect to="/" />
          </>
        )
      }
    />
  );
};
function App() {
  const isLogin = useSelector((s) => s.user.isLogin);
  const dispatch = useDispatch();
  console.log(isLogin);
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      dispatch(userAction.setLogIn(false));
    } else {
      dispatch(userAction.setLogIn(true));
    }
  }, [dispatch]);

  return (
    <>
      {/* <Router> */}
      {/* {isLogin ? ( */}
      {/* <div className="app"> */}
      <Layout>
        <Router>
          <Switch>
            <PrivateRoutes path="/" exact>
              <Redirect to="/home" />
            </PrivateRoutes>
            <PrivateRoutes path="/home" exact component={Home} />
            <PrivateRoutes path="/trending" exact component={Trending} />
            <PrivateRoutes path="/verified" exact component={Verified} />
            <PrivateRoutes path="/collection" exact component={Collection} />
            <PrivateRoutes path="/search" exact component={Search} />
            <PublicRoutes path="/login" exact component={Login} />
            <PublicRoutes path="/signup" exact component={Signup} />
          </Switch>
        </Router>
      </Layout>
      {/* </div> */}
      {/* ) : (
          <div style={{ margin: "10%" }}> */}
      {/* <Switch>
          <PrivateRoutes1 path="/login" exact component={Login} />
          <PrivateRoutes1 path="/signup" exact component={Signup} />
        </Switch> */}
      {/* </div>
        )} */}
      {/* </Router> */}
    </>
  );
}

export default App;
