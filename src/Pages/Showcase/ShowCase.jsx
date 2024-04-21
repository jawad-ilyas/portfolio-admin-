import React, { useEffect } from 'react'
import Button from '../../Components/Button/Button'
import { useForm, Controller } from "react-hook-form"
import { createWork, createWorkExperience } from './showcase.api'
import { useDispatch, useSelector } from 'react-redux'
import { deleteExperience, deleteWorkExperience, fetchExperience, fetchWorkExperience } from '../../features/SkillExperience/SkillExperienceSlice'

function ShowCase() {


  const dispatch = useDispatch();
  const items = useSelector((state) => state.skillExperience.items);
  const works = useSelector((state) => state.skillExperience.works);
  // console.log("works selecttor ", works)

  // * import the functionality of the react hook forms 
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    reset: reset2,
    formState: { errors: errors2 },
  } = useForm();
  const onSubmit = (data) => {

    console.log("form data of the skill ", data)
    // const { company, desc, name } = data

    createWorkExperience(data)

    dispatch(fetchWorkExperience());
    reset();
  }
  const onSubmit2 = (data) => {
    console.log("form data of the experience ", data);
    const { workExperience, year } = data;
    console.log("form data of the experience workExperience ", workExperience);
    console.log("form data of the experience year ", year);
    // Convert object to array of key-value pairs and filter out true values
    const trueEntries = Object.entries(workExperience).filter(
      ([key, value]) => value === true
    ).map(([key, value]) => {
      return key
    })

    console.log("Filtered true entries: ", trueEntries);
    const updateData = {
      works: trueEntries,
      year

    }
    const createWorkFun = async () => {
      const response = await createWork(updateData)
      console.log("response of the skill work expreience ", response)
      dispatch(fetchExperience())

    }
    createWorkFun();

    console.log("Filtered true entries: ", trueEntries.length);
    // reset2();
  };

  const onDelete = (id) => {
    dispatch(deleteWorkExperience(id))
    dispatch(fetchWorkExperience());

  }
  const onDeleteExpeience = (id) => {
    dispatch(deleteExperience(id))
    dispatch(fetchExperience())
  }
  useEffect(() => {
    dispatch(fetchWorkExperience());
    dispatch(fetchExperience())
  }, [dispatch]);
  return (
    <div className='container pt-3 pb-3'>


      <div className='flex '>
        <div className='w-2/12 h-full bg-white sticky top-[69px] pt-2 me-5 z-0'>
          <Button name={"Add Work Experience"} id={"addWorkExperience"} />
          <Button name={"Show Work Experience"} id={"showWorkExperience"} />
          <Button name={"Add  Experience"} id={"addExperience"} />
          <Button name={"Show  Experience"} id={"showExperience"} />


        </div>
        <div className='w-10/12 max-w-3xl mx-auto'>
          {/* !create form  */}
          <div>
            <div id='addWorkExperience'>
              <h2 className='text-center font-semibold text-xl my-3'>Add Work Experience </h2>
              <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col  gap-y-5' >
                {/* register your input into the hook by invoking the "register" function */}
                <input className='bg-slate-200  py-2 px-4 rounded-xl' placeholder='Company Name' {...register("company", { required: true })} />
                {errors.company && <span className='text-red-400 font-bold text-sm capitalize'> Company Name is required</span>}
                <input className='bg-slate-200  py-2 px-4 rounded-xl' placeholder='Company Description' {...register("desc", { required: true })} />
                {errors.desc && <span className='text-red-400 font-bold text-sm capitalize'> project Description is required</span>}
                <input className='bg-slate-200  py-2 px-4 rounded-xl' placeholder='Company Role ' {...register("name", { required: true })} />
                {errors.name && <span className='text-red-400 font-bold text-sm capitalize'> Role is Required</span>}



                <input type="submit" className='hover:bg-white hover:text-blue-300 duration-300 hover:border-2 bg-blue-300 shadow-sm inline-block py-2 px-3 w-24 text-center rounded-lg mx-auto' />
              </form>
            </div>
          </div>
          {/* show form */}
          <div id='showWorkExperience'>
            <h2 className='text-center font-semibold text-xl my-3'>Show Work Experience </h2>

            {items && items.map((item, index) => (
              <div key={index} className='my-3 shadow rounded-1xl  p-3'>
                <div className='flex flex-row items-center justify-between  max-w-2xl mx-auto'>
                  <div>
                    <div><span className='font-semibold text-xl'>Role : </span>{item.name}</div>
                    <div><span className='font-semibold text-xl'>Company : </span>{item.company}</div>
                  </div>
                  <div>
                    <div className='font-semibold text-xl text-right'>Description </div>
                    <div>{item.desc}</div>
                  </div>
                </div>
                <div className='text-center py-3'>

                  <button className='bg-red-400 px-4 py-2 rounded-md me-4 hover:text-white' onClick={() => onDelete(
                    item._id)}>Delete</button>
                  <button>update</button>
                </div>
              </div>
            ))}
          </div>

          {/* add experience  */}
          <div id='addExperience'>
            <div id='addExperience '>
              <h2 className='text-center font-semibold text-xl my-3'>Add  Experience </h2>
              <form onSubmit={handleSubmit2(onSubmit2)} className='flex flex-col  gap-y-5' >
                {/* register your input into the hook by invoking the "register" function */}
                <input className='bg-slate-200  py-2 px-4 rounded-xl' placeholder='year' {...register2("year", { required: true })} />
                {errors.year && <span className='text-red-400 font-bold text-sm capitalize'> year is required</span>}
                <div className='flex flex-row items-center  flex-wrap'>
                  {items.map((item, index) => {
                    return (
                      <div key={index} className="flex items-center">
                        <input
                          type="checkbox"
                          {...register2(`workExperience.${item._id}`)}
                          // id={item.projectCategoryName}
                          className="ms-1"
                        />
                        <label className='ms-2 text-lg capitalize' htmlFor={item.name}>{item.name}</label>
                      </div>
                    );
                  })}
                </div>



                <input type="submit" className='hover:bg-white hover:text-blue-300 duration-300 hover:border-2 bg-blue-300 shadow-sm inline-block py-2 px-3 w-24 text-center rounded-lg mx-auto' />
              </form>
            </div>
          </div>
          {/* show experience  */}
          <div id='showExperience' className='max-w-2xl mx-auto my-5'>
            <h2 className='text-center font-semibold text-xl my-3'>Show Experience </h2>

            {works?.map((item, index) => {
              return <div key={index} className='flex flex-row items-center justify-center gap-x-6'>
                <div className='font-bold'>{item.year}</div>
                <div>
                  {item?.works?.map((work, index2) => (
                    <div key={index2}>
                      <div ><span className='font-medium'>Company : </span>{work.company}</div>
                      <div ><span className='font-medium'>Role : </span>{work.name}</div>
                    </div>
                  ))}
                </div>
                <div>
                  <div className='bg-red-500 px-4 py-2 text-white rounded-lg cursor-pointer' onClick={() => onDeleteExpeience(item._id)}> Delete</div>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowCase