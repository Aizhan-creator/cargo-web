import React, { useState } from 'react';
import './../styles/styles.css';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        city: '',
        code: '',
        password: '',
        confirmPassword: '',
        agreement: false
    });
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Отправка данных на сервер
    };

    const handleAgreementChange = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        <div>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleModalClose}>&times;</span>
                        <h2>Terms and Conditions</h2>
                        {/* Здесь можно разместить текст соглашения */}
                        <p>This is the terms and conditions text...</p>
                    </div>
                </div>
            )}
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label" htmlFor="firstName">First Name:</label>
                    <input className="form-input" type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="lastName">Last Name:</label>
                    <input className="form-input" type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="phoneNumber">Phone Number:</label>
                    <input className="form-input" type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="city">City:</label>
                    <input className="form-input" type="text" name="city" value={formData.city} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="code">Code:</label>
                    <input className="form-input" type="text" name="code" value={formData.code} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="password">Password:</label>
                    <input className="form-input" type="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="confirmPassword">Confirm Password:</label>
                    <input className="form-input" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label className="form-label checkbox-label">
                        <input type="checkbox" name="agreement" checked={formData.agreement} onChange={handleAgreementChange} required />
                        I agree to the terms and conditions
                    </label>
                </div>
                <button className="submit-button" type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
