"use client";

import { useState } from "react";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   setTimeout(() => {
  //     setLoading(false);
  //     setSuccess(true);
  //     setForm({ name: "", email: "", phone: "", message: "" });
  //   }, 1200);
  // };
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setSuccess(false);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (!res.ok) throw new Error("Failed to send");

    setSuccess(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  } catch (error) {
    alert("Something went wrong. Please try again.");
  }

  setLoading(false);
};

  return (
    <section className="relative border border-border bg-background rounded-xl p-10">
      
      {/* Top Label */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 border bg-primary rounded-xl px-4 py-1">
        <span className="text-primary-foreground text-sm font-medium">
          Contact
        </span>
      </div>

      {/* Flickering Background (Dark Mode Only) */}
      <div className="absolute inset-0 h-1/2 pointer-events-none z-0 rounded-xl overflow-hidden hidden dark:block">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
          Get in Touch
        </h2>

        <p className="mx-auto max-w-lg text-muted-foreground">
          I’m passionate about working on innovative projects and collaborating
          with motivated individuals. Have an idea or want to explore one
          together? Let’s connect.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl mt-6 text-left"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-sm text-muted-foreground mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="bg-muted/40 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm text-muted-foreground mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="bg-muted/40 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-sm text-muted-foreground mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="bg-muted/40 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-sm text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="bg-muted/40 border border-border rounded-xl px-4 py-3 text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                placeholder="Write your message..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-[1.03] disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>

          {/* Success Message */}
          {success && (
            <p className="text-green-500 text-center mt-4">
              Message sent successfully
            </p>
          )}
        </form>
      </div>
    </section>
  );
}