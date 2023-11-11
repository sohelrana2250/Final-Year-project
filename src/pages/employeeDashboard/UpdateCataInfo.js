
import { FaRegHandPointLeft } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetUpdateCateInfoQuery, useUpdateCataInfoMutation } from '../../features/api/apiCategoriSlice';
import AdvCarousel from '../../layout/main/AdvCarousel';
import { useEffect } from 'react';
import Swal from 'sweetalert2';


const UpdateCataInfo = () => {



    const { id } = useParams();
    const { data } = useGetUpdateCateInfoQuery(id, { refetchOnMountOrArgChange: true });

    const { position, companyName, catagories, c_email, c_location, foundeddate, w_url,
        companysize
        , photo, postDate, email, _id
    } = data?.data || {};
    const navigate = useNavigate();
    const [update, { data: updatedata, isSuccess, error }] = useUpdateCataInfoMutation();

    const handelUpdate = (event) => {


        const element = event.target;
        const position = element.position.value;
        const companyName = element.companyName.value;
        const catagories = element.catagories.value;

        const c_location = element.c_location.value;
        const photo = element.photo.value;
        const email = element.email.value;
        const companysize = element.companysize.value;
        const c_email = element.c_email.value;
        const foundeddate = element.foundeddate.value;
        const w_url = element.w_url.value



        const postDate = element.postDate.value;

        const data = {
            position, companyName, catagories, c_location, photo, email, companysize, c_email, foundeddate, w_url, postDate
        }

        //console.log(data);
        update({ _id, ...data });
        event.preventDefault();
    }



    useEffect(() => {

        if (isSuccess && updatedata?.status && updatedata?.data?.acknowledged) {

            Swal.fire('Successfully ', 'Updated Information');
        }

        else {

            error && Swal.fire('Poor Cooding Error', error?.message);

        }


    }, [updatedata, isSuccess, error]);



    return (
        <div>

            <AdvCarousel />
            <div className='flex justify-center items-center overflow-auto p-10'>
                <form onSubmit={handelUpdate} className='bg-secondary/20 shadow-lg p-10 rounded-2xl flex flex-wrap gap-3 max-w-full justify-between'

                >
                    <h1 className='w-full text-2xl text-primary mb-5'>
                        Update-New-Information
                    </h1>
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='position'>
                            Resent Position
                        </label>
                        <input type='text' name='position' defaultValue={position} className="input input-bordered w-full rounded-lg " />
                    </div>
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='companyName'>
                            Company Name
                        </label>
                        <input
                            className='rounded-lg input input-bordered w-full'
                            type='text'

                            name='companyName'
                            defaultValue={companyName}


                        />
                    </div>
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='Categories-Name'>
                            Job-Catagories
                        </label>
                        <input
                            className='rounded-lg input input-bordered w-full'
                            type='text'
                            readOnly
                            name="catagories"
                            defaultValue={catagories}

                        />
                    </div>
                    {/* compamy location */}

                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='c_location'>
                            Company Location
                        </label>
                        <input type='text' name="c_location" defaultValue={c_location} className='input input-bordered w-full rounded-lg' />
                    </div>

                    {/* image input-section */}

                    <div className="flex flex-col w-full max-w-xs">

                        <label className='mb-2' htmlFor='Image'>
                            Image
                        </label>
                        <input type='text' name='photo' defaultValue={photo} className="input input-bordered w-full max-w-xl rounded-lg" />

                    </div>

                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='email'>
                            Employeer Email
                        </label>
                        <input type='email' name="email" readOnly defaultValue={email} className='input input-bordered w-full rounded-lg' />
                    </div>
                    {/* company Size */}
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='companysize'>
                            Company Above Size
                        </label>
                        <input type='text' name="companysize" defaultValue={companysize
                        } className='input input-bordered w-full rounded-lg' />
                    </div>
                    {/* company email */}
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='c_email'>
                            Company Email Address
                        </label>
                        <input type='email' name="c_email" defaultValue={c_email} className='input input-bordered w-full rounded-lg' />
                    </div>
                    {/* founded date */}
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='foundeddate'>
                            Company Founded Date
                        </label>
                        <input type='text' name="foundeddate" defaultValue={foundeddate} className='input input-bordered w-full rounded-lg' />
                    </div>

                    {/* web site Url */}
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='w_url'>
                            Company Website URL
                        </label>
                        <input type='url' name="w_url" defaultValue={w_url} className='input input-bordered w-full rounded-lg' />
                    </div>

                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='postDate'>
                            Date-And-Time
                        </label>
                        <input type='text' name="postDate" defaultValue={postDate?.slice(0, 16)} className='input input-bordered w-full rounded-lg' />
                    </div>

                    <hr className='w-full mt-2 bg-black' />
                    <div className=' card-actions flex justify-between items-center w-full mt-3'>
                        <button className="btn btn-primary btn-sm text-xl" onClick={() => navigate('/dashboard/post-catagorie')}><FaRegHandPointLeft></FaRegHandPointLeft></button>
                        <button className='btn btn-outline btn-sm' type='submit'>
                            Update
                        </button>

                    </div>
                </form>
            </div>

        </div>
    );
};

export default UpdateCataInfo;