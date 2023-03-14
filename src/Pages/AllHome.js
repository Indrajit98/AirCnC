import React, { useEffect, useState } from 'react'
import { getAllHome } from '../api/services'
import HomeCard from '../Components/Card/HomeCard'
import Spinner from '../Components/Spinner/Spinner'

const AllHome = () => {
  const [loading, setLoading] = useState(false)
  const [home,setHome] = useState()
  console.log(home);
 useEffect(() =>{
  setLoading(true)
  getAllHome()
  .then(data => {
    setHome(data)
    setLoading(false)
  })
  .catch(err => console.log(err))

 },[])

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className='text-gray-600 body-font'>
          <div className='container pb-8 pt-2 mx-auto'>
            <div className='flex flex-wrap'>{/* Card goes here */
           home?.map(home => (<HomeCard home={home} key={home._id}/>))
          

            }</div>
          </div>
        </section>
      )}
      
    </>
  )
}

export default AllHome
