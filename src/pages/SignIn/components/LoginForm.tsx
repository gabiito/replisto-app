import { BaseForm } from "@/components/Form";
import { UserLogin } from "@/models";
import { Input } from "antd";
import { FormItemProps } from "antd/lib/form";
import { TbLock, TbAt } from "react-icons/tb";

interface LoginFormProps {
  handleLogin: (values: UserLogin) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  handleLogin,
}: LoginFormProps) => {
  const formItems: FormItemProps[] = [
    {
      name: "email",
      rules: [
        {
          required: true,
          message: "Debes ingresar tu email!",
        },
        {
          type: "email",
          message: "Por favor ingresa un email válido!",
        },
      ],
      children: (
        <Input prefix={<TbAt size={18} />} placeholder="Email" className="p-2" />
      ),
    },
    {
      name: "password",
      rules: [
        {
          required: true,
          message: "Debes ingresar tu contraseña!",
        },
      ],
      children: (
        <Input.Password
          prefix={<TbLock size={18} />}
          placeholder="Contraseña"
          className="p-2"
        />
      ),
    },
  ];

  return (
    <>
      <BaseForm
        name="login"
        title="Login"
        className="login-form w-full"
        actionLabel="Login"
        items={formItems}
        onFinish={(values) => handleLogin(values as UserLogin)}
      />
    </>
  );
};

export default LoginForm;
