import { useContext } from "react";
import { CourseContext } from "../CourseContext";

function Courses() {
  const { courses, deleteCourse } = useContext(CourseContext);

  return (
    <div className="courses-page">

      <div className="courses-header">
        <span className="courses-badge">📚 Our Learning Platform</span>

        <h1>Explore Our Courses</h1>

        <p>
          Discover courses designed to help you learn new skills
          and achieve your goals.
        </p>
      </div>

      <div className="courses-container">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>

            <div className="course-icon">📖</div>

            <h2>{course.title}</h2>

            <p className="course-description">
              {course.description}
            </p>

            <div className="course-info">
              <p>
                <strong>👨‍🏫 Instructor:</strong> {course.instructor}
              </p>

              <p>
                <strong>💰 Price:</strong> PKR {course.price}
              </p>

              <p>
                <strong>⏱ Duration:</strong> {course.duration}
              </p>

              <p>
                <strong>🏷 Category:</strong> {course.category}
              </p>
            </div>

            <div className="course-actions">

              <button
                className="edit-button"
                onClick={() =>
                  window.location.href =
                    `/admin/courses/edit/${course.id}`
                }
              >
                Edit
              </button>

              <button
                className="delete-button"
                onClick={() => deleteCourse(course.id)}
              >
                Delete
              </button>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Courses;