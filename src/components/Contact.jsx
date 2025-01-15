import React from "react";
import TrueFocus from './Animation/TrueFocus';

export default function Contact() {
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "93aaae3a-4354-4bf7-a50b-e2cb15be7558");
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div>
        <br />
        <div className="bg-lime-950">
        <TrueFocus 
  sentence="Let's Talk!"
  manualMode={false}
  blurAmount={4}
  borderColor="orange"
  animationDuration={1}
  pauseBetweenAnimations={1/2}
/>
<br />
        </div>


<div className="container px-4 mx-auto bg-slate-200">
  <div className="mx-auto">
    <div className="max-w-md mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-orange-600 mb-4">Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-gray-800 mb-1" >Your Name</label>
          <input
            className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
            placeholder="Enter your name"
            type="text"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 mb-1" >Your Email</label>
          <input
            className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
            placeholder="Enter your email"
            name="email"
            id="email"
            type="email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 mb-1" 
            >Your Message</label
          >
          <textarea
            className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
            rows="4"
            placeholder="Enter your message"
            name="message"
            id="message"
            required
          ></textarea>
        </div>
        <button
          className="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300"
          type="submit"
          
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</div>


    </div>
    
  )
}
