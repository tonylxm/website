import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Animation from '../utils/Animation';

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
    <Animation>
      <div className="xl:flex-row gap-10 overflow-hidden w-full h-screen flex justify-center items-center">
        <div className="flex-[0.75] md:flex-[0.5] bg-secondary p-4 rounded-2xl">
          <h3 className={styles.sectionHeadText}>Contact</h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-3"
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
                required
              />
            </label>
            <label className="flex flex-col">
              <span className={styles.formHeadText}>Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                className={styles.formSubText}
                required
              />
            </label>
            <label className="flex flex-col">
              <span className={styles.formHeadText}>Message</span>
              <textarea
                rows="5"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message"
                className={styles.formSubText + ' resize-none'}
                required
              />
            </label>
            <button
              type="submit"
              className="bg-primary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-indigo-950"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </div>
    </Animation>
  )
}

export default Contact