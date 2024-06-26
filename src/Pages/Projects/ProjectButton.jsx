import React from 'react'
import swal from 'sweetalert';

import { useDispatch, useSelector } from "react-redux"
import { deleteProjectCategory, showProjectCategrory } from '../../features/projectCategory/projectCategorySlice';



function ProjectButton({ projectCategoryName, projectCategoryDescription, _id }) {




    const dispatch = useDispatch()


    // ? Function used for the show popup to user before delete 
    const deleteSweetAlert = (_id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(async (willDelete) => {
                if (willDelete) {
                    swal("Poof! Your Project Category is Deleted !", {
                        icon: "success",
                    });
                    await dispatch(deleteProjectCategory(_id))
                    dispatch(showProjectCategrory())
                } else {
                    swal("Your Project Category  is safe!");
                }
            });
    }


    return (
        <div className=' grid items-center my-2 grid-cols-3 border border-gray-300 p-2 rounded-lg'>
            <div>
                <p className='text-center font-bold'>Project Category Name </p>
                <p className='text-center capitalize'>{projectCategoryName}</p>
            </div>
            <div>
                <p className='text-center font-bold capitalize'>Project Category Description </p>
                <p className='text-center truncate'>{projectCategoryDescription}</p>
            </div>
            <div>
                <p className='text-center cursor-pointer bg-red-100 py-1 rounded-md' onClick={() => deleteSweetAlert(_id)}>Delete </p>
                {/* <p className='text-center cursor-pointer mt-2 bg-green-100 py-1 rounded-md ' onClick={() => handleUpdate(_id )}>Update</p> */}
            </div>

        </div>
    )
}

export default ProjectButton