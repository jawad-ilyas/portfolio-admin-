import React from 'react'

import ProjectButton from './ProjectButton';

function ShowProjectCategory({ projectCategoryDetail }) {




    return (
        <div className='flex flex-col '>
            {projectCategoryDetail?.map((item, index) => {
                return <ProjectButton key={index} projectCategoryName={item.projectCategoryName} projectCategoryDescription={item.projectCategoryDescription} _id={item._id}></ProjectButton>

            })}

        </div>
    )
}

export default ShowProjectCategory