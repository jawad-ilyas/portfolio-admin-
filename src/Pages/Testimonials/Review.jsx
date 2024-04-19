import React, { useState } from 'react';
import Button from '../../Components/Button/Button';
import { useForm } from 'react-hook-form';
import { render } from 'react-dom';
import axios from "axios"


function Review() {



  const [image, setImage] = useState(null);


  // ! code for show image to user 
  const handleImageUpload = (event) => {
    console.log("handleImageUpload function called into review section ")
    const file = event.target.files[0]; // Get the uploaded file
    // Check if the uploaded file is valid

    if (file && file instanceof Blob) {
      const reader = new FileReader(); // Create a FileReader object
      // Read the uploaded file as a data URL
      reader.readAsDataURL(file);
      // Callback function when FileReader finishes loading

      reader.onload = () => {
        console.log("onload function is called ", render.result)
        setImage(reader.result); // Set the image data URL as state

      };

    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {


    // Handle the form data here, for example:
    const formData = new FormData();
    formData.append('name', data.reviewName);
    formData.append('description', data.reviewDescription);
    formData.append('company', data.company);
    formData.append('reviewImage', data.reviewImage[0]);
    console.log("data.reviewImage[0]", data.reviewImage[0])
    axios.post('http://localhost:8080/api/v1/review/createReview', formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },

    }).then((response) => {
      console.log(response)
      console.log("response after update the model ", response.data)
    })

    reset()
    // You can send this data to a server or store it in state
  };

  return (
    <div className='container pt-3 pb-3'>
      <div className='flex '>
        <div className='w-2/12 sticky top-20 h-full'>
          <Button name={'Add Review'} id={'addReview'} />
          <Button name={'Show Review'} id={'ShowReview'} />
        </div>
        <div className='w-10/12 max-w-3xl  mx-auto'>
          {/* form for add work */}
          <div id='AddWork'>
            <h2 className='text-center font-semibold text-xl my-3 mt-6'>Add Review</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-5'>
              {/* register your input into the hook by invoking the "register" function */}
              <input className='bg-slate-200 py-2 px-4 rounded-xl' placeholder='Work Name' {...register('reviewName', { required: true })} />
              {errors.reviewName && <span className='text-red-400 font-bold text-sm capitalize'>Project Name is required</span>}
              <input className='bg-slate-200 py-2 px-4 rounded-xl' placeholder='Work Description' {...register('reviewDescription', { required: true })} />
              {errors.reviewDescription && <span className='text-red-400 font-bold text-sm capitalize'>Project Description is required</span>}
              <input className='bg-slate-200 py-2 px-4 rounded-xl' placeholder='Company Name' {...register('company', { required: true })} />
              {errors.company && <span className='text-red-400 font-bold text-sm capitalize'>Company is required</span>}
              <input type='file' accept='image/*' onClick={(event) => handleImageUpload(event)} {...register('reviewImage', { required: true })} />
              {errors.reviewImage && <span className='text-red-400 font-bold text-sm capitalize'>Review Image is required</span>}
              <div>{image && <img src={image} className='size-20 object-contain rounded-md'></img>}</div>

              {/* Handle file input errors if needed */}
              <input type='submit' className='hover:bg-white hover:text-blue-300 duration-300 hover:border-2 bg-blue-300 shadow-sm inline-block py-2 px-3 w-24 text-center rounded-lg mx-auto' />
            </form>
          </div>
          <div id='ShowReview'></div>
        </div>
      </div>
    </div>
  );
}

export default Review;
