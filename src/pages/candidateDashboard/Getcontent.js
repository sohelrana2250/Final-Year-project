import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDelete_contentByIdMutation, useDelete_user_contactMutation, useGetSpecific_ContentJobQuery } from '../../features/api/apiDevicesSlice';
import Loading from '../../components/reusable/Loading';
import { toast } from 'react-hot-toast';
import CommonContentAllJob from '../../components/reusable/CommonContentAllJob';
import Swal from 'sweetalert2';

const Getcontent = () => {
    const { user: { email } } = useSelector((state) => state.auth);
    const { data, isLoading, error } = useGetSpecific_ContentJobQuery(email, { refetchOnMountOrArgChange: true })
    const [deletePost, { data: serverRespone, isSuccess, error: deleteError }] = useDelete_contentByIdMutation();
    const [delete_contact, { data: delete_response, error: delete_error }] = useDelete_user_contactMutation();
    const search = "";

    useEffect(() => {

        if (serverRespone?.data?.acknowledged && isSuccess) {
            toast.success("Successfully Deleted");

        }
        else {
            deleteError && toast.error(`Server-Eroror-409 ${deleteError?.message}`);
        }

    }, [serverRespone, isSuccess, deleteError]);


    useEffect(() => {
        if (delete_response?.status && delete_response?.data?.acknowledged) {
            toast.success("Successfully contact Deleted");

        }
        else {
            delete_error && toast.error(`Server-Error 403 ---> ${delete_error?.message}`);
        }

    }, [delete_response, delete_error]);


    if (data?.status === 403) {
        //.....futute we have to used logout function
        return <Loading />
    }

    const handelDeletesubmit = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deletePost(id);
                Swal.fire(
                    'Deleted!',
                    'Your Content file has been deleted.',
                    'success'
                )
            }
        })

    }

    const handelContact_Information = (id, contact_id) => {


        // const confirmdelete = window.confirm("Are you sure Delete this message");
        // if (confirmdelete)
        //     delete_contact({ id, contact_id });

        Swal.fire({
            title: 'Are you sure Delete this message ?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                delete_contact({ id, contact_id });
                Swal.fire(
                    'Deleted!',
                    'Your message has been deleted.',
                    'success'
                )
            }
        })





    }







    return (
        <>



            {
                isLoading && <div className='flex justify-center  m-5'>
                    <progress className="progress w-56 h-5"></progress>
                </div>
            }
            {

                error && toast.error(`Server-Error ${error?.message} and ${data?.data}`)
            }
            <CommonContentAllJob data={data} handelContact_Information={handelContact_Information} handelDeletesubmit={handelDeletesubmit} search={search?.toLocaleLowerCase()} isAllow={true} ></CommonContentAllJob>
        </>
    );
};

export default Getcontent;