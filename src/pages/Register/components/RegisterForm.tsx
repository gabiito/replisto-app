import { BaseForm } from "@/components/Form";
import { UserLogin } from "@/models";
import { Input } from "antd";
import { FormItemProps } from "antd/lib/form";
import { TbUser, TbLock, TbAt, TbLockCheck } from "react-icons/tb";

interface RegisterFormProps {
  handleLogin: (values: UserLogin) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  handleLogin,
}: RegisterFormProps) => {
  const formItems: FormItemProps[] = [
    {
      name: "name",
      rules: [
        {
          required: true,
          message: "Debes ingresar tu nombre!",
        },
        {
          type: "string",
          message: "Por favor ingresa nombre y apellido!",
          pattern: new RegExp(/^[a-zA-Z]+ [a-zA-Z]+$/),
        },
      ],
      children: (
        <Input prefix={<TbUser size={18} />} placeholder="Nombre completo" className="p-2" />
      ),
    },
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
    {
      name: "password_confirmation",
      rules: [
        {
          required: true,
          message: "Debes confirmar tu contraseña!",
        },
        // compare the password field with the password_confirmation field
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue("password") === value) {
              return Promise.resolve();
            }
            return Promise.reject(
              new Error("Las contraseñas ingresadas no coinciden!")
            );
          },
        }),
      ],
      children: (
        <Input.Password
          prefix={<TbLockCheck size={18} />}
          placeholder="Confirmar contraseña"
          className="p-2"
          visibilityToggle={false}
        />
      ),
    },
  ];

  return (
    <>
      <BaseForm
        name="register"
        title="Crear cuenta"
        className="register-form"
        actionLabel="Registrarse"
        items={formItems}
        onFinish={(values) => handleLogin(values as UserLogin)}
      />
    </>
  );
};

export default RegisterForm;
