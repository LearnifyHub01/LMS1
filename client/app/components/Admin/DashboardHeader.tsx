// 'use client'
// import React, { FC, useState, useRef, useEffect } from "react";
// import ThemeSwitcher from "@/app/utils/ThemeSwitcher";
// import { IoNotificationsOutline } from "react-icons/io5";
// import { useGetAllNotificationsQuery, useUpdateNotificationStatusMutation } from "@/redux/features/notifications/notificationApi";
// import socketInstance from "@/app/utils/socket";
// import { Bell } from 'lucide-react';

// type Props = {};

// const DashboardHeader: FC<Props> = () => {
//   const [open, setOpen] = useState(false);
//   const notificationRef = useRef<HTMLDivElement>(null);
//   const notificationButtonRef = useRef<HTMLDivElement>(null);
//   const { data, refetch } = useGetAllNotificationsQuery(undefined, {
//     refetchOnMountOrArgChange: true,
//   });
//   const [updateNotificationStatus, { isSuccess }] = useUpdateNotificationStatusMutation();
//   const [notifications, setNotifications] = useState<any[]>([]);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         notificationRef.current &&
//         !notificationRef.current.contains(event.target as Node) &&
//         notificationButtonRef.current &&
//         !notificationButtonRef.current.contains(event.target as Node)
//       ) {
//         setOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   useEffect(() => {
//     if (data) {
//       setNotifications(
//         data.notifications.filter((item: any) => item.status === "unread")
//       );
//     }
//     if (isSuccess) {
//       refetch();
//     }
//   }, [data, isSuccess, refetch]);

//   useEffect(() => {
//     socketInstance.on("newNotification", () => {
//       refetch();
//     });
//     return () => {
//       socketInstance.off("newNotification"); // Cleanup listener on unmount
//     };
//   }, [refetch]);

//   const handleNotificationStatusChange = async (id: string) => {
//     await updateNotificationStatus(id);
//   };
//   function timeAgo(dateInput: any): string {
   
//     const now = new Date();

//     // If the input is not already a Date, parse it
//     const parsedDate = new Date(dateInput);

//     if (isNaN(parsedDate.getTime())) {
//         throw new Error("Invalid date input");
//     }

//     const diffInMilliseconds = now.getTime() - parsedDate.getTime();
    
//     const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
//     const diffInMinutes = Math.floor(diffInSeconds / 60);
//     const diffInHours = Math.floor(diffInMinutes / 60);
//     const diffInDays = Math.floor(diffInHours / 24);
//     const diffInWeeks = Math.floor(diffInDays / 7);
//     const diffInMonths = Math.floor(diffInDays / 30);
//     const diffInYears = Math.floor(diffInDays / 365);

// if(diffInSeconds < 60){
//   return 'Just now';
// }
//     else if (diffInYears > 0) {
//         return `${diffInYears} year${diffInYears > 1 ? 's' : ''} ago`;
//     } else if (diffInMonths > 0) {
//         return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
//     } else if (diffInWeeks > 0) {
//         return `${diffInWeeks} week${diffInWeeks > 1 ? 's' : ''} ago`;
//     } else if (diffInDays > 0) {
//         return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
//     } else if (diffInHours > 0) {
//         return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
//     } else if (diffInMinutes > 0) {
//         return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
//     } else {
//         return 'Just now';
//     }
// }

// // Example usage:
// const createdAtFromDB = "2025-03-25T00:00:00Z";  // ISO string from MongoDB
// console.log(timeAgo(createdAtFromDB));  // This should work




//   return (
//     <div className="w-full flex items-center justify-end p-1 fixed top-6 right-8">
//       {/* Right Side (ThemeSwitcher & Notifications) */}
//       <div className="flex items-center gap-4">
//         <ThemeSwitcher />
//         <div
//           ref={notificationButtonRef}
//           className="relative cursor-pointer m-2"
//           onClick={() => setOpen(!open)}
//         >
//           <IoNotificationsOutline className="text-2xl cursor-pointer dark:text-white text-black" />
//           <span className="absolute -top-2 -right-2 bg-blue-600 rounded-full w-[20px] h-[20px] text-[12px] flex items-center justify-center text-white">
//             {notifications.length}
//           </span>
//         </div>
//       </div>

