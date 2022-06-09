import { useEffect, useState } from "react";
import Navbar from "./Components/Axios/Navbar";
import Products from "./Components/Axios/Products/Products";
import Sidebar from "./Components/Axios/Products/Sidebar";
import Posts from "./Posts";

function App() {

  const [posts, setPosts] = useState([])


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((postdata) => setPosts(postdata))
  }, [])

  return (
    <>
      <Navbar />
      <div className="bg-slate-50 w-full h-screen flex">
        {/* <Sidebar /> */}
        <Products />
      </div>
    </>
    // <div className="bg-blue-50 fl">
    //   <h2 className="bg-blue-800 text-center py-2 m-4 rounded text-white font-semibold">Posts</h2>

    //   <div className="grid grid-cols-4 gap-2 mx-5 my-2">
    //   {posts?.map((post) => (

    //     <div key={post.id} className="shadow-lg rounded-md bg-white">
    //       <h2 className="bg-blue-800 capitalize py-4 px-6 rounded font-semibold text-white h-20 text-sm">
    //         {post.title}
    //       </h2>
    //       <p className="m-5 p-2">{ post.body}</p>
    //     </div>
    //   ))}
    //   </div>
    // </div>
  );
}

export default App;

