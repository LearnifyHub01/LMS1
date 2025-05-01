import React, { FC, useState } from "react";
import { 
  FiChevronDown, 
  FiChevronUp, 
  FiVideo, 
  FiClock 
} from "react-icons/fi";
import { motion } from "framer-motion";

type Props = {
  data: any;
  activeVideo?: number;
  setActiveVideo?: (index: number) => void;
  isDemo?: boolean;
};

const CourseContentList: FC<Props> = (props) => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set<string>()
  );

  // Find unique video sections
  const videoSections: string[] = [
    ...new Set<string>(props.data?.map((item: any) => item.videoSection) || []),
  ];

  let totalCount: number = 0;

  const toggleSection = (section: string) => {
    const newVisibleSections = new Set(visibleSections);
    if (newVisibleSections.has(section)) {
      newVisibleSections.delete(section);
    } else {
      newVisibleSections.add(section);
    }
    setVisibleSections(newVisibleSections);
  };

  // Calculate total number of videos and total duration
  const totalVideos = props.data?.length || 0;
  const totalDuration = props.data?.reduce(
    (total: number, item: any) => total + (Number(item.videoLength) || 0),
    0
  );
  const totalHours = Math.floor(totalDuration / 3600);
  const totalMinutes = Math.floor((totalDuration % 3600) / 60);

  return (
    <div className={`w-full ${!props.isDemo && "min-h-screen"}`}>
      {/* Summary stats */}
      {!props.isDemo && (
        <div className="mb-6 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg flex flex-wrap gap-4">
          <div className="flex items-center">
            <FiVideo className="text-indigo-600 dark:text-indigo-400 mr-2" />
            <span className="text-gray-700 dark:text-gray-300">
              {totalVideos} lessons
            </span>
          </div>
          <div className="flex items-center">
            <FiClock className="text-indigo-600 dark:text-indigo-400 mr-2" />
            <span className="text-gray-700 dark:text-gray-300">
              {totalHours > 0 ? `${totalHours} hours ` : ""}
              {totalMinutes} minutes total
            </span>
          </div>
        </div>
      )}

      {/* Sections */}
      <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 divide-y divide-gray-200 dark:divide-gray-700">
        {videoSections.map((section: string, sectionIndex: number) => {
          const isSectionVisible = visibleSections.has(section);

          // Filter section by videos
          const sectionVideos: any[] = props.data.filter(
            (item: any) => item.videoSection === section
          );

          const sectionVideoCount: number = sectionVideos.length;
          const sectionVideoLength: number = sectionVideos.reduce(
            (totalLength: number, item: any) =>
              totalLength + (Number(item.videoLength) || 0),
            0
          );

          const sectionStartIndex: number = totalCount;
          totalCount += sectionVideoCount;
          
          // Calculate time format
          const sectionHours = Math.floor(sectionVideoLength / 3600);
          const sectionMinutes = Math.floor((sectionVideoLength % 3600) / 60);
          const timeString = sectionHours > 0 
            ? `${sectionHours} hours ${sectionMinutes} minutes` 
            : `${sectionMinutes} minutes`;

          return (
            <div key={section} className="bg-white dark:bg-gray-800">
              <div 
                className="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                onClick={() => toggleSection(section)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {section}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {sectionVideoCount} lessons • {timeString}
                    </p>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">
                    {isSectionVisible ? (
                      <FiChevronUp size={20} />
                    ) : (
                      <FiChevronDown size={20} />
                    )}
                  </div>
                </div>
              </div>

              {/* Animated content */}
              {isSectionVisible && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="divide-y divide-gray-100 dark:divide-gray-700"
                >
                  {sectionVideos.map((item: any, index: number) => {
                    const videoIndex: number = sectionStartIndex + index;
                    const videoLength = Number(item.videoLength);
                    const videoHours = Math.floor(videoLength / 3600);
                    const videoMinutes = Math.floor((videoLength % 3600) / 60);
                    const videoSeconds = videoLength % 60;
                    
                    const formattedDuration = videoHours > 0
                      ? `${videoHours}:${videoMinutes.toString().padStart(2, '0')}:${videoSeconds.toString().padStart(2, '0')}`
                      : `${videoMinutes}:${videoSeconds.toString().padStart(2, '0')}`;
                    
                    return (
                      <div
                        key={item._id}
                        className={`
                          pl-6 pr-4 py-3 flex items-center justify-between
                          ${videoIndex === props.activeVideo ? "bg-indigo-50 dark:bg-indigo-900/20" : ""}
                          ${!props.isDemo && "cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"}
                          transition-colors
                        `}
                        onClick={() =>
                          props.isDemo ? null : props?.setActiveVideo?.(videoIndex)
                        }
                      >
                        <div className="flex items-start flex-1 min-w-0">
                          <FiVideo 
                            size={16} 
                            className="mt-1 mr-3 text-indigo-500 dark:text-indigo-400 flex-shrink-0" 
                          />
                          <div className="min-w-0">
                            <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                              {item.title}
                            </h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              {videoIndex === props.activeVideo && !props.isDemo && (
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 mr-2">
                                  Current
                                </span>
                              )}
                              Lesson {index + 1}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center ml-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                            <FiClock className="mr-1" size={12} />
                            {formattedDuration}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseContentList;
