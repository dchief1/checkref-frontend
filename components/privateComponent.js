import React, {useState, useLayoutEffect} from 'react';
import UserService from '../services/user.service';
import {useRouter} from 'next/router';

const privateComponent = ({children}) => {
    const router = useRouter();
    const [render, setRender] = useState(false);
    const [user, setUser] = useState(null);
    useLayoutEffect(() => {
        if (!UserService.getUser() || !UserService.getToken()) {
            router.push('/login');
        } else {
            setUser(UserService.getUser());
            setRender(true);
        }
    }, []);
    return <div user={user}>{render && children} </div>;
};

export default privateComponent;
