import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { number: '10+', label: 'Employees', desc: 'Men and women, committed to better protect you around the world.' },
    { number: '73+', label: 'Projects', desc: 'Where you will find the same quality of service and dedication around the world.' },
    { number: '92+', label: 'Clients', desc: 'Making us one of the leading web design companies around the globe.' },
  ];

  // Variants for animation
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' }
    })
  };

  return (
    <section className="py-16 px-6 sm:px-20">
      <div className="flex flex-col md:flex-row gap-20 text-white max-w-7xl mx-auto">
        
        {/* Left Text */}
        <motion.div 
          className="mt-10 md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <motion.h3 
            className="text-green-400 font-semibold tracking-widest"
            variants={fadeUp}
            custom={0}
          >
            ABOUT US
          </motion.h3>

          <motion.h1 
            className="text-5xl mt-3 font-extrabold leading-snug"
            variants={fadeUp}
            custom={1}
          >
            Fuel Your <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Growth</span>
          </motion.h1>

          <div className="mt-6 space-y-6 text-gray-300">
            {[
              <>
                <span className="font-bold text-white">
                  Welcome to Growtalyst — your one-stop partner for premium video editing, social media management,
                  targeted ad campaigns, and complete digital growth solutions.
                </span>{' '}
                With a portfolio of 92+ satisfied clients across the US, Canada, UK, and beyond, we specialize
                in real estate, small businesses, and startups, delivering marketing that converts.
              </>,
              <>
                At Growtalyst, we elevate your brand’s story through cutting-edge video editing, ensuring every
                frame captures attention and drives engagement. Our streamlined management solutions free
                up your time so you can focus on closing deals, while our precision-targeted ad campaigns
                connect you with the right audience at the right time.
              </>,
              <>
                <span className="font-bold text-white">Specializing in real estate marketing,</span> we understand the competitive nature of the industry — 
                and we know how to make your listings, brand, and services stand out. From creating captivating content
                to executing strategic, ROI-driven campaigns, we help you amplify visibility, generate qualified leads,
                and strengthen audience trust.
              </>,
              <>
                Our mission is simple:{' '}
                <span className="font-bold text-white">
                  build a thriving online presence that fuels sustainable growth.
                </span>{' '}
                Partner with Growtalyst and join the ranks of clients who have experienced the transformative
                impact of our innovative, results-focused solutions.
              </>
            ].map((text, idx) => (
              <motion.p key={idx} variants={fadeUp} custom={idx + 2}>
                {text}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Right Stats */}
        <motion.div 
          className="md:w-1/2 flex flex-col justify-center mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                custom={index + 1}
                className="flex items-start gap-6 p-6 border border-white/20 rounded-xl bg-black/50 backdrop-blur-md 
                           hover:shadow-lg hover:shadow-green-500/40 transition-all duration-300 hover:scale-105"
              >
                <div className="text-right pr-4 border-r border-gray-700">
                  <div className="text-4xl font-bold text-green-400">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
                <p className="text-lg text-gray-300">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
