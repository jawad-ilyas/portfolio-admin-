import React from 'react'
import Button from '../../Components/Button/Button'
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { addDataIntoPorject } from '../../features/Project/projectSlice'
import ProjectCategory from './ProjectCategory'
import ShowProjectCategory from './ShowProjectCategory'
import { createProjects } from './ProjectApi'
function Projects() {



  // ! use the dispatch method 
  const dispatch = useDispatch()
  const dataForProjectCategory = useSelector(state => state.project.ProjectCats)
  console.log("dataForProjectCategory into project page ", dataForProjectCategory)
  // * import the functionality of the react hook forms 
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  // * Console the data of the form 
  const onSubmit = (data) => {
    // console.log("data of the project funciton ", data)
    // console.log("data of the project funciton projectTags : ", data?.projectTags)

    const projectTagFilter = Object.entries(data?.projectTags)
      .filter(([tags, value]) => {

        return value === true
      }).map(([tags, value]) => {
        return tags
      })


    // Destructuring the dataUpdate object
    const {
      projectName,
      projectDescription,
      projectDeployLink,
      projectGithubLink,
      projectTags
    } = data;

    const updatedData = {
      projectName,
      projectDescription,
      projectDeployLink,
      projectGithubLink,
      projectTags: projectTagFilter
    };

    // console.log("Updated Data:", updatedData);
    // 


    // ! Project Api Call
    const createProjectCall = async () => {

      const respones = await createProjects(updatedData)
      // console.log("response from the project creation ", respones)
    }
    createProjectCall();


    reset()

    // dispatch(addDataIntoPorject(data))
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
              <div className='flex flex-row items-center  flex-wrap'>
                {dataForProjectCategory.map((item, index) => {
                  return (
                    <div key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        {...register(`projectTags.${item.projectCategoryName}`)}
                        // id={item.projectCategoryName}
                        className="ms-1"
                      />
                      <label className='ms-2 text-lg capitalize' htmlFor={item.projectCategoryName}>{item.projectCategoryName}</label>
                    </div>
                  );
                })}
              </div>

              {/* <select {...register("gender")}>
                {dataForProjectCategory.map((item, index) => {
                  return <option key={index} value={item.projectCategoryName}>{item.projectCategoryName}</option>

                })}
              </select> */}
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