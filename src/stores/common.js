import {defineStore} from "pinia";

export const useCommonStore = defineStore("common",{
    state: () => ({
        user:{
            name : 'ziya',
            email : 'ziyabaltaa@gmail.com',
            token: 'asda'
        }
    }),
    actions: {
        setUser(token, email, name){
            this.user.email = email;
            this.user.name = name;
            this.user.token = token;
        }
    }

});