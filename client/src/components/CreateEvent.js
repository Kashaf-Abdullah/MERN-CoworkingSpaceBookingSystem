// // components/CreateEvent.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const CreateEvent = () => {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [meetLink, setMeetLink] = useState('');
//     const [startTime, setStartTime] = useState('');
//     const [endTime, setEndTime] = useState('');
//     const [posterPicture, setPosterPicture] = useState(null);
 
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const newEvent = { title, description, meetLink, startTime, endTime ,posterPicture};
//             await axios.post('http://localhost:5000/api/events/create', newEvent,{
//                 headers: {
//                     'Content-Type': 'multipart/event-data',
//                   },
//             });
//             alert('Event created successfully!');
//         } catch (error) {
//             console.error(error);
//             alert('Error creating event');
//         }
//     };
//     const handleFileChange = (e) => {
//         setPosterPicture(e.target.files[0]);
//       };
//     return (
//         <form onSubmit={handleSubmit} 
//         ncType="multipart/event-data"
//         style={{padding:"10rem 0"}}>
//             <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
//             <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
//             <input type="url" placeholder="Google Meet Link" value={meetLink} onChange={(e) => setMeetLink(e.target.value)} required />
//             <input type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
//             <input type="datetime-local" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
            
//             <label>Profile Picture</label>
//           <input type="file" onChange={handleFileChange} />
       
//             <button type="submit">Create Event</button>
//         </form>
//     );
// };

// export default CreateEvent;
import React, { useState } from 'react';
import axios from 'axios';

const CreateEvent = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [meetLink, setMeetLink] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [eventPoster, setEventPoster] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('meetLink', meetLink);
            formData.append('startTime', startTime);
            formData.append('endTime', endTime);
            formData.append('eventPoster', eventPoster);

            await axios.post(`http://localhost:5000/api/events/create`, formData);
            alert('Event created successfully!');
        } catch (error) {
            console.error(error);
            alert('Error creating event');
        }
    };

    const handleFileChange = (e) => {
        setEventPoster(e.target.files[0]);
    };

    return (
        <form onSubmit={handleSubmit} style={{ padding: "10rem 0" }}>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
            <input type="url" placeholder="Google Meet Link" value={meetLink} onChange={(e) => setMeetLink(e.target.value)} required />
            <input type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
            <input type="datetime-local" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
            <label>Poster Picture</label>
            <input type="file" onChange={handleFileChange} />
            <button type="submit">Create Event</button>
        </form>
    );
};

export default CreateEvent;

