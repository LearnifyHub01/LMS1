import { apiSlice } from "../api/apiSlice";

export const analyticsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAnalytics: builder.query({
      query: () => ({
        url: `/get-analytics`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    getUserAnalytics: builder.query({
      query: () => ({
        url: `/get-users-analytics`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    getOrderAnalytics: builder.query({
      query: () => ({
        url: `/get-orders-analytics`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    getRevenueAnalytics: builder.query({
      query: () => ({
        url: `/get-revenue-analytics`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    getCourseAnalytics: builder.query({
        query: () => ({
          url: `/get-courses-analytics`,
          method: "GET",
          credentials: "include" as const,
        }),
      }),
  }),
});


export const {
    useGetAnalyticsQuery,
    useGetOrderAnalyticsQuery,
    useGetUserAnalyticsQuery,
    useGetCourseAnalyticsQuery,
    useGetRevenueAnalyticsQuery
} = analyticsApi;
