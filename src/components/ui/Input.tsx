import React from 'react'
import { UseFormRegister } from 'react-hook-form';

interface FormValues {
    name: string;
    email: string;
}

interface InputProps {

    label: string;
    name: keyof FormValues;
    placeholder?: string;
    type?: string;
    register : UseFormRegister<FormValues>;
    error?: string;

}

const Input:React.FC<InputProps> = ({label, name, type = "text", placeholder, register, error}) => {
  return (
    <div className='flex flex-col'>
        <label className='mb-1 text-gray-700 font-medium'>{label}</label>
        <input 
            {...register(name)}
            type={type}
            placeholder={placeholder}
            className={`p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                error ? "border-red-500" : "border-gray-300"
            }`}
        />
        {error && <span className='text-red-500 text-sm mt-1'>{error}</span>}
    </div>
  )
}

export default Input