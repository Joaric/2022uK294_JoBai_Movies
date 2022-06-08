import React from "react";
import { useNavigate } from "react-router-dom";
import MoviesService from "../../Service/MoviesService";
import LoginForm from "../Organisms/LoginForm";

export const LoginPage = () => {
  const navigate = useNavigate();

  function handleSubmit(values: any): void {
    MoviesService()
      .login(values)
      .then((res: any) => {
        localStorage.setItem("api_token", res.accessToken);
        navigate("/");
      });
  }

  return (
    <div>
      <LoginForm handleInput={handleSubmit} />
    </div>
  );
};
