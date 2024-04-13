import React from 'react'
import swal from 'sweetalert';
import { deleteProjectCategory, fetchProjectCategory } from './ProjectApi';
import { addDataIntoProjectCategory } from '../../features/Project/projectSlice';

import { useDispatch, useSelector } from "react-redux"



function ProjectButton({ projectCategoryName, projectCategoryDescription, _id }) {


    const dispatch = useDispatch();

    // ! Actual function for the delete 
    const deleteFunction = (_id) => {

        console.log("Project button delete functionality key : ", _id)

        const fetchDeleteProjectCategory = async () => {
            const respones = await deleteProjectCategory(_id)
            console.log(respones.data);
            if (respones.data.success === true) {

                const fetchProjectCategoryApiResponse = async () => {
                    try {
                        const response = await fetchProjectCategory();
                        console.log("response of the fetch project categories into delete", response);

                        dispatch(addDataIntoProjectCategory(response))
                        // Assuming you want to set state here
                    } catch (error) {
                        console.log("Error fetching project categories:", error);
                    }
                };

                fetchProjectCategoryApiResponse();
            }
        }
        fetchDeleteProjectCategory();




    }

    // ? Function used for the show popup to user before delete 
    const deleteSweetAlert = (_id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                    deleteFunction(_id)
                } else {
                    swal("Your imaginary file is safe!");
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