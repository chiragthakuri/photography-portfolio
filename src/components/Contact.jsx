import React from 'react';

const Contact = () => {
  return (
    <div className="contact-section container my-5">
      <h2 className="text-center mb-4">Contact Me</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows={3} required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  );
};

export default Contact;
