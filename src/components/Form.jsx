import { Formik } from 'formik';
import React from 'react'

const Form = ({inputFields}) =>
    <Formik
       initialValues={inputFields.value}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
          {inputFields.map((fields)=>{
           <input
           type={fields.type}
           name={fields.name}
           onChange={handleChange}
           placeholder=''
           onBlur={handleBlur}
           value={fields.value}
         />
         {errors.email && touched.email && errors.email}
          })}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>


export default Form