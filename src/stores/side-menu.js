import { defineStore } from "pinia";

export const useSideMenuStore = defineStore("sideMenu", {
  state: () => ({
    menu: [

      {
        icon: "UsersIcon",
        pageName: '',
        title: "Persons",
        subMenu: [
          {
            icon: "UsersIcon",
            pageName: "side-menu-users-layout-1",
            title: "Persons"
          },
          {
            icon: "UsersIcon",
            pageName: "side-menu-dashboard-overview-1",
            title: "Person Contact"
          },
        ]
      },

      "devider", 
    ],
  }),
});
