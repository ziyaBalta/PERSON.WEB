import axios from "axios";
import { useCommonStore } from "../stores/common";


const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 50000
})

apiClient.interceptors.request.use(
  (config) => {
    const commonStore = useCommonStore();
    if (commonStore.user && commonStore.user.token) {
      config.headers["Authorization"] = `Bearer ${commonStore.user.token}`;
    }
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);
apiClient.interceptors.response.use(
  (response) => {

    return response;
  },
  function (error) {

    if (error.response && error.response.status === 401) {

      storeToRefs.dispatch('user/logout')
    }
    return Promise.reject(error);
  }
)
window.axios = apiClient;


export default {
  loginn : {
    
    LoginUser(credentials) {
      return apiClient.post('/auth/login', credentials);
    },
    registerUser(credentials) {
      return apiClient.post('/auth/register', credentials);
    },
   },

   personn : {
    person() {
      return apiClient.get('/auth/getall');
    },
    
    personadd(parameter){
      return apiClient.post('/auth/add', parameter)
    },

   },

   contact : {

    contact() {
      debugger;
      return apiClient.get('/auth/getallcontact');
    },
   }
};