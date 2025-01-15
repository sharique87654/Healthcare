
import "./SecondDetail.css"; // Import custom keyframes and styles

const SecondDetail = () => {
  return (
<div className="flex py-24 bg-slate-800 h-[600px] w-[1330px]">

            <div className="loader flex items-center justify-center w-24 h-24 mx-auto my-32 perspective-[780px] relative   ">
              <div className="load-inner load-one absolute w-80 h-80 box-border rounded-full border-b-4 border-indigo-600"></div>
              <div className="load-inner load-two absolute w-80 h-80 box-border rounded-full border-r-4 border-purple-500"></div>
              <div className="load-inner load-three absolute w-80 h-80 box-border rounded-full border-t-4 border-blue-500"></div>
              <span className="text text-5xl font-bold text-yellow-500 z-10">
                 Are You Ready to Experience the Change?
                </span>
            </div>
        
                <div className="py-36  p-8 flex flex-col justify-center  bg-red-900 h-[37rem] w-[42rem] mx-7 border-4 rounded-full ">
                    <p className="text-2xl text-white ">
                    Radshare Medical solutions are a clinical data processing company which helps to boost the efficiency of your Healthcare Organization to its fullest. We believe in growing bigger by giving more to Healthcare! Join us to be part of this beautiful journey in making Patient care delivery a simple and more appealing experience.
                    </p>
                </div>
        </div>


  );
};

export default SecondDetail;
