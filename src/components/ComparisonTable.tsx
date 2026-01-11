import React from 'react';

const ComparisonTable: React.FC = () => {
    const comparisons = [
        { feature: 'Company Verification', us: true, them: false },
        { feature: 'Job Posting Platform', us: true, them: true },
        { feature: 'Application Management', us: true, them: true },
        { feature: 'No Hidden Fees', us: true, them: false },
        { feature: 'Simple Application Process', us: true, them: false },
        { feature: 'Quality Candidates', us: true, them: false }
    ];

    return (
        <section id="comparison" className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                        Why Choose <span className="gradient-text">Niena Recruits</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 px-4">
                        A trusted platform for verified companies to find quality candidates.
                    </p>
                </div>

                {/* Comparison Table */}
                <div className="max-w-4xl mx-auto overflow-x-auto">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden min-w-[600px]">
                        {/* Table Header */}
                        <div className="grid grid-cols-3 bg-gradient-to-r from-purple-50 to-blue-50 border-b border-gray-200">
                            <div className="p-4 sm:p-6 font-semibold text-gray-700 text-sm sm:text-base">Feature</div>
                            <div className="p-4 sm:p-6 text-center">
                                <div className="font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent text-sm sm:text-base lg:text-lg">Niena Recruits</div>
                            </div>
                            <div className="p-4 sm:p-6 text-center">
                                <div className="font-bold text-gray-500 text-sm sm:text-base lg:text-lg">Other Platforms</div>
                            </div>
                        </div>

                        {/* Table Rows */}
                        {comparisons.map((row, index) => (
                            <div
                                key={index}
                                className={`grid grid-cols-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                                    }`}
                            >
                                <div className="p-4 sm:p-6 font-medium text-gray-900 text-sm sm:text-base">{row.feature}</div>
                                <div className="p-4 sm:p-6 flex items-center justify-center">
                                    {typeof row.us === 'boolean' ? (
                                        row.us ? (
                                            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center">
                                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        ) : (
                                            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-red-100 rounded-full flex items-center justify-center">
                                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </div>
                                        )
                                    ) : (
                                        <span className="font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent text-sm sm:text-base">{row.us}</span>
                                    )}
                                </div>
                                <div className="p-4 sm:p-6 flex items-center justify-center">
                                    {typeof row.them === 'boolean' ? (
                                        row.them ? (
                                            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center">
                                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        ) : (
                                            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-red-100 rounded-full flex items-center justify-center">
                                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </div>
                                        )
                                    ) : (
                                        <span className="font-semibold text-gray-500 text-sm sm:text-base">{row.them}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;
