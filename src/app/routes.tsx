import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { CoursesPage } from "./pages/CoursesPage";
import { CourseDetailPage } from "./pages/CourseDetailPage";
import { StudentDashboard } from "./pages/student/StudentDashboard";
import { StudentCourses } from "./pages/student/StudentCourses";
import { StudentCourseView } from "./pages/student/StudentCourseView";
import { StudentQuiz } from "./pages/student/StudentQuiz";
import { StudentProjects } from "./pages/student/StudentProjects";
import { StudentMessages } from "./pages/student/StudentMessages";
import { StudentCertificates } from "./pages/student/StudentCertificates";
import { TeacherDashboard } from "./pages/teacher/TeacherDashboard";
import { TeacherStudents } from "./pages/teacher/TeacherStudents";
import { TeacherMessages } from "./pages/teacher/TeacherMessages";
import { TeacherCourses } from "./pages/teacher/TeacherCourses";
import { TeacherProjects } from "./pages/teacher/TeacherProjects";
import { TeacherCreateCourse } from "./pages/teacher/TeacherCreateCourse";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { AdminUsers } from "./pages/admin/AdminUsers";
import { AdminCourses } from "./pages/admin/AdminCourses";
import { AdminCategories } from "./pages/admin/AdminCategories";
import { AdminPayments } from "./pages/admin/AdminPayments";
import { AdminSubscriptions } from "./pages/admin/AdminSubscriptions";
import { AdminSettings } from "./pages/admin/AdminSettings";
import { AdminEnrollmentRequests } from "./pages/admin/AdminEnrollmentRequests";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { FAQ } from "./pages/FAQ";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/faq",
    Component: FAQ,
  },
  {
    path: "/contact",
    Component: Contact,
  },
  // Public Course Routes
  {
    path: "/courses",
    Component: CoursesPage,
  },
  {
    path: "/course/:id",
    Component: CourseDetailPage,
  },
  // Student Routes
  {
    path: "/student",
    Component: StudentDashboard,
  },
  {
    path: "/student/courses",
    Component: StudentCourses,
  },
  {
    path: "/student/course/:courseId",
    Component: StudentCourseView,
  },
  {
    path: "/student/quiz/:courseId",
    Component: StudentQuiz,
  },
  {
    path: "/student/projects",
    Component: StudentProjects,
  },
  {
    path: "/student/messages",
    Component: StudentMessages,
  },
  {
    path: "/student/certificates",
    Component: StudentCertificates,
  },
  // Teacher Routes
  {
    path: "/teacher",
    Component: TeacherDashboard,
  },
  {
    path: "/teacher/students",
    Component: TeacherStudents,
  },
  {
    path: "/teacher/messages",
    Component: TeacherMessages,
  },
  {
    path: "/teacher/courses",
    Component: TeacherCourses,
  },
  {
    path: "/teacher/projects",
    Component: TeacherProjects,
  },
  {
    path: "/teacher/create-course",
    Component: TeacherCreateCourse,
  },
  // Admin Routes
  {
    path: "/admin",
    Component: AdminDashboard,
  },
  {
    path: "/admin/users",
    Component: AdminUsers,
  },
  {
    path: "/admin/courses",
    Component: AdminCourses,
  },
  {
    path: "/admin/categories",
    Component: AdminCategories,
  },
  {
    path: "/admin/payments",
    Component: AdminPayments,
  },
  {
    path: "/admin/subscriptions",
    Component: AdminSubscriptions,
  },
  {
    path: "/admin/settings",
    Component: AdminSettings,
  },
  {
    path: "/admin/enrollment-requests",
    Component: AdminEnrollmentRequests,
  },
]);