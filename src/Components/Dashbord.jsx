import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';

import NotFound from './NotFound';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

import IDManagement from './IDManagement';
import CoinManagemen from './CoinManagemen';
import ContentManagement from './ContentManagement';
import ApprovalModification from './ApprovalModification';
import Promos from './Promos';
import Categories from './Categories';
import Activites from './Activites';

function Dashbord() {
  return (

    <div className='flex flex-row h-screen'>

      <Sidebar />

      <div className='flex flex-col w-[100%] overflow-hidden flex-1'>
        <Navbar />

        <div className="overflow-y-auto flex-1">


          <Routes>

            <Route path='/id' element={<IDManagement />} />
            <Route path='/coin' element={<CoinManagemen />} />
            <Route path='/contact' element={<ContentManagement />} />
            <Route path='/approva' element={<ApprovalModification />} />
            <Route path='/promos' element={<Promos />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/activites' element={<Activites />} />


            <Route path='/404' element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />




          </Routes>
        </div>
      </div>
    </div>



    //     <Routes>
    //     <Route path='/dashbord/hone' element={
    //       <Suspense fallback={<MyLoader />}>
    //         <Home />
    //       </Suspense>
    //     } />

    //     <Route path='/404' element={<NotFound />} />
    //     <Route path="*" element={<Navigate to="/404" />} />
    //   </Routes>
  )
}

export default Dashbord