import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(watch("example"))

  return (
    <>
    <div className="container">
      <div>

      <h1>SignUp</h1>
   <form onSubmit={handleSubmit(onSubmit)}>
    <div>
    <label >First name</label>
    <input
    {...register("firstname", { required: true })} 
    type="text" />
    {errors.firstname && <span>This field is required</span>}
    </div>
    <label >Last name</label>
    <input type="text" />
    <label >E-mail</label>
    <input type="text" />
    <label >Password</label>
    <input placeholder='******' type="password" />
    <label >Confirm password</label>
    <input placeholder='******' type="password" />
    <input id='btn' type='submit' />
   </form>
      </div>
    <div>
      <img src='/logImg.png'/>
    </div>
    </div>
    </>
  )
}

export default App
