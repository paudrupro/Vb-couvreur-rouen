'use client';

import { useState } from 'react';

export default function DevisForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <form className="devis-form" onSubmit={handleSubmit}>
      <h3>Demander un devis</h3>
      <p className="muted">Décrivez votre besoin et laissez vos coordonnées pour être recontacté.</p>

      <label htmlFor="name">Nom</label>
      <input id="name" name="name" type="text" required />

      <label htmlFor="phone">Téléphone</label>
      <input id="phone" name="phone" type="tel" required />

      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows="5" required />

      <button type="submit" className="btn btn-primary">
        Envoyer ma demande
      </button>
      {sent ? (
        <p className="form-success">Merci, votre demande a bien été envoyée.</p>
      ) : null}
    </form>
  );
}
