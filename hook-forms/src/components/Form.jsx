import { useForm } from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
const Form = () => {

  function onSubmit(data){
   console.log(data) 
  }
  const schema = yup.object().shape({
    name: yup.string().required("name is required"),
    email: yup.string().email().required("invalid email"),
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(4).max(20).required(),
    confirmPassword:yup.string().oneOf([yup.ref("password")]).required(),
  })

  const {register, handleSubmit, formState:{errors}}=useForm({
    resolver: yupResolver(schema),
  })

  return (
  <form onSubmit={handleSubmit(onSubmit)}>
      <input className="text-black" type="text" placeholder='name' {...register("name")}/>
      {errors.name? <p>{errors.name.message}</p>:<></>}
      //<br/>
      <input  className="text-black"type="text" placeholder='email'{...register("email")}/>
      <br/>
      <input  className="text-black"type="number" placeholder='age'{...register("age")}/>
      <br/>
      <input  className="text-black"type="password" placeholder='password'{...register("password")}/>
      <br/>
      <input  className="text-black"type="password" placeholder='confirm password'{...register("confirmPassword")}/>
      <br/>
      <input type="submit"/>
    </form>
  )
}

export default Form;
