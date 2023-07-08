import { Logo } from "@/components/Logo";
import { LogoSize } from "@/components/Logo";
import { PublicRoutes } from "@/routes";
import { Link } from "react-router-dom";
import { RegisterForm } from "./components";

const Register = () => {

  // async function login({ email, password }: UserLogin) {
  //   try {
  //     const res = ("1");
  //     dispatch(createUser(res));
  //     navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

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
          w-[90vw] md:max-w-md 
          bg-white 
          p-6 
          rounded-xl
          shadow-lg 
        "
      >
        <RegisterForm handleLogin={()=>{}}/>
        <hr className="mb-4" />
        <div className="flex justify-center gap-2">
          <span>¿Ya tienes una cuenta?</span>
          <Link to={`/${PublicRoutes.LOGIN}`} className="text-blue-500 hover:text-blue-700">
            Inicia sesión
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Register;