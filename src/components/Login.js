import React from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { loginWithGoogle } from '../actions/auth';
import Modal from '../ui/Modal';

export const Login = props => {
const dispatch = useDispatch();

const responseGoogle = ({ profileObj }) => {
    dispatch( loginWithGoogle(
        profileObj.googleId, 
        profileObj.name,
        profileObj.email, 
        profileObj.imageUrl
    ))
}

    return (
        <Modal onClose={props.onCloseLoginScreen}>
            <p className='modal__title'>Start Sign In:</p>
            <p className='modal__body'>Start your order signin up with your Google or Facebok Account</p>
            <div className='modal__social-container'>
                <GoogleLogin
                        clientId="376676721491-30jufr1sfi4pd9a46mjs3ea741ncgid5.apps.googleusercontent.com"
                        buttonText="Sign In with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                />
            </div>
        </Modal>
    );
};
