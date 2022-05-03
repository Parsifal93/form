import React,{FC} from "react";
import { Field } from "formik";

interface TypeClass {
  className?:string;
  valid:any;
  errors?:string;
   id:string;
   name:string;
   placeholder?: string;
   type?:string;
   touched?:any;
   error?:any;
}

const FilteredPropsInputField: FC<TypeClass> =({ className, valid, errors, error, touched,   ...props }) => {
  return <Field className={className} {...props} />;
}


export default  FilteredPropsInputField;