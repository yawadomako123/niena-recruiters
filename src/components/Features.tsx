import React from 'react';
import { HiSparkles, HiCheckCircle, HiBriefcase, HiRocketLaunch } from 'react-icons/hi2';

const Features: React.FC = () => {
    const features = [
        {
            title: 'Verified Companies',
            description: 'We verify all companies to ensure legitimacy and protect job seekers on our platform.',
            gradient: 'from-purple-500 to-blue-500',
            icon: HiCheckCircle
        },
        {
            title: 'Post Job Opportunities',
            description: 'Create and publish job listings to reach qualified candidates actively seeking work.',
            gradient: 'from-purple-600 to-blue-400',
            icon: HiBriefcase
        },
        {
            title: 'Match Candidates to Recruiters',
            description: 'Find the best candidates for your positions',
            gradient: 'from-violet-500 to-blue-500',
            icon: HiSparkles
        },
        {
            title: 'Quick Setup',
            description: 'Apply to become a verified recruiter and start posting jobs quickly.',
            gradient: 'from-purple-400 to-blue-600',
            icon: HiRocketLaunch
        }
    ];

    return (
        <section id="features" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        How It <span className="gradient-text">Works</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Get verified, post jobs, and find the right candidates for your positions.
                    </p>
                </div>

                {/* Features Grid - 2x2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
                            >
                                <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                                    <Icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;
