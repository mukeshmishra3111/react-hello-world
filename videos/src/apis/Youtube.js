import axios from 'axios';

const KEY = "AIzaSyCQQAAPBs1BYYwl-Oxa23_TWQ4mkRPlInI";


export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",

    params: {
        part: 'snippet',
        maxResults: 10,
        type: 'video',
        key: KEY
    }
});