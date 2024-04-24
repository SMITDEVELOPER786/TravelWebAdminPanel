import logo from "../assets/logo.png"
import { createContext, useContext, useState } from "react"
import { Link, useLocation } from "react-router-dom";
import { Icon } from '@iconify/react';
const SidebarContext = createContext();

export default function SidebarWork({ children }) {
    const location = useLocation();
    const [expanded, setExpanded] = useState(true)
    return (
        <>
            <aside className={`h-full ${expanded ? "w-64 " : "w-20"}`}>
                <nav className=" h-full flex flex-col bg-[#334155]   ">
                     <div className="p-1 pb-2 flex justify-center items-center flex-col">
                        <img src={logo}
                         className={`overflow-hidden transition-all my-5 ${expanded ? "w-32  h-32 rounded-full object-cover" : "w-0"}`} />
                   {/* <button onClick={() => setExpanded((curr) => !curr)} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                            {expanded ? <ChevronFirst /> : <ChevronLast />}
                        </button>     */}
                        {/* <h1 className="text-[25px] my-8 font-semibold text-white ">Monzo</h1> */}
                    </div>

                    <SidebarContext.Provider value={{ expanded }}>

                        <ul className="flex-1 px-3 ">{children}</ul>
                    </SidebarContext.Provider>

                   {/* <div className="  p-3 mb-12  ">
                    {
location.pathname.includes("/sitter/bar") ? (
<Link to='/'>
                    
                    <div className="flex bg-sitter rounded-full py-2 px-3 my-1 gap-6 ">

                <Icon icon="heroicons-outline:logout" color="white" width='22' /> 

                <span className="text-white text-[16px]">Logout</span>
                
                
                </div>
                </Link>
): (
<Link to='/'>
                    
                    <div className="flex bg-[#FE9515] rounded-lg py-2 px-3 my-1 gap-6 ">

                <Icon icon="heroicons-outline:logout" color="white" width='22' /> 

                <span className="text-white text-[16px]">Logout</span>
                
                
                </div>
                </Link>
)
                    }
                    
                    </div> */}


                </nav>
            </aside>
        </>
    )
}

export function SidebarItem({ icon, text, active, alert ,path }) {
    const { expanded } = useContext(SidebarContext)
    const location = useLocation();

    return (

<>
      
        <Link to={path}>
        <li className={`relative flex mt-2 text-white items-center py-2 px-3 my-1 font-medium rounded-lg text-[16px] cursor-pointer transition-colors group active:bg-[#94a3b8] from-indigo-200 to-indigo-100 active:text-white hover:bg-[#94a3b8] hover:text-white 
        ${location.pathname === path ?  'bg-[#64748b] text-white' : ''}`}>
            {icon}
            <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
            {alert && (
                <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`}>
                </div>
            )}

            {!expanded && (
                <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                    {text}
                </div>
            )}
        </li>
    </Link>
    






      

</>
      

        // <Link to={path}>
        // <li className={`relative flex mt-5 items-center py-2 px-3 my-1 font-medium rounded-full text-[16px]  cursor-pointer transition-colors group active:bg-[#FE9515] from-indigo-200 to-indigo-100 active:text-white hover:bg-[#fdba74] Hover:text-white `}>
        //     {icon}
        //     <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
        //     {alert && (
        //         <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`}>

        //         </div>
        //     )}

        //     {!expanded && (
        //         <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
        //             {text}
        //         </div>
        //     )}
        // </li>
        // </Link>
    )
}