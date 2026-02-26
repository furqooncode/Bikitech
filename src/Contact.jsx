import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { showSuccess, showError } from './Alert.jsx';
import colors from './color.jsx';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    emailFor: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.email || !form.emailFor || !form.message) {
      showError('Please fill in all fields!');
      return;
    }

    setLoading(true);
    emailjs.send(
      'service_znlvjau',
      'template_hh17iuk',
      {
        from_name: form.name,
        phone_number: form.phone,
        reply_to: form.email,
        email_for: form.emailFor,
        message: form.message,
      },
      'a_W0jfSVksFCzlsIm'
    ).then(() => {
      showSuccess('Message sent successfully!');
      setLoading(false);
      setForm({ name: '', phone: '', email: '', emailFor: '', message: '' });
    }).catch(() => {
      showError('Something went wrong. Try again!');
      setLoading(false);
    });
  };

  return (
    <div className="w-full p-4 grid gap-4">

      <h3
        className="text-center text-2xl font-bold uppercase tracking-wide"
        style={{ color: colors.primaryText }}
      >
        <u>Contact Us</u>
      </h3>

      <h4
        className="text-center text-base font-medium"
        style={{ color: colors.secondaryText }}
      >
        Reach out to us for inquiries, orders, or custom requests
      </h4>

      <div
        className="w-full rounded-[16px] p-5 grid gap-4"
        style={{
          background: colors.container,
          border: `1px solid ${colors.border}`,
        }}
      >

        {/* Name */}
        <div className="grid gap-1">
          <label className="text-xs font-semibold uppercase tracking-wider"
          style={{ color: colors.secondaryText }}>
            Full Name <span style={{ color: colors.error }}>*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="e.g John Doe"
            className="w-full p-3 rounded-[10px] text-sm outline-none"
            style={{
              background: 'rgba(255,255,255,0.07)',
              border: `1px solid ${colors.border}`,
              color: colors.text,
            }}
          />
        </div>

        {/* Phone */}
        <div className="grid gap-1">
          <label className="text-xs font-semibold uppercase tracking-wider"
          style={{ color: colors.secondaryText }}>
            Phone Number <span style={{ color: colors.error }}>*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="e.g +234 800 000 0000"
            className="w-full p-3 rounded-[10px] text-sm outline-none"
            style={{
              background: 'rgba(255,255,255,0.07)',
              border: `1px solid ${colors.border}`,
              color: colors.text,
            }}
          />
        </div>

        {/* Email */}
        <div className="grid gap-1">
          <label className="text-xs font-semibold uppercase tracking-wider"
          style={{ color: colors.secondaryText }}>
            Email Address <span style={{ color: colors.error }}>*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="e.g johndoe@gmail.com"
            className="w-full p-3 rounded-[10px] text-sm outline-none"
            style={{
              background: 'rgba(255,255,255,0.07)',
              border: `1px solid ${colors.border}`,
              color: colors.text,
            }}
          />
        </div>

        {/* Email For */}
        <div className="grid gap-1">
          <label className="text-xs font-semibold uppercase tracking-wider"
          style={{ color: colors.secondaryText }}>
            Email For <span style={{ color: colors.error }}>*</span>
          </label>
          <input
            type="text"
            name="emailFor"
            value={form.emailFor}
            onChange={handleChange}
            placeholder="e.g Product Inquiry"
            className="w-full p-3 rounded-[10px] text-sm outline-none"
            style={{
              background: 'rgba(255,255,255,0.07)',
              border: `1px solid ${colors.border}`,
              color: colors.text,
            }}
          />
        </div>

        {/* Message */}
        <div className="grid gap-1">
          <label className="text-xs font-semibold uppercase tracking-wider"
          style={{ color: colors.secondaryText }}>
            Message <span style={{ color: colors.error }}>*</span>
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Type your message here..."
            rows={5}
            className="w-full p-3 rounded-[10px] text-sm outline-none resize-none"
            style={{
              background: 'rgba(255,255,255,0.07)',
              border: `1px solid ${colors.border}`,
              color: colors.text,
            }}
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full p-3 rounded-[12px] font-bold text-base uppercase tracking-wide transition-opacity"
          style={{
            background: colors.accent,
            color: colors.text,
            opacity: loading ? 0.6 : 1,
          }}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

      </div>
    </div>
  );
}