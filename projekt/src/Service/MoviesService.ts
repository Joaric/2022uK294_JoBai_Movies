import { Movies } from "../Types/MovieModel";
import API from "./AxiosInstances";

const MoviesService = () => ({
    login: async (data: any) => {
      const res = await API.post("/login", data).catch((error) => {
        throw error;
      });
      if (res && res.status === 200) {
        return res.data;
      }
    },
    
    findAll: async () => {
        const res = await API.post("/movies").catch((error) => {
          throw error;
        });
          return res.data;
      }
});

export default MoviesService;
