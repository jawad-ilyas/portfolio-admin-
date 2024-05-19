import React, { useEffect } from 'react'
import Button from '../../Components/Button/Button'
import { useForm } from 'react-hook-form';
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { fetchSkill } from '../../features/SkillExperience/SkillExperienceSlice';

function Skills() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const skills = useSelector((state) => state.skillExperience.skills);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append('skillName', data.skillName);

    formData.append('icon', data.icon[0]);

    axios.post('http://localhost:8080/api/v1/skill/createskill', formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },

    }).then((response) => {
      console.log(response)
      console.log("response after update the model ", response.data)
    })

    console.log("skills ui data", data)
    dispatch(fetchSkill())

    reset();
  };
  useEffect(() => {

    dispatch(fetchSkill())
  }, [dispatch])

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
          <div className=" mx-auto my-10 p-6  rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Add Skill</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-5'>
              {/* Skill Name Field */}
              <div className="flex flex-col">
                <label htmlFor="skillName" className="text-lg font-semibold mb-2">Skill Name:</label>
                <input
                  type="text"
                  id="skillName"
                  className='bg-slate-200 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300'
                  {...register('skillName', {
                    required: 'Skill Name is required',
                  })}
                />
                {errors.skillName && <p className='text-red-400 font-bold text-sm mt-1'>{errors.skillName.message}</p>}
              </div>

              {/* Image Field */}
              <div className="flex flex-col">
                <label htmlFor="image" className="text-lg font-semibold mb-2">Image:</label>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  className='bg-slate-200 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300'
                  {...register('icon', {
                    required: 'Image is required',
                  })}
                />
                {errors.icon && <p className='text-red-400 font-bold text-sm mt-1'>{errors.icon.message}</p>}
              </div>

              {/* Submit Button */}
              <input
                type="submit"
                className='bg-blue-300 hover:bg-white hover:text-blue-300 duration-300 hover:border-2 shadow-sm inline-block py-2 px-4 rounded-lg mx-auto cursor-pointer transition-all ease-in-out '
                value="Add Skill"
              />
            </form>
          </div>
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-semibold mb-4">Skills</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                  <img src={skill.icon} alt={skill.skillName} className="w-16 h-16 mb-2" />
                  <span className="text-lg font-semibold">{skill.skillName}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills