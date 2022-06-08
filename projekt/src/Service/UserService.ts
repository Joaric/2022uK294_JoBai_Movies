import { setAuthTokens, clearAuthTokens } from "axios-jwt";
import API from "./AxiosInstances";
type ILoginRequest = {
  email: string;
  password: string;
};
type IRegisterRequest = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
};
const UserService = () => ({
  login: async (params: ILoginRequest) => {
    const res = await API.post("/login", params).catch((error) => {
      throw error;
    });
    if (res && res.status === 200) {
      localStorage.setItem("token", res.data.accessToken);
    }
  },
  register: async (params: IRegisterRequest) => {
    const res = await API.post("/register", params).catch((error) => {
      throw error;
    });
    if (res && res.status === 200) {
      localStorage.setItem("token", res.data.accessToken);
    }
  },
  logout: () => clearAuthTokens(),
});
export default UserService;