import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-band contact-section flex flex-col items-center justify-center min-h-[70vh] py-12 px-2">
      <div className="w-full max-w-5xl bg-transparent flex flex-col md:flex-row gap-8 md:gap-12 items-stretch justify-center">
        {/* Left Side: Info */}
        <div className="flex-1 flex flex-col justify-center md:justify-start md:items-start items-center gap-6">
          <div className="mb-2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 text-center md:text-left leading-tight">
              Let’s chat.<br />Tell us about your project.
            </h2>
            <p className="text-slate-300 text-base md:text-lg mb-6 text-center md:text-left">Let’s create something together</p>
          </div>
          <div className="bg-[#181e2a] rounded-2xl shadow-lg flex items-center gap-4 px-6 py-4 w-full max-w-xs border border-[#232b3e]">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-amber-400/80">
              {/* Mail SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-900">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.5 7.5a2.25 2.25 0 01-3.182 0l-7.5-7.5A2.25 2.25 0 012.25 6.993V6.75" />
              </svg>
            </span>
            <div className="flex flex-col">
              <span className="text-xs text-slate-400">Mail us at</span>
              <a href="mailto:contact@tailgrids.com" className="text-emerald-400 font-semibold hover:underline text-sm">contact@tailgrids.com</a>
            </div>
          </div>
        </div>
        {/* Right Side: Form */}
        <div className="flex-1 flex flex-col justify-center">
          <form className="w-full max-w-md bg-[#181e2a] rounded-2xl shadow-xl px-8 py-8 flex flex-col gap-5 border border-[#232b3e] mx-auto">
            <h3 className="text-xl font-bold text-white mb-2">Send us a message</h3>
            <input type="text" placeholder="Full Name*" required className="bg-[#232b3e] border border-[#2e4369] rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 transition" />
            <input type="email" placeholder="Email Address*" required className="bg-[#232b3e] border border-[#2e4369] rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 transition" />
            <input type="text" placeholder="Subject*" required className="bg-[#232b3e] border border-[#2e4369] rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 transition" />
            <div>
              <label className="block text-slate-300 text-sm font-semibold mb-1">Tell us more about your project</label>
              <textarea placeholder="Type your message*" required rows={4} className="bg-[#232b3e] border border-[#2e4369] rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 transition w-full resize-none" />
            </div>
            <button type="submit" className="mt-2 bg-gradient-to-r from-emerald-400 to-amber-400 text-slate-900 font-bold rounded-xl py-3 px-6 shadow-lg hover:from-amber-400 hover:to-emerald-400 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 