//       {/* Notifications Dropdown */}
//       {open && (
//         <div
//           ref={notificationRef}
//           className="w-80 max-h-[500px] shadow-2xl top-16 z-50 absolute right-0 bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700"
//         >
//           {/* Header */}
//           <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center justify-between z-10">
//             <div className="flex items-center">
//               <Bell className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
//               <h5 className="text-lg font-semibold text-gray-800 dark:text-white">
//                 Notifications
//               </h5>
//             </div>
//             <span className="bg-blue-600 text-white text-xs font-medium px-2 py-0.5 rounded-full">
//               {notifications.length}
//             </span>
//           </div>
          
//           {/* Body */}
//           <div className="overflow-y-auto max-h-[calc(500px-56px)]">
//             {notifications.length === 0 ? (
//               <div className="py-12 px-4 flex flex-col items-center justify-center">
//                 <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full mb-3">
//                   <Bell className="h-6 w-6 text-gray-500 dark:text-gray-400" />
//                 </div>
//                 <p className="text-gray-500 dark:text-gray-400 text-center">
//                   No unread notifications
//                 </p>
//               </div>
//             ) : (
//               notifications.map((item, index) => (
//                 <div
//                   key={item._id || index}
//                   className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 transition-all duration-200"
//                 >
//                   <div className="p-4">
//                     <div className="flex items-center justify-between mb-2">
//                       <h6 className="font-medium text-gray-900 dark:text-white line-clamp-1">
//                         {item.title}
//                       </h6>
//                       <button
//                         className="text-blue-600 dark:text-blue-400 text-xs hover:bg-blue-50 dark:hover:bg-blue-900/20 px-2 py-1 rounded transition-colors"
//                         onClick={() => handleNotificationStatusChange(item._id)}
//                       >
//                         Mark read
//                       </button>
//                     </div>
                    
//                     <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">
//                       {item.message}
//                     </p>
                    
//                     <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
//                       <span className="inline-block h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
//                       {timeAgo(item.createdAt)}
//                     </div>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
          
//           {/* Footer */}
//           {notifications.length > 0 && (
//             <div className="border-t border-gray-200 dark:border-gray-700 p-3 text-center">
//               <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
//                 Mark all as read
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default DashboardHeader;
'use client'
import React, { FC, useState, useRef, useEffect } from "react";
import ThemeSwitcher from "@/app/utils/ThemeSwitcher";
import { IoNotificationsOutline } from "react-icons/io5";
import { useGetAllNotificationsQuery, useUpdateNotificationStatusMutation } from "@/redux/features/notifications/notificationApi";
import socketInstance from "@/app/utils/socket";
import { Bell, X, Eye } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {};

