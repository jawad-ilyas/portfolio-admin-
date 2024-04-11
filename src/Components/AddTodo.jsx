import React from 'react'
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { addTodo } from '../features/todo/todoSlice';
function AddTodo() {

    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        watch,
        
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        dispatch(addTodo(data))
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col  gap-y-5' >
            <div className='flex  items-center justify-between'>
                <h2 className='text-center font-semibold text-xl my-3'>Update  Work</h2>

            </div>

            {/* register your input into the hook by invoking the "register" function */}
            <input className='bg-slate-200  py-2 px-4 rounded-xl' placeholder='Work Name' {...register("name")} />
            {errors.name && <span>Work Name is required</span>}
            <input className='bg-slate-200  py-2 px-4 rounded-xl' placeholder='Work Description' {...register("description", { required: true })} />
            {errors.description && <span>Work Description is required</span>}

            {/* <div><img src={avatar} className='size-20 object-contain rounded-md'></img></div> */}

            <input type="submit" className='hover:bg-white hover:text-blue-300 duration-300 hover:border-2 bg-blue-300 shadow-sm inline-block py-2 px-3 w-24 text-center rounded-lg mx-auto' />
        </form>
    )
}

export default AddTodo