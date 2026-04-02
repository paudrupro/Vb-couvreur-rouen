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
      <p className="muted">
        Formulaire de contact front-end uniquement (intégration e-mail/service tiers à brancher ensuite).
      </p>
      <label htmlFor="name">Nom</label>
      <input id="name" name="name" type="text" required />

      <label htmlFor="phone">Téléphone</label>
      <input id="phone" name="phone" type="tel" required />

      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows="5" required />

      <button type="submit" className="btn btn-primary">Envoyer ma demande</button>
      {sent ? <p className="form-success">Votre demande a bien été enregistrée localement.</p> : null}
    </form>
  );
}