// Toast Notification Component
const NotificationToast = ({ notification, onClose }: { notification: any; onClose: () => void }) => {
  useEffect(() => {
    // Auto dismiss after 8 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, x: 0 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 mb-3 w-80 border-l-4 border-blue-600 flex"
    >
      <div className="flex-1">
        <h6 className="font-medium text-gray-900 dark:text-white text-sm">{notification.title}</h6>
        <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2 mt-1">{notification.message}</p>
      </div>
      <button 
        onClick={onClose}
        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 focus:outline-none ml-2"
      >
        <X size={16} />
      </button>
    </motion.div>
  );
};

const DashboardHeader: FC<Props> = () => {
  const [open, setOpen] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  const notificationButtonRef = useRef<HTMLDivElement>(null);
  const { data, refetch } = useGetAllNotificationsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const [updateNotificationStatus, { isSuccess }] = useUpdateNotificationStatusMutation();
  const [notifications, setNotifications] = useState<any[]>([]);
  const [currentToast, setCurrentToast] = useState<any | null>(null);
  const [lastNotificationId, setLastNotificationId] = useState<string | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node) &&
        notificationButtonRef.current &&
        !notificationButtonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (data) {
      const unreadNotifications = data.notifications.filter((item: any) => item.status === "unread");
      setNotifications(unreadNotifications);

      // Check for new notifications within the last 10 seconds
      if (unreadNotifications.length > 0) {
        const latestNotification = unreadNotifications[0];
        const now = new Date().getTime();
        const notificationTime = new Date(latestNotification.createdAt).getTime();
        const timeDiffInSeconds = (now - notificationTime) / 1000;

        // Show toast only if the notification is within 10 seconds and dropdown is closed
        if (
          timeDiffInSeconds <= 10 &&
          latestNotification._id !== lastNotificationId &&
          !open
        ) {
          setCurrentToast(latestNotification);
          setLastNotificationId(latestNotification._id);
        }
      }
    }

    if (isSuccess) {
      refetch();
    }
  }, [data, isSuccess, refetch, lastNotificationId, open]);

  useEffect(() => {
    socketInstance.on("newNotification", (notification: any) => {
      // Show toast only if notification is new and dropdown is closed
      const now = new Date().getTime();
      const notificationTime = new Date(notification.createdAt).getTime();
      const timeDiffInSeconds = (now - notificationTime) / 1000;

      if (timeDiffInSeconds <= 10 && !open) {
        setCurrentToast(notification);
        setLastNotificationId(notification._id);
      }
      refetch();
    });

    return () => {
      socketInstance.off("newNotification");
    };
  }, [refetch, open]);

  const handleNotificationStatusChange = async (id: string) => {
    await updateNotificationStatus(id);
  };

  const clearToast = () => {
    setCurrentToast(null);
  };

  const handleMarkAllAsRead = async () => {
    for (const notification of notifications) {
      await updateNotificationStatus(notification._id);
    }
  };

  function timeAgo(dateInput: any): string {
    const now = new Date();
    const parsedDate = new Date(dateInput);

    if (isNaN(parsedDate.getTime())) {
      throw new Error("Invalid date input");
    }

    const diffInMilliseconds = now.getTime() - parsedDate.getTime();
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInWeeks = Math.floor(diffInDays / 7);
    const diffInMonths = Math.floor(diffInDays / 30);
    const diffInYears = Math.floor(diffInDays / 365);

    if (diffInSeconds < 60) {
      return 'Just now';
    } else if (diffInYears > 0) {
      return `${diffInYears} year${diffInYears > 1 ? 's' : ''} ago`;
    } else if (diffInMonths > 0) {
      return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
    } else if (diffInWeeks > 0) {
      return `${diffInWeeks} week${diffInWeeks > 1 ? 's' : ''} ago`;
    } else if (diffInDays > 0) {
      return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    } else if (diffInHours > 0) {
      return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    } else if (diffInMinutes > 0) {
      return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
    } else {
      return 'Just now';
    }
  }

  return (
    <>
      <div className="w-full flex items-center justify-end p-1 fixed top-6 right-8">
        {/* Right Side (ThemeSwitcher & Notifications) */}
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <div
            ref={notificationButtonRef}
            className="relative cursor-pointer m-2"
            onClick={() => setOpen(!open)}
          >
            <IoNotificationsOutline className="text-2xl cursor-pointer dark:text-white text-black" />
            {notifications.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 rounded-full w-[20px] h-[20px] text-[12px] flex items-center justify-center text-white">
                {notifications.length}
              </span>
            )}
          </div>
        </div>

        {/* Notifications Dropdown */}
        {open && (
          <div
            ref={notificationRef}
            className="w-80 max-h-[500px] shadow-2xl top-16 z-50 absolute right-0 bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center justify-between z-10">
              <div className="flex items-center">
                <Bell className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                <h5 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Notifications
                </h5>
              </div>
              <span className="bg-blue-600 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                {notifications.length}
              </span>
            </div>

            {/* Body */}
            <div className="overflow-y-auto max-h-[calc(500px-56px)]">
              {notifications.length === 0 ? (
                <div className="py-12 px-4 flex flex-col items-center justify-center">
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full mb-3">
                    <Bell className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-center">
                    No unread notifications
                  </p>
                </div>
              ) : (
                notifications.map((item, index) => (
                  <div
                    key={item._id || index}
                    className="border-b border-gray-100 dark:border-gray-700 transition-all duration-200"
                  >
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h6 className="font-medium text-gray-900 dark:text-white line-clamp-1">
                          {item.title}
                        </h6>
                        <button
                          className="text-blue-600 dark:text-blue-400 text-xs px-2 py-1 rounded transition-colors"
                          onClick={() => handleNotificationStatusChange(item._id)}
                        >
                          <Eye width={15} height={15} />
                        </button>
                      </div>

                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">
                        {item.message}
                      </p>

                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <span className="inline-block h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                        {timeAgo(item.createdAt)}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>

      {/* Single Toast Notification - Fixed position at bottom right */}
      <div className="fixed bottom-4 right-4 z-50">
        <AnimatePresence>
          {currentToast && (
            <NotificationToast 
              key={currentToast._id} 
              notification={currentToast} 
              onClose={clearToast} 
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default DashboardHeader;