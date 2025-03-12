import React from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { useForm } from "react-hook-form";
import { addUser } from "../store/feature/userSlice";
import { toast } from "react-toastify";

interface FormValues {
  name: string;
  email: string;
}

const UserForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    dispatch(addUser(data));
    toast.success("کاربر با موفقیت اضافه شد");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 bg-white shadow-md rounded-lg max-w-md mx-auto"
    >
      <h2 className="text-xl mb-4 text-right">افزودن کاربر</h2>
      <Input
        label="نام"
        name="name"
        placeholder="نام را وارد کنید"
        register={register}
        error={errors.name?.message}
      />
      <Input
        label="ایمیل"
        name="email"
        placeholder="ایمیل خود را وارد کنید"
        register={register}
        error={errors.email?.message}
      />
      <Button type="submit" className="w-full mt-4">
        افزودن
      </Button>
    </form>
  );
};

export default UserForm;
