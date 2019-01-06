import axios from 'axios';

const KEY = 'AIzaSyBnhxgCPX9cJxk2Ka2FOgzWY9HDY8nBoT0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params :{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
