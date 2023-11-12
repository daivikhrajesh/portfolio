import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import {useForm} from 'react-hook-form';
import { data } from 'autoprefixer';

export default function ContactUs() {
    const [success, setSuccess] = useState(false)
    const [failure, setFailure] = useState(false)
    const [progress, setProgress] = useState(false)
    const { register, handleSubmit, errors, reset } = useForm()
    

    const handleSuccess = React.useCallback(() => {
        setSuccess(success => !success)
        handleProgress()
    }, []);

    const handleFailure = React.useCallback(() =>{
        setFailure(failure => !failure)
        handleProgress()
    }, []);

    const handleProgress = React.useCallback(() => {
        console.log('progress')
        setProgress(progress => !progress)
    }, []);

  function sendEmail(data) {
      handleProgress()
      console.log(data)
        emailjs.send('default_service', 'template_go19blh', data, 'user_FqD3kBuBBPP1Mm1HYrgXD')
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           handleSuccess()
        }, function(error) {
           console.log('FAILED...', error);
           handleFailure()
        });
    
        reset() 
  }

  return (
    <div className="flex items-center justify-center h-screen">
    <form className="w-full max-w-lg mb-4 px-6 py-4 shadow-lg" onSubmit={handleSubmit(sendEmail)}
                success={success} failure={failure}>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                Full Name
            </label>
            <input name="name" ref={register({ required: "Name Required"})} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Full Name" />
            {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}.</p>}
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                E-mail
            </label>
            <input name="email" ref={register({ required: "Email Required"})} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="daivikh@company.io"/>
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}.</p>}
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                Message
            </label>
            <textarea name="message" ref={register({ required: "Message Required"})} className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
            {errors.message && <p className="text-red-500 text-xs italic">{errors.message.message}.</p>}
                {success ? <p className="text-green-500 text-xs italic"><span className="font-bold">Thank you!</span><br/>Your message has been successfully sent.</p> : 
                    failure ? <p className="text-red-500 text-xs italic">Something went wrong, please try again.</p> : null}
            </div>
        </div>
        <div className="md:flex md:items-center">
            <div className="md:w-1/3">
            <button disabled={progress}  
            className={`block mx-auto shadow ${progress ? `bg-gray-400`: `bg-gray-700`} hover:bg-gray-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mx-auto`} type="submit">
                
                Send Message
            </button>
            </div>
            <div className="md:w-2/3"></div>
        </div>
    </form>
  </div>
  );
}