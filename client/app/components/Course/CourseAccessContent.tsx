// import { useGetCourseContentQuery, useGetCourseDetailsQuery } from "@/redux/features/courses/coursesApi";
// import React, { FC, useState } from "react";
// import Loader from "../Loader/Loader";
// import Heading from "@/app/utils/Heading";
// import CourseContentMedia from "./CourseContentMedia";
// import Header from "@/app/profile/Header1";
// import CourseContentList from "./CourseContentList";
// import CertificateButton from "../Certificate/CertificateButton";

// type Props = {
//   id: string;
//   user: any;
// };

// const CourseAccessContent: FC<Props> = ({ id, user }) => {
//   // Fetch course content
//   const {
//     data: contentData,
//     isLoading: isContentLoading,
//     error: contentError,
//     refetch,
//   } = useGetCourseContentQuery(id, { refetchOnMountOrArgChange: true });

//   const {
//     data: courseDetails,
//     isLoading: isDetailsLoading,
//     error: detailsError,
//   } = useGetCourseDetailsQuery(id);

//   const content = contentData?.content;
//   const courseName = courseDetails?.course?.name || "Your Course"; 
//   const [activeVideo, setActiveVideo] = useState(0);
//   const [activeItem, setActiveItem] = useState(5);
//   const [open, setOpen] = useState(false);
//   const [route, setRoute] = useState("Login");

//   if (isContentLoading || isDetailsLoading) return <Loader />;

//   if (contentError || detailsError) {
//     const errorMessage =
//       (contentError as any)?.data?.error ||
//       (detailsError as any)?.data?.error ||
//       "Failed to load course data";
//     return (
//       <div className="text-center py-10 text-red-500">
//         Error: {errorMessage}
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Header
//         open={open}
//         setOpen={setOpen}
//         activeItem={activeItem}
//         setRoute={setRoute}
//         route={route}
//       />
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <Heading
//           title={
//             content?.[activeVideo]?.title + " - LearnifyHub" ||
//             "No Title Available"
//           }
//           description="Course content"
//           keywords={content?.[activeVideo]?.tags || ""}
//         />
//         <div className="flex flex-col md:flex-row gap-2">
//           <div className="w-full md:w-4/6 order-2 md:order-1">
//             <CourseContentMedia
//               data={content}
//               id={id}
//               activeVideo={activeVideo}
//               setActiveVideo={setActiveVideo}
//               user={user}
//               refetch={refetch}
//             />
//           </div>

//           <div className="w-full md:w-2/6 order-1 md:order-2">
//             <CourseContentList
//               data={content}
//               activeVideo={activeVideo}
//               setActiveVideo={setActiveVideo}
//             />
//             <CertificateButton
//               studentName={user?.name}
//               courseName={courseName} 
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseAccessContent;
import { useGetCourseContentQuery, useGetCourseDetailsQuery } from "@/redux/features/courses/coursesApi";
import React, { FC, useState } from "react";
import Loader from "../Loader/Loader";
import Heading from "@/app/utils/Heading";
import CourseContentMedia from "./CourseContentMedia";
import Header from "@/app/profile/Header1";
import CourseContentList from "./CourseContentList";
import CertificateButton from "../Certificate/CertificateButton";

type Props = {
  id: string;
  user: any;
};

const CourseAccessContent: FC<Props> = ({ id, user }) => {
  const {
    data: contentData,
    isLoading: isContentLoading,
    error: contentError,
    refetch,
  } = useGetCourseContentQuery(id, { refetchOnMountOrArgChange: true });

  const {
    data: courseDetails,
    isLoading: isDetailsLoading,
    error: detailsError,
  } = useGetCourseDetailsQuery(id);

  const content = contentData?.content;
  const courseName = courseDetails?.course?.name || "Your Course";
  const courseId = courseDetails?.course._id
  const [activeVideo, setActiveVideo] = useState(0);
  const [activeItem, setActiveItem] = useState(5);
  const [open, setOpen] = useState(false);
  const [route, setRoute] = useState("Login");
  const [allVideosReady, setAllVideosReady] = useState(false);

  if (isContentLoading || isDetailsLoading) return <Loader />;

  
  if (contentError || detailsError) {
    const errorMessage =
      (contentError as any)?.data?.error ||
      (detailsError as any)?.data?.error ||
      "Failed to load course data";
    return (
      <div className="text-center py-10 text-red-500">
        Error: {errorMessage}
      </div>
    );
  }

  const handleReadyStatusChange = (allReady: boolean) => {
    setAllVideosReady(allReady);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 ">
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Heading
          title={
            content?.[activeVideo]?.title + " - LearnifyHub" ||
            "No Title Available"
          }
          description="Course content"
          keywords={content?.[activeVideo]?.tags || ""}
        />
        <div className="flex flex-col md:flex-row gap-2">
          <div className="w-full md:w-4/6 order-2 md:order-1">
            <CourseContentMedia
              data={content}
              id={id}
              activeVideo={activeVideo}
              setActiveVideo={setActiveVideo}
              user={user}
              refetch={refetch}
            />
          </div>

          <div className="w-full md:w-2/6 order-1 md:order-2">
            <CourseContentList
              data={content}
              activeVideo={activeVideo}
              setActiveVideo={setActiveVideo}
              onReadyStatusChange={handleReadyStatusChange}
              courseId={courseId}
            />
            <CertificateButton
              userId={user?._id}
              courseId={courseDetails?.course?._id}
              studentName={user?.name}
              courseName={courseName}
              disabled={!allVideosReady}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseAccessContent;