import React, { useEffect, useState } from 'react'
import { fetchProjectCategory } from './ProjectApi'
import Button from '../../Components/Button/Button';
import ProjectButton from './ProjectButton';
import { useDispatch, useSelector } from "react-redux"
import { addDataIntoProjectCategory } from '../../features/Project/projectSlice';
function ShowProjectCategory() {




    // ! use dispatch for save project category data into redux tool kit 
    const dispatch = useDispatch();
    const dataForProjectCategory = useSelector(state => state.project.ProjectCats)
    // setShowProjectCat(dataForProjectCategory)

    console.log("fetch data from redux tool kit ", dataForProjectCategory);
    useEffect(() => {
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
    }, [])

    return (
        <div className='flex flex-col '>
            {dataForProjectCategory.map((item, index) => {
                return <ProjectButton key={index} projectCategoryName={item.projectCategoryName} projectCategoryDescription={item.projectCategoryDescription} _id={item._id}></ProjectButton>

            })}

        </div>
    )
}

export default ShowProjectCategory