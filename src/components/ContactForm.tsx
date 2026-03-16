import { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12"
      >
        <h3 className="text-2xl font-extrabold text-foreground mb-2">Thanks!</h3>
        <p className="text-muted-foreground">Your message has been sent. We'll get back to you soon.</p>
      </motion.div>
    );
  }

  return (
    <form
      action="https://formspree.io/f/mbdabbql"
      method="POST"
      onSubmit={() => setSubmitted(true)}
      className="space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 rounded-button border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-button border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
        <input
          type="tel"
          name="phone"
          className="w-full px-4 py-3 rounded-button border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-button border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
        />
      </div>
      <button
        type="submit"
        className="px-8 py-3 rounded-button bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
