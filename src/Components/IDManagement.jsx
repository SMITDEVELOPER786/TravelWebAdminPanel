import axios from 'axios';
import React, { useEffect, useState } from 'react'

function IDManagement() {

  const [data,setdata]=useState([])
  const token = localStorage.getItem("token")

useEffect(()=>{

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/all-user',
    headers: { 
      'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c', 
      'Authorization': `Bearer ${token}`
    }
  };
  
  axios.request(config)
  .then((response) => {
    // console.log(JSON.stringify(response.data.data));
    setdata(response.data.data)
  })
  .catch((error) => {
    console.log(error);
  });
  


},[])


  return (
    <div className='px-5'>
      <div className="overflow-hidden border border-gray-200 md:rounded-lg">
        <table className="min-w-full divide-y   divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
            <th scope="col" className="px-2 py-3.5 text-left text-sm font-bold text-gray-700">
                <span>S No</span>
              </th>

              <th scope="col" className="px-2 py-3.5 text-left text-sm font-bold text-gray-700">
                <span>Email</span>
              </th>
              <th scope="col" className="px-2 py-3.5 text-left text-sm font-bold text-gray-700">
                User Name
              </th>
              <th scope="col" className="px-4 py-3.5 text-left text-sm font-bold text-gray-700">
                Number
              </th>
              <th scope="col" className="px-4 py-3.5 text-center text-sm font-bold text-gray-700">
                Image
              </th>
              <th scope="col" className="px-4 py-3.5 text-left text-sm font-bold text-gray-700">
                User Role
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {data?.map((person,index) => (
              <tr key={person.key}>
  <td className="whitespace-nowrap px-4 py-4">
                  <div className="text-sm text-gray-900">
                    {index}
                  </div>
                </td>




                <td className="whitespace-nowrap px-2 py-4">
                  <div className="flex items-center">
                    <div className="ml-1">
                      <div className="text-sm font-medium text-gray-900">
                        {person.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-4">
                  <div className="text-sm text-gray-900">
                    {person.name}
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                  {person.phoneNumber}
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                  <img src={person.profilePictureUrl} className='w-32 h-32  object-fill' alt="no Profile Photo" />
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                  {person.role}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default IDManagement