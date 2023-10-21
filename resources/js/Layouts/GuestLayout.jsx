import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex pt-6 sm:pt-0 bg-gray-100">
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-96 h-20 fill-current text-gray-100" />
                </Link>
            </div>

            <div className="w-full px-6 py-10 bg-white shadow-md overflow-hidden">
                {children}
            </div>
        </div>
    );
}
