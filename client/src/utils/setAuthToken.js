import axios from 'axios';

// check to see if a token is passed in 
// if it is then we're gonna set it to the global header
// If not then we're gonna delete it from the global header

const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['x-auth-token'] = token;
    }
    else {
        delete axios.defaults.headers.common['x-auth-token'];
    }
};

export default setAuthToken;