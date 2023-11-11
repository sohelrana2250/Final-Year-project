import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiCategoriSlice = createApi({

    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://job-server-box.vercel.app' }),
    tagTypes: ['jobbox', 'Job'],
    endpoints: (builder) => ({

        //categorie job post 
        jobCategories: builder.mutation({

            query: (data) => ({
                url: "/jobCategories",
                method: "POST",
                body: data
            }),
            providesTags: ['jobbox']

        }),
        //.....get catagores job .....to display home/Expjob.js file

        getJobCatagories: builder.query({

            query: (catagories) => ({
                url: `/job-Catagores-info/${catagories}`
            }),
            providesTags: ['jobbox']
        }),
        //...get catagories with user---end----(email)

        getCatagoriesUserEnd: builder.query({
            query: (email) => ({
                url: `/job-Catagores/${email}`,
                headers: {
                    authorization: `Bearer ${localStorage.getItem('jobToken')}`
                },
            }),
            providesTags: ['jobbox']
        }),
        //....get----sepecific catagories information with update

        getUpdateCateInfo: builder.query({
            query: (id) => ({
                url: `/getUpdateCataInfo/${id}`,
                headers: {
                    authorization: `Bearer ${localStorage.getItem('jobToken')}`
                },
            }),
            providesTags: ['jobbox']
        }),
        //....update----sepecific catagorie information
        updateCataInfo: builder.mutation({
            query: ({ _id, ...data }) => ({

                url: `/Update-Cate-Info/${_id}`,
                method: 'PUT',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('jobToken')}`
                },
                body: data
            }),
            invalidatesTags: ['jobbox']
        }),
        //post----specific job---catagories
        specificjob: builder.mutation({

            query: (data) => ({
                url: "/specific-catagorie",
                method: 'POST',
                body: data
            }),
            providesTags: ['jobbox']
        }),
        //.....get specific---job---catagories----list
        getspecificjoblist: builder.query({

            query: (id) => ({
                url: `/specific-catagorie-list/${id}`
            }),
            providesTags: ['jobbox']
        }),
        //....
        getspecificjobData: builder.query({
            query: (id) => ({
                url: `/details-job-info/${id}`,
                headers: {
                    authorization: `Bearer ${localStorage.getItem('jobToken')}`
                }

            }),
            providesTags: ['Job']
        }),

        //......catagories-job-apply----data patching

        sendcataapply: builder.mutation({
            query: (data) => ({

                url: "/catagorie-job-apply",
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ['Job']
        }),
        //.....all...catagories----data----get
        getallCatagories: builder.query({
            query: (email) => ({
                url: `/get-catagories-data/${email}`
            }),
            providesTags: ['jobbox']
        }),

        //....update-company-catagories
        updatecompanycaragories: builder.mutation({
            query: ({ _id, ...data }) => ({
                url: `/update-companys-catagories/${_id}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['Job']
        }),
        //.....question and reply-----object implements with database
        questionandreply: builder.mutation({
            query: (data) => ({
                url: "/question-and-reply",
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ['Job']
        }),
        replycatagories: builder.mutation({
            query: (data) => ({
                url: "/catagories-reply",
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ['Job']
        }),

        //... //applied user job diashboard------only---candidate----show
        compayappliedjob: builder.query({

            query: (email) => ({
                url: `/compay-applied-jobs/${email}`,
                headers: {
                    authorization: `Bearer ${localStorage.getItem('jobToken')}`
                }
            }),
            providesTags: ['jobbox']

        }),
        //....delete-----char--data.....company----catagories

        deletecatagoriechat: builder.mutation({
            query: (data) => ({
                url: "/delete-catagories-chat",
                method: 'DELETE',
                body: data
            }),
            invalidatesTags: ['Job'],

        }),



        //....delete----operation.....catagories...job...applicants
        deletecatagoriejob: builder.mutation({
            query: (data) => ({
                url: "/delete-catagories-job",
                method: 'DELETE',
                body: data,

            }),
            invalidatesTags: ['Job']
        }),


        // //....store the user device information 
        postDeviceInformation: builder.mutation({
            query: (data) => ({
                url: "/post-device-information",
                method: 'POST',
                body: data
            }),
            providesTags: ['Job']
        }),
        //selected Content List-----> Can be Access Only Employeer 
        selectedContentList: builder.query({
            query: (email) => ({
                url: `/employee_selected_content/${email}`,
                method: "GET",
            }),
            providesTags: ['Job']
        }),
        //...update Employyer Information
        employeerRegisterData: builder.query({
            query: (email) => ({
                url: `/user/${email}`,
                method: "GET",
            }),
            providesTags: ['Job']
        }),
        //...Register employeer update information
        updateEmployeerRegister: builder.mutation({
            query: (data) => ({
                url: "/employeer_update_information",
                method: "PUT",
                body: data
            }),
            invalidatesTags: ['Job']

        }),
        //....delete Employeer And Candidate Account
        candidateAndEmployee_delete: builder.mutation({
            query: (id) => ({
                url: `/employeer_And_Candidate_ACCount/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Job']
        }),
        orginazationJobsList: builder.query({
            query: () => ({
                url: "/all_orgJobsList",
                method: "GET"
            }),
            providesTags: ['Job']
        })








    })
})

export const { useJobCategoriesMutation, useGetJobCatagoriesQuery, useGetCatagoriesUserEndQuery, useGetUpdateCateInfoQuery, useUpdateCataInfoMutation, useSpecificjobMutation, useGetspecificjoblistQuery, useGetspecificjobDataQuery, useSendcataapplyMutation, useGetallCatagoriesQuery, useUpdatecompanycaragoriesMutation, useQuestionandreplyMutation, useReplycatagoriesMutation, useCompayappliedjobQuery, useDeletecatagoriechatMutation, useDeletecatagoriejobMutation, usePostDeviceInformationMutation, useSelectedContentListQuery, useEmployeerRegisterDataQuery, useUpdateEmployeerRegisterMutation, useCandidateAndEmployee_deleteMutation, useOrginazationJobsListQuery } = apiCategoriSlice;