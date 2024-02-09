import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
import Cookie from 'js-cookie';


const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
const TOKEN_URL = `${process.env.REACT_APP_AUTH_URL}/token`;

const getAccessToken = async(code) => {
    const body = {
        'code': code,
        'client_id': CLIENT_ID,
        'grant_type': 'authorization_code',
        'redirect_uri': REDIRECT_URI
    }    

    if (!code) {
        console.error('No code exists');
        return;
    }
    
    const response = await axios({
        method: 'post',
        url: TOKEN_URL,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: qs.stringify(body)
    });

    // Check the console for the full response from the auth exchange
    console.log(response);

    // We set the access token to be stored in the cookies for 30 minutes
    Cookie.set('access_token', response.data.access_token, { expires: 1/48 });
    
    return response.data.access_token;
};


const AuthRedirectPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get('code');
    // Initiate the access token exchange
    const accessToken = getAccessToken(code);

    
    return (
        <div>
            <h3>Authentication Successful</h3>
            <p>Welcome to the redirected page!</p>
            {
                accessToken ? (
                    <div>Success</div>  
                ) : (
                    <div>Error, check CORS settings on browser</div>
                ) 
            }
        </div>
    );
}

export default AuthRedirectPage;
