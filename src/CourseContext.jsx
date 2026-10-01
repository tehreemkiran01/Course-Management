import { createContext, useEffect,useState } from "react";
import initialCourses from "./data/initialCourses";

export const CourseContext = createContext();

export function CourseProvider({ children }) {
  const [courses, setCourses] = useState(() => {
  const savedCourses = localStorage.getItem("courses");
  return savedCourses ? JSON.parse(savedCourses) : initialCourses;
});

  const addCourse = (course) => {
    setCourses((prevCourses) => [
      ...prevCourses,
      {
        ...course,
        id: Date.now(),
      },
    ]);
  };

  const updateCourse = (updatedCourse) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === updatedCourse.id ? updatedCourse : course
      )
    );
  };
const deleteCourse = (courseId) => {
  setCourses((prevCourses) =>
    prevCourses.filter((course) => course.id !== courseId)
  );
};
  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);
return (
    <CourseContext.Provider value={{ courses, addCourse, updateCourse, deleteCourse }}>
      {children}
    </CourseContext.Provider>
  );
}