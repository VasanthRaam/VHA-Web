import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/Button";
import { PhoneCall, Mail, CheckCircle2, Loader2, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { EnquiryData } from "@/types/enquiry";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    course: "",
    batch: "" as 'trichy' | 'vaiyampatti' | "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.course || !formData.batch) {
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    // Logs the data matching the EnquiryData model in console
    const payload: EnquiryData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      course: formData.course,
      batch: formData.batch as 'trichy' | 'vaiyampatti',
      message: formData.message || undefined
    };

    console.log("Enquiry Submission Payload (EnquiryData model):", payload);

    try {
      const response = await fetch("https://buddybloom-prod-981707949514.asia-south1.run.app/api/v1/enquiry/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Network response was not OK");
      }

      setSubmitted(true);

      // Reset form fields
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        course: "",
        batch: "",
        message: ""
      });
    } catch (error) {
      console.error("Enquiry submission failed:", error);
      alert("Enquiry submission failed. Please check your network or try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <Helmet>
        <title>Enquiry | Vasanth Academy</title>
      </Helmet>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-foreground">Get in touch</h1>
          <p className="text-lg text-zinc-650 dark:text-zinc-400 mb-12 leading-relaxed">
            Have questions about our courses or admissions? Fill out the form, and our academy counselors will get back to you shortly.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-primary-500/10 flex items-center justify-center shrink-0">
                <PhoneCall className="w-6 h-6 text-primary-500 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="text-foreground font-semibold text-lg">Call Us</h3>
                <p className="text-zinc-700 dark:text-zinc-300 mt-1">
                  <a href="tel:+919443333733" className="hover:text-primary-500 transition-colors">+91 94433 33733</a><br />
                  <a href="tel:+919791256871" className="hover:text-primary-500 transition-colors">+91 97912 56871</a>
                </p>
                <p className="text-zinc-500 text-sm mt-1">Mon - Sat, 9:00 AM - 7:00 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-primary-500/10 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary-500 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="text-foreground font-semibold text-lg">Email Us</h3>
                <p className="text-zinc-700 dark:text-zinc-300 mt-1">
                  <a href="mailto:vasanthhindiacademytry@gmail.com" className="hover:text-primary-500 transition-colors break-all">
                    vasanthhindiacademytry@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-primary-500/10 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-primary-500 dark:text-primary-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.507 9.388.507 9.388.507s7.517 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <div>
                <h3 className="text-foreground font-semibold text-lg">YouTube Channel</h3>
                <p className="text-zinc-700 dark:text-zinc-300 mt-1">
                  <a href="https://www.youtube.com/@vasanthacademy.1404" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors font-medium">
                    @vasanthacademy.1404
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Interactive Enquiry Form Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/70 dark:bg-zinc-900/50 border border-black/5 dark:border-white/10 p-8 rounded-[2rem] shadow-xl backdrop-blur-md relative min-h-[500px] flex flex-col justify-center"
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="enquiry-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-6">Enquiry Form</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">First Name *</label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full bg-white/50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Last Name *</label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full bg-white/50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                      placeholder="+91 94433 33733"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="course" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Interested Course *</label>
                      <div className="relative">
                        <select
                          id="course"
                          required
                          value={formData.course}
                          onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                          className="w-full bg-white/50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800 rounded-xl pl-4 pr-10 py-3 text-foreground focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors appearance-none dark:text-white"
                        >
                          <option value="" className="text-zinc-900 bg-white dark:text-zinc-100 dark:bg-zinc-900">Select course...</option>
                          <option value="academic" className="text-zinc-900 bg-white dark:text-zinc-100 dark:bg-zinc-900">Academic Subjects</option>
                          <option value="hindi" className="text-zinc-900 bg-white dark:text-zinc-100 dark:bg-zinc-900">Hindi Language</option>
                          <option value="dance" className="text-zinc-900 bg-white dark:text-zinc-100 dark:bg-zinc-900">Dance (Western & Bharatanatyam)</option>
                          <option value="music" className="text-zinc-900 bg-white dark:text-zinc-100 dark:bg-zinc-900">Keyboard & Singing</option>
                          <option value="art" className="text-zinc-900 bg-white dark:text-zinc-100 dark:bg-zinc-900">Drawing & Arts</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-zinc-400 dark:text-zinc-500">
                          <ChevronDown className="w-5 h-5" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="batch" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Preferred Batch *</label>
                      <div className="relative">
                        <select
                          id="batch"
                          required
                          value={formData.batch}
                          onChange={(e) => setFormData({ ...formData, batch: e.target.value as 'trichy' | 'vaiyampatti' })}
                          className="w-full bg-white/50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800 rounded-xl pl-4 pr-10 py-3 text-foreground focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors appearance-none dark:text-white"
                        >
                          <option value="" className="text-zinc-900 bg-white dark:text-zinc-100 dark:bg-zinc-900">Select batch...</option>
                          <option value="trichy" className="text-zinc-900 bg-white dark:text-zinc-100 dark:bg-zinc-900">Trichy</option>
                          <option value="vaiyampatti" className="text-zinc-900 bg-white dark:text-zinc-100 dark:bg-zinc-900">Vaiyampatti</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-zinc-400 dark:text-zinc-500">
                          <ChevronDown className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Message (Optional)</label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                      placeholder="Any specific questions?"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 text-base mt-2 flex items-center justify-center gap-2"
                    size="lg"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" /> Submitting...
                      </>
                    ) : (
                      "Submit Enquiry"
                    )}
                  </Button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="enquiry-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center text-center py-8"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 shadow-md shadow-emerald-500/10">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Enquiry Recorded!</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-8 max-w-sm leading-relaxed">
                  Thank you for reaching out. We have logged your preference details in our systems. Our coordinator will contact you shortly.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  className="rounded-2xl"
                  variant="outline"
                >
                  Submit Another Enquiry
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
