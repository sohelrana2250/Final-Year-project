import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useGetcandidateInfoQuery, useUpdatecandidateInfoMutation } from '../../features/api/apiDevicesSlice';
import AdvCarousel from '../../layout/main/AdvCarousel';

const UpdateCandidateInfo = () => {

    const { user: { email } } = useSelector((state) => state.auth);
    const { data } = useGetcandidateInfoQuery(email, { refetchOnMountOrArgChange: true });
    const [updateCandidate, { data: updateMessage, isSuccess, error }] = useUpdatecandidateInfoMutation();
    const { _id, firstName, lastName, country, city, address, cvurl, gender, postcode

    } = data?.data || {};

    const handelUpdate = (event) => {


        const element = event.target;
        const firstName = element.firstName.value;
        const lastName = element.lastName.value;
        const city = element.city.value;
        const gender = element.gender.value;
        const country = element.country.value;
        const postcode = element.postcode.value;
        const address = element.address.value;
        const cvurl = element.cvurl.value;

        const data = {
            firstName, lastName, city, gender, country, postcode, address, cvurl
        }
        updateCandidate({ _id, ...data });
        event.preventDefault();


    }

    useEffect(() => {

        if (updateMessage?.status && updateMessage?.data?.acknowledged && isSuccess) {
            toast.success('successfully-added');
        }
        else {
            error && toast.error(error?.message);
        }

    }, [updateMessage, isSuccess, error]);



    return (
        <>
            <AdvCarousel />
            <div className='flex justify-center items-center overflow-auto p-10'>
                <form onSubmit={handelUpdate}
                    className='bg-secondary/20 shadow-lg p-10 rounded-2xl flex flex-wrap gap-3 max-w-full justify-between'

                >
                    <h1 className='w-full text-2xl text-primary mb-5'>Candidate</h1>
                    <div className='flex flex-col w-full max-w-xs'>
                        <label htmlFor='firstName'>
                            First Name
                        </label>
                        <input type='text' name='firstName' id='firstName' defaultValue={firstName} className="rounded-lg  input input-bordered w-full" />
                    </div>
                    <div className='flex flex-col w-full max-w-xs'>
                        <label htmlFor='lastName'>
                            Last Name
                        </label>
                        <input type='text' name='lastName' id='lastName' defaultValue={lastName} className="rounded-lg  input input-bordered w-full" />
                    </div>
                    <div className='flex flex-col w-full max-w-xs'>
                        <label htmlFor='city'>
                            City
                        </label>
                        <input type='text' name='city' id='city' defaultValue={city} className="rounded-lg  input input-bordered w-full" />
                    </div>
                    <div className='flex flex-col w-full max-w-xs'>
                        <label htmlFor='gender' >
                            Gender
                        </label>
                        <input type='text' name='gender' id='gender' defaultValue={gender} className="rounded-lg  input input-bordered w-full" />

                    </div>

                    <div className='flex flex-col w-full max-w-xs'>
                        <label htmlFor='country'>
                            Country
                        </label>
                        <input type='text' name='country' id='country' defaultValue={country} className="rounded-lg  input input-bordered w-full" />
                    </div>


                    <div className='flex flex-col w-full max-w-xs'>
                        <label htmlFor='postcode'>
                            Postal Code
                        </label>
                        <input type='text' name='postcode' id='postcode' defaultValue={postcode} readOnly className="rounded-lg  input input-bordered w-full" />
                    </div>


                    <div className='flex flex-col w-full max-w-xs'>
                        <label htmlFor='address'>
                            Address
                        </label>
                        <input type='text' name="address" id='address' defaultValue={address} className="rounded-lg  input input-bordered w-full" />
                    </div>




                    <div className='flex flex-col w-full max-w-xs'>
                        <label htmlFor='cvurl'>
                            Provide Your CV URL
                        </label>
                        <input type='text' name='cvurl' id='cvurl' defaultValue={cvurl} className="rounded-lg  input input-bordered w-full" />
                    </div>
                    <hr className='w-full mt-2 bg-black' />
                    <div className='flex justify-end w-full mt-3'>
                        <button className='btn btn-outline btn-sm' type='submit'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default UpdateCandidateInfo;