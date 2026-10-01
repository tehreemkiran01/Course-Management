import { useState, useContext } from "react";
import { CourseContext } from "../CourseContext";

function AddCourse() {
  const { addCourse } = useContext(CourseContext);

  const [course, setCourse] = useState({
    title: "",
    description: "",
    instructor: "",
    price: "",
    duration: "",
    category: "",
    status: "active",
  });

  const handleChange = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !course.title ||
      !course.description ||
      !course.instructor ||
      !course.price ||
      !course.duration ||
      !course.category
    ) {
      alert("Please fill all fields.");
      return;
    }

    addCourse({
      ...course,
      price: Number(course.price),
    });

    alert("Course added successfully!");

    setCourse({
      title: "",
      description: "",
      instructor: "",
      price: "",
      duration: "",
      category: "",
      status: "active",
    });
  };

  return (
    <div className="add-course-page">

      <div className="add-course-header">
        <span className="add-course-badge">
          ➕ Course Management
        </span>

        <h1>Add New Course</h1>

        <p>
          Create a new course and add it to your learning platform.
        </p>
      </div>

      <form
        className="course-form"
        onSubmit={handleSubmit}
      >

        <div className="form-group">
          <label>Course Title</label>
          <input
            type="text"
            name="title"
            value={course.title}
            onChange={handleChange}
            placeholder="Enter course title"
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={course.description}
            onChange={handleChange}
            placeholder="Enter course description"
            rows="4"
          ></textarea>
        </div>

        <div className="form-row">

          <div className="form-group">
            <label>Instructor</label>
            <input
              type="text"
              name="instructor"
              value={course.instructor}
              onChange={handleChange}
              placeholder="Enter instructor name"
            />
          </div>

          <div className="form-group">
            <label>Price (PKR)</label>
            <input
              type="number"
              name="price"
              value={course.price}
              onChange={handleChange}
              placeholder="Enter price"
            />
          </div>

        </div>

        <div className="form-row">

          <div className="form-group">
            <label>Duration</label>
            <input
              type="text"
              name="duration"
              value={course.duration}
              onChange={handleChange}
              placeholder="Example: 8 weeks"
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={course.category}
              onChange={handleChange}
              placeholder="Example: Web Development"
            />
          </div>

        </div>

        <div className="form-group">
          <label>Status</label>

          <select
            name="status"
            value={course.status}
            onChange={handleChange}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <button
          type="submit"
          className="save-course-button"
        >
          + Add Course
        </button>

      </form>

    </div>
  );
}

export default AddCourse;