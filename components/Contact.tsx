"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
} from "./SocialIcons";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const socialLinks = [
  {
    icon: <GithubIcon size={20} />,
    label: "GitHub",
    href: "https://github.com/",
  },
  {
    icon: <LinkedinIcon size={20} />,
    label: "LinkedIn",
    href: "https://linkedin.com/",
  },
  {
    icon: <TwitterIcon size={20} />,
    label: "Twitter",
    href: "https://twitter.com/",
  },
  {
    icon: <InstagramIcon size={20} />,
    label: "Instagram",
    href: "https://instagram.com/",
  },
];

/** Section Contact – form + info kontak + sosial media */
export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi sederhana
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Semua field harus diisi.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("Format email tidak valid.");
      return;
    }

    setLoading(true);
    // Simulasi pengiriman (ganti dengan API call nyata)
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-24 px-4"
      style={{ background: "var(--bg-alt)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 reveal">
          <span className="text-sm font-semibold tracking-widest uppercase text-indigo-500">
            Let&#39;s Connect
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mt-2 section-heading centered"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Get In Touch
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto"
            style={{ color: "var(--text-muted)" }}
          >
            Punya project menarik atau ingin berkolaborasi? Saya selalu terbuka
            untuk diskusi dan peluang baru.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* ── Info kontak ── */}
          <div className="reveal-left space-y-6">
            {/* Contact details */}
            {[
              {
                icon: <Mail size={20} />,
                label: "Email",
                value: "sugeng.wanantara@gmail.com",
              },
              {
                icon: <Phone size={20} />,
                label: "Phone",
                value: "+62 83 84306 3532",
              },
              {
                icon: <MapPin size={20} />,
                label: "Location",
                value: "Bandung, Indonesia",
              },
            ].map(({ icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-4 glass rounded-2xl
                           hover:border-indigo-400/40 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
                                bg-gradient-to-br from-indigo-500 to-purple-600 text-white"
                >
                  {icon}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-indigo-500">
                    {label}
                  </p>
                  <p className="font-medium">{value}</p>
                </div>
              </div>
            ))}

            {/* Social media */}
            <div className="pt-4">
              <p
                className="text-sm font-semibold mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                Temukan saya di
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-xl flex items-center justify-center glass
                               hover:bg-indigo-500 hover:text-white hover:border-indigo-500
                               transition-all duration-300 hover:scale-110"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Form kontak ── */}
          <div className="reveal-right">
            {sent ? (
              /* Pesan sukses */
              <div className="glass rounded-2xl p-10 flex flex-col items-center justify-center text-center gap-4">
                <CheckCircle size={56} className="text-emerald-500" />
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Pesan Terkirim!
                </h3>
                <p style={{ color: "var(--text-muted)" }}>
                  Terima kasih sudah menghubungi. Saya akan membalas secepatnya.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 px-6 py-2 rounded-full text-sm font-semibold
                             border border-indigo-400 text-indigo-500
                             hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-colors"
                >
                  Kirim lagi
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="glass rounded-2xl p-8 space-y-5"
              >
                {/* Nama */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1.5"
                  >
                    Nama
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Nama Lengkap"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none
                               bg-[var(--bg)] border border-[var(--border)]
                               focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20
                               transition-all placeholder:text-[var(--text-muted)]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="email@contoh.com"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none
                               bg-[var(--bg)] border border-[var(--border)]
                               focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20
                               transition-all placeholder:text-[var(--text-muted)]"
                  />
                </div>

                {/* Pesan */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1.5"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Ceritakan project atau kebutuhan Anda..."
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none
                               bg-[var(--bg)] border border-[var(--border)]
                               focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20
                               transition-all placeholder:text-[var(--text-muted)]"
                  />
                </div>

                {/* Error */}
                {error && <p className="text-sm text-red-500">{error}</p>}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6
                             rounded-xl font-semibold text-white text-sm
                             bg-gradient-to-r from-indigo-500 to-purple-600
                             hover:from-indigo-600 hover:to-purple-700
                             disabled:opacity-60 disabled:cursor-not-allowed
                             shadow-lg shadow-indigo-500/20
                             transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
