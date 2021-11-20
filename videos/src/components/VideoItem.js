import './VideoItem.css';
import React from 'react';


const VideoItem = ({ video, onVideoSelect }) => {

    return (
        <div className="video-item item" onClick={() => onVideoSelect(video)}>
            {/* <div class="content">
                <a class="header">Semantic-Org/Semantic-UI</a>
                <div class="description">Updated 10 mins ago</div>
            </div> */}
                <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={ video.snippet.title }/>
                <div className="content"> 
                    <div className="header">
                        { video.snippet.title }
                    </div>
                 </div>
        </div>
    );

};


export default VideoItem;