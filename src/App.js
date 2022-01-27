import { Suspense, lazy } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import { userAction } from "./redux/user";
import Layout from "./ui/Layout";
import "./App.css";
import Loader from "./ui/Loader";
const Collection = lazy(() => import("./pages/collections/Collection"));
const Home = lazy(() => import("./pages/home/Home"));
const Login = lazy(() => import("./pages/login/Login"));
const Search = lazy(() => import("./pages/search/Search"));
const Signup = lazy(() => import("./pages/sign-up/Signup"));
const Trending = lazy(() => import("./pages/trending/Trending"));
const Verified = lazy(() => import("./pages/verified/Verified"));

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
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      dispatch(userAction.setLogIn(false));
    } else {
      dispatch(userAction.setLogIn(true));
    }
  }, [dispatch]);

  return (
    <>
      <Layout>
        <Suspense fallback={<Loader />}>
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
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
