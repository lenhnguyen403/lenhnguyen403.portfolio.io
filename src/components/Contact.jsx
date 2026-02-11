import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    FaEnvelope,
    FaMapMarkerAlt,
    FaPaperPlane,
    FaCheckCircle,
    FaTimesCircle,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import emailjs from "@emailjs/browser";

/* Toast notification component */
const Toast = ({ message, type, onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -50, x: "-50%" }}
            className={`fixed top-24 left-1/2 z-50 px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 
                ${type === "success"
                    ? "bg-green-500/90 text-white"
                    : "bg-red-500/90 text-white"
                }`}
        >
            {type === "success" ? (
                <FaCheckCircle className="text-xl" />
            ) : (
                <FaTimesCircle className="text-xl" />
            )}
            <span className="font-medium">{message}</span>
            <button
                onClick={onClose}
                className="ml-2 hover:opacity-70 transition-opacity"
            >
                ✕
            </button>
        </motion.div>
    );
};

const Contact = () => {
    const { theme } = useTheme();

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const [toast, setToast] = useState({
        show: false,
        message: "",
        type: "success",
    });

    const titleClass = theme === "dark" ? "text-white" : "text-slate-800";
    const labelClass = theme === "dark" ? "text-white-100" : "text-slate-700";
    const inputBgClass = theme === "dark" ? "bg-tertiary/30" : "bg-white";
    const inputTextClass = theme === "dark" ? "text-white-100" : "text-slate-800";

    const showToast = (message, type) => {
        setToast({ show: true, message, type });

        setTimeout(() =>
            setToast({ show: false, message: "", type: "success" }),
            5000);
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        const templateParams = {
            name: form.name,
            email: form.email,
            message: form.message,
            to_name: "Le Lenh Nguyen",
        };

        emailjs
            .send(serviceId, templateId, templateParams, publicKey)
            .then(() => {
                setLoading(false);
                showToast(
                    "Message sent successfully! I'll get back to you soon.",
                    "success"
                );
                setForm({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                setLoading(false);
                console.error("EmailJS Error:", error);
                showToast(
                    "Failed to send message. Please try again or email me directly.",
                    "error"
                );
            });
    };

    return (
        <section id="contact" className="py-20 relative flex justify-center">
            {/* Toast */}
            <AnimatePresence>
                {toast.show && (
                    <Toast
                        message={toast.message}
                        type={toast.type}
                        onClose={() => setToast({ ...toast, show: false })}
                    />
                )}
            </AnimatePresence>

            <div className="w-full max-w-6xl px-8 sm:px-12 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <p className="text-secondary text-xs uppercase tracking-widest mb-2">
                        GET IN TOUCH
                    </p>
                    <h2 className={`text-3xl lg:text-4xl font-bold ${titleClass}`}>
                        Contact
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-5 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 space-y-4"
                    >
                        <div className="card-gradient p-4 rounded-xl border border-primary/10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                                    <FaEnvelope className="text-primary text-sm" />
                                </div>
                                <div>
                                    <p className="text-xs text-secondary mb-0.5">Email</p>
                                    <a
                                        href="mailto:lenhnguyen10a22003@gmail.com"
                                        className={`text-sm hover:text-primary transition-colors ${labelClass}`}
                                    >
                                        lenhnguyen10a22003@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="card-gradient p-4 rounded-xl border border-primary/10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                                    <FaMapMarkerAlt className="text-primary text-sm" />
                                </div>
                                <div>
                                    <p className="text-xs text-secondary mb-0.5">Location</p>
                                    <p className={`text-sm ${labelClass}`}>
                                        Ha Noi, Vietnam
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="card-gradient p-4 rounded-xl border border-primary/10">
                            <p className="text-secondary text-xs leading-relaxed">
                                I'm open to Java Developer positions. Feel free to reach out!
                            </p>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="md:col-span-3 card-gradient p-6 rounded-xl border border-primary/10 space-y-4"
                    >
                        <div>
                            <label className={`text-xs font-medium mb-1.5 block ${labelClass}`}>
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                required
                                className={`w-full px-4 py-2.5 ${inputBgClass} rounded-lg border border-primary/10 ${inputTextClass} text-sm`}
                            />
                        </div>

                        <div>
                            <label className={`text-xs font-medium mb-1.5 block ${labelClass}`}>
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Your email"
                                required
                                className={`w-full px-4 py-2.5 ${inputBgClass} rounded-lg border border-primary/10 ${inputTextClass} text-sm`}
                            />
                        </div>

                        <div>
                            <label className={`text-xs font-medium mb-1.5 block ${labelClass}`}>
                                Message
                            </label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Your message"
                                required
                                rows={4}
                                className={`w-full px-4 py-2.5 ${inputBgClass} rounded-lg border border-primary/10 ${inputTextClass} text-sm resize-none`}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-2.5 bg-primary rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                            style={{ color: "#fff" }}
                        >
                            {loading ? (
                                "Sending..."
                            ) : (
                                <>
                                    <FaPaperPlane className="text-xs" />
                                    Send Message
                                </>
                            )}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
