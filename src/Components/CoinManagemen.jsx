import axios from "axios";
import React, { useEffect, useState } from "react";

function CoinManagemen() {


const [data,setdata]=useState("")


useEffect(()=>{

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/user',
    headers: { 
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI5NjhhMjgyYy05NTgwLTRlOTYtYTI3Mi1jMTU3ZmRlNTc4ZTkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTM1ODE1MTR9.L92WENR5psZ3qaCtLIxC0Ys2f1xzzSear9Hj-47oLiw', 
      'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c'
    }
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    setdata(response.data.data)
  })
  .catch((error) => {
    console.log(error);
  });
  
},[])




  return (
    <div className='px-5'>
    <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-2 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span> Email </span>
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                      User Name
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                     Number
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                      Image
                      </th>



                    
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      > 
                      User Role
                      </th>
                  
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">

                      <tr>
                        <td className="whitespace-nowrap px-2 py-4">
                          <div className="flex items-center">
                            <div className="ml-1">
                              <div className="text-sm font-medium text-gray-900">
                                {data.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="text-sm text-gray-900 ">
                          {data.name}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                        {data.phoneNumber}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                        <img src={data.profilePictureUrl} className="w-32 h-32 object-fill" alt="" />
                        </td>
                     
                        <td className="whitespace-nowrap px-4  text-sm text-gray-700">
                        {data.role}
                        </td>
                        {/* <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          
                        <button

        className="bg-[#06335D] hover:bg-green-800 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        download
      </button>
                        </td> */}



                
                      </tr>
                  
                  </tbody>
                </table>
              </div> 



    </div>
  );
}

export default CoinManagemen;
