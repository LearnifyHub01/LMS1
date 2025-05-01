import { apiSlice } from "../api/apiSlice";

export const courseTrackerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Course tracker endpoints only
    updateVideoProgress: builder.mutation({
      query: ({ courseId, videoId, isCompleted }) => ({
        url: "/update",
        method: "POST",
        body: { courseId, videoId, isCompleted },
        credentials: "include" as const,
      }),
    }),
    getUserCourseProgress: builder.query({
      query: (courseId) => ({
        url: `/getProgress/${courseId}`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    getOverallProgress: builder.query<{ progressPercentage: number }, void>({
      query: () => ({
        url: "/overall",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
  }),
});

export const {
  // Course tracker hooks only
  useUpdateVideoProgressMutation,
  useGetUserCourseProgressQuery,
  useGetOverallProgressQuery,
} = courseTrackerApi;