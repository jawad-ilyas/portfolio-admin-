import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const ReviewModel = ({ review, onClose, handleReviewUpdateData }) => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      _id:review._id,
      name: review.name,
      description: review.description,
      company: review.company,
    },
  });


  const onSubmit = (data) => {
    // console.log("data of the review model " , data)
    // onSave({ ...review, ...data });
    handleReviewUpdateData(data)
    reset();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-lg mx-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Edit Review</h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>&times;</button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="p-4">
          <div className="mb-4 hidden">
            <input
              type="text"
              {...register('_id',)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Name:</label>
            <input
              type="text"
              {...register('name', { required: 'Name is required' })}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description:</label>
            <textarea
              {...register('description', { required: 'Description is required' })}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            />
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Company:</label>
            <input
              type="text"
              {...register('company', { required: 'Company is required' })}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            />
            {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>}
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mr-2"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white px-4 py-2 rounded-md  hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewModel;
