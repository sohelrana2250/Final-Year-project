import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiDevicesSlice = createApi({
    reducerPath: 'devicesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://job-server-box.vercel.app' }),
    tagTypes: ['devices', 'update'],


    endpoints: (builder) => ({

        getDeviceInformation: builder.query({
            query: (email) => ({
                url: `/get-Device-Information/${email}`
            }),
            providesTags: ['devices']
        }),

        //...get ----candidate----information-----(update)
        getcandidateInfo: builder.query({
            query: (email) => ({
                url: `/get-candidate-Info/${email}`
            }),
            providesTags: ['devices']

        }),
        updatecandidateInfo: builder.mutation({

            query: ({ _id, ...data }) => ({

                url: `/update-candidate-Info/${_id}`,
                method: 'PUT',
                body: data

            }),
            providesTags: ['devices']

        }),
        //....InterviewCall----patch with candidate information store


        InterviewCalled: builder.mutation({

            query: (data) => ({
                url: '/InterviewCall',
                method: 'PATCH',
                body: data
            }),
            providesTags: ['devices']

        }),
        ListofInterviewCalled: builder.query({
            query: (id) => ({
                url: `/ListOf-InterviewCalled/${id}`,
                headers: {
                    authorization: `Bearer ${localStorage.getItem('jobToken')}`
                }
            }),
            providesTags: ['devices']
        }),
        //ListOf-ApplicantUser
        Listof_ApplicantUser: builder.query({
            query: (id) => ({
                url: `/ListOf-ApplicantUser/${id}`,
                headers: {
                    authorization: `Bearer ${localStorage.getItem('jobToken')}`
                }
            }),
            providesTags: ['devices']

        }),
        //Non-Organization ListOf-ApplicentUse
        Non_Org_Listof_ApplicentUser: builder.query({
            query: (id) => ({
                url: `/ListOf_Non_Org_ApplicantUser/${id}`,
                headers: {
                    authorization: `Bearer ${localStorage.getItem('jobToken')}`
                }
            }),
            providesTags: ['devices']
        }),
        //removing unselected employee 
        UnselectedEmployee: builder.mutation({
            query: (data) => ({
                url: "/unselected-employee",
                method: 'PUT',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('jobToken')}`
                },
                body: data
            }),
            invalidatesTags: ['devices']

        }),
        //...jwt-Token

        jwtToken: builder.mutation({
            query: (data) => ({
                url: '/jwt',
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }),
            providesTags: ['devices']

        }),
        //....vedioContent Uploding 
        content_base_jobpost: builder.mutation({
            query: (data) => ({
                url: "/vedioContent",
                method: 'POST',
                body: data

            })
        }),

        //.....vedio---content ---display
        contentDisplay: builder.query({
            query: (search) => ({
                url: `/content-Display?search=${search}`,
                headers: {
                    authorization: `Bearer ${localStorage.getItem('jobToken')}`
                },

            }),
            providesTags: ['devices']
        }),
        //....specific content display (Video-content with email)
        getSpecific_ContentJob: builder.query({
            query: (email) => ({
                url: `/get_specfic_content/${email}`,
                headers: {
                    authorization: `Bearer ${localStorage.getItem('jobToken')}`
                },
            }),
            providesTags: ['devices']
        }),
        //specific content base information update(id)
        getSpecific_Contentupdate: builder.query({
            query: (id) => ({
                url: `/update_specific_jobpost/${id}`,
                headers: {
                    authorization: `Bearer ${localStorage.getItem('jobToken')}`
                },
            }),
            providesTags: ['devices']
        }),
        //.....update contentbase user information 

        put_specific_contentUpdate: builder.mutation({

            query: ({ id, ...data }) => ({
                url: `/update-ccontentbase-jobpost/${id}`,
                method: 'PUT',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('jobToken')}`
                },
                body: data
            }),
            invalidatesTags: ['devices']
        }),
        //delete content base job post (id)

        delete_contentById: builder.mutation({
            query: (id) => ({
                url: `/delete_contentbase_jobpost/${id}`,
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('jobToken')}`
                },
            }),
            invalidatesTags: ['devices']
        }),
        //rating-count

        rating_count: builder.mutation({
            query: (data) => ({
                url: "/rating_count",
                method: "PUT",
                body: data
            }),
            invalidatesTags: ['devices']
        }),
        // specific contact details gathering 
        specific_contact: builder.mutation({
            query: ({ id, ...data }) => ({
                url: `/specific_user_contact/${id}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['devices']

        }),
        //...delete_specific_info
        delete_user_contact: builder.mutation({
            query: (data) => ({
                url: "/delete_contact_info",
                method: 'DELETE',
                body: data
            }),
            invalidatesTags: ['devices']
        }),




    }),


});

export const { useGetDeviceInformationQuery, useGetcandidateInfoQuery, useUpdatecandidateInfoMutation, useInterviewCalledMutation, useListofInterviewCalledQuery, useListof_ApplicantUserQuery, useJwtTokenMutation, useContentDisplayQuery, useUnselectedEmployeeMutation, useContent_base_jobpostMutation, useGetSpecific_ContentJobQuery, useGetSpecific_ContentupdateQuery, usePut_specific_contentUpdateMutation, useDelete_contentByIdMutation, useRating_countMutation, useSpecific_contactMutation, useDelete_user_contactMutation, useNon_Org_Listof_ApplicentUserQuery } = apiDevicesSlice;