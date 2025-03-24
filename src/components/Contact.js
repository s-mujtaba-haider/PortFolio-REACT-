import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    {/* Simple Contact US Section*/}

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);

        setSuccessMessage('Thank you! Your message has been sent.');
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => setSuccessMessage(''), 3000);
    };

    {/*Takes data from the user but do not sends anywhere*/}

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4 text-uppercase fw-bold">Contact Me</h2>
            <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '500px' }}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea className="form-control" name="message" value={formData.message} onChange={handleChange} rows="2" required></textarea>
                </div>
                <button type="submit" className="btn btn-success w-100">Send Message</button>
                {successMessage && <p className="text-success text-center mt-3">{successMessage}</p>}
            </form>
        </div>
    );
};

export default Contact;
