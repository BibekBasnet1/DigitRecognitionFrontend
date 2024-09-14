

const Video = ({height , width,...props }) => {
    
    return (

        <>
            <video src={props.video}  width={width} height={height} autoPlay={props?.autoPlay ?? false} controls/>
        </>
    )


}

export default Video

