import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import CheckboxCustom from '@/Components/CheckboxCustom';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import PrimaryButtonCustom from '@/Components/PrimaryButtonCustom';
import TextInput from '@/Components/TextInput';
import TextInputCustom from '@/Components/TextInputCustom';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit} className='w-3/4'>

                <div>
                    <p className='text-4xl font-bold w-full my-4'>Log In</p>
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInputCustom
                    // Unset
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        // Default
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInputCustom
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        // autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="flex items-center justify-between mt-4">
                    <label className="flex items-center">
                        <CheckboxCustom
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                    
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-none "
                        >
                            Forgot your password?
                        </Link>
                    )}
                </div>

                <div className="block mt-4">
                    <PrimaryButtonCustom className="" disabled={processing}>
                        Log in
                    </PrimaryButtonCustom>
                </div>

                <div className="flex items-center mt-4">
                    <Link
                        href={route('register')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-none focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Not have account?
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
