import { Link, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
    <Navbar />
    <Outlet>
      <Link to='/invoices'>Invoices</Link>
    </Outlet>
    </>
  );
}

export default App;
