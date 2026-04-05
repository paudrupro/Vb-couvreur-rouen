import './globals.css';

export const metadata = {
  title: 'Couvreur à Rouen | VB Couvreur Rouen',
  description:
    'Contactez VB Couvreur Rouen, artisan couvreur basé à Rouen, pour vos besoins en toiture, façade et entretien extérieur.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
