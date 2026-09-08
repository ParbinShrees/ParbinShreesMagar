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
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-20 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <span className="text-xs font-mono font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block mb-1">
            04 / Connect
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Get in Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-5">
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Whether you have a question about my projects, want to collaborate on a hardware build, or have an open role, feel free to send a message.
            </p>

            <div className="space-y-3 text-xs">
              
              {/* Copy Email Box */}
              <div className="p-4 rounded-xl bg-white dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/80 shadow-xs flex flex-col xs:flex-row xs:items-center justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <span className="text-zinc-400 dark:text-zinc-500 font-mono block mb-0.5">Email</span>
                  <a 
                    href={`mailto:${emailAddress}`}
                    className="font-mono font-semibold text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-xs sm:text-sm break-all"
                  >
                    {emailAddress}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="font-mono text-xs px-3.5 py-2 min-h-[36px] rounded-lg bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-600 active:bg-zinc-300 dark:active:bg-zinc-600 transition-colors cursor-pointer self-start xs:self-auto flex-shrink-0 flex items-center justify-center font-medium"
                  title="Copy email to clipboard"
                >
                  {copied ? 'Copied ✓' : 'Copy'}
                </button>
              </div>

              {/* Social Links */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="https://github.com/ParbinShrees"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/80 rounded-xl flex items-center gap-2 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors font-medium text-zinc-800 dark:text-zinc-200"
                >
                  <i className="fab fa-github" />
                  <span>GitHub</span>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/parbin-shrees-6a32a2330/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/80 rounded-xl flex items-center gap-2 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors font-medium text-zinc-800 dark:text-zinc-200"
                >
                  <i className="fab fa-linkedin-in text-[#0077b5]" />
                  <span>LinkedIn</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7 bg-white dark:bg-zinc-800/80 p-5 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-700/80 shadow-xs">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-700 rounded-lg p-3 text-base sm:text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:bg-white dark:focus:bg-zinc-900 focus:border-zinc-900 dark:focus:border-zinc-400 transition-colors font-sans"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    autoComplete="email"
                    inputMode="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-700 rounded-lg p-3 text-base sm:text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:bg-white dark:focus:bg-zinc-900 focus:border-zinc-900 dark:focus:border-zinc-400 transition-colors font-sans"
                    placeholder="name@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-700 rounded-lg p-3 text-base sm:text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:bg-white dark:focus:bg-zinc-900 focus:border-zinc-900 dark:focus:border-zinc-400 transition-colors font-sans resize-none"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium text-sm py-3.5 rounded-lg hover:bg-zinc-800 dark:hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2 min-h-[48px]"
              >
                {status === 'submitting' ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white dark:text-zinc-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending message...</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
              
              {status === 'success' && (
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-lg text-xs text-emerald-800 dark:text-emerald-300 font-medium">
                  ✓ Message sent successfully. I will get back to you soon.
                </div>
              )}
              
              {status === 'error' && (
                <div className="p-3 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 rounded-lg text-xs text-red-700 dark:text-red-300 font-medium">
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
