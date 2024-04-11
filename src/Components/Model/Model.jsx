import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form"
import { IoIosCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { openCloseModel } from '../../features/model/modelSlice';
function Model({ modelValue, name, description, avatar, _id, onClose }) {
    const [image, setImage] = useState(null);
    const isModelOpen = useSelector(state => state.isModelState)
    console.log("isModelOpen   : ", isModelOpen)
    // Function to handle image upload
    const [showModel, setShowModel] = useState(modelValue)
    const dispatch = useDispatch();
    const handleImageUpload = (event) => {
        const file = event.target.files[0]; // Get the uploaded file
        // Check if the uploaded file is valid
        if (file && file instanceof Blob) {
            const reader = new FileReader(); // Create a FileReader object
            // Read the uploaded file as a data URL
            reader.readAsDataURL(file);
            // Callback function when FileReader finishes loading
            reader.onload = () => {
                setImage(reader.result); // Set the image data URL as state
                setNewImage(true)
            };
        }
    };


    const [newImage, setNewImage] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        // console.log(e.target.files[0])
        // ! if user not upload the new image
        if (data.avatar.length === 0) {
            console.log("image is not selected ")

            axios.post("http://localhost:8080/api/v1/work/UpdateWork", {
                name: data.name,
                description: data.description,
                _id: _id
            }).then((response) => {
                console.log(response)

            }).catch((error) => {
                console.log("error into update", error)
            })

        }
        else {
            // ! if user uplaod the image also
            console.log("image is selected by user ")

            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('_id', _id);
            formData.append('description', data.description);
            formData.append('avatar', data.avatar[0]);

            axios.post('http://localhost:8080/api/v1/work/UpdateWork', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },

            }).then((response) => {
                console.log(response)
                console.log("response after update the model ", response.data)
            })

            setNewImage(true)

        }
        setShowModel(false)
    }
    return (
        <div className='fixed left-0 top-0 w-full h-full flex items-center justify-center  z-[90]'>
            <div className='absolute inset-0 bg-black opacity-25'></div>
            <div className='bg-white w-11/12 md:max-w-md z-[100] p-4 rounded-xl'>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col  gap-y-5' >
                    <div className='flex  items-center justify-between'>
                        <h2 className='text-center font-semibold text-xl my-3'>Update  Work</h2>
                        <IoIosCloseCircle onClick={onClose} size={30} className='hover:text-red-600 cursor-pointer' />

                    </div>

                    {/* register your input into the hook by invoking the "register" function */}
                    <input className='bg-slate-200  py-2 px-4 rounded-xl' defaultValue={name} placeholder='Work Name' {...register("name")} />
                    {errors.name && <span>Work Name is required</span>}
                    <input className='bg-slate-200  py-2 px-4 rounded-xl' defaultValue={description} placeholder='Work Description' {...register("description", { required: true })} />
                    {errors.description && <span>Work Description is required</span>}
                    <input type='file' accept="image/*"  {...register("avatar")} onChange={handleImageUpload} />
                    <div><img src={newImage == true ? image : avatar} className='size-20 object-contain rounded-md'></img></div>
                    {/* <div><img src={avatar} className='size-20 object-contain rounded-md'></img></div> */}

                    {errors.avatar && <span> avatar is required</span>}
                    <input type="submit" className='hover:bg-white hover:text-blue-300 duration-300 hover:border-2 bg-blue-300 shadow-sm inline-block py-2 px-3 w-24 text-center rounded-lg mx-auto' />
                </form>
            </div>
        </div>
    );
}

export default Model;
