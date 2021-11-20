import React from 'react';
import Youtube from '../apis/Youtube';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';


class App extends React.Component {

    state = {  videos: [], selectedVideo: null };

    componentDidMount() {
        this.onTermSubmit("songs");
    }

    onVideoSelect = (video) => {
        console.log(video);
        this.setState({selectedVideo: video});
        console.log("state", this.state);
    };

    onTermSubmit =  async (term) => {
        
        const response =  await Youtube.get("/search", {
            params: {
                q: term
            }
        });

        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });

    };

    render() {
        return (
            <div className="ui container">
                 <SearchBar  onFormSubmit ={this.onTermSubmit}/>
                 <div className="ui grid">
                     <div className="ui row">
                        <div className="eleven wide column"><VideoDetail video={this.state.selectedVideo} /> </div>
                        <div className="five wide column"><VideoList videos ={this.state.videos} onVideoSelect = {this.onVideoSelect}/></div>
                    </div>
                 </div>
            </div>
        );

    }
}

export default App;