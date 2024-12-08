import { useState } from "react";
import { notification } from "antd";
import emailjs from 'emailjs-com';


interface IValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: IValues = {
  name: "",
  email: "",
  message: "",
};
emailjs.init('vhrkeHS3f9jm2grcA');

export const useForm = (validate: { (values: IValues): IValues }) => {


  const [formState, setFormState] = useState<{
    values: IValues;
    errors: IValues;
  }>({
    values: { ...initialValues },
    errors: { ...initialValues },
  });

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = formState.values;
    const errors = validate(values);
    setFormState((prevState) => ({ ...prevState, errors }));

    const url = ""; // Fill in your API URL here

    try {
      console.log(values)
      if (Object.values(errors).every((error) => error === "")) {
        // const response = await fetch(url, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(values),
        // });
        const templateParams = {
          name: values?.name,
          email: values?.email,
          message: values?.message,
        };
        const response = await emailjs.send(
          'service_xlszzsi',
          'template_k41t8zj',
          templateParams
        );
        console.log(response)
        
        console.log(values)
        if(response.status===200){
          notification["success"]({
            message: "Success",
            description: " Thank you for your message",
          });
          setTimeout(() => {
            window.location.reload();
          },2000)
          // setFormState(() => ({
          //   values: { ...initialValues },
          //   errors: { ...initialValues },
          // }))
        }else{
   notification["error"]({
            message: "Error",
            description:
              "There was an error sending your message, please try again later.",
          });
        }
   

        // if (!response.ok) {
       
        // } else {
        //   event.target.reset();
        //   setFormState(() => ({
        //     values: { ...initialValues },
        //     errors: { ...initialValues },
        //   }));

        //   notification["success"]({
        //     message: "Success",
        //     description: "Your message has been sent!",
        //   });
        // }
      }
    } catch (error) {
      notification["error"]({
        message: "Error",
        description: "Failed to submit form. Please try again later.",
      });
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.persist();
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: "",
      },
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values: formState.values,
    errors: formState.errors,
  };
};
