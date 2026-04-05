import DevisForm from '../components/devis-form';
import { CheckIcon, PhoneIcon, PinIcon, StarIcon } from '../components/icons';

const SERVICES = [
  {
    title: 'Travaux de toiture',
    text: 'Pour une toiture à protéger, à remettre en état ou à entretenir, chaque demande est étudiée avec méthode afin de proposer une solution claire, compréhensible et adaptée à votre situation.',
    benefit: 'Vous avancez avec une vision précise des priorités et un cadre d’intervention lisible.'
  },
  {
    title: 'Réparations et entretien',
    text: 'Quand un défaut apparaît ou qu’un entretien devient nécessaire, l’objectif est de limiter l’aggravation et de préserver durablement votre habitat.',
    benefit: 'Vous sécurisez votre toiture et vous réduisez les risques de travaux plus lourds à court terme.'
  },
  {
    title: 'Façade et extérieur',
    text: 'Les besoins extérieurs sont pris en compte avec une approche soignée, pour conserver un ensemble propre, cohérent et rassurant au quotidien.',
    benefit: 'Vous gardez un extérieur mieux protégé et plus valorisé, sans démarche compliquée.'
  },
  {
    title: 'Nettoyage de gouttières',
    text: 'Le nettoyage des gouttières peut être intégré à votre demande afin de favoriser un bon écoulement des eaux et de maintenir l’entretien courant.',
    benefit: 'Vous limitez les désagréments liés aux évacuations encombrées et vous gagnez en tranquillité.'
  },
  {
    title: 'Étanchéité',
    text: 'Les problématiques d’étanchéité sont abordées avec attention pour identifier les points sensibles et envisager une réponse adaptée.',
    benefit: 'Vous améliorez la protection de votre logement face aux infiltrations potentielles.'
  },
  {
    title: 'Charpente',
    text: 'Les sujets liés à la charpente peuvent être étudiés dans le cadre d’un accompagnement professionnel et d’un échange transparent.',
    benefit: 'Vous bénéficiez d’un interlocuteur local pour orienter vos décisions en toute confiance.'
  }
];

const REASONS = [
  {
    title: 'Une entreprise locale, basée à Rouen',
    text: 'Vous échangez avec un artisan implanté localement, qui connaît les attentes des particuliers et privilégie une relation de proximité.'
  },
  {
    title: 'Des explications claires à chaque étape',
    text: 'Votre demande est traitée avec des informations compréhensibles, pour éviter les zones floues et vous aider à décider sereinement.'
  },
  {
    title: 'Un contact simple et direct',
    text: 'Un appel suffit pour exposer votre besoin. Vous obtenez rapidement un premier retour sur la faisabilité de votre projet.'
  },
  {
    title: 'Un accompagnement professionnel et rassurant',
    text: 'L’objectif est de vous proposer un cadre de travail sérieux, soigné et réaliste, sans promesses excessives.'
  }
];

const STEPS = [
  {
    title: '1. Premier contact',
    text: 'Vous appelez le 07 58 84 06 44 ou vous envoyez votre demande via le formulaire.'
  },
  {
    title: '2. Compréhension de votre besoin',
    text: 'Votre situation est analysée pour clarifier les priorités et les options possibles.'
  },
  {
    title: '3. Proposition de devis',
    text: 'Vous recevez une proposition claire, pensée pour vous permettre de vous projeter sans ambiguïté.'
  },
  {
    title: '4. Intervention planifiée',
    text: 'Après validation, l’intervention est organisée avec un suivi sérieux et une communication continue.'
  }
];

