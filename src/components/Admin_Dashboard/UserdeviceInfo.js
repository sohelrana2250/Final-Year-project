import React, { useEffect } from 'react';
import { useDisable_user_accountMutation, useGet_all_userInofrmationQuery } from '../../features/api/apiSlice';
import { toast } from 'react-hot-toast';

const UserdeviceInfo = () => {

    const { data, isLoading, error } = useGet_all_userInofrmationQuery(null, { refetchOnMountOrArgChange: true });
    const [disable_data, { data: server_respone, isSuccess, error: server_error }] = useDisable_user_accountMutation();

    const handleToggle = (email, account_status) => {


        const A_status = {
            disable: !account_status,
            ac_date: new Date().getTime()

        }

        disable_data({ email, ...A_status });
    }

    useEffect(() => {

        if (isSuccess && server_respone?.status && server_respone?.data?.acknowledged) {
            toast.success("Successfully-Status Change");
        }
        else if (server_respone?.status === false) {
            toast.error(server_respone?.message);
        }
        else {
            server_error && toast.error(`Server-Error 404 ${server_error?.message}`)
        }


    }, [isSuccess, server_respone, server_error]);


    return (
        <>

            <div className='m-3'>

                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>photoURL </th>
                                <th>User ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>U.A.Status</th>
                                <th>U.A.S.Date</th>
                                <th>Device Name</th>
                                <th>Verson Name</th>
                                <th>Mac Address</th>
                                <th>A.C.Date</th>
                                <th> Login Time</th>
                                <th>LogOut Time</th>
                                <th>status</th>
                            </tr>
                        </thead>

                        {
                            isLoading && <div className='flex justify-center  m-5'>
                                <progress className="progress w-56 h-5"></progress>
                            </div>
                        }

                        {
                            error && <img className="w-full" src="https://shorturl.at/kuADO" alt="" />
                        }
                        <tbody>


                            {
                                data?.data?.map((v, index) => <tr key={index + 1} className="hover">
                                    <th>{index + 1}</th>

                                    <th>
                                        <div className={`avatar ${v?.status ? "online" : "offline"}`}>
                                            <div className="w-16 rounded-full">
                                                <img src={v?.photoURL ? v?.photoURL : "https://shorturl.at/cuPW5"} alt="" />
                                            </div>
                                        </div>

                                    </th>
                                    <th>{v?.uid}</th>
                                    <th>{v?.name}</th>
                                    <th>{v?.email}</th>
                                    <th> <button onClick={() => handleToggle(v?.email, v?.disable)}
                                        className={`${v?.disable ? " bg-red-500" : "bg-green-500"} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}>
                                        {v?.disable ? "Disable" : "Enable"}
                                    </button></th>
                                    <th>
                                        {new Date(v?.ac_date).toString()}
                                    </th>
                                    <th>{v?.deviceName}</th>
                                    <th>{v?.versonName}</th>
                                    <th>{v?.mac_address}</th>
                                    <th>{new Date(Number(v?.createdAt)).toString()}</th>
                                    <th>{new Date(Number(v?.lastLoginAt)).toString()}</th>
                                    <th>{new Date(v?.lastAt).toString()}</th>
                                    <th><button className={`${v?.status ? "bg-green-500" : "bg-red-500"} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}> {v?.status ? "Active" : "InActive"}</button></th>

                                </tr>)
                            }




                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
};

export default UserdeviceInfo;