import React, { useState } from 'react'
import './todo.css';


const ToDo = () => {
    
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);
    const [message, setMessage] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [editingText, setEditingText] = useState('');

    const handleAddTask = (e) => {
        e.preventDefault();
        if (!task.trim()) {
            setMessage('Task cannot be empty');
            return;
        }
        const newAddedTask = {
            id: Date.now(),
            task: task,
            completed: false
        };
        setTaskList([...taskList, newAddedTask]);
        setTask('');
        setMessage('Task added successfully');
    }

    const handleDelete = (id) => {
        setTaskList(taskList.filter(t => t.id !== id));
        setMessage('Task deleted');
    }

    const handleToggleComplete = (id) => {
        setTaskList(taskList.map(t =>
            t.id === id ? { ...t, completed: !t.completed } : t
        ));
    }

    const handleEditStart = (id, currentText) => {
        setEditingId(id);
        setEditingText(currentText);
    }

    const handleEditSave = (id) => {
        if (!editingText.trim()) {
            setMessage('Task cannot be empty');
            return;
        }
        setTaskList(taskList.map(t =>
            t.id === id ? { ...t, task: editingText } : t
        ));
        setEditingId(null);
        setEditingText('');
        setMessage('Task updated');
    }

    const handleEditCancel = () => {
        setEditingId(null);
        setEditingText('');
    }

    const pendingTasks = taskList.filter(t => !t.completed);
    const completedTasks = taskList.filter(t => t.completed);

    return (
        <div className="todo-container" style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h2 className="title">To Do List</h2>
            {message && <p className="message" style={{ color: 'green', fontWeight: 'bold' }}>{message}</p>}

            {/* Add Task Form */}
            <form className="task-form" onSubmit={handleAddTask} style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder='What is your plan....?'
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    style={{ padding: '8px', width: '470px', marginRight: '10px' }}
                />
                <button className="btn add-btn" type='submit' style={{ padding: '8px 15px', cursor: 'pointer' }}>Add Task</button>
            </form>

            {/* Pending Tasks */}
            <div className="section" style={{ marginBottom: '30px' }}>
                <h3 className="section-title">Pending Tasks ({pendingTasks.length})</h3>
                {pendingTasks.length === 0 ? (
                    <p className="empty-text">No pending tasks</p>
                ) : (
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {pendingTasks.map(t => (
                            <li className="task-item pending" key={t.id} style={{
                                padding: '10px',
                                margin: '5px 0',
                                backgroundColor: '#f0f0f0',
                                borderRadius: '5px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}>
                                <input
                                    type="checkbox"
                                    checked={t.completed}
                                    onChange={() => handleToggleComplete(t.id)}
                                />
                                {editingId === t.id ? (
                                    <>
                                        <input
                                            type="text"
                                            value={editingText}
                                            onChange={(e) => setEditingText(e.target.value)}
                                            style={{ flex: 1, padding: '5px' }}
                                        />
                                        <button className="task-item pending" onClick={() => handleEditSave(t.id)} style={{ padding: '5px 10px', cursor: 'pointer' }}>Save</button>
                                        <button className="btn cancel-btn" onClick={handleEditCancel} style={{ padding: '5px 10px', cursor: 'pointer' }}>Cancel</button>
                                    </>
                                ) : (
                                    <>
                                        <span className="task-text" style={{ flex: 1 }}>{t.task}</span>
                                        <button className="btn edit-btn" onClick={() => handleEditStart(t.id, t.task)} style={{ padding: '5px 10px', cursor: 'pointer' }}>Edit</button>
                                        <button  className="btn delete-btn" onClick={() => handleDelete(t.id)} style={{ padding: '5px 10px', cursor: 'pointer', backgroundColor: '#ff6b6b', color: 'white', border: 'none' }}>Delete</button>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Completed Tasks */}
            <div className="section">
                <h3 className="section-title">Completed Tasks ({completedTasks.length})</h3>
                {completedTasks.length === 0 ? (
                    <p className="empty-text">No completed tasks</p>
                ) : (
                    <ul className="task-list" style={{ listStyle: 'none', padding: 0 }}>
                        {completedTasks.map(t => (
                            <li className="task-item completed" key={t.id} style={{
                                padding: '10px',
                                margin: '5px 0',
                                backgroundColor: '#d4f4d4',
                                borderRadius: '5px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}>
                                <input
                                    type="checkbox"
                                    checked={t.completed}
                                    onChange={() => handleToggleComplete(t.id)}
                                />
                                <span className="task-text completed-text" style={{ flex: 1, textDecoration: 'line-through', color: '#666' }}>{t.task}</span>
                                <button  className="btn delete-btn" onClick={() => handleDelete(t.id)} style={{ padding: '5px 10px', cursor: 'pointer', backgroundColor: '#ff6b6b', color: 'white', border: 'none' }}>Delete</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default ToDo
