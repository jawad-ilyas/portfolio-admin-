import React from 'react'
import { useForm } from "react-hook-form"
// ! step 3 - setup the axios api 
import axios from "axios"
import { createProjectCategory, fetchProjectCategory } from './ProjectApi'
import { useDispatch, useSelector } from "react-redux"
import { addDataIntoProjectCategory } from '../../features/Project/projectSlice'

function ProjectCategory() {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    const dispatch = useDispatch();
    const onSubmit = (data) => {


        const createProjectCat = async () => {
            const respones = await createProjectCategory(data)
            console.log("project category created : ", respones)
            const fetchProjectCategoryApiResponse = async () => {
                try {
                    const response = await fetchProjectCategory();
                    console.log("response of the fetch project categories", response);

                    dispatch(addDataIntoProjectCategory(response))
                    // Assuming you want to set state here
                } catch (error) {
                    console.log("Error fetching project categories:", error);
                }
            };

            fetchProjectCategoryApiResponse();
        }
        createProjectCat()
        reset(); // Assuming you have access to reset from useForm

    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-5'>
                <input className='bg-slate-200  py-2 px-4 rounded-xl' placeholder='project Category  Name' {...register("projectCategoryName", { required: true })} />
                {errors.projectName && <span className='text-red-400 font-bold text-sm capitalize'> project Name is required</span>}
                <input className='bg-slate-200  py-2 px-4 rounded-xl' placeholder='project Category Description ' {...register("projectCategoryDescription")} />


                <input type="submit" className='hover:bg-white hover:text-blue-300 duration-300 hover:border-2 bg-blue-300 shadow-sm inline-block py-2 px-3 w-24 text-center rounded-lg mx-auto' />
            </form>
        </div>
    )
}

export default ProjectCategory