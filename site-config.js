(() => {
  window.WEE_SPACE_CONFIG = Object.freeze({
    site: {
      canonicalUrl: 'https://weespace.venini59.com/',
      formUrl: 'https://form.venini59.com',
      address: 'Via Venini 59, Milano',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Via%20Venini%2059%2C%20Milano'
    },
    plans: [
      {
        id: 'smart-desk',
        name: 'Smart Desk',
        description: 'Mezza scrivania dedicata in un ambiente condiviso e tranquillo.',
        originalPrice: '€187,50',
        price: '€150',
        discountLabel: '-20%',
        availability: 4,
        features: [
          'Mezza scrivania dedicata',
          'Accesso 24/7 per i membri',
          'Blue Space una volta a settimana',
          'Fibra, armadietto personale, zona caffè, stampante e scanner inclusi'
        ]
      },
      {
        id: 'full-desk',
        name: 'Full Desk',
        description: 'Una scrivania intera dedicata, con spazio per lavorare ogni giorno.',
        originalPrice: '€300',
        price: '€240',
        discountLabel: '-20%',
        availability: 2,
        featured: true,
        features: [
          'Scrivania intera dedicata',
          'Accesso 24/7 per i membri',
          'Blue Space una volta a settimana',
          'Fibra, armadietto personale, zona caffè, stampante e scanner inclusi'
        ]
      }
    ],
    // Inserire solo recensioni autentiche e autorizzate. Lasciare null se non disponibili.
    testimonial: null
  });
})();
