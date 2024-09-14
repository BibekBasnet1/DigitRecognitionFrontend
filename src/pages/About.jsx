import Video from "../components/Video/Video";

const About = () => {
    return (
      <div className="min-w-full min-h-fit flex flex-col items-center justify-center text-white px-4 py-8 mt-28">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10 text-center">
          How to Get Started ?
        </h1>
  
        <div className=" border-rose-400" >
            <Video video={"../components/video/Video.jsx"} width={"1800px"} height={"1000px"}/>
        </div>
      
      </div>
    );
  };
  
  export default About;
  