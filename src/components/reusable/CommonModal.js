import React from 'react';
import { TbSearch } from "react-icons/tb";
const CommonModal = ({ data, ORG_APLLICATION, htmlFor }) => {
    return (
        <>
            <input type="checkbox" id={htmlFor} className="modal-toggle " />
            <div className="modal">
                <div className="modal-box relative bg-slate-700">
                    <label htmlFor={htmlFor} className="btn btn-sm btn-circle absolute right-2 top-4">✕</label>

                    <br />

                    <h1 className="m-3 text-center text-xl bg-blue-100 text-blue-800  font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">{ORG_APLLICATION}</h1>

                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Email Address</th>
                                    <th>
                                        list
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data?.map((v, index) => <tr key={index + 1} className="hover:bg-indigo-500">
                                        <th>{index + 1}</th>
                                        <td>{v?.email}</td>
                                        <td><button className="btn btn-outline btn-sm"><TbSearch className='text-xl'></TbSearch></button></td>

                                    </tr>)
                                }






                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

        </>
    );
};

export default CommonModal;