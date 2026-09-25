# Gestione contenuti Wee Space

## Fonte unica per disponibilità e tariffe del sito

Aggiornare il file [`site-config.js`](site-config.js) per modificare:

- disponibilità Smart Desk e Full Desk;
- prezzo corrente, prezzo barrato e badge promozionale;
- caratteristiche incluse nelle formule;
- URL del modulo e indirizzo;
- eventuale recensione autentica e autorizzata.

La pagina statica legge le tariffe da questa configurazione al caricamento: **non duplicare i numeri di disponibilità in `index.html` o `script.js`**.

## Modulo esterno

Il pulsante “Richiedi una visita” apre `https://form.venini59.com`. Il modulo è un servizio esterno e non è gestito in questo repository.

Se il modulo mostra disponibilità, prezzi, durata, condizioni o testo commerciale, tali valori devono essere aggiornati separatamente nell'amministrazione del modulo. Dopo ogni modifica verificare che sito e modulo riportino gli stessi dati.

## Dati che richiedono conferma prima della pubblicazione

- Regime IVA da rendere visibile vicino ai prezzi;
- validità e condizioni dei prezzi barrati/promozioni;
- eventuali sconti per permanenze di almeno 6 mesi;
- orari e canale di accoglienza per le visite;
- contatto diretto, ragione sociale e collegamenti alle informative;
- recensioni, solo se autentiche e autorizzate.

## Verifica prima del deploy

1. Aggiornare `site-config.js` se cambiano tariffe o disponibilità.
2. Aprire sito e modulo, sia desktop sia mobile.
3. Verificare che tutte le CTA aprano il modulo corretto.
4. Controllare prezzi, disponibilità, condizioni e testo del modulo.
5. Pubblicare solo quando i dati coincidono.
