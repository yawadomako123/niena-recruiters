import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ComparisonTable from '../components/ComparisonTable';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <Features />
            <ComparisonTable />
            <ContactForm />
            <Footer />
        </main>
    );
}
