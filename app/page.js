import DevisForm from '../components/devis-form';
import { CheckIcon, PhoneIcon, PinIcon, StarIcon } from '../components/icons';

const SERVICES = [
  {
    title: 'Travaux de toiture',
    text: 'Interventions possibles pour les besoins courants liés à la toiture, avec une approche claire et adaptée à votre demande.'
  },
  {
    title: 'Réparations et entretien',
    text: 'Accompagnement pour l’entretien extérieur et les réparations à étudier selon l’état de votre couverture.'
  },
  {
    title: 'Façade et extérieur',
    text: 'Solutions d’entretien et de remise en état pour préserver l’aspect et la protection de vos surfaces extérieures.'
  },
  {
    title: 'Nettoyage de gouttières',
    text: 'Prestations de nettoyage de gouttières pouvant être envisagées selon vos besoins.'
  },
  {
    title: 'Étanchéité',
    text: 'Étude et interventions adaptées pour améliorer la protection de votre habitat contre les infiltrations.'
  },
  {
    title: 'Charpente',
    text: 'Accompagnement possible pour les sujets liés à la charpente, avec une analyse au cas par cas.'
  }
];

const REASONS = [
  'Intervention locale à Rouen',
  'Contact rapide',
  'Devis simple à demander',
  'Accompagnement professionnel'
];

export default function HomePage() {
  return (
    <>
      <header className="topbar">
        <div className="container topbar-content">
          <p>VB Couvreur Rouen</p>
          <a className="btn btn-primary" href="tel:0758840644">
            <PhoneIcon /> Appeler : 07 58 84 06 44
          </a>
        </div>
      </header>

      <main>
        <section className="hero section">
          <div className="container hero-grid">
            <div>
              <p className="badge">Artisan local à Rouen</p>
              <h1>Couvreur à Rouen – Demandez votre devis</h1>
              <p>
                VB Couvreur Rouen Charpentier Toiture Façade Étanchéité nettoyage gouttière Seine
                Maritime vous accompagne pour vos besoins liés à la toiture, à la façade et à
                l’entretien extérieur.
              </p>
              <div className="cta-group">
                <a className="btn btn-primary" href="tel:0758840644">
                  Appeler maintenant
                </a>
                <a className="btn btn-secondary" href="#devis">
                  Demander un devis
                </a>
              </div>
              <p className="phone-line">Téléphone : <a href="tel:0758840644">07 58 84 06 44</a></p>
            </div>
            <aside className="card trust-box">
              <h2>Informations de contact</h2>
              <ul>
                <li><PinIcon /> 21 rue Ambroise Fleury, 76000 Rouen</li>
                <li><PhoneIcon /> 07 58 84 06 44</li>
                <li>Ville : Rouen</li>
                <li><StarIcon /> Note affichée : 5/5</li>
                <li>36 avis</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section" id="confiance">
          <div className="container">
            <h2>Un artisan couvreur local, joignable facilement</h2>
            <p>
              Entreprise basée à Rouen, VB Couvreur Rouen propose un accompagnement professionnel
              pour vos demandes liées à la toiture et à l’entretien extérieur.
            </p>
            <p>
              L’approche est volontairement claire : un premier échange, une demande de devis simple,
              et des informations compréhensibles pour vous aider à décider sereinement.
            </p>
          </div>
        </section>

        <section className="section muted-bg" id="prestations">
          <div className="container">
            <h2>Prestations</h2>
            <p className="muted">
              Exemples de prestations pouvant être étudiées selon votre besoin (liste non exhaustive).
            </p>
            <div className="grid cards-grid">
              {SERVICES.map((service) => (
                <article key={service.title} className="card service-card">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="pourquoi-nous">
          <div className="container">
            <h2>Pourquoi choisir cette entreprise</h2>
            <div className="grid reasons-grid">
              {REASONS.map((reason) => (
                <article key={reason} className="card reason-card">
                  <p><CheckIcon /> {reason}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section muted-bg" id="avis">
          <div className="container">
            <h2>Avis clients</h2>
            <div className="review-summary card">
              <p><strong>Note affichée :</strong> 5/5</p>
              <p><strong>Nombre d’avis affichés :</strong> 36</p>
              <p>Les avis mettent en avant une bonne satisfaction globale.</p>
            </div>
            <div className="grid reviews-grid">
              <article className="card"><p>Carte “Avis client” modifiable (placeholder).</p></article>
              <article className="card"><p>Carte “Avis client” modifiable (placeholder).</p></article>
              <article className="card"><p>Carte “Avis client” modifiable (placeholder).</p></article>
            </div>
          </div>
        </section>

        <section className="section" id="zone">
          <div className="container">
            <h2>Zone d’intervention</h2>
            <p>Entreprise basée à Rouen, joignable pour vos demandes locales.</p>
          </div>
        </section>

        <section className="section cta-final" id="devis">
          <div className="container final-grid">
            <div>
              <h2>Besoin d’un couvreur à Rouen ?</h2>
              <p>Appelez directement ou envoyez votre demande de devis en quelques instants.</p>
              <div className="cta-group">
                <a className="btn btn-primary" href="tel:0758840644">Appeler maintenant</a>
                <a className="btn btn-secondary" href="#form-devis">Demander un devis</a>
              </div>
              <p className="phone-line">Numéro direct : <a href="tel:0758840644">07 58 84 06 44</a></p>
            </div>
            <div id="form-devis">
              <DevisForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <p className="footer-title">VB Couvreur Rouen Charpentier Toiture Façade Étanchéité nettoyage gouttière Seine Maritime</p>
            <p>21 rue Ambroise Fleury, 76000 Rouen</p>
            <p>Téléphone : <a href="tel:0758840644">07 58 84 06 44</a></p>
          </div>
          <div>
            <p><a href="#">Mentions légales (placeholder)</a></p>
            <p><a href="#">Politique de confidentialité (placeholder)</a></p>
            <p>Email : emplacement futur (placeholder)</p>
          </div>
        </div>
      </footer>
    </>
  );
}
