import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getCandidateUser, getUser } from '../auth/authSlice';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://job-server-box.vercel.app' }),
    tagTypes: ['jobbox', 'Job'],
    endpoints: (builder) => ({

        register: builder.mutation({
            query: (data) => ({

                url: '/user',
                method: 'POST',
                body: data
            }),
            //https://redux-toolkit.js.org/rtk-query/api/createApi#onquerystarted
            //instenst data loading-process  ---- 
            async onQueryStarted(data, { dispatch, queryFulfilled }) {
                try {

                    await queryFulfilled;

                    dispatch(getUser(data?.email))

                }
                catch (error) {
                    console.log(error.message);
                }
            }
        }),

        //candided user post 
        candidateRegister: builder.mutation({
            query: (data) => ({

                url: '/candidateUser',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(data, { dispatch, queryFulfilled }) {
                try {

                    const res = await queryFulfilled;
                    console.log(res);
                    dispatch(getCandidateUser(data?.email))

                }
                catch (error) {
                    console.log(error.message);
                }
            }

        }),
        //..job post 
        jobCollection: builder.mutation({

            query: (data) => ({

                url: '/jobs',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(data, { dispatch, queryFulfilled }) {
                try {

                    const res = await queryFulfilled;
                    console.log(res);
                    dispatch(getUser(data?.email))

                }
                catch (error) {
                    console.log(error?.message);
                }
            }

        }),
        //get---job--collection
        getjobs: builder.query({

            query: (pagination) => ({
                url: `/jobs/${pagination}`
            }),
            providesTags: ['jobbox']


        }),
        //..get---job--collection
        getJobsId: builder.query({
            query: (id) => ({

                url: `/job-details/${id}`,
                headers: {
                    authorization: `Bearer ${localStorage.getItem('jobToken')}`
                }

            }),
            providesTags: ['Job']
        }),
        //job-apply-patch-method

        applyJob: builder.mutation({
            query: (data) => ({
                url: '/apply',
                method: 'PATCH',
                body: data
            }),
            providesTags: ['jobbox']
        }),
        //getJobCollection

        getAppliedJobs: builder.query({

            query: (email) => ({

                url: `/applied-jobs/${email}`,
                headers: {
                    authorization: `Bearer ${localStorage.getItem('jobToken')}`
                }


            }),
            providesTags: ['jobbox']
        }),


        //getJob-Applicants-Information

        getJobApplicants: builder.query({
            query: (email) => ({
                url: `/job-applicenats/${email}`
            }),
            providesTags: ['jobbox']
        }),
        //....question ---patch 
        //set the question in the database 
        questions: builder.mutation({
            query: (data) => ({
                url: '/query',
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ['Job']
        }),
        //question replay-section 
        reply: builder.mutation({
            query: (data) => ({
                url: '/reply',
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ['Job']
        }),
        //...delete-reply------message
        deleteReply: builder.mutation({
            query: (data) => ({

                url: '/reply-delete',
                method: 'DELETE',
                body: data

            }),
            invalidatesTags: ['Job']
        }),
        //....all employee data lis
        getAll_Employee_List: builder.query({
            query: () => ({
                url: "/dashboard/all_employer",
                method: "GET"
            }),
            providesTags: ['Job']
        }),
        //admin create 
        admin_only_employeer: builder.mutation({
            query: ({ id, ...data }) => ({
                url: `/user/admin/${id}`,
                method: 'PATCH',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('jobToken')}`
                },
                body: data
            }),
            invalidatesTags: ['Job']
        }),
        // checked  is it Admin or not 
        find_by_isitAdmin: builder.query({
            query: (email) => ({
                url: `/users/admin/${email}`,
                method: "GET"
            }),
            providesTags: ['Job']
        }),
        //...get device information and after login activity'
        get_all_userInofrmation: builder.query({
            query: () => ({
                url: "/all_user_and_device_info",
                method: "GET"
            }),
            providesTags: ['Job']
        }),
        get_all_candidateInformation: builder.query({
            query: () => ({
                url: "/AllcandidateUser/admin",
                method: "GET"
            }),
            providesTags: ['Job']
        }),
        //disable user Account 
        disable_user_account: builder.mutation({

            query: ({ email, ...data }) => ({
                url: `/is_it_disable_Account/${email}`,
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ['Job']
        }),
        ///content_basejob_Interview
        content_InterviewJob: builder.mutation({
            query: (data) => ({
                url: "/content_basejob_Interview",
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ['Job']
        }),
        //....compalin Details
        compalin_Details: builder.mutation({
            query: ({ email, ...data }) => ({
                url: `/complain_details/${email}`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ['Job']
        }),
        //.../all_complain_list
        allComplain: builder.query({
            query: () => ({
                url: "/all_complain_list",
                method: "GET"
            }),
            providesTags: ['Job']
        }),
        //..delete specific complain data
        deleteSpecificComplain: builder.mutation({
            query: (data) => ({

                url: '/delete_specific_complain',
                method: 'DELETE',
                body: data

            }),
            invalidatesTags: ['Job']
        })

    })
})

export const { useRegisterMutation, useCandidateRegisterMutation, useJobCollectionMutation, useGetjobsQuery, useGetJobsIdQuery, useApplyJobMutation, useGetAppliedJobsQuery, useGetJobApplicantsQuery, useQuestionsMutation, useReplyMutation, useDeleteReplyMutation, useGetAll_Employee_ListQuery, useAdmin_only_employeerMutation, useFind_by_isitAdminQuery, useGet_all_userInofrmationQuery, useGet_all_candidateInformationQuery, useDisable_user_accountMutation, useContent_InterviewJobMutation, useCompalin_DetailsMutation, useAllComplainQuery, useDeleteSpecificComplainMutation } = apiSlice;