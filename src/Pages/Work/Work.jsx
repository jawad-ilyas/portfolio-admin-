import React from 'react'
import { useForm } from "react-hook-form"
import axios from "axios"
import { ShowWork } from './ShowWork'
import { ShowWorkData } from '../../Api/FetchWork.api.js';

const Work = () => {

    const {

        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        console.log(data?.avatar[0])
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);

        // Handle file upload
        formData.append('avatar', data.avatar[0]);
        console.log("add formdata", formData)
        axios.post('http://localhost:8080/api/v1/work/addWork', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },

        })
            .then(function (response) {
                console.log("work creation response ", response?.data?.success)
                // console.log(response);
                if (response?.data?.success === true) {

                }

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className='container pt-3 pb-3'>


            <div className='flex '>
                <div className='w-2/12 h-full bg-white sticky top-[69px] pt-2 me-5 z-0'>
                    <div className='bg-blue-200 w-full py-2 rounded-lg ps-4 mt-3'>
                        <a href='#ShowWork'>Show Work</a>
                    </div>
                    <div className='bg-blue-200 w-full py-2 rounded-lg ps-4 mt-3'>
                        <a href='#AddWork'>Add Work</a>
                    </div>



                </div>
                <div className='w-10/12 max-w-3xl mx-auto'>
                    {/* div for the show data */}
                    <div id='ShowWork '>
                        <h2 className='text-center font-semibold text-xl my-3'>Show Work</h2>
                        <ShowWork />
                    </div>
                    {/* form for add work */}
                    <div id='AddWork'>
                        <h2 className='text-center font-semibold text-xl my-3 mt-6'>Add Work</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col  gap-y-5' >
                            {/* register your input into the hook by invoking the "register" function */}
                            <input className='bg-slate-200  py-2 px-4 rounded-xl' placeholder='Work Name' {...register("name")} />
                            {errors.name && <span>Work Name is required</span>}
                            <input className='bg-slate-200  py-2 px-4 rounded-xl' placeholder='Work Description' {...register("description", { required: true })} />
                            {errors.description && <span>Work Description is required</span>}
                            <input type='file' {...register("avatar", { required: true })} />
                            {errors.avatar && <span> avatar is required</span>}
                            <input type="submit" className='hover:bg-white hover:text-blue-300 duration-300 hover:border-2 bg-blue-300 shadow-sm inline-block py-2 px-3 w-24 text-center rounded-lg mx-auto' />
                        </form>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Work