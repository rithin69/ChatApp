import React from 'react'
import Input from "../../components/Input";


function Form() {
  return (
    <div className='bg-white w-[600px] h-[700px] rounded-lg flex flex-col justify-center items-center'  >
      <div className='text-4xl font-extrabold'>Welcome</div>
      <div className='text-xl font-light mb-6'>Sign up to get started</div>
      <Input label="Full name" name="name"  placeholder="Enter your full name" className="mb-6" />
      <Input label="Email address" name="email"  placeholder="Enter your email" className="mb-6" />
      <Input label="Password" name ="password" type="password"   placeholder="Enter your Password" className="mb-6" />
    </div>
  )
}

export default Form