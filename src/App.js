
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import auth from "./firebase/firebase.config";
import { useDispatch } from "react-redux";
import { getCandidateUser, getUser, setUser, setdisplayName, setphotoUrl, setcreatedAt, setlastLoginAt } from "./features/auth/authSlice";
import { Toaster } from 'react-hot-toast';

function App() {


  const dispatch = useDispatch();

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {

      if (user) {
        dispatch(setUser(user?.email));
        dispatch(getUser(user?.email));
        dispatch(getCandidateUser(user?.email));
        dispatch(setdisplayName(user?.displayName));
        dispatch(setphotoUrl(user?.photoURL));
        dispatch(setcreatedAt(user?.reloadUserInfo?.createdAt));
        dispatch(setlastLoginAt(user?.reloadUserInfo?.lastLoginAt));
      }

    })

  }, [dispatch]);


  return (
    <>
      <Toaster />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
