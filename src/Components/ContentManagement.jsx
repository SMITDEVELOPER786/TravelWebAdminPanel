import React, { useEffect, useState } from "react";
import axios from "axios";
function ContentManagement() {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [name, setName] = useState('');
  const [bannerimg, setBannerimg] = useState('');
  const [banners, setbanners] = useState([])
  const [selectedBannerId, setSelectedBannerId] = useState(null); // State to hold the ID of the selected banner

  const token = localStorage.getItem("token")






  useEffect(() => {
    fetchBanners()

  }, [])

  const fetchBanners = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/banners',
      headers: {
        'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c'
      }
    };

    axios.request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        setbanners(response.data.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }





  const handleCreateBanner = () => {

    // Prepare the data to be sent to the API
    const data = JSON.stringify({
      name: name,
      imageUrl: bannerimg
    });
    // API request configuration
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/create-banner',
      headers: {
        'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      data: data
    };

    // Make the API request
    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        // Close the modal after successful submission
        fetchBanners()

        setShowModal(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };




  const handleId = (id) => {
    setSelectedBannerId(id); // Set the ID of the selected banner
    setShowModal1(true); // Open the modal for updating the banner
  }

  const handleUpdateBanner = () => {
    if (!selectedBannerId) return;

    const data = {
      name: name,
      imageUrl: bannerimg
    };

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-banner/${selectedBannerId}`,
      headers: {
        'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        fetchBanners()


        setShowModal1(false)
      })
      .catch((error) => {
        console.log(error);
      });

  }



  const handleDeleteBanner = (e) => {

    let config = {
      method: 'delete',
      maxBodyLength: Infinity,
      url: `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/delete-banner/${e}`,
      headers: {
        'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c',
        'Authorization': `Bearer ${token}`
      }
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        fetchBanners()

      })
      .catch((error) => {
        console.log(error);
      });

  }



  return (
    <>


      <div className="px-5">


        <div className=" my-5">
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="bg-[#06335D] hover:bg-green-800 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Bannner
          </button>
        </div>

        <div className="overflow-hidden border border-gray-200 md:rounded-lg">

          <div className="w-full">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-2 w-96 py-3.5 text-left text-sm font-normal text-gray-700"
                  >
                    <span>Name</span>
                  </th>
                  <th
                    scope="col"
                    className="px-2 w-96  py-3.5 text-left text-sm font-normal text-gray-700"
                  >
                    Image
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3.5 w-80 text-center text-sm font-normal text-gray-700"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {banners?.map((v, i) => {
                  return (


                    <>
                      <tr>


                        <td className="whitespace-nowrap px-2 py-4">
                          <div className="flex items-center">
                            <div className="ml-1">
                              <div className="text-sm font-medium text-gray-900">
                                {v.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="text-sm text-gray-900">
                            <img src={v.imageUrl} className="w-40 h-40 object-contain" alt="" />
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 flex justify-center items-center gap-5 text-sm text-gray-700">
                          <button onClick={() => handleId(v.id)} className="bg-[#06335D] hover:bg-green-800 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline">
                            Update
                          </button>
                          <button onClick={() => handleDeleteBanner(v.id)} className="bg-[#06335D] hover:bg-green-800 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline">
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  )
                })}
              </tbody>
            </table>
          </div>


        </div>




      </div>


      {/* // modal start */}


      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/* Modal content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* Modal header */}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Create Banner</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/* Modal body */}
                <div className="relative p-6 flex-auto">
                  <div>
                    <input
                      type='text'
                      placeholder='Banner Name'
                      className="outline-none w-full border-2 mt-2 p-2 rounded-md"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      type='text'
                      placeholder='Banner Image'
                      className="outline-none w-full border-2 mt-2 p-2 rounded-md"
                      value={bannerimg}
                      onChange={(e) => setBannerimg(e.target.value)}
                    />
                  </div>
                </div>
                {/* Modal footer */}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"

                    onClick={handleCreateBanner}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {showModal1 ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/* Modal content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* Modal header */}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Create Banner</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal1(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/* Modal body */}
                <div className="relative p-6 flex-auto">
                  <div>
                    <input
                      type='text'
                      placeholder='Banner Name'
                      className="outline-none w-full border-2 mt-2 p-2 rounded-md"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      type='text'
                      placeholder='Banner Image'
                      className="outline-none w-full border-2 mt-2 p-2 rounded-md"
                      value={bannerimg}
                      onChange={(e) => setBannerimg(e.target.value)}
                    />
                  </div>
                </div>
                {/* Modal footer */}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal1(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"

                    onClick={handleUpdateBanner}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {/* // modal end */}
    </>
  );
}

export default ContentManagement;
