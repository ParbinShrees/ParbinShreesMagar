import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

// ─── EmailJS Configuration ───────────────────────────────────────────────────
// Replace these three values after setting up your EmailJS account.
// See instructions at the bottom of this file.
const EMAILJS_SERVICE_ID  = 'service_e8vpaeq';
const EMAILJS_TEMPLATE_ID = 'template_elb55e9';
const EMAILJS_PUBLIC_KEY  = 'RG5kmNlolyWeT5cJm';
// ─────────────────────────────────────────────────────────────────────────────

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    formData.name,
          from_email:   formData.email,
          message:      formData.message,
          to_name:      'Parbin',
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-[#d2d2d7]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-2 tracking-tight">Get in Touch</h2>
          <div className="w-16 h-1.5 bg-[#0071e3] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div>
            <p className="text-xl leading-relaxed text-[#1d1d1f] font-medium mb-8">
              Interested in working together or have a question about one of my projects? Feel free to reach out.
            </p>
            
            <div className="space-y-6 text-base font-medium">
              <div className="flex items-center gap-3 text-[#0071e3]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:parbinshreesh64487@gmail.com" className="hover:text-[#0077ed] transition-colors">parbinshreesh64487@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 text-[#0071e3]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="text-[#1d1d1f]">Nepal</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-[#1d1d1f] mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#f5f5f7] border border-[#d2d2d7] rounded-xl p-4 text-[#1d1d1f] focus:outline-none focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3] focus:-translate-y-1 focus:shadow-md transition-all duration-300"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#1d1d1f] mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#f5f5f7] border border-[#d2d2d7] rounded-xl p-4 text-[#1d1d1f] focus:outline-none focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3] focus:-translate-y-1 focus:shadow-md transition-all duration-300"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-[#1d1d1f] mb-2">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full bg-[#f5f5f7] border border-[#d2d2d7] rounded-xl p-4 text-[#1d1d1f] focus:outline-none focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3] focus:-translate-y-1 focus:shadow-md transition-all duration-300 resize-none"
                placeholder="Hello, I'd like to talk about..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="w-full bg-[#0071e3] text-white font-semibold px-6 py-4 rounded-full hover:bg-[#0077ed] hover:scale-[1.02] hover:shadow-[0_8px_20px_rgba(0,113,227,0.3)] active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
            
            {status === 'success' && (
              <div className="mt-6 p-6 border border-[#d2d2d7] bg-[#f5f5f7] rounded-2xl shadow-sm">
                <h4 className="text-[#1d1d1f] font-bold text-lg mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Message Sent!
                </h4>
                <p className="text-sm font-medium text-[#86868b]">Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            )}
            
            {status === 'error' && (
              <p className="text-sm font-semibold text-red-500 mt-4 text-center">Error sending message. Please try again.</p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;

/*
  ── HOW TO SET UP EMAILJS (Free, takes 5 minutes) ────────────────────────────

  1. Go to https://www.emailjs.com and create a FREE account

  2. Add a Gmail service:
     - Dashboard → "Email Services" → "Add New Service" → Choose Gmail
     - Click "Connect Account" → sign in with parbinshreesh64487@gmail.com
     - Copy the Service ID → paste it as EMAILJS_SERVICE_ID above

  3. Create an email template:
     - Dashboard → "Email Templates" → "Create New Template"
     - Set "To Email" to: parbinshreesh64487@gmail.com
     - Set Subject to:  New message from {{from_name}}
     - Set Body to:
         Name:    {{from_name}}
         Email:   {{from_email}}
         Message: {{message}}
     - Save → Copy the Template ID → paste it as EMAILJS_TEMPLATE_ID above

  4. Get your Public Key:
     - Dashboard → top-right → Account → "API Keys"
     - Copy Public Key → paste it as EMAILJS_PUBLIC_KEY above

  5. Save this file — done! The form will now deliver to your Gmail inbox.
  ─────────────────────────────────────────────────────────────────────────────
*/
