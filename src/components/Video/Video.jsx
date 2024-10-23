

const Video = ({height , width,...props }) => {
    
    return (

        <>
            <video src={props.video}  width={width} height={height} autoPlay={true} controls/>
        </>
    )


}

export default Video

