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
    setTimeout(() => setCopied(false), 2500);
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
    <section id="contact" className="py-24 bg-white border-t border-[#d2d2d7]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-bold text-[#0071e3] uppercase tracking-widest block mb-2">
            Let's Collaborate
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight">
            Get in Touch
          </h2>
          <div className="w-16 h-1.5 bg-[#0071e3] rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info & Quick Reach (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <p className="text-xl sm:text-2xl leading-relaxed text-[#1d1d1f] font-semibold">
              Have an exciting project, full-time role, or hardware idea in mind? Let's talk.
            </p>
            
            <p className="text-base text-[#86868b] leading-relaxed">
              I am open to full-time engineering roles, freelance opportunities, and collaborative builds in full-stack web and embedded IoT.
            </p>

            {/* Direct Connect Cards */}
            <div className="space-y-3">
              
              {/* Email Card with 1-Click Copy */}
              <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7] flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-base" />
                  </div>
                  <div className="truncate">
                    <p className="text-[11px] font-bold text-[#86868b] uppercase tracking-wider">Direct Email</p>
                    <a href={`mailto:${emailAddress}`} className="text-sm font-semibold text-[#1d1d1f] hover:text-[#0071e3] transition-colors truncate block">
                      {emailAddress}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex-shrink-0 text-xs font-bold px-3 py-1.5 rounded-full bg-white border border-[#d2d2d7] text-[#1d1d1f] hover:bg-[#0071e3] hover:text-white transition-all shadow-xs cursor-pointer flex items-center gap-1"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <i className="fas fa-check text-green-500" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <i className="fas fa-copy" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* LinkedIn Card */}
              <a 
                href="https://www.linkedin.com/in/parbin-shrees-6a32a2330/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7] flex items-center justify-between gap-3 hover:bg-white hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0077b5]/10 text-[#0077b5] flex items-center justify-center flex-shrink-0">
                    <i className="fab fa-linkedin-in text-base" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-[#86868b] uppercase tracking-wider">LinkedIn</p>
                    <p className="text-sm font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors">
                      Parbin Shrees Magar
                    </p>
                  </div>
                </div>
                <i className="fas fa-arrow-up-right text-xs text-[#86868b] group-hover:text-[#0071e3] transition-colors" />
              </a>

              {/* GitHub Card */}
              <a 
                href="https://github.com/ParbinShrees"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7] flex items-center justify-between gap-3 hover:bg-white hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1d1d1f]/10 text-[#1d1d1f] flex items-center justify-center flex-shrink-0">
                    <i className="fab fa-github text-base" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-[#86868b] uppercase tracking-wider">GitHub</p>
                    <p className="text-sm font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors">
                      @ParbinShrees
                    </p>
                  </div>
                </div>
                <i className="fas fa-arrow-up-right text-xs text-[#86868b] group-hover:text-[#0071e3] transition-colors" />
              </a>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#34c759]/10 text-[#34c759] flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-base" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#86868b] uppercase tracking-wider">Location</p>
                  <p className="text-sm font-semibold text-[#1d1d1f]">Pokhara, Nepal (UTC+5:45)</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#f5f5f7] p-8 sm:p-10 rounded-3xl border border-[#d2d2d7]">
            <h3 className="text-2xl font-bold text-[#1d1d1f] tracking-tight mb-2">Send a Message</h3>
            <p className="text-sm text-[#86868b] font-medium mb-6">Fill in the details below and it will land directly in my inbox.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#1d1d1f] mb-2">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-[#d2d2d7] rounded-xl p-4 text-[#1d1d1f] font-medium text-sm focus:outline-none focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/20 transition-all duration-200"
                  placeholder="e.g. Alexander Hamilton"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#1d1d1f] mb-2">
                  Your Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-[#d2d2d7] rounded-xl p-4 text-[#1d1d1f] font-medium text-sm focus:outline-none focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/20 transition-all duration-200"
                  placeholder="e.g. alexander@company.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#1d1d1f] mb-2">
                  Your Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-white border border-[#d2d2d7] rounded-xl p-4 text-[#1d1d1f] font-medium text-sm focus:outline-none focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/20 transition-all duration-200 resize-none"
                  placeholder="Hi Parbin, I'd like to discuss a project..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-[#0071e3] text-white font-semibold text-base py-4 rounded-full hover:bg-[#0077ed] hover:scale-[1.01] hover:shadow-[0_8px_20px_rgba(0,113,227,0.3)] active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] disabled:opacity-50 disabled:cursor-not-allowed shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                {status === 'submitting' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane text-xs" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
              
              {status === 'success' && (
                <div className="p-5 border border-[#34c759]/30 bg-[#34c759]/10 rounded-2xl shadow-sm animate-in fade-in duration-300">
                  <h4 className="text-[#1d1d1f] font-bold text-base mb-1 flex items-center gap-2">
                    <i className="fas fa-check-circle text-[#34c759]" />
                    Message Delivered!
                  </h4>
                  <p className="text-xs font-medium text-[#1d1d1f]">
                    Thanks for reaching out! I've received your email and will respond promptly.
                  </p>
                </div>
              )}
              
              {status === 'error' && (
                <div className="p-4 border border-red-200 bg-red-50 rounded-xl text-xs font-semibold text-red-600 text-center">
                  Could not send message. Please reach me directly at <a href={`mailto:${emailAddress}`} className="underline font-bold">{emailAddress}</a>.
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
