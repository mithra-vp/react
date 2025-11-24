import React, { useState } from 'react';
import './ftask.css';

const Ftask = () => {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        city: '',
        address: '',
        position: '',
        additionalInfo: '',
        addCv: null,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        // handle file upload separately
        if (name === "addCv") {
            setData((prev) => ({
                ...prev,
                addCv: files[0],
            }));
            return;
        }

        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validation = () => {
        const newErrors = {};
        const {
            firstName, lastName, email, phone,
            country, city, address, position,
            additionalInfo, addCv,
        } = data;

        if (!firstName.trim()) newErrors.firstName = "First name is required!";
        else if (!/^[A-Za-z\s]+$/.test(firstName)) newErrors.firstName = "First name must contain only alphabets";

        if (!lastName.trim()) newErrors.lastName = "Last name is required!";
        else if (!/^[A-Za-z\s]+$/.test(lastName)) newErrors.lastName = "Last name must contain only alphabets";

        if (!email.trim()) newErrors.email = "Email is required!";
        else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Email is invalid!";

        if (!phone.trim()) newErrors.phone = "Phone number is required!";
        else if (!/^[6-9]\d{9}$/.test(phone)) newErrors.phone = "Invalid phone number! Must be 10 digits";

        if (!country.trim()) newErrors.country = "Country is required!";
        if (!city.trim()) newErrors.city = "City is required!";
        if (!address.trim()) newErrors.address = "Address is required!";
        if (!position.trim()) newErrors.position = "Position is required!";
        if (!additionalInfo.trim()) newErrors.additionalInfo = "Additional info is required!";

        if (!addCv) newErrors.addCv = "CV is required!";

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validation();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        alert("Form submitted successfully!");

        console.log("Form data:", data);

        setData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            country: '',
            city: '',
            address: '',
            position: '',
            additionalInfo: '',
            addCv: null,
        });
    };

    return (
        <div className="form-wrapper">
            <h2 className='h2'>Job Application Form Widget</h2>
            <form onSubmit={handleSubmit} className="form-box">
                {/* First Name */}
                <div className="row-1">
                    <div>
                        <input
                            type="text"
                            name="firstName"
                            value={data.firstName}
                            placeholder="First Name"
                            onChange={handleChange}
                        />
                        {errors.firstName && <p className='err'>{errors.firstName}</p>}

                    </div>

                    <div>
                        {/* Last Name */}
                        <input
                            type="text"
                            name="lastName"
                            value={data.lastName}
                            placeholder="Last Name"
                            onChange={handleChange}
                        />
                        {errors.lastName && <p className='err'>{errors.lastName}</p>}
                    </div>
                </div>

                {/* Email */}
                <div className="row-2">
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={data.email}
                            placeholder="Email"
                            onChange={handleChange}
                        />
                        {errors.email && <p className='err'>{errors.email}</p>}

                    </div>
                    <div>
                        {/* Phone */}

                        <input
                            type="tel"
                            name="phone"
                            value={data.phone}
                            placeholder="Phone Number"
                            onChange={handleChange}
                        />
                        {errors.phone && <p className='err'>{errors.phone}</p>}
                    </div>
                </div>
                {/* Country */}
                <div className="row">
                    <select
                        name="country"
                        value={data.country}
                        onChange={handleChange}
                    >
                        <option value="">Select Country</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                    </select>

                    {errors.country && <p>{errors.country}</p>}
                </div>

                {/* City */}
                <div className="row">
                    <input
                        type="text"
                        name="city"
                        value={data.city}
                        placeholder="City"
                        onChange={handleChange}
                    />
                    {errors.city && <p>{errors.city}</p>}
                </div>
                {/* Address */}
                <div className="row">
                    <input
                        type="text"
                        name="address"
                        value={data.address}
                        placeholder="Address"
                        onChange={handleChange}
                    />
                    {errors.address && <p>{errors.address}</p>}
                </div>
                {/* Position */}
                <div className="row">
                    <select
                        name="position"
                        value={data.position}
                        onChange={handleChange}
                    >
                        <option value="">Choose your desired position</option>
                        <option value="Frontend Developer">Frontend Developer</option>
                        <option value="Backend Developer">Backend Developer</option>
                        <option value="Full Stack Developer">Full Stack Developer</option>
                        <option value="UI/UX Designer">UI/UX Designer</option>
                        <option value="Tester / QA">Tester / QA</option>
                        <option value="Digital Marketer">Digital Marketer</option>
                    </select>

                    {errors.position && <p>{errors.position}</p>}
                </div>

                {/* Additional Info */}
                <div className="row">
                    <textarea
                        type="text"
                        name="additionalInfo"
                        value={data.additionalInfo}
                        placeholder="Additional Info"
                        onChange={handleChange}
                    />
                    {errors.additionalInfo && <p>{errors.additionalInfo}</p>}
                </div>
                {/* CV Upload */}
                <div className="row file-row">
                    <input
                        type="file"
                        name="addCv"
                        onChange={handleChange}
                    />
                    {errors.addCv && <p>{errors.addCv}</p>}
                </div>
                <div className="btn-row">
                    <button
                        type="button"
                        onClick={() =>
                            setData({
                                firstName: '',
                                lastName: '',
                                email: '',
                                phone: '',
                                country: '',
                                city: '',
                                address: '',
                                position: '',
                                additionalInfo: '',
                                addCv: '',
                            })
                        }
                    >
                        Reset
                    </button>

                    <button type="submit" className="send-btn">Send</button>
                </div>
            </form>
            <div className="footer">
                <h6>© 2016 job application from widget.All rights Reserved | Desinged by mithra</h6>
            </div>
        </div>
    );
};

export default Ftask;
