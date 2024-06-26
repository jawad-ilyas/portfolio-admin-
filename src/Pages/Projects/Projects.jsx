import React, { useEffect } from 'react'
import Button from '../../Components/Button/Button'
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import ProjectCategory from './ProjectCategory'
import ShowProjectCategory from './ShowProjectCategory'
import { showProjectCategrory } from '../../features/projectCategory/projectCategorySlice'
import { createProjects, fetchProjects } from '../../features/Project/projectSlice'
import ShowProject from './ShowProject'
function Projects() {


  const { projectCategoryDetail } = useSelector(state => state.projectCategory)
  const { projects } = useSelector(state => state.project)
  console.log("response of the fetch project ", projects)
  // console.log("projectCategoryDetail ", projectCategoryDetail)
  const dispatch = useDispatch();






  // ! use the dispatch method 
  // * import the functionality of the react hook forms 
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  // * Console the data of the form 
  const onSubmit = async (data) => {
    console.log("date of teh project is the ", data)
    const formData = new FormData();
    // console.log(data.projectTags);
    // console.log("data.projectImage" , data.projectImage)
    formData.append("projectName", data.projectName)
    formData.append("projectDescription", data.projectDescription)
    formData.append("projectGithubLink", data.projectGithubLink)
    formData.append("projectDeployLink", data.projectDeployLink)
    formData.append("projectImage", data.projectImage[0])

    const selectProjectTags = []
    Object.entries(data.projectTags).forEach(([key, value]) => {
      console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
      selectProjectTags.push(value)
    });
    let ProjectTags = selectProjectTags.filter(item => item != false)






    formData.append("projectTags", ProjectTags)
    console.log("create Projects is open")
    await dispatch(createProjects(formData))
    dispatch(fetchProjects())

    console.log("create Projects is clossed")
    reset()
  }
  // ! why watch is used there because we need to multiple values of the project tags 
  const projectTags = watch("projectTags", []);

  useEffect(() => {
    dispatch(fetchProjects())
    dispatch(showProjectCategrory())
  }, [dispatch])


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
            <ShowProjectCategory projectCategoryDetail={projectCategoryDetail} />
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
              <input className='bg-slate-200  py-2 px-4 rounded-xl' placeholder='Project Name' {...register("projectName", { required: true })} />
              {errors.projectName && <span className='text-red-400 font-bold text-sm capitalize'> project Name is required</span>}
              <input className='bg-slate-200  py-2 px-4 rounded-xl' placeholder='Project Description' {...register("projectDescription", { required: true })} />
              {errors.projectDescription && <span className='text-red-400 font-bold text-sm capitalize'> project Description is required</span>}
              <input className='bg-slate-200  py-2 px-4 rounded-xl' placeholder='project GithubLink ' {...register("projectGithubLink")} />
              {errors.projectGithubLink && <span className='text-red-400 font-bold text-sm capitalize'> project GitHub Link is required</span>}
              <input className='bg-slate-200  py-2 px-4 rounded-xl' placeholder='project DeployLink ' {...register("projectDeployLink", { required: true })} />
              {errors.projectDeployLink && <span className='text-red-400 font-bold text-sm capitalize'> project Deploy Link is required</span>}
              <input type='file'  {...register("projectImage", { required: true })} />
              {errors.projectImage && <span className='text-red-400 font-bold text-sm capitalize'> project Image is required</span>}

              <div className='flex flex-row items-center  flex-wrap'>
                {projectCategoryDetail.map((item, index) => {
                  return (
                    <div key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        {...register(`projectTags.${index}`)}
                        value={item.projectCategoryName}
                        className="ms-1"
                      />
                      <label className='ms-2 text-lg capitalize'>{item.projectCategoryName}</label>
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
          {/* show the projects  */}
          <div>
            <ShowProject projects={projects} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects