import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="py-16 px-6 sm:px-20">
      <motion.div
        className="max-w-5xl mx-auto text-center text-white mt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Section title */}
        <h3 className="text-green-400 font-semibold tracking-widest mb-3">
          CONTACT NOW
        </h3>

        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Ignite Your{' '}
          <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Business Potential
          </span>
        </h2>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Join our international community of satisfied clients who experience exceptional service and support.
        </p>

        {/* Buttons */}
        <motion.div
          className="flex justify-center gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a href="tel:+919874223031">
            <button
              type="button"
              className="group bg-gradient-to-r from-green-400 via-green-500 to-green-600 p-4 rounded-full shadow-lg shadow-green-500/50 hover:scale-110 transition-transform cursor-pointer"
            >
              <img
                width={20}
                height={20}
                src="/images/telephone.png"
                alt="Call"
                className="group-hover:rotate-12 transition-transform"
              />
            </button>
          </a>
          <a href="mailto:sayan.growtalyst.work@gmail.com">
            <button
              type="button"
              className="group bg-gradient-to-r from-green-400 via-green-500 to-green-600 p-4 rounded-full shadow-lg shadow-green-500/50 hover:scale-110 transition-transform cursor-pointer"
            >
              <img
                width={20}
                height={20}
                src="/images/mail.png"
                alt="Email"
                className="group-hover:rotate-12 transition-transform"
              />
            </button>
          </a>
          <a href="https://wa.me/919874223031">
            <button
              type="button"
              className="group bg-gradient-to-r from-green-400 via-green-500 to-green-600 p-4 rounded-full shadow-lg shadow-green-500/50 hover:scale-110 transition-transform cursor-pointer"
            >
              <img
                width={20}
                height={20}
                src="/images/whatsapp.png"
                alt="WhatsApp"
                className="group-hover:rotate-12 transition-transform"
              />
            </button>
          </a>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          className="mt-12 w-24 h-1 mx-auto bg-gradient-to-r from-green-400 to-green-600 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