export default function HomePage() {
  return (
    <>
      <header className="topbar">
        <div className="container topbar-content">
          <p>VB Couvreur Rouen</p>
          <a className="btn btn-primary" href="tel:0758840644">
            <PhoneIcon /> 07 58 84 06 44
          </a>
        </div>
      </header>

      <main>
        <section className="hero section" id="accueil">
          <div className="container hero-grid">
            <div>
              <p className="badge">Artisan local à Rouen</p>
              <h1>Un couvreur à Rouen pour protéger votre maison avec sérieux et clarté</h1>
              <p className="lead">
                VB Couvreur Rouen Charpentier Toiture Façade Étanchéité nettoyage gouttière Seine
                Maritime accompagne les particuliers pour les besoins liés à la toiture, à la façade
                et à l’entretien extérieur.
              </p>
              <p>
                L’objectif est simple : vous apporter une réponse professionnelle, rassurante et
                adaptée, avec un contact humain, des explications concrètes et une demande de devis
                facile à lancer.
              </p>
              <div className="cta-group">
                <a className="btn btn-primary" href="tel:0758840644">
                  Appeler maintenant
                </a>
                <a className="btn btn-secondary" href="#devis">
                  Demander un devis
                </a>
              </div>
              <p className="phone-line">
                Téléphone direct : <a href="tel:0758840644">07 58 84 06 44</a>
              </p>
            </div>

            <aside className="card trust-box">
              <h2>Repères de confiance</h2>
              <ul>
                <li>
                  <PinIcon /> 21 rue Ambroise Fleury, 76000 Rouen
                </li>
                <li>
                  <PhoneIcon /> 07 58 84 06 44
                </li>
                <li>Ville : Rouen</li>
                <li>
                  <StarIcon /> Note affichée : 5/5
                </li>
                <li>36 avis affichés</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section" id="confiance">
          <div className="container narrow">
            <h2>Un accompagnement fiable pour avancer sans stress</h2>
            <p>
              Faire intervenir un artisan sur une toiture peut soulever des questions sur le budget,
              l’organisation ou les délais. Ici, la priorité est de vous donner un cadre clair dès le
              départ, avec une communication simple et un suivi professionnel.
            </p>
            <p>
              Basée à Rouen, l’entreprise reste proche de ses clients et privilégie les échanges
              concrets : comprendre votre besoin, expliquer les options et vous orienter vers une
              décision adaptée à votre situation.
            </p>
          </div>
        </section>

        <section className="section muted-bg" id="prestations">
          <div className="container">
            <h2>Prestations proposées</h2>
            <p className="muted intro">
              Ces prestations sont présentées à titre indicatif et peuvent être adaptées selon votre
              demande. L’objectif est de vous apporter une réponse utile, réaliste et durable.
            </p>
            <div className="grid cards-grid">
              {SERVICES.map((service) => (
                <article key={service.title} className="card service-card">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <p className="benefit">{service.benefit}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="pourquoi-nous">
          <div className="container">
            <h2>Pourquoi faire appel à VB Couvreur Rouen</h2>
            <div className="grid reasons-grid">
              {REASONS.map((reason) => (
                <article key={reason.title} className="card reason-card">
                  <h3>
                    <CheckIcon /> {reason.title}
                  </h3>
                  <p>{reason.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section muted-bg" id="process">
          <div className="container">
            <h2>Comment se déroule votre demande</h2>
            <p className="muted intro">
              De la prise de contact à l’intervention, chaque étape est pensée pour rester simple,
              claire et rassurante.
            </p>
            <div className="grid process-grid">
              {STEPS.map((step) => (
                <article key={step.title} className="card process-card">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section cta-strong" id="cta">
          <div className="container narrow">
            <h2>Parlons de votre toiture dès aujourd’hui</h2>
            <p>
              Vous avez un besoin concernant votre toiture, votre façade ou l’entretien extérieur ?
              Prenez contact dès maintenant pour obtenir un échange clair et une demande de devis
              rapide à mettre en place.
            </p>
            <div className="cta-group center">
              <a className="btn btn-primary" href="tel:0758840644">
                Appeler le 07 58 84 06 44
              </a>
              <a className="btn btn-secondary" href="#devis">
                Demander un devis
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="devis">
          <div className="container final-grid">
            <div>
              <h2>Contact</h2>
              <p>
                VB Couvreur Rouen Charpentier Toiture Façade Étanchéité nettoyage gouttière Seine
                Maritime
              </p>
              <p>
                <strong>Adresse :</strong> 21 rue Ambroise Fleury, 76000 Rouen
              </p>
              <p>
                <strong>Téléphone :</strong>{' '}
                <a className="phone-link" href="tel:0758840644">
                  07 58 84 06 44
                </a>
              </p>
              <p>
                Entreprise basée à Rouen, joignable pour vos demandes locales en couverture et
                entretien extérieur.
              </p>
            </div>
            <div>
              <DevisForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <p className="footer-title">
              VB Couvreur Rouen Charpentier Toiture Façade Étanchéité nettoyage gouttière Seine
              Maritime
            </p>
            <p>21 rue Ambroise Fleury, 76000 Rouen</p>
            <p>
              Téléphone : <a href="tel:0758840644">07 58 84 06 44</a>
            </p>
          </div>
          <div>
            <p>
              <a href="#">Mentions légales</a>
            </p>
            <p>
              <a href="#">Politique de confidentialité</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
