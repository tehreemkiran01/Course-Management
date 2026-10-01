import { useContext } from "react";
import { CourseContext } from "../CourseContext";

function AdminDashboard() {
  const { courses } = useContext(CourseContext);

  const activeCourses = courses.filter(
    (course) => course.status === "active"
  ).length;

  const inactiveCourses = courses.filter(
    (course) => course.status !== "active"
  ).length;

  const totalCategories = new Set(
    courses.map((course) => course.category)
  ).size;

  return (
    <div className="admin-page">

      <div className="admin-header">
        <span className="admin-badge">⚙️ Administration</span>

        <h1>Admin Dashboard</h1>

        <p>
          Manage your courses and keep track of your learning platform.
        </p>
      </div>

      <div className="stats-container">

        <div className="stat-card teal-card">
          <div className="stat-icon">📚</div>
          <h3>Total Courses</h3>
          <p>{courses.length}</p>
        </div>

        <div className="stat-card blue-card">
          <div className="stat-icon">✅</div>
          <h3>Active Courses</h3>
          <p>{activeCourses}</p>
        </div>

        <div className="stat-card orange-card">
          <div className="stat-icon">⏸️</div>
          <h3>Inactive Courses</h3>
          <p>{inactiveCourses}</p>
        </div>

        <div className="stat-card purple-card">
          <div className="stat-icon">🏷️</div>
          <h3>Total Categories</h3>
          <p>{totalCategories}</p>
        </div>

      </div>

      <div className="admin-action">
        <div>
          <h2>Course Management</h2>
          <p>
            Add a new course and expand your learning platform.
          </p>
        </div>

        <button
          className="add-course-button"
          onClick={() =>
            (window.location.href = "/admin/courses/add")
          }
        >
          + Add New Course
        </button>
      </div>

    </div>
  );
}

export default AdminDashboard;