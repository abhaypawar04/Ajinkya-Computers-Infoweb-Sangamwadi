import { useState } from "react";
import { Mail, MapPin, Phone, CheckCircle2, ExternalLink } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import { courses } from "../data/courses";

const initialForm = { name: "", email: "", phone: "", course: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your full name.";
    if (!form.email.trim()) e.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (!form.phone.trim()) e.phone = "Please enter your phone number.";
    if (!form.course) e.course = "Please select a course.";
    if (!form.message.trim()) e.message = "Please enter a message.";
    return e;
  };

  const handleChange = (field) => (ev) => {
    setForm((f) => ({ ...f, [field]: ev.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setSubmitted(true);
    setForm(initialForm);
  };

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "01 Bandal Complex, Opposite to Patanjali Shop, Ramnagar Sangamwadi, Pune 411003",
  )}`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Get in touch"
          title="Start your journey in technology."
          description="Have questions about courses or computer education? Connect with Ajinkya Computers Infoweb."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left – contact info */}
          <div>
            <h3 className="text-lg font-semibold text-ink mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-light-bg text-brand-blue flex-shrink-0">
                  <MapPin className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">
                    Ajinkya Computers Infoweb
                  </p>
                  <p className="text-sm text-ink-soft leading-relaxed mt-1">
                    01 Bandal Complex, Opposite to Patanjali Shop,
                    <br />
                    Ramnagar Sangamwadi, Pune – 411003
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-light-bg text-brand-blue flex-shrink-0">
                  <Mail className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">Email</p>
                  <a
                    href="mailto:team.ajinkyacomputersinfoweb@gmail.com"
                    className="text-sm text-ink-soft hover:text-brand-blue transition-colors break-all"
                  >
                    team.ajinkyacomputersinfoweb@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-light-bg text-brand-blue flex-shrink-0">
                  <Phone className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">Phone</p>
                  <a
                    href="tel:+918600225653"
                    className="text-sm text-ink-soft hover:text-brand-blue transition-colors"
                  >
                    +91 8600225653
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right – form */}
          <div className="bg-light-bg border border-ink/10 p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle2
                  className="w-14 h-14 text-brand-blue mx-auto mb-4"
                  strokeWidth={1.5}
                />
                <h4 className="text-xl font-semibold text-ink mb-2">
                  Enquiry recorded
                </h4>
                <p className="text-sm text-ink-soft max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. This form is a frontend
                  demonstration — your enquiry has not been transmitted or
                  stored. To connect with us directly, please email or call the
                  institute using the contact details shown.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-medium text-brand-blue hover:underline"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-ink mb-1.5"
                  >
                    Full Name <span className="text-brand-blue">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange("name")}
                    className={`w-full bg-white border px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-colors ${
                      errors.name ? "border-red-400" : "border-ink/15"
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-ink mb-1.5"
                    >
                      Email Address <span className="text-brand-blue">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange("email")}
                      className={`w-full bg-white border px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-colors ${
                        errors.email ? "border-red-400" : "border-ink/15"
                      }`}
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-ink mb-1.5"
                    >
                      Phone Number <span className="text-brand-blue">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange("phone")}
                      className={`w-full bg-white border px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-colors ${
                        errors.phone ? "border-red-400" : "border-ink/15"
                      }`}
                      placeholder="+91 ..."
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="course"
                    className="block text-sm font-medium text-ink mb-1.5"
                  >
                    Course Interested In{" "}
                    <span className="text-brand-blue">*</span>
                  </label>
                  <select
                    id="course"
                    value={form.course}
                    onChange={handleChange("course")}
                    className={`w-full bg-white border px-3.5 py-2.5 text-sm text-ink focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-colors ${
                      errors.course ? "border-red-400" : "border-ink/15"
                    } ${!form.course ? "text-ink/30" : ""}`}
                  >
                    <option value="">Select a course</option>
                    {courses.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                  {errors.course && (
                    <p className="mt-1 text-xs text-red-500">{errors.course}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-ink mb-1.5"
                  >
                    Message <span className="text-brand-blue">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange("message")}
                    className={`w-full bg-white border px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-colors resize-none ${
                      errors.message ? "border-red-400" : "border-ink/15"
                    }`}
                    placeholder="Tell us about your learning goals..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button type="submit" showArrow className="w-full group">
                  Submit Enquiry
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
