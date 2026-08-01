import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Placeholder for EmailJS or other service
    // In a real app with EmailJS, you would do:
    // emailjs.send('SERVICE_ID', 'TEMPLATE_ID', formData, 'PUBLIC_KEY')
    
    // Simulating a network request for the placeholder
    setTimeout(() => {
      setStatus('success');
      setSubmittedData({ name: formData.name, message: formData.message });
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 border-t border-[#1D3629]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-mono font-bold text-[#EDE8DD] mb-2">Get in Touch</h2>
          <div className="w-12 h-1 bg-[#C6903F]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div>
            <p className="text-lg opacity-90 mb-6 text-[#EDE8DD]">
              Interested in working together or have a question about one of my projects? Feel free to reach out.
            </p>
            
            <div className="space-y-4 font-mono text-sm">
              <div className="flex items-center gap-3 text-[#C6903F]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:parbinshreesh64487@gmail.com" className="hover:text-[#EDE8DD] transition-colors">parbinshreesh64487@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 text-[#C6903F]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="text-[#EDE8DD]">Nepal</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-mono text-sm text-[#C6903F] mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#1D3629] border border-[#2A4B3A] rounded p-3 text-[#EDE8DD] focus:outline-none focus:border-[#C6903F] transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block font-mono text-sm text-[#C6903F] mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#1D3629] border border-[#2A4B3A] rounded p-3 text-[#EDE8DD] focus:outline-none focus:border-[#C6903F] transition-colors"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block font-mono text-sm text-[#C6903F] mb-1">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full bg-[#1D3629] border border-[#2A4B3A] rounded p-3 text-[#EDE8DD] focus:outline-none focus:border-[#C6903F] transition-colors resize-none"
                placeholder="Hello, I'd like to talk about..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="w-full bg-[#C6903F] text-[#15291F] font-mono font-bold px-6 py-3 rounded hover:bg-[#b07d32] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EDE8DD] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
            
            {status === 'success' && submittedData && (
              <div className="mt-6 p-5 border border-[#C6903F]/50 bg-[#15291F] rounded shadow-lg">
                <h4 className="font-mono text-[#EDE8DD] font-bold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Message Sent Successfully!
                </h4>
                <p className="font-mono text-sm text-[#C6903F] mb-2">From: {submittedData.name}</p>
                <p className="text-[#EDE8DD] text-sm italic opacity-90 border-l-2 border-[#C6903F] pl-3 py-1 mb-3">
                  {submittedData.message}
                </p>
                <p className="font-mono text-xs text-[#C6903F] opacity-80">I will get back to you shortly at parbinshreesh64487@gmail.com.</p>
              </div>
            )}
            
            {status === 'error' && (
              <p className="font-mono text-sm text-[#E8563A] mt-2 text-center">Error sending message. Please try again.</p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
