import About from "./About";
import { Link, redirect } from "react-router-dom";

const Home = () => {



  return (
      <>
        <div className="flex flex-col items-center justify-center text-white min-h-80 mt-20">
          
          <div className="text-center ">
            <p className="text-3xl md:text-5xl lg:text-5xl font-semibold mb-2">
              Turn Digit Image Into Text,
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-extrabold">
              In Seconds
            </h1>
          </div>
    
          <div className="text-center mt-10"> 
            <h5 className="text-base md:text-lg lg:text-xl leading-relaxed">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Numquam culpa labore, excepturi beatae esse <br />
              mollitia nobis, ex magni provident doloribus quos libero. Cupiditate, aspernatur.
            </h5>
          </div>
    
          <div className="text-center mt-9">
            <Link className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-7 rounded-lg shadow-lg transition duration-300 text-lg"
             to={'/upload'} >
              Upload Digits
            </Link>
          </div>

        </div>
        </>
    );
  };
  
  export default Home;
  