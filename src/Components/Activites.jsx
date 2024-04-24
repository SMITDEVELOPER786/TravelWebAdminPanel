// import React from 'react'

// function Activites() {
//   return (
//     <div className="px-5">
//     <h1>Agency approved option</h1>
//     <h1>Admin can change ID all information manually</h1>
//     <h1>Delete ID can get back from admin panel</h1>
//     <h1>Special tag option for any ID</h1>
//   </div>
//   )
// }

// export default Activites

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";

function Activites() {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);

  const [categoryId, setCategoryId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  const [price, setPrice] = useState("");
  const [priceDiscount, setPriceDiscount] = useState("");
  const [rating, setRating] = useState("");
  const [totalReviews, setTotalReviews] = useState("");
  const [facilities, setFacilities] = useState("");
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [locationMaps, setLocationMaps] = useState("");

  const [activity, setActivity] = useState([])

  const [selectedPromoId, setSelectedPromoId] = useState(""); // State to hold the ID of the selected banner

  const token = localStorage.getItem("token")
  const baseUrl = "https://travel-journal-api-bootcamp.do.dibimbing.id"





  useEffect(() => {
    fetchActivites()

  }, [])

  const fetchActivites = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${baseUrl}/api/v1/activities`,
      headers: {
        'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c'
      }
    };

    axios.request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        setActivity(response.data.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }


  // ----------------------- create Activites ---------------------
  const handleCreateActivity = () => {
    if (!categoryId || !title || !description || !imageUrls || !price || !priceDiscount || !rating || !totalReviews || !facilities || !address || !province || !city || !locationMaps) {
      toast.error("Please fill in all required fields", { position: "top-right" });
      return;
    }
    const data = JSON.stringify({
      categoryId: categoryId,
      title: title,
      description: description,
      imageUrls: imageUrls,
      price: price,
      price_discount: priceDiscount,
      rating: rating,
      total_reviews: totalReviews,
      facilities: facilities,
      address: address,
      province: province,
      city: city,
      location_maps: locationMaps
    });
    // console.log(imageUrls)
    // API request configuration
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${baseUrl}/api/v1/create-activity`,
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
        toast.success("Promo created successfully", { position: "top-right" })

        // Close the modal after successful submission
        fetchActivites()

        setShowModal(false);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.data);
        error.response.data.errors.map((err) => (toast.error(err.message, { position: "top-right" })))
      });
  };




  const handleId = (id) => {
    setSelectedPromoId(id); // Set the ID of the selected banner
    setShowModal1(true); // Open the modal for updating the banner
  }

  // ---------------------- update Activites ------------------------
  const handleUpdateActivity = () => {
    if (!selectedPromoId) return;

    const data = JSON.stringify({
      title: title,
      description: desc,
      terms_condition: termsCond,
      imageUrl: PromoImg,
      promo_code: promoCode,
      promo_discount_price: discountPrice,
      minimum_claim_price: claimPrice
    });
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${baseUrl}/api/v1/update-promo/${selectedPromoId}`,
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
        toast.success("Promo Update successfully", { position: "top-right" })
        fetchActivites()


        setShowModal1(false)
      })
      .catch((error) => {
        console.log(error);
        toast.success(error.message)

      });

  }


  // ----------------------- delete banners ---------------------
  const handleDeleteActivity = (e) => {

    let config = {
      method: 'delete',
      maxBodyLength: Infinity,
      url: `${baseUrl}/api/v1/delete-promo/${e}`,
      headers: {
        'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c',
        'Authorization': `Bearer ${token}`
      }
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        toast.success("Promo Deleted successfully", { position: "top-right" })
        fetchActivites()

      })
      .catch((error) => {
        console.log(error);
      });

  }

  return (
    <>
      <Toaster />
      <div className="px-5">
        <div className=" my-5">
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="bg-[#06335D] hover:bg-green-800 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Activity
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
                {activity?.map((v, i) => {
                  return (
                    <>
                      <tr>
                        <td className="whitespace-nowrap px-2 py-4 border">
                          <div className="flex items-center">
                            <div className="ml-1">
                              <div className="text-sm font-medium text-gray-900">
                                {v.title}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 border">
                          <div className="text-sm text-gray-900">
                            <img src={v.category.imageUrl} className="w-40 object-contain" alt="" />
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 flex justify-center items-center gap-5 text-sm text-gray-700 mt-8">
                          <button onClick={() => handleId(v.id)} className="bg-[#06335D] hover:bg-green-800 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline">
                            Update
                          </button>
                          <button onClick={() => handleDeleteActivity(v.id)} className="bg-[#06335D] hover:bg-green-800 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline">
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
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
            <div className="relative  my-6 w-6/12 my-6">
              {/* <div className="relative w-100 my-6 mx-auto max-w-sm" style={{ border: "1px solid red" }}> */}
              {/* Modal content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* Modal header */}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Create Activity</h3>
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
                  <div className="flex flex-wrap justify-between">
                    <div className="w-full sm:w-1/2 pr-2">
                      <input
                        type='text'
                        placeholder='Category ID'
                        className="outline-none w-full border-2 mt-2 p-2 rounded-md"
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                      />
                    </div>
                    <div className="w-full sm:w-1/2 pl-2">
                      <input
                        type='text'
                        placeholder='Title'
                        className="outline-none w-full border-2 mt-2 p-2 rounded-md"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    {/* Repeat the pattern for other fields */}
                    <div className="w-full sm:w-1/2 pr-2">
                      <input
                        type='text'
                        placeholder='Description'
                        className="outline-none w-full border-2 mt-2 p-2 rounded-md"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    <div className="w-full sm:w-1/2 pl-2">
                      <input
                        type='text'
                        placeholder='Image URLs (separated by commas)'
                        className="outline-none w-full border-2 mt-2 p-2 rounded-md"
                        value={imageUrls}
                        onChange={(e) => {
                          const urls = e.target.value.split(',').map(url => url.trim());
                          console.log(urls)
                          setImageUrls(urls);
                        }}
                      />
                    </div>
                    {/* Repeat the pattern for other fields */}
                    <div className="w-full sm:w-1/2 pr-2">
                      <input
                        type='number'
                        placeholder='Price'
                        className="outline-none w-full border-2 mt-2 p-2 rounded-md"
                        value={price}
                        onChange={(e) => setPrice(parseInt(e.target.value))}
                      />
                    </div>
                    <div className="w-full sm:w-1/2 pl-2">
                      <input
                        type='number'
                        placeholder='Price Discount'
                        className="outline-none w-full border-2 mt-2 p-2 rounded-md"
                        value={priceDiscount}
                        onChange={(e) => setPriceDiscount(parseInt(e.target.value))}
                      />
                    </div>
                    {/* Repeat the pattern for other fields */}
                    <div className="w-full sm:w-1/2 pr-2">
                      <input
                        type='number'
                        placeholder='Rating'
                        className="outline-none w-full border-2 mt-2 p-2 rounded-md"
                        value={rating}
                        onChange={(e) => setRating(parseInt(e.target.value))}
                      />
                    </div>
                    <div className="w-full sm:w-1/2 pl-2">
                      <input
                        type='number'
                        placeholder='Total Reviews'
                        className="outline-none w-full border-2 mt-2 p-2 rounded-md"
                        value={totalReviews}
                        onChange={(e) => setTotalReviews(parseInt(e.target.value))}
                      />
                    </div>
                    <div className="w-full sm:w-1/2 pr-2">
                      <input
                        type='text'
                        placeholder='Facilities'
                        className="outline-none w-full border-2 mt-2 p-2 rounded-md"
                        value={facilities}
                        onChange={(e) => setFacilities(e.target.value)}
                      />

                    </div>
                    <div className="w-full sm:w-1/2 pl-2">
                      <input
                        type='text'
                        placeholder='Address'
                        className="outline-none w-full border-2 mt-2 p-2 rounded-md"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div className="w-full sm:w-1/2 pr-2">

                      <input
                        type='text'
                        placeholder='Province'
                        className="outline-none w-full border-2 mt-2 p-2 rounded-md"
                        value={province}
                        onChange={(e) => setProvince(e.target.value)}
                      />

                    </div>
                    <div className="w-full sm:w-1/2 pl-2">
                      <input
                        type='text'
                        placeholder='City'
                        className="outline-none w-full border-2 mt-2 p-2 rounded-md"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                    <div className="w-full sm:w-1/2 pl-2 m-auto">
                      <input
                        type='text'
                        placeholder='Location Maps'
                        className="outline-none w-full border-2 mt-2 p-2 rounded-md"
                        value={locationMaps}
                        onChange={(e) => setLocationMaps(e.target.value)}
                      />
                    </div>
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
                    onClick={handleCreateActivity}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : ""}

      {showModal1 ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative  my-6 w-6/12 my-6">
              {/* Modal content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* Modal header */}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Update  Activity</h3>
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
                  <div className="flex flex-wrap justify-between">
                    <div className="w-full sm:w-1/2 pr-2">
                      <input
                        type='text'
                        placeholder='Category ID'
                        className="outline-none w-full border-2 mt-2 p-2 rounded-md"
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                      />
                    </div>
                    <div className="w-full sm:w-1/2 pl-2">
                      <input
                        type='text'
                        placeholder='Title'
                        className="outline-none w-full border-2 mt-2 p-2 rounded-md"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    {/* Repeat the pattern for other fields */}
                    <div className="w-full sm:w-1/2 pr-2">
                      <input
                        type='text'
                        placeholder='Description'
                        className="outline-none w-full border-2 mt-2 p-2 rounded-md"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    <div className="w-full sm:w-1/2 pl-2">
                      <input
                        type='text'
                        placeholder='Image URLs (separated by commas)'
                        className="outline-none w-full border-2 mt-2 p-2 rounded-md"
                        value={imageUrls.join(', ')} // Join array elements with commas for display
                        onChange={(e) => {
                          const urls = e.target.value.split(',').map(url => url.trim());
                          console.log(urls)
                          setImageUrls(urls);
                        }}
                      />
                    </div>
                    {/* Repeat the pattern for other fields */}
                    <div className="w-full sm:w-1/2 pr-2">
                      <input
                        type='number'
                        placeholder='Price'
                        className="outline-none w-full border-2 mt-2 p-2 rounded-md"
                        value={price}
                        onChange={(e) => setPrice(parseInt(e.target.value))}
                      />
                    </div>
                    <div className="w-full sm:w-1/2 pl-2">
                      <input
                        type='number'
                        placeholder='Price Discount'
                        className="outline-none w-full border-2 mt-2 p-2 rounded-md"
                        value={priceDiscount}
                        onChange={(e) => setPriceDiscount(parseInt(e.target.value))}
                      />
                    </div>
                    {/* Repeat the pattern for other fields */}
                    <div className="w-full sm:w-1/2 pr-2">
                      <input
                        type='number'
                        placeholder='Rating'
                        className="outline-none w-full border-2 mt-2 p-2 rounded-md"
                        value={rating}
                        onChange={(e) => setRating(parseInt(e.target.value))}
                      />
                    </div>
                    <div className="w-full sm:w-1/2 pl-2">
                      <input
                        type='number'
                        placeholder='Total Reviews'
                        className="outline-none w-full border-2 mt-2 p-2 rounded-md"
                        value={totalReviews}
                        onChange={(e) => setTotalReviews(parseInt(e.target.value))}
                      />
                    </div>
                    <div className="w-full sm:w-1/2 pr-2">
                      <input
                        type='text'
                        placeholder='Facilities'
                        className="outline-none w-full border-2 mt-2 p-2 rounded-md"
                        value={facilities}
                        onChange={(e) => setFacilities(e.target.value)}
                      />

                    </div>
                    <div className="w-full sm:w-1/2 pl-2">
                      <input
                        type='text'
                        placeholder='Address'
                        className="outline-none w-full border-2 mt-2 p-2 rounded-md"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div className="w-full sm:w-1/2 pr-2">

                      <input
                        type='text'
                        placeholder='Province'
                        className="outline-none w-full border-2 mt-2 p-2 rounded-md"
                        value={province}
                        onChange={(e) => setProvince(e.target.value)}
                      />

                    </div>
                    <div className="w-full sm:w-1/2 pl-2">
                      <input
                        type='text'
                        placeholder='City'
                        className="outline-none w-full border-2 mt-2 p-2 rounded-md"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                    <div className="w-full sm:w-1/2 pl-2 m-auto">
                      <input
                        type='text'
                        placeholder='Location Maps'
                        className="outline-none w-full border-2 mt-2 p-2 rounded-md"
                        value={locationMaps}
                        onChange={(e) => setLocationMaps(e.target.value)}
                      />
                    </div>
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

                    onClick={handleUpdateActivity}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : ""}

      {/* // modal end */}
    </>
  );
}

export default Activites;
