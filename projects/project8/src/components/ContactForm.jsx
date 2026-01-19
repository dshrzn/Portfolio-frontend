import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name:"", email:"", message:"" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Заполните все поля!");
      return;
    }
    setError("");
    alert("Сообщение отправлено!");
    setForm({ name:"", email:"", message:"" });
  };

  return (
    <form onSubmit={handleSubmit} id="contact">
      {error && <p style={{ color:"red" }}>{error}</p>}
      <input placeholder="Имя" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
      <input placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
      <textarea placeholder="Сообщение" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} />
      <button type="submit">Отправить</button>
    </form>
  );
};

export default ContactForm;