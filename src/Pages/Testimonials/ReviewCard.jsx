import React from 'react';
import swal from 'sweetalert';
import { deleteReview, fetchReview } from './Review.api';

const ReviewCard = ({ review, handleReviewDelete, handleReviewUpdate }) => {




    // ! function for show popup and called the delete function 
    const handleTestoninalDelete = async (key) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
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
                        await handleReviewDelete(key); // Call the function from Review component
                        swal("Success!", "Testimonial deleted successfully.", "success");
                    } catch (error) {
                        console.error("Error while deleting testimonial:", error);
                        swal("Error!", "Failed to delete testimonial.", "error");
                    }


                } else {
                    swal("Your Testominal file is safe!");
                }
            });
    }


    // ! function for handle the update case of the review section 
    const handleTestoninalUpdate = ()=>{

        handleReviewUpdate(review)
     
    }

    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-6 w-full hover:shadow-lg cursor-pointer">
            <div className="flex items-center space-x-4 mb-4">
                <img src={review?.reviewImage} alt={`${review?.name}'s review`} className="w-16 h-16 rounded-full object-cover" />
                <div>
                    <h2 className="text-xl font-semibold">{review?.name}</h2>
                    <p className="text-gray-500">{review?.company}</p>
                </div>
            </div>
            <p className="text-gray-700">{review?.description}</p>
            <div className='flex items-center justify-center my-2' >
                <button className='bg-green-400 me-4 px-4 py-2 rounded-md hover:shadow-lg cursor-pointer text-white' onClick={() => handleTestoninalUpdate(review._id , review.name , review.description , review.company)}>Update</button>
                <button className='bg-red-500 me-4 px-4 py-2 rounded-md hover:shadow-lg cursor-pointer text-white' onClick={() => handleTestoninalDelete(review._id)}>Delete</button>
            </div>
        </div>
    );
};


export { ReviewCard }