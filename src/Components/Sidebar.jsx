import React from "react";
import SidebarWork, { SidebarItem } from "./SidebarWork";
import { Icon } from "@iconify/react";

function Sidebar() {
  return (
    <div className="hidden md:flex">
      <SidebarWork>
        <SidebarItem
          icon={<Icon icon="mdi:users" width="24" />}
          text="Get All Users"
          path="/dashbord/id"
        />
         <SidebarItem
          icon={<Icon icon="mdi:user" width="24" />}
          text="Get Logged Users"
          path="/dashbord/coin"
        /> 
 <SidebarItem
          icon={<Icon  icon="material-symbols:planner-banner-ad-pt-sharp"  width="24" />}
          text="Banners"
          path="/dashbord/contact"
        /> 
         <SidebarItem
          icon={<Icon icon="material-symbols:app-promo"  width="24" />}
          text="Promos"
          path="/dashbord/promos"
        />         
                 <SidebarItem
          icon={<Icon icon="carbon:collapse-categories"  width="24" />}
          text="Categories"
          path="/dashbord/categories"
        />         
                 <SidebarItem
          icon={<Icon icon="fluent-mdl2:account-activity"  width="24" />}
          text="Activities"
          path="/dashbord/activites"
        />         

        
      </SidebarWork>
    </div>
  );
}

export default Sidebar;