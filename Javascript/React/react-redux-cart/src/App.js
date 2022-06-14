import { useSelector } from "react-redux/es/exports";

import LoginForm from './Components/LoginForm'
import Home from "./Components/Home";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  console.log(isLoggedIn);
  return (
    <div className="">
      {!isLoggedIn && <LoginForm />}
      {isLoggedIn && <Home />}
    </div>
  );
}

export default App;
