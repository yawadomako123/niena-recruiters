import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <Image
                            src="/niena.png"
                            alt="Niena Recruits Logo"
                            width={40}
                            height={40}
                            className="rounded-xl group-hover:shadow-xl transition-shadow"
                        />
                        <span className="text-xl font-bold text-gray-900">
                            Niena<span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Recruits</span>
                        </span>
                    </Link>

                    {/* Navigation */}
                    <div className="flex items-center space-x-8">
                        <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                            Features
                        </Link>
                        <Link href="#comparison" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                            Comparison
                        </Link>
                        <Link
                            href="https://app.nienalabs.com/recruiters/apply"
                            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all hover:-translate-y-0.5"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
