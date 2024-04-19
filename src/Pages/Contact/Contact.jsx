import React, { useEffect, useState } from 'react'
import Button from '../../Components/Button/Button'
import { deleteNewsLetter, fetchNewsLetterAdmin } from './Contact.api'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContactNewsLetter } from '../../features/Contact/ContactSlice';
import swal from 'sweetalert';

function Contact() {



  const [newsLetterData, setNewsLetterData] = useState()


  // * useDispatch 
  const dispatch = useDispatch();
  const data = useSelector(state => state.contact.footerNewsletterDatas)
  // console.log("contact news letter data", data)
  useEffect(() => {
    if (data) {
      setNewsLetterData(data);
    }
  }, [data]);
  const fetchNewsLetterFun = async () => {
    const response = await fetchNewsLetterAdmin()
    // console.log("fetchNewsLetterFun" , response)

    console.log("fetchNewsLetterFun is called ")
    dispatch(fetchContactNewsLetter({ data: response }))


    // console.log("response of the contact api newsletter section ", response)

  }


  const handleDelete = (id) => {

    console.log(id)
    swal({
      title: "Are you sure?",
      text: "You Want to Delete Client Message!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
          const response = deleteNewsLetter(id)
          fetchNewsLetterFun();
        } else {
          swal("Your Client Message is safe!");
        }
      })
  }

  useEffect(() => {



    fetchNewsLetterFun();
  }, [])

  return (
    <div className='container pt-3 pb-3'>
      <div className='flex '>
        <div className='w-2/12 sticky top-20 h-full'>
          <Button name={'Show NewsLetter'} id={'showNewsLetter'} />
          <Button name={'Delete NewsLetter'} id={'deleteNewsLetter'} />
        </div>
        <div className='w-10/12 max-w-3xl  mx-auto'>
          {newsLetterData?.map((item, index) => {
            return <div key={index} className='flex flex-row flex-wrap justify-between border-gray-200 shadow-lg rounded-md p-5 my-2 hover:bg-gray-300 hover:duration-300' onDoubleClick={() => handleDelete(item._id)}>

              <div className=''>
                <p><span >Name  - </span>{item.name}</p>
                <p><span className='font-semibold'>Email  - </span><a href={`mailto:${item.email}`}>{item.email}</a></p>
              </div>
              <div>
                <p className='font-semibold text-right'>Message </p>
                {item.message}
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Contact