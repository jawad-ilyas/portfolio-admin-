
import React from 'react'
import { deleteSkill, fetchSKill } from '../../features/Skill/SkillSlice'
import { useDispatch } from 'react-redux'

function ShowSkill({ index, skill }) {

    const dispatch = useDispatch();
    const handleDeleteSkill = async (id)=>{

        console.log("id of the delete skill " , id)
        await dispatch(deleteSkill(id))
        dispatch(fetchSKill())
    }
    return (
        <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img src={skill.icon} alt={skill.skillName} className="size-28 mb-2 object-cover " />
            <span className="text-lg font-semibold">{skill.skillName}</span>
            <button className='bg-red-400 cursor-pointer text-white  hover:bg-red-600 rounded-md px-3 py-1 mt-2' onClick={() => { handleDeleteSkill (skill._id)}}>Delete</button>
        </div>
    )
}

export default ShowSkill