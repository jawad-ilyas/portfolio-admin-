import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { fetchProjects, updateProject } from '../../features/Project/projectSlice';

function ProjectModel({ project, openClose }) {
    const { register, handleSubmit } = useForm({ defaultValues: project });

    const dispatch = useDispatch();
    const onSubmit = async (data) => {
        // Call the update function here
        // console.log("project model  ",data);
        // const { _id, ...newData } = data;
        
        // console.log("project model  new data", newData);
        // console.log("project model data._id ",data._id);
        // // const 
        await dispatch(updateProject(data))
        dispatch(fetchProjects())
        openClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-[100000000]" >
            <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 lg:w-1/3">
                <h2 className="text-xl font-bold mb-4">Update Project</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        {...register("_id")}
                        className="w-full px-3 py-2 border rounded hidden"
                    />
                    <div className="mb-4">
                        <label className="block text-gray-700">Project Name</label>
                        <input
                            type="text"
                            {...register("projectName")}
                            className="w-full px-3 py-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Description</label>
                        <textarea
                            {...register("projectDescription")}
                            className="w-full px-3 py-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Image URL</label>
                        <input
                            type="text"
                            {...register("projectImage")}
                            className="w-full px-3 py-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Deploy Link</label>
                        <input
                            type="text"
                            {...register("projectDeployLink")}
                            className="w-full px-3 py-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">GitHub Link</label>
                        <input
                            type="text"
                            {...register("projectGithubLink")}
                            className="w-full px-3 py-2 border rounded"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={openClose}
                            className="mr-2 bg-gray-500 text-white px-4 py-2 rounded"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProjectModel;
