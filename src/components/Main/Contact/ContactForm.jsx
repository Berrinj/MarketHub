import { useForm } from "react-hook-form";
import { useState } from "react";
import { StyledContactForm } from "./ContactForm.styles";
import { z } from "/node_modules/zod";
import { zodResolver } from "/node_modules/@hookform/resolvers/zod";

const schema = z.object({
    fullName: z.string().min(3),
    email: z.string().email(),
    subject: z.string().min(3),
    body: z.string().min(3),
})

const SuccessMsg = () => {
    return <div><p className="form-msg form-success">Form submitted successfully!</p></div>;
}

const ErrorMsg = () => {
    return <div><p className="form-msg form-error">There was an error submitting the form. Please try again.</p></div>;
}

/**
 * @description the ContactForm component uses the useForm hook from react-hook-form to handle the form state and logs the data in the console
 * @returns the ContactForm component with the form fields for the user to fill out
 */

function ContactForm() {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
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
        setIsSuccess(true);
        setIsError(false);
    } catch (error) {
        console.error("Error submitting form:", error);
        setIsError(true);
        setIsSuccess(false);
    }
}

    return (
                <StyledContactForm onSubmit={handleSubmit(onSubmit)}>
                    <h1>Contact Form</h1>
                    <label htmlFor="fullName">Full Name:</label>
                    <input {...register("fullName")}
                    type="text"
                    placeholder="Your full name" 
                    id="fullName"
                    />
                    {errors.fullName && <p className="form-error">{errors.fullName.message}</p>}
                   
        
                    <label htmlFor="email">Email:</label>
                    <input {...register("email")} 
                    type="email" 
                    placeholder="Your email"
                    id="email"
                    />
                    {errors.email && <p className="form-error">{errors.email.message}</p>}
                    
        
                    <label htmlFor="subject">Subject:</label>
                    <input {...register("subject")}
                    type="text"
                    placeholder="Your subject"
                    id="subject" 
                    />
                    {errors.subject && <p className="form-error">{errors.subject.message}</p>}
                    
        
                    <label htmlFor="body">Body:</label>
                    <textarea {...register("body")}
                    placeholder="Write your message here"
                    id="body"
                    />
                    {errors.body && <p className="form-error">{errors.body.message}</p>}
                    {isSuccess && <SuccessMsg />}
                    {isError && <ErrorMsg />}
                    
                    <div className="btn-container">
                    <button disabled={isSubmitting} type="submit" className="submit-btn">{isSubmitting ? "Loading..." : "Submit"}</button>
                    <input type="reset" className="reset-btn" />
                    </div>
                </StyledContactForm>
            );
        }
        
        export default ContactForm;
