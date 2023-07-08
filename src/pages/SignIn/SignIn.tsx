import { useDispatch } from "react-redux";
import { createUser } from "@/redux/states/user";
import { Link, useNavigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "@/routes";
import { LoginForm } from "./components";
import { Logo } from "@/components/Logo";
import { LogoSize } from "@/components/Logo";
import { UserLogin } from "@/models";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // login simulation
  function login({ email, password }: UserLogin) {
    try {
      console.log(email, password)
      dispatch(createUser({ email, password, id: '1' }));
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
    } catch (error) {
      console.log(error);
    }
  }

  // function logout() {
  //   clearData(UserKey);
  //   dispatch(resetUser());
  //   navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
  // }

  return (
    <div
      className="
        w-full h-screen 
        grid place-items-center 
        bg-gradient-to-br from-pink-200 via-purple-300 to-indigo-200
      "
    >
      <div className="absolute top-8 md:top-14 pr-2">
        <Logo withTitle imgSize={LogoSize.LARGE}/>
      </div>
      <div
        className="
          flex flex-col
          w-[80vw] md:max-w-md 
          bg-white 
          p-6 
          rounded-xl
          shadow-lg 
        "
      >
        <LoginForm handleLogin={login}/>
        <hr className="mb-4" />
        <div className="flex justify-center gap-2">
          <span>¿No tienes una cuenta?</span>
          <Link to={`/${PublicRoutes.REGISTER}`} className="text-blue-500 hover:text-blue-700">
            Regístrate
          </Link>
        </div>
      </div>
    </div>
  );
}
export default SignIn;
