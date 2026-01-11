import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background gradients - Purple to Blue */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
                    {/* Badge */}
                    <div className="inline-flex items-center space-x-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-2 mb-8">
                        <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
                        <span className="text-sm font-medium text-purple-900">Now in Beta</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                        Find Top Talent,
                        <br />
                        <span className="gradient-text">Faster</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Join our platform to access quality job seekers actively looking for opportunities. Apply to become a recruiter and start connecting with candidates today.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="https://app.nienalabs.com/recruiters/apply"
                            className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all hover:-translate-y-1"
                        >
                            Apply as Recruiter →
                        </Link>
                        <Link
                            href="#features"
                            className="w-full sm:w-auto bg-white border-2 border-gray-200 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-300 transition-all hover:shadow-lg"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
