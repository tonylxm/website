import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

import { styles } from '../styles';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // emailjs IDs
    // D8OsdM0fe8rYe2tFv
    // template_y49vb0t
    // service_zw19n7e

    emailjs.send(
      'service_zw19n7e',
      'template_y49vb0t',
      {
        from_name: form.name,
        to_name: 'Tony',
        from_email: form.email,
        to_email: 'tonylim8669@gmail.com',
        message: form.message
      },
      'D8OsdM0fe8rYe2tFv'
    )
      .then(() => {
        setLoading(false);
        alert('Your message has been sent!');
        setForm({
          name: '',
          email: '',
          message: ''
        })
      }, (error) => {
        setLoading(false);
        console.log(error);
        alert('Something went wrong, please try again.');
      })
  }

  return (
    <motion.div 
    variants={{
        hidden: { opacity: 0, y: 100},
        show: { opacity: 1, y: 0}
    }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="xl:mt-12 xl:flex-row gap-10 overflow-hidden w-full h-screen flex justify-center items-center"
    >
      <div className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className={styles.formHeadText}>Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className={styles.formSubText}
            />
          </label>
          <label className="flex flex-col">
            <span className={styles.formHeadText}>Email</span>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email"
              className={styles.formSubText}
            />
          </label>
          <label className="flex flex-col">
            <span className={styles.formHeadText}>Message</span>
            <textarea
              rows="6"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message"
              className={styles.formSubText}
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </motion.div>
  )
}

export default Contact