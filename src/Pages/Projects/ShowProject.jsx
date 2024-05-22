import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProjects, fetchProjects } from '../../features/Project/projectSlice';
import ProjectModel from './ProjectModel';

function ShowProject({ projects }) {


    const [modelOpenClose, setModelOpenClose ] = useState(false)
    const dispatch = useDispatch();
    const [selectedProject, setSelectedProject] = useState(null);

    // ! function for show delete alert box and perform the delete function 
    const handleTestoninalDelete = async (key) => {
        console.log("handleTestoninalDelete :  ", key)
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Project!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(async (willDelete) => {
                if (willDelete) {
                    // swal("Poof! Your Testominal  has been deleted!", {
                    //     icon: "success",
                    // });

                    try {
                        swal("Success!", "Project deleted successfully.", "success");
                        await dispatch(deleteProjects(key))
                        dispatch(fetchProjects())
                    } catch (error) {
                        console.error("Error while deleting Project:", error);
                        swal("Error!", "Project to delete testimonial.", "error");
                    }


                } else {
                    swal("Your Testominal file is safe!");
                }
            });
    }

    const handleUpdateClicke = (project)=>{

        // console.log("handleUpdateClicke : " , project)
        setSelectedProject(project)
        setModelOpenClose(true)
    }

    // ! function for update alert box and perform alert
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projects.map((project, index) => (
                <div key={index} className="bg-white shadow-md rounded-md p-4">
                    <img src={project.projectImage} alt={project.projectName} className="w-full h-auto mb-4" />
                    <div className="text-center">
                        <h2 className="text-xl font-bold mb-2">{project.projectName}</h2>
                        <p className="text-gray-700 mb-4">{project.projectDescription}</p>
                        <div className="flex justify-center mb-4">
                            <a href={project.projectDeployLink} target="_blank" rel="noopener noreferrer" className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Live Demo</a>
                            <a href={project.projectGithubLink} target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">GitHub</a>
                        </div>
                        <div className="flex flex-wrap justify-center">
                            {project.projectTags.map((tag, tagIndex) => (
                                <span key={tagIndex} className="bg-gray-300 text-gray-700 px-2 py-1 rounded-full text-sm mr-2 mb-2">{tag}</span>
                            ))}
                        </div>
                        <div>
                            <div className='flex items-center justify-center my-2' >
                                <button className='bg-green-400 me-4 px-4 py-2 rounded-md hover:shadow-lg cursor-pointer text-white' onClick={() => handleUpdateClicke(project)} >Update</button>
                              
                                <button className='bg-red-500 me-4 px-4 py-2 rounded-md hover:shadow-lg cursor-pointer text-white' onClick={() => handleTestoninalDelete(project._id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {modelOpenClose && (<ProjectModel project={selectedProject} openClose={()=>setModelOpenClose(false)} />)}
        </div>
    );
}

export default ShowProject;
