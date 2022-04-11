import React,{FC} from "react";
import { Field } from "formik";

interface TypeClass {
  className?:any;
  valid?:any;
  error?:any;
   id:any;
   name:any;
   placeholder: any;
   type:any;
  
 
}

const FilteredPropsInputField: FC<TypeClass> =({ className, valid, error, ...props }) => {
  return <Field className={className} {...props} />;
}


export default  FilteredPropsInputField;