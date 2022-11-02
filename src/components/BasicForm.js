import {useFormik} from 'formik'
import { basicSchema } from '../schemas';

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  actions.resetForm()
}

const BasicForm = () => {
  const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues:{
      email: "",
      age:"",
      password:"",
      confirmPassword:""
    },
    validationSchema: basicSchema,
    onSubmit

  })
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="email">Email</label>
      <input 
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.email && touched.email ? "input-error" : ""}
      id="email" type="email" placeholder="Enter your email" />
      {errors.email && touched.email && <p className='error'>{errors.email}</p>}
    
      <label htmlFor="age">Age</label>
        <input 
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
        id="age" type="number" placeholder="Enter your age" />
      {errors.age && touched.age && <p className='error'>{errors.age}</p>}

      <label htmlFor="password">Password</label>
        <input 
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        id="password" type="password" placeholder="Enter your password" />
      {errors.password && touched.password && <p className='error'>{errors.password}</p>}

      <label htmlFor="confirmPassword">confirmPassword</label>
        <input 
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        id="confirmPassword" type="password" placeholder="Enter your confirmPassword" />
      {errors.confirmPassword && touched.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}

    <button disabled={isSubmitting}type='submit'>Submit</button>

    </form>
     
  );
};
export default BasicForm;
