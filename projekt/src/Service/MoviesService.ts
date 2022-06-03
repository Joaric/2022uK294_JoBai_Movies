import API from "./AxiosInstances";

const MoviesService = () =>({
getRandomCatImage: async () => {
    const data = await API.get("search");
    return data["data"][0]["url"];
},
});

export default MoviesService; 
