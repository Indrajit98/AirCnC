import React, { useContext, useEffect, useState } from 'react';
import { getImageUrl } from '../../api/imageUpload';
import { getRole, hostRequest } from '../../api/user';
import BeComeHostForm from '../../Components/Form/BeComeHostForm';
import { AuthContext } from '../../contexts/AuthProvider';

const BecomeAHost = () => {
    const {user} = useContext(AuthContext)
    const [role,setRole] = useState(null)
    const [loading,setLoading] = useState(true)
    // console.log(role)

    useEffect(() => {
        getRole(user?.email)
        .then(data => {
            // console.log(data);
            setRole(data)
            setLoading(false)
        })

    },[user])

    const handleSubmit = e => {
        e.preventDefault();
        const location = e.target.location.value;
        const image = e.target.image.files[0];
        getImageUrl(image)
        .then(data=> {
            // console.log(data)
            const hostData = {
                location: location,
                documentImg: data,
                role: 'requested',
                email: user.email
            }
            console.log(hostData);
            hostRequest(hostData)
            .then(data => {
                console.log(data)
            })
        })
   
    }
   


    return (
        <>
        {
            role ? <div className='h-screen text-gray-600 flex flex-col justify-center items-center pb-16 text-xl lg:text-3xl'>
                Request Sent, wait for admin approval
            </div>
            :
            <div>
                {
                !loading && <BeComeHostForm handleSubmit={handleSubmit}/>
                }
            </div>
        }
           
        </>
    );
};

export default BecomeAHost;