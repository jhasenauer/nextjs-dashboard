'use client';

import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { Button } from './button';
import { signIn } from 'next-auth/react';
import LoginForm from './login-form';

export default function LoginProviders() {
    return (
        <>
            <br />
            <Button className="w-full mb-2" onClick={() => signIn('github')}>
                <FaGithub className="h-5 w-10" />
                Sign in with GitHub
            </Button>
            <Button className="w-full" onClick={() => signIn('google')}>
                <FaGoogle className="h-5 w-10" />
                Sign in with Google
            </Button>
            <br />
            <br />
            <LoginForm />
        </>
    );
}