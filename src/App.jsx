import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Courses from "./pages/Courses";
import About from "./pages/About";
import AdminDashboard from "./pages/AdminDashboard";
import AddCourse from "./admin/AddCourse";
import { CourseProvider } from "./CourseContext";
import EditCourse from "./admin/EditCourse";
import "./App.css";


function App() {
  return (
    <CourseProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/admin/courses/edit/:id"
            element={<EditCourse />}
          />

          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About/>} />

          <Route path="/admin" element={<AdminDashboard />} />
          <Route
            path="/admin/courses"
            element={<h1>Admin Courses</h1>}
          />
          <Route
            path="/admin/courses/add"
            element={<AddCourse />}
          />
        </Routes>
      </BrowserRouter>
    </CourseProvider>
  );
}

export default App;