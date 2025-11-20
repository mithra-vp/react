import React, { useEffect, useState } from 'react'
import './crud.css';

const Crud = () => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: '',
        age: ''
    })

    const [users, setUsers] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [errors, setErrors] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    // ========get======
    useEffect(() => {
        const stored = localStorage.getItem("users");
        if(stored){
            try {
                const parsedUser = JSON.parse(stored);
                setUsers(parsedUser);
            } catch (error) {
                console.log('Error passing data',error);
                localStorage.removeItem("users");     //clear corrupted data               
            }
        }
        setIsLoaded(true);
    },[]);

    // =====add=======
    //save users to local storage(whenever user changes. only after initial load)
    useEffect(() => {
        if (isLoaded) {    //only save after initial load is complete
            localStorage.setItem("users", JSON.stringify(users));
        }
    }, [users, isLoaded])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const validate = () => {
        const newErrors = {};

        const { name, email, age } = formData;

        if (!name.trim()) newErrors.name = "Name is required!";
        else if (!/^[A-Za-z\s]*$/.test(name)) newErrors.name = "Name should only contain alphabets";

        if (!email) newErrors.email = "Email is required!";
        else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Email is invalid";

        if (!age) newErrors.age = "Age is required!";
        else if (isNaN(age) || age < 1 || age > 120) newErrors.age = "Age must be between 1 and 120";

        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        if (editMode) {
            setUsers(users.map(user => user.id === formData.id ? formData : user));
            setEditMode(false);
        } else {
            const newUser = { ...formData, id: Date.now().toString() }
            setUsers([...users, newUser])
        }

        setFormData({
            id: '',
            name: '',
            email: '',
            age: ''
        })
        setErrors({});
    }

    return (
        <div className='formnew'>
            <h1>React - crud</h1>
            <form onSubmit={handleSubmit}>
                {/* name */}
                <div>
                    <input
                        type="text"
                        name='name'
                        value={formData.name}
                        placeholder='Name'
                        onChange={handleChange}
                    />
                    {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                </div>
                {/* email */}
                <div>
                    <input
                        type="email"
                        name='email'
                        value={formData.email}
                        placeholder='Your Email'
                        onChange={handleChange}
                    />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

                </div>
                {/* age */}
                <div>
                    <input
                        type="number"
                        name='age'
                        value={formData.age}
                        placeholder='Your age'
                        onChange={handleChange} />
                    {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}

                </div>
                <button type='submit'>{editMode ? 'Update User' : 'Add User'}</button>
                {editMode && (
                    <button style={{ marginLeft: '10px' }} type='button'>Cancel</button>
                )}
            </form>
        </div>
    )
}

export default Crud
