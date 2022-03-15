import "./contact.scss";
import axios from "axios";
import { useState, useRef } from "react";
import ReCAPTCHA from 'react-google-recaptcha';

export default function Contact() {
    const formId = 'ezIPbdmq';
    const formSparkURL = `https://submit-form.com/${formId}`;
    const recaptchaKey = '6LeBnfodAAAAANIZVyOLasbJhfgezFreicTvenad';
    const recaptchaRef = useRef()

    const initialFormState = {
        email: '',
        name: '',
        message: '',
    }
    const [formState,setFormState] = useState({ //tracks the current values of form
        email: '',
        name: '',
        message: '',
    });
    // const [submitting, setSubmitting] = useState(false);
    const submitting = false;
    const [message, setMessage] = useState();
    const [recaptchaToken, setRecaptchaToken] = useState();
    const submitForm = async (e) => {
        e.preventDefault();
        // await postSubmission();
    }
    
    // const postSubmission = async () => {
    //     const payload = {
    //         ...formState,
    //         'g-recaptcha-response': recaptchaToken,
    //     };
    //     try {
    //         const result = await axios.post(formSparkURL, payload);
    //         console.log(result);
    //         setMessage({
    //             class: 'success-message',
    //             text: `Thanks, I'll get back to you soon!`
    //         })
    //         setFormState(initialFormState) //resets form after submission
    //         recaptchaRef.current.reset(); //reset ReCAPTCHA after submission
    //     } catch(error) {
    //         console.log(error.message)
    //         setMessage({
    //             class: 'error-message',
    //             text: 'Sorry, looks like there\'s been a problem. I\'ll have a stern word with this website\'s creator.'
    //         })
    //     }
    // }

    const updateForm = (e) => {
        const {id, value} = e.target;
        const formKey = id;
        const updatedFormState = {...formState};
        updatedFormState[formKey] = value;
        setFormState(updatedFormState);
    }

    // const updateRecaptchaToken = (token) => {
    //     setRecaptchaToken(token);
    // } 


    return (
        <div className="contact" id="contact">
            <div className="contact-form">
                <h1>Contact Me</h1>
                <div className="error-print">
                    {message && <div className={message.class}>{message.text}</div>}
                </div>
                
                <form onSubmit="submit" name="contact-form" method="POST" data-netlify="true">
                    <div className="name">
                        <label htmlFor="name"></label>
                        <input 
                        name = "name"
                        placeholder = "Name"
                        type="text"
                        onChange={updateForm}
                        className="nameInput" 
                        id="name"
                        value={formState.name} 
                        required/>
                    </div>
                    <div className="email">
                        <label htmlFor="email"></label>
                        <input 
                        name = "email"
                        type="email"
                        placeholder= "Email"
                        onChange={updateForm}
                        className="nameInput" 
                        id="email"
                        value={formState.email}
                        required
                         />
                    </div>
                    <div className="subject">
                        <label htmlFor="subject"></label>
                        <input
                        name="subject"
                        type="text"
                        placeholder= "Subject" 
                        onChange={updateForm}
                        className="nameInput" 
                        id="subject"
                        value={formState.subject}>
                        </input>
                    </div>
                    <div className="message">
                        <label htmlFor="message"></label>
                        <textarea
                        name="message"
                        placeholder= "Message" 
                        onChange={updateForm}
                        className="nameInput" 
                        id="message"
                        value={formState.message}>
                        </textarea>
                        <div data-netlify-recaptcha="true"></div>
                    </div>
                    

                    {/* <ReCAPTCHA 
                        ref={recaptchaRef}
                        sitekey={recaptchaKey}
                        onChange={updateRecaptchaToken}
                    /> */}

                    <div className="form-button">
                        {/* <button disabled={submitting} className="form-btn">
                        {submitting ? 'Submitting...' : 'Submit'}   */}
                        <button className="form-btn">Submit</button> 
                    </div>
                    
                </form>
            </div> 
        </div>
    )
}
