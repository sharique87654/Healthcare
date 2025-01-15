import firstimg from "../assets/firstdetail.jpg"

function FirstDetail () {
    return(


<div className="w-[1330px] h-[704px] mx-auto   shadow-md overflow-hidden">
      <div className="flex h-full">
        {/* Image Section */}
        <div className="w-1/2 h-full">
          <img
            className="object-cover w-full h-full "
            src={firstimg} 
            alt="Person working on a computer" 
          />
        </div>

        {/* Text Section */}
        <div className="w-1/2 p-8 flex flex-col justify-center bg-slate-800">
          <h3 className="text-4xl font-bold text-emerald-300">
          Unprecedented Velocity. Impeccable Reliability.
          </h3>
          <p className="mt-4 text-white text-base">
          We have equipped Radshare with best in class Enterprise Worklist functionality, system to system integrations and web content plugins. And the result is – You have instant access to all images and data related to the patient. Choose a case, and Radshare is in charge of bringing you images and requests relevant to the patient, both current and previous with zero worries of the nature of the image as Radshare is completely vendor- modality neutral.
          </p>
          <br />
          <p className="text-white">
          Radshare is a completely flawless product emerging out of timeless efforts of a team of skilled healthcare and technology experts who give predominant value to human lives. The organisation behind Radshare are continuously engaged in research work in order to constantly improve the way Healthcare technologies help clinicians save more lives , find work a lot easier and less stressful. We have always placed our client needs first
          </p>
          <br /><br /><br />
<button
  type="submit"
  className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
>
  <a href="/pacs">Learn More</a>
  <svg
    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
    viewBox="0 0 16 19"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
      className="fill-gray-800 group-hover:fill-gray-800"
    ></path>
  </svg>
</button>

        </div>
      </div>
    </div>
    )
}
export default FirstDetail;