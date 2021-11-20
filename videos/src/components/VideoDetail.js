import React from 'react';


// class VideoDetail extends React.Component {

//     render(props) {
//         return (
//             <div>Video name is {props.video.snippet.title }</div>
//         );
//     }
// }

const VideoDetail = ({video}) => {

    
    if(!video)
        return <div>Loading ...</div>;
        const videoSRC = "https://www.youtube.com/embed/" + video.id.videoId;
    return (
        <div>
            <div className="ui embed">
                <iframe title="Video Player" src={videoSRC}></iframe>
            </div>

            <div className="ui segment">
                <h4 className="ui header"> {video.snippet.title} </h4>
                <p> {video.snippet.description} </p>
            </div>
         </div>
        );
};



export default VideoDetail;

