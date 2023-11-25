import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children, stats}) {
    if (stats == 'reg') { 
    return (
        <div className="min-h-screen flex justify-end pt-6 sm:pt-0 bg-gray-300">
            <div className="flex w-3/5 px-6 py-10 justify-center items-center bg-white shadow-md overflow-hidden">
                {children}
            </div>
        </div>
    );
    } else if (stats == 'log') {
        return (
        <div className="min-h-screen flex pt-6 sm:pt-0 bg-gray-300">
            <div className="flex w-3/5 px-6 py-10 justify-center items-center bg-white shadow-md overflow-hidden">
                {children}
            </div>
        </div>
        );
    }
}
