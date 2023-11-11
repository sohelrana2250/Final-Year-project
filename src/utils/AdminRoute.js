import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/reusable/Loading";
import { useFind_by_isitAdminQuery } from "../features/api/apiSlice";

const AdminRoute = ({ children }) => {
    const { pathname } = useLocation();
    const { user: { email }, isLoading } = useSelector((state) => state?.auth);

    const { data } = useFind_by_isitAdminQuery(email, { refetchOnMountOrArgChange: true });


    //

    console.log(data?.isAdmin);


    if (isLoading) {
        return <Loading />;
    }

    if (email && data?.isAdmin) {
        return children;
    }
    return <Navigate to='/dashboard/setting' state={{ path: pathname }} replace />;
};

export default AdminRoute;