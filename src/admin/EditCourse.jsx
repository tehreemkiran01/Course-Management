import { useContext, useState } from "react";
import { CourseContext } from "../CourseContext";
import { useNavigate, useParams } from "react-router-dom";

function EditCourse() {
  const { courses, updateCourse } = useContext(CourseContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses.find(
    (course) => course.id === Number(id)
  );

  const [title, setTitle] = useState(course?.title || "");
  const [description, setDescription] = useState(
    course?.description || ""
  );
  const [instructor, setInstructor] = useState(
    course?.instructor || ""
  );
  const [price, setPrice] = useState(course?.price || "");
  const [duration, setDuration] = useState(
    course?.duration || ""
  );
  const [category, setCategory] = useState(
    course?.category || ""
  );
  const [image, setImage] = useState(course?.image || "");
  const [status, setStatus] = useState(
    course?.status || "active"
  );

  if (!course) {
    return (
      <div className="course-not-found">
        <h2>Course not found</h2>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    updateCourse({
      id: course.id,
      title,
      description,
      instructor,
      price,
      duration,
      category,
      image,
      status,
    });

    navigate("/courses");
  };

  return (
    <div className="edit-course-page">

      <div className="edit-course-header">

        <span className="edit-course-badge">
          ✏️ Course Management
        </span>

        <h1>Edit Course</h1>

        <p>
          Update the information of your existing course.
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter course title"
          />
        </div>

        <div className="form-group">
          <label>Description</label>

          <textarea
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            placeholder="Enter course description"
            rows="4"
          ></textarea>
        </div>

        <div className="form-row">

          <div className="form-group">
            <label>Instructor</label>

            <input
              type="text"
              value={instructor}
              onChange={(e) =>
                setInstructor(e.target.value)
              }
              placeholder="Enter instructor name"
            />
          </div>

          <div className="form-group">
            <label>Price (PKR)</label>

            <input
              type="number"
              value={price}
              onChange={(e) =>
                setPrice(e.target.value)
              }
              placeholder="Enter price"
            />
          </div>

        </div>

        <div className="form-row">

          <div className="form-group">
            <label>Duration</label>

            <input
              type="text"
              value={duration}
              onChange={(e) =>
                setDuration(e.target.value)
              }
              placeholder="Example: 8 weeks"
            />
          </div>

          <div className="form-group">
            <label>Category</label>

            <input
              type="text"
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              placeholder="Example: Web Development"
            />
          </div>

        </div>

        <div className="form-group">
          <label>Image URL</label>

          <input
            type="text"
            value={image}
            onChange={(e) =>
              setImage(e.target.value)
            }
            placeholder="Enter image URL"
          />
        </div>

        <div className="form-group">
          <label>Status</label>

          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <button
          type="submit"
          className="save-course-button"
        >
          ✓ Update Course
        </button>

      </form>

    </div>
  );
}

export default EditCourse;