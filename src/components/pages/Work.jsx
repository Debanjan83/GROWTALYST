import React from 'react';
import { motion } from 'framer-motion';

const Work = () => {
  const services = [
    {
      title: 'Media Marketing',
      highlight: 'Media',
      description:
        'At Growtalyst, we boost your social media growth through targeted media marketing strategies. Our expert team crafts engaging content, runs impactful ad campaigns, and leverages data analytics to maximize your reach and engagement. We’ve successfully increased growth for 92+ clients, helping them achieve significant online visibility and brand recognition.',
    },
    {
      title: 'SMMA',
      highlight: 'SM',
      description:
        'At Growtalyst, we boost revenue through SMMA by enhancing social media engagement, generating quality leads, and securing new appointments. Our expert team creates compelling content, manages vibrant social accounts, and runs targeted ad campaigns. This strategic approach drives significant business growth and maximizes your return on investment.',
    },
    {
      title: 'Website Design',
      highlight: 'Website',
      description:
        'At Growtalyst, we elevate personal branding through exceptional website design and management. Our team crafts visually stunning, user-friendly websites that reflect your unique brand identity. We ensure optimal performance and regular updates, enhancing your online presence, engaging your audience, and establishing your credibility in the digital landscape.',
    },
    {
      title: 'ROI',
      highlight: 'RO',
      description:
        'At Growtalyst, trust is built through tangible ROI that drives revenue and expands your audience. Our proven strategies are backed by case studies showcasing successful outcomes. Visit our case studies to see how we’ve helped others achieve significant growth, ensuring confidence in our ability to enhance your profile and profitability.',
    },
    {
      title: 'Video Editing',
      highlight: 'Video',
      description:
        'Content creation, coupled with expert editing and design, expands social profiles by captivating audiences. At Growcroud, we specialize in crafting compelling content that resonates. Through meticulous editing and innovative design, we enhance engagement, amplify reach, and cultivate a strong online presence, driving growth and visibility for your brand.',
    },
    {
      title: 'SEO',
      highlight: 'SE',
      description:
        'SEO is crucial for your company as it enhances online visibility, drives organic traffic, and boosts brand credibility. By optimizing your website with relevant keywords, quality content, and technical improvements, SEO ensures higher search engine rankings. This results in increased website traffic, leads, and ultimately, higher conversion rates and revenue.',
    },
  ];

  return (
    <section className="py-16 px-6 sm:px-12">
      {/* Heading */}
      <motion.div
        className="text-center text-white mb-12 mt-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-extrabold mb-4">
          What We <span className="text-green-500">Offer</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Our services are designed to amplify your brand presence, drive conversions, and help you dominate your niche.
        </p>
      </motion.div>

      {/* Grid layout */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="group flex flex-col gap-3 text-white border border-white/20 p-7 rounded-xl bg-black/50 backdrop-blur-md 
                       hover:shadow-lg hover:shadow-green-500/40 hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl font-bold">
              <span className="text-green-500">{service.highlight}</span>
              {service.title.replace(service.highlight, '')}
            </h1>
            <p className="text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;
