import React, { useState, useEffect } from 'react';

export default function Contact() {
  const [status, setStatus] = useState({ message: "", type: "" });
  const [fadeState, setFadeState] = useState("fadeIn"); // "fadeIn" or "fadeOut"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFadeState("fadeIn");
    setStatus({ message: "Sending...", type: "sending" });

    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/myzpoqow", { // Replace with your Formspree endpoint
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus({ message: "✅ Message sent successfully!", type: "success" });
        form.reset();
      } else {
        setStatus({ message: "❌ Failed to send message. Please try again later.", type: "error" });
      }
    } catch {
      setStatus({ message: "❌ Network error. Please check your connection.", type: "error" });
    }
  };

  // Auto-hide alerts with fade-out effect
  useEffect(() => {
    if (status.message) {
      const fadeTimer = setTimeout(() => setFadeState("fadeOut"), 2500); // start fade out after 2.5s
      const removeTimer = setTimeout(() => setStatus({ message: "", type: "" }), 3000); // remove after fade out
      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [status]);

  return (
    <section id="contact" className="py-16">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Name</label>
            <input 
              type="text" 
              name="name" 
              required 
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input 
              type="email" 
              name="email" 
              required 
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block mb-1">Message</label>
            <textarea 
              name="message" 
              rows="5" 
              required 
              className="w-full border rounded px-3 py-2"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="px-4 py-2 bg-primary text-white rounded hover:opacity-90"
          >
            Send Message
          </button>
        </form>

        {status.message && (
          <div 
            className={`mt-4 px-4 py-3 rounded-lg shadow-md ${
              fadeState === "fadeIn" ? "animate-fadeIn" : "animate-fadeOut"
            } ${
              status.type === "success"
                ? "bg-green-100 text-green-800 border border-green-300"
                : status.type === "error"
                ? "bg-red-100 text-red-800 border border-red-300"
                : "bg-blue-100 text-blue-800 border border-blue-300"
            }`}
          >
            {status.message}
          </div>
        )}
      </div>
    </section>
  );
}
