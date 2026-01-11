'use client';

import React, { useState } from 'react';
import { HiSparkles, HiUserGroup, HiTag } from 'react-icons/hi2';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Form submitted:', formData);
        setStatus('success');
    };

    const handleReset = () => {
        setFormData({ name: '', email: '', company: '', phone: '' });
        setStatus('idle');
    };

    const benefits = [
        {
            title: 'Post Jobs',
            desc: 'Create job listings and reach qualified candidates',
            icon: HiSparkles
        },
        {
            title: 'Verified Platform',
            desc: 'Join a trusted platform with verified companies',
            icon: HiUserGroup
        },
        {
            title: 'Beta Pricing',
            desc: 'Special rates for early adopters',
            icon: HiTag
        }
    ];

    return (
        <section id="contact" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-300/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-300/30 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                    {/* Left Column - Info */}
                    <div className="animate-fade-in-up">
                        <div className="inline-block bg-purple-100 text-purple-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                            Apply to Join
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Start Hiring <span className="gradient-text">Today</span>
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                            Apply to become a verified company on our platform. Once approved, you can post job opportunities and review applications from qualified candidates.
                        </p>

                        {/* Benefits */}
                        <div className="space-y-3 sm:space-y-4">
                            {benefits.map((benefit, i) => {
                                const Icon = benefit.icon;
                                return (
                                    <div key={i} className="flex items-start space-x-3 sm:space-x-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-sm sm:text-base">{benefit.title}</h4>
                                            <p className="text-gray-600 text-xs sm:text-sm">{benefit.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-gray-100">
                        {status === 'success' ? (
                            <div className="text-center py-8 sm:py-12 animate-fade-in">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Thank You!</h3>
                                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                                    We've received your application. Our team will review it and get back to you within 48 hours.
                                </p>
                                <a
                                    href="https://app.nienalabs.com/recruiters/apply"
                                    className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:shadow-lg transition-all"
                                >
                                    Complete Application →
                                </a>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Apply as Recruiter</h3>
                                    <p className="text-sm sm:text-base text-gray-600">Fill in your details below</p>
                                </div>

                                <div>
                                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm sm:text-base"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                                        Work Email *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm sm:text-base"
                                        placeholder="john@company.com"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                                        Company Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm sm:text-base"
                                        placeholder="Acme Inc."
                                        value={formData.company}
                                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm sm:text-base"
                                        placeholder="+1 (555) 000-0000"
                                        value={formData.phone}
                                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:shadow-xl transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'submitting' ? 'Sending...' : 'Submit Application →'}
                                </button>

                                <p className="text-xs text-gray-500 text-center">
                                    By submitting, you agree to our Terms of Service and Privacy Policy
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
