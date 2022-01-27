import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "../api/firebase";
const initialState = {
  userDetails: null,
  isLogin: false,
};
export const fetchSignin = createAsyncThunk(
  "fetchsignin",
  async ({ signin, history, dispatch }) => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, signin.email, signin.pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        localStorage.setItem("token", user?.accessToken);
        const userDetails = {
          email: user?.email,
        };

        localStorage.setItem("userDetails", JSON.stringify(userDetails));
        dispatch(userAction.setUser(user.email));
        dispatch(userAction.setLogIn(true));
        history.push("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  }
);
export const fetchLogin = createAsyncThunk(
  "fetchlogin",
  async ({ login, history, dispatch }) => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, login.email, login.pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("token", user?.accessToken);
        const userDetails = {
          email: user?.email,
        };

        localStorage.setItem("userDetails", JSON.stringify(userDetails));
        dispatch(userAction.setUser(user?.email));
        dispatch(userAction.setLogIn(true));
        history.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  }
);
export const fetchFacebookSignin = createAsyncThunk(
  "facebooksignin",
  async ({ history, dispatch }) => {
    const provider = new FacebookAuthProvider();
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((re) => {
        const user = re.user;
        console.log(user?.reloadUserInfo);
        localStorage.setItem("token", user?.accessToken);
        const userDetails = {
          all: user?.reloadUserInfo,
        };
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
        // dispatch(userAction.setUser(user?.email));
        dispatch(userAction.setLogIn(true));
        history.push("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.userDetails = action.payload;
    },
    setLogIn(state, action) {
      state.isLogin = action.payload;
    },
  },
});
export const userAction = userSlice.actions;
