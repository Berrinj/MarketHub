import { useForm } from "react-hook-form";
import { StyledContactForm } from "./ContactForm.styles";
import { z } from "/node_modules/zod";
import { zodResolver } from "/node_modules/@hookform/resolvers/zod";

const schema = z.object({
    fullName: z.string().min(3),
    email: z.string().email(),
    subject: z.string().min(3),
    body: z.string().min(3),
})

function ContactForm() {
    const { 
        register, 
        handleSubmit,
        reset,
        formState: {errors, isSubmitting}, 
    } = useForm({
        resolver: zodResolver(schema),
    });

    async function onSubmit(data) {
        try{
    await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data); 
      reset();
    } catch (error) {
        console.error("Error submitting form:", error);
    }
}

    return (
                <StyledContactForm onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="fullName">Full Name:</label>
                    <input {...register("fullName")}
                    type="text"
                    placeholder="Your full name" 
                    />
                    {errors.fullName && <p className="form-error">{errors.fullName.message}</p>}
                   
        
                    <label htmlFor="email">Email:</label>
                    <input {...register("email")} 
                    type="email" 
                    placeholder="Your email"
                    />
                    {errors.email && <p className="form-error">{errors.email.message}</p>}
                    
        
                    <label htmlFor="subject">Subject:</label>
                    <input {...register("subject")}
                    type="text"
                    placeholder="Your subject" 
                    />
                    {errors.subject && <p className="form-error">{errors.subject.message}</p>}
                    
        
                    <label htmlFor="body">Body:</label>
                    <textarea {...register("body")}
                    placeholder="Write your message here"
                    />
                    {errors.body && <p className="form-error">{errors.body.message}</p>}
                    
                    <div className="btn-container">
                    <button disabled={isSubmitting} type="submit" className="submit-btn">{isSubmitting ? "Loading..." : "Submit"}</button>
                    <input type="reset" className="reset-btn" />
                    </div>
                </StyledContactForm>
            );
        }
        
        export default ContactForm;





// import { useForm } from "react-hook-form";
// import { StyledContactForm } from "./ContactForm.styles";

// function ContactForm() {
//     const { register, handleSubmit, formState: { errors }, watch } = useForm();

//     const formValues = watch();

//     function onSubmit(data) {
//         console.log(data);
//     }

//     const isFormEmpty = !formValues.fullName && !formValues.email && !formValues.subject && !formValues.body;
//     return (
//         <StyledContactForm onSubmit={handleSubmit(onSubmit)}>
//             <label htmlFor="fullName">Full Name:</label>
//             <input type="text" {...register("fullName", {
//                 required: "Full name is required",
//                 minLength: { value: 3, message: "Full name must be at least 3 characters long." }
//             })} />
//             {errors.fullName && <p className="form-error">{errors.fullName.message}</p>}

//             <label htmlFor="email">Email:</label>
//             <input type="email" {...register("email", {
//                 required: "Email is required",
//                 pattern: { value: /\S+@\S+\.\S+/, message: "Please enter a valid email address." }
//             })} />
//             {errors.email && <p className="form-error">{errors.email.message}</p>}

//             <label htmlFor="subject">Subject:</label>
//             <input type="text" {...register("subject", {
//                 required: "Subject is required",
//                 minLength: { value: 3, message: "Subject must be at least 3 characters long." }
//             })} />
//             {errors.subject && <p className="form-error">{errors.subject.message}</p>}

//             <label htmlFor="body">Body:</label>
//             <textarea {...register("body", {
//                 required: "A message is required",
//                 minLength: { value: 3, message: "Message must be at least 3 characters long." }
//             })} />
//             {errors.body && <p className="form-error">{errors.body.message}</p>}
            
//             <div className="btn-container">
//             <input type="submit" className="submit-btn" disabled={isFormEmpty}/>
//             <input type="reset" className="reset-btn" />
//             </div>
//         </StyledContactForm>
//     );
// }

// export default ContactForm;


// import { useForm } from "react-hook-form";
// import { yupResolver } from "/node_modules/@hookform/resolvers/yup";
// import * as yup from "/node_modules/yup";
// import { StyledContactForm } from "./ContactForm.styles";

// const schema = yup.object({
//     fullName: yup.string().min(3).required("Please enter your full name, over 3 characters long."),
//     email: yup.string().email().required("Please enter a valid email address."),
//     subject: yup.string().min(3).required("Please enter a subject, over 3 characters long."),
//     body: yup.string().min(3).required("Please enter a message, over 3 characters long."),
// })
// .required();

// function ContactForm() {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm({
//         resolver: yupResolver(schema),
//     });

//     function onSubmit(data) {
//         console.log(data);
//     }

//     return (
//         <StyledContactForm onSubmit={handleSubmit(onSubmit)}>
//             <label htmlFor="fullName">Full Name:</label>
//             <input type="text" {...register("fullName")} />
//             <p>{errors.fullName?.message}</p>

//             <label htmlFor="email">Email:</label>
//             <input type="email" {...register("email")} />
//             <p>{errors.email?.message}</p>

//             <label htmlFor="subject">Subject:</label>
//             <input type="text" {...register("subject")} />
//             <p>{errors.subject?.message}</p>

//             <label htmlFor="body">Body:</label>
//             <textarea {...register("body")} />
//             <p>{errors.body?.message}</p>

//             <input type="submit"/>
//         </StyledContactForm>
//     )
// }

// export default ContactForm;


// import { useState } from "react";
// import { StyledContactForm } from "./ContactForm.styles";

// function ContactForm() {
//     const [formData, setFormData] = useState({
//         fullName: "",
//         subject: "",
//         email: "",
//         body: "",
//     });

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(formData);
//         handleReset();
//         return <div>Form submitted</div>;
//     };

//     const handleReset = () => {
//         setFormData({
//             fullName: "",
//             subject: "",
//             email: "",
//             body: "",
//         });
//     };

//     return (
//         <StyledContactForm onSubmit={handleSubmit} onReset={handleReset}>
//             <label htmlFor="fullName">Full Name:</label>  
//                 <input
//                     type="text"
//                     name="fullName"
//                     placeholder="Your full name"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     required
//                     minLength="3"
//                 />
            
//             <label htmlFor="subject">Subject:</label>
//                 <input
//                     type="text"
//                     name="subject"
//                     placeholder="Subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     required
//                     minLength="3"
//                 />
            
//             <label htmlFor="email">Email:</label>
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Your email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                 />
            
//             <label htmlFor="body">Body:</label>
//                 <textarea
//                     name="body"
//                     placeholder="Your message"
//                     value={formData.body}
//                     onChange={handleChange}
//                     required
//                     minLength="3"
//                 />
//             <div className="btn-container">
//             <button type="submit" className="submit-btn">Submit</button>
//             <button type="reset" className="reset-btn">Reset form</button>
//             </div>
//         </StyledContactForm>
//     );
// }

// export default ContactForm;