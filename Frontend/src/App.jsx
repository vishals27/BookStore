import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./component/home/Home";
import Courses from "./component/courses/Courses";
import Signup from "./component/Signup/Signup";
import { useAuth } from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";
import Contacts from "./component/Contact/Contact";
import About from "./component/About/About";


function App() {
  const [authUser, setAuthUser] = useAuth();

  return (
    <>

      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/courses" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
        </Routes>
        <Toaster />
      </div>


    </>
  )
}

export default App