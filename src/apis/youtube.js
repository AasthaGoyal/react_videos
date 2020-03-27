import axios from 'axios';

const KEY = 'AIzaSyAdg0C0r60bKBAR8NsSMeg9pQy1EIKQ8BM';

export default axios.create({
    baseURL:  'https://www.googleapis.com/youtube/v3',
    params:
    {
        part: 'snippet',
        type:'video',
        maxResults:'5',
        key: KEY
       
    }
});

