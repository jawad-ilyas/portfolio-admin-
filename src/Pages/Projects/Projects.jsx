import React from 'react'
import Button from '../../Components/Button/Button'
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { addDataIntoPorject } from '../../features/Project/projectSlice'
import ProjectCategory from './ProjectCategory'
import ShowProjectCategory from './ShowProjectCategory'
function Projects() {



  // ! use the dispatch method 
  const dispatch = useDispatch()
  // * import the functionality of the react hook forms 
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  // * Console the data of the form 
  const onSubmit = (data) => {
    console.log(data)
    dispatch(addDataIntoPorject(data))
  }




  return (
    <div className='container pt-3 pb-3'>
      <div className='flex'>

        <div className='w-2/12 h-full bg-white sticky top-[69px] pt-2 me-5 z-0'>
          <Button name={"Add Project"} id={"addProject"} />
          <Button name={"Add Project Category"} id={"addProjectCategory"} />
          <Button name={"Add Project"} id={"addProject"} />
        </div>
        <div className='w-10/12 max-w-3xl  mx-auto'>
          {/* div for the show data */}
          <div id='ShowWork '>
            <h2 className='text-center font-semibold text-xl my-3'>Show Project Category</h2>
            <ShowProjectCategory />
          </div>
          <div id='addProjectCategory '>
            <h2 className='text-center font-semibold text-xl my-3'>Add Project Category</h2>
            <ProjectCategory />
          </div>
          {/* form for add work */}
          <div id='AddWork'>
            <h2 className='text-center font-semibold text-xl my-3 mt-6'>Add Work</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col  gap-y-5' >
              {/* register your input into the hook by invoking the "register" function */}
              <input className='bg-slate-200  py-2 px-4 rounded-xl' placeholder='Work Name' {...register("projectName", { required: true })} />
              {errors.projectName && <span className='text-red-400 font-bold text-sm capitalize'> project Name is required</span>}
              <input className='bg-slate-200  py-2 px-4 rounded-xl' placeholder='Work Description' {...register("projectDescription", { required: true })} />
              {errors.projectDescription && <span className='text-red-400 font-bold text-sm capitalize'> project Description is required</span>}
              <input className='bg-slate-200  py-2 px-4 rounded-xl' placeholder='project GithubLink ' {...register("projectGithubLink", { required: true })} />
              {errors.projectGithubLink && <span className='text-red-400 font-bold text-sm capitalize'> project GitHub Link is required</span>}
              <input className='bg-slate-200  py-2 px-4 rounded-xl' placeholder='project DeployLink ' {...register("projectDeployLink", { required: true })} />
              {errors.projectDeployLink && <span className='text-red-400 font-bold text-sm capitalize'> project Deploy Link is required</span>}
              {/* <input type='file' {...register("avatar", { required: true })} />
              {errors.avatar && <span className='text-red-400 font-bold text-sm capitalize'> avatar is required</span>} */}
              <input type="submit" className='hover:bg-white hover:text-blue-300 duration-300 hover:border-2 bg-blue-300 shadow-sm inline-block py-2 px-3 w-24 text-center rounded-lg mx-auto' />
            </form>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Projects