import mind from "../assets/mind.png"
import hospital from "../assets/hospital.png"
import firstaid from "../assets/firstaid.png"
import report from "../assets/report.png"


import "./Card2.css"; 

const Card2 = () => {
  return (
    
    <div id="card2">

<div className="flex mt-24 bg-slate-800 py-32">
              <div className="e-card playing mx-auto bg-transparent shadow-md relative w-60 h-96 rounded-lg overflow-hidden ">
                <div className="image"></div>
          
                {/* Waves */}
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
      
          
                {/* Info Section */}
                <div className="infotop text-center text-black font-semibold absolute top-14 left-0 right-0 ">
                  <center><img src={mind} className="h-20 w-20 " alt="" /></center>
                  <br />
               <h2 className="text-2xl"> AI Marketplace</h2>
                  <div className="name text-sm font-light relative top-4 ">
                <b>  RadShare AI Market place </b>
                  </div>
                  <br /><br /><br />
                  <button className="bg-black-300 text-black-600 rounded-full text-[15px] font-semibold px-8 py-4 cursor-pointer border-2 border-black shadow-[0_0_0_0_black] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:-translate-x-0.5 hover:shadow-[2px_5px_0_0_black] active:translate-y-0.5 active:translate-x-0.25 active:shadow-[0_0_0_0_black]"><a href="/pacs">Read More</a></button>
                </div>
              </div>
              
  
  
  
  
              <div className="e-card playing mx-auto bg-transparent shadow-md relative w-60 h-96 rounded-lg overflow-hidden ">
                <div className="image"></div>
          
                {/* Waves */}
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
      
          
                {/* Info Section */}
                <div className="infotop text-center text-black font-semibold absolute top-14 left-0 right-0">
                <center><img src={hospital} className="h-20 w-20 " alt="" /></center>
                <h2 className="text-2xl">Tele Radiology Platform</h2>
                  
                  <div className="name text-sm font-light relative top-4 ">
                  <b>Radshare Remote reporting instance for  Radiologists</b>
                  </div>
                  <br /><br />
                  <button className="bg-black-300 text-black-600 rounded-full text-[15px] font-semibold px-8 py-4 cursor-pointer border-2 border-black shadow-[0_0_0_0_black] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:-translate-x-0.5 hover:shadow-[2px_5px_0_0_black] active:translate-y-0.5 active:translate-x-0.25 active:shadow-[0_0_0_0_black]"><a href="/pacs">Read More</a></button>
                </div>
              </div>
  
  
  
  
              <div className="e-card playing mx-auto bg-transparent shadow-md relative w-60 h-96 rounded-lg overflow-hidden ">
                <div className="image"></div>
          
                {/* Waves */}
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
      
          
                {/* Info Section */}
                <div className="infotop text-center text-black font-semibold absolute top-14 left-0 right-0">
                <center><img src={report} className="h-20 w-20 " alt="" /></center>
                
                <h2 className="text-2xl">RIS & PACS</h2>
                  <div className="name text-sm font-light relative top-4 ">
                <b>  RadShare Radiology Information Systems & Picture Archiving and Communication
                  <br /><br /><br />
  
                </b>
                  </div>
                  <br />
                  <button className="bg-black-300 text-black-600 rounded-full text-[15px] font-semibold px-8 py-4 cursor-pointer border-2 border-black shadow-[0_0_0_0_black] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:-translate-x-0.5 hover:shadow-[2px_5px_0_0_black] active:translate-y-0.5 active:translate-x-0.25 active:shadow-[0_0_0_0_black]"><a href="/pacs">Read More</a></button>
                </div>
              </div>
  
  
  
  
              <div className="e-card playing mx-auto bg-transparent shadow-md relative w-60 h-96 rounded-lg overflow-hidden ">
                <div className="image"></div>
          
                {/* Waves */}
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
      
          
                {/* Info Section */}
                <div className="infotop text-center  font-semibold absolute top-14 left-0 right-0 ">
                <center><img src={firstaid} className="h-20 w-20 " alt="" /></center>
                
                <h2 className="text-2xl">Tele Radiology Services</h2>
                  
                  <div className="name text-sm font-light relative top-4 ">
                  <p className="text-black"><b>Cognizance Health  Tele reporting Services</b></p>
                  </div>
                  <br /><br />
                  <button className="bg-black-300 text-black-600 rounded-full text-[15px] font-semibold px-8 py-4 cursor-pointer border-2 border-black shadow-[0_0_0_0_black] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:-translate-x-0.5 hover:shadow-[2px_5px_0_0_black] active:translate-y-0.5 active:translate-x-0.25 active:shadow-[0_0_0_0_black]"><a href="/pacs">Read More</a></button>
                </div>
              </div>
  
          </div>

        </div>
   
  );
};

export default Card2;
