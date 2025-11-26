// frontend/src/App.js
import { useState } from 'react';
function App() {
  const [form, setForm] = useState({ name:'', phone:'', email:'', message:'' });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/api/contact', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(form)
    }).then(res => alert('Message Sent!'))
      .catch(err => alert('Error sending message'));
  }

  return (
    <div>
      <h1>Legal Services in Hyderabad</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" onChange={handleChange} placeholder="Name" required/>
        <input name="phone" onChange={handleChange} placeholder="Phone" required/>
        <input name="email" onChange={handleChange} placeholder="Email" type="email" required/>
        <textarea name="message" onChange={handleChange} placeholder="Message" required/>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
export default App;
