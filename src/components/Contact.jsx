import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

// ─── EmailJS Configuration ───────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_e8vpaeq';
const EMAILJS_TEMPLATE_ID = 'template_elb55e9';
const EMAILJS_PUBLIC_KEY  = 'RG5kmNlolyWeT5cJm';
// ─────────────────────────────────────────────────────────────────────────────

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [copied, setCopied] = useState(false);

  const emailAddress = 'parbinshreesh64487@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
    <section id="contact" className="py-20 border-t border-zinc-200/80">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-mono font-medium text-zinc-500 uppercase tracking-wider block mb-1">
            04 / Connect
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
            Get in Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-base text-zinc-600 leading-relaxed">
              Whether you have a question about my projects, want to collaborate on a hardware build, or have an open role, feel free to send a message.
            </p>

            <div className="space-y-3 text-xs">
              
              {/* Copy Email Box */}
              <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-xs flex items-center justify-between gap-3">
                <div>
                  <span className="text-zinc-400 font-mono block mb-0.5">Email</span>
                  <a 
                    href={`mailto:${emailAddress}`}
                    className="font-mono font-semibold text-zinc-900 hover:text-blue-600 transition-colors"
                  >
                    {emailAddress}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="font-mono text-xs px-2.5 py-1 rounded bg-zinc-100 text-zinc-700 hover:bg-zinc-200 transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? 'Copied ✓' : 'Copy'}
                </button>
              </div>

              {/* Social Links */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href="https://github.com/ParbinShrees"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-zinc-200 rounded-xl flex items-center gap-2 hover:border-zinc-300 transition-colors font-medium text-zinc-800"
                >
                  <i className="fab fa-github" />
                  <span>GitHub</span>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/parbin-shrees-6a32a2330/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-zinc-200 rounded-xl flex items-center gap-2 hover:border-zinc-300 transition-colors font-medium text-zinc-800"
                >
                  <i className="fab fa-linkedin-in text-[#0077b5]" />
                  <span>LinkedIn</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-8 rounded-2xl border border-zinc-200 shadow-xs">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono font-medium text-zinc-700 mb-1.5">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-3 text-sm text-zinc-900 focus:outline-none focus:bg-white focus:border-zinc-900 transition-colors font-sans"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs font-mono font-medium text-zinc-700 mb-1.5">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-3 text-sm text-zinc-900 focus:outline-none focus:bg-white focus:border-zinc-900 transition-colors font-sans"
                    placeholder="name@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-mono font-medium text-zinc-700 mb-1.5">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-3 text-sm text-zinc-900 focus:outline-none focus:bg-white focus:border-zinc-900 transition-colors font-sans resize-none"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-zinc-900 text-white font-medium text-sm py-3 rounded-lg hover:bg-zinc-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {status === 'submitting' ? 'Sending message...' : 'Send Message'}
              </button>
              
              {status === 'success' && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-800 font-medium">
                  ✓ Message sent successfully. I will get back to you soon.
                </div>
              )}
              
              {status === 'error' && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 font-medium">
                  Error sending message. Please email me directly at <a href={`mailto:${emailAddress}`} className="underline">{emailAddress}</a>.
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
