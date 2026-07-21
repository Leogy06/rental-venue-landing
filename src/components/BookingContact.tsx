"use client"

import React, { useState } from 'react';
import { bookingDetails } from '@/data/booking';
import SectionTitle from './SectionTitle';

const BookingContact: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        date: '',
        guests: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section id="booking" className="py-10 lg:py-20">
            <div className="text-center mb-12">
                <SectionTitle>
                    <h2 className="my-3 !leading-snug">{bookingDetails.headline}</h2>
                </SectionTitle>
                <p className="text-foreground-accent max-w-2xl mx-auto mt-4">
                    {bookingDetails.subheading}
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-10">
                {/* Form */}
                <div className="lg:w-2/3">
                    {submitted ? (
                        <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-10 text-center">
                            <h3 className="text-2xl font-semibold text-secondary mb-3">Thank You!</h3>
                            <p className="text-foreground-accent">
                                Your inquiry has been received. Our events team will be in touch within 24 hours to discuss your celebration.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">Phone *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="eventType" className="block text-sm font-medium text-foreground mb-1">Event Type *</label>
                                    <select
                                        id="eventType"
                                        name="eventType"
                                        required
                                        value={formData.eventType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                    >
                                        <option value="">Select event type</option>
                                        <option value="wedding">Wedding</option>
                                        <option value="birthday">Birthday</option>
                                        <option value="corporate">Corporate Event</option>
                                        <option value="anniversary">Anniversary</option>
                                        <option value="baby-shower">Baby Shower</option>
                                        <option value="graduation">Graduation</option>
                                        <option value="holiday">Holiday Party</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="date" className="block text-sm font-medium text-foreground mb-1">Preferred Date</label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="guests" className="block text-sm font-medium text-foreground mb-1">Number of Guests</label>
                                    <input
                                        type="number"
                                        id="guests"
                                        name="guests"
                                        min="1"
                                        value={formData.guests}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Additional Details</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Tell us about your dream event..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-primary hover:bg-primary-accent text-black px-8 py-3 rounded-full transition-colors font-semibold"
                            >
                                Send Inquiry
                            </button>
                        </form>
                    )}
                </div>

                {/* Contact Details */}
                <div id="contact" className="lg:w-1/3">
                    <div className="bg-hero-background rounded-2xl p-8">
                        <h3 className="text-xl font-semibold text-secondary mb-4">Contact Information</h3>
                        <div className="space-y-4 text-foreground-accent">
                            <p>
                                <strong className="text-foreground">Address:</strong><br />
                                {bookingDetails.address}
                            </p>
                            <p>
                                <strong className="text-foreground">Phone:</strong><br />
                                <a href={`tel:${bookingDetails.phone.replace(/\D/g, '')}`} className="hover:text-primary transition-colors">
                                    {bookingDetails.phone}
                                </a>
                            </p>
                            <p>
                                <strong className="text-foreground">Email:</strong><br />
                                <a href={`mailto:${bookingDetails.email}`} className="hover:text-primary transition-colors">
                                    {bookingDetails.email}
                                </a>
                            </p>
                            <div>
                                <strong className="text-foreground">Hours:</strong>
                                <ul className="mt-1 space-y-1">
                                    {bookingDetails.hours.map((hour, i) => (
                                        <li key={i}>{hour}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="mt-6 h-40 bg-gray-200 rounded-lg flex items-center justify-center text-foreground-accent text-sm">
                            Map Placeholder
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingContact;
