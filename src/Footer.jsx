import colors from './color.jsx';
import logo from './assets/logo.jpg';

export default function Footer() {
  return (
    <footer
      className="w-full p-6 grid gap-6"
      style={{
        background: colors.container,
        borderTop: `1px solid ${colors.border}`,
      }}
    >

      {/* Logo + tagline */}
      <div className="grid gap-2">
        <img src={logo} alt="BikiTech" className="h-10 w-auto" />
        <p
          className="text-xs font-normal"
          style={{ color: colors.secondaryText }}
        >
          Premium timber for every build — quality you can trust.
        </p>
      </div>

      {/* Quick Links */}
      <div className="grid gap-2">
        <h4
          className="text-sm font-bold uppercase tracking-wider"
          style={{ color: colors.primaryText }}
        >
          Quick Links
        </h4>
        <div className="grid gap-1">
          {['Home', 'About Us', 'Products', 'Services', 'Contact'].map((link) => (
            <span
              key={link}
              className="text-xs font-normal cursor-pointer hover:underline"
              style={{ color: colors.secondaryText }}
            >
              {link}
            </span>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div className="grid gap-2">
        <h4
          className="text-sm font-bold uppercase tracking-wider"
          style={{ color: colors.primaryText }}
        >
          Contact Us
        </h4>
        <div className="grid gap-2">

          <a
            href="#"
            className="flex items-start gap-2 text-xs font-normal"
            style={{ color: colors.secondaryText }}
          >
            <i className="fa-solid fa-location-dot mt-[2px]" style={{ color: colors.accent }}></i>
            Shop 25, 24 and 6 Amu Timber Market Packing Case Lane
          </a>

          <a
            href="tel:09013470727"
            className="flex items-center gap-2 text-xs font-normal"
            style={{ color: colors.secondaryText }}
          >
            <i className="fa-solid fa-phone" style={{ color: colors.accent }}></i>
            09013470727
          </a>

          <a
            href="mailto:bikitechnology04@gmail.com"
            className="flex items-center gap-2 text-xs font-normal"
            style={{ color: colors.secondaryText }}
          >
            <i className="fa-regular fa-envelope" style={{ color: colors.accent }}></i>
            bikitechnology@gmail.com
          </a>

          <div
            className="flex items-center gap-2 text-xs font-normal"
            style={{ color: colors.secondaryText }}
          >
            <i className="fa-solid fa-handshake" style={{ color: colors.accent }}></i>
            Working Days: Monday - Saturday
          </div>

          <div
            className="flex items-center gap-2 text-xs font-normal"
            style={{ color: colors.secondaryText }}
          >
            <i className="fa-solid fa-clock" style={{ color: colors.accent }}></i>
            Opens 7:00AM - Closes 7:00PM
          </div>

        </div>
      </div>

      {/* Social Media */}
      <div className="grid gap-2">
        <h4
          className="text-sm font-bold uppercase tracking-wider"
          style={{ color: colors.primaryText }}
        >
          Follow Us
        </h4>
        <div className="flex items-center gap-4">

          <a
            href="#"
            className="w-[40px] h-[40px] rounded-[10px] flex items-center justify-center"
            style={{
              background: 'rgba(255,255,255,0.07)',
              border: `1px solid ${colors.border}`,
              color: '#1877F2',
            }}
          >
            <i className="fa-brands fa-facebook text-lg"></i>
          </a>

          <a
            href="https://wa.me/2349013470727"
            className="w-[40px] h-[40px] rounded-[10px] flex items-center justify-center"
            style={{
              background: 'rgba(255,255,255,0.07)',
              border: `1px solid ${colors.border}`,
              color: '#25D366',
            }}
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
          </a>

          <a
            href="https://www.instagram.com/bikiwoodinnovation1?igsh=OXp5dWxybm9ncm1x&utm_source=qr"
            className="w-[40px] h-[40px] rounded-[10px] flex items-center justify-center"
            style={{
              background: 'rgba(255,255,255,0.07)',
              border: `1px solid ${colors.border}`,
              color: '#E1306C',
            }}
          >
            <i className="fa-brands fa-instagram text-lg"></i>
          </a>

        </div>
      </div>

      {/* Copyright */}
      <div
        className="text-center text-xs font-normal pt-4"
        style={{
          borderTop: `1px solid ${colors.border}`,
          color: colors.secondaryText,
        }}
      >
        © {new Date().getFullYear()} BikiTech Wood. All rights reserved.
      </div>

    </footer>
  );
}
