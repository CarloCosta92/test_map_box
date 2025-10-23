# 🗺️ React Address Autofill con Mapbox

Questo progetto mostra come integrare **Mapbox Address Autofill** in un'app React per ottenere in modo semplice e gratuito:
- autocompletamento dell’indirizzo mentre l’utente digita;
- recupero automatico di tutti i dettagli (via, città, CAP, regione, paese);
- coordinate geografiche (latitudine e longitudine);
- compilazione automatica dei campi del form.

---

## 🚀 Tecnologie principali

- **React 18+**
- **@mapbox/search-js-react** → SDK ufficiale di Mapbox per l’autocompletamento indirizzi  
- **Vite** → ambiente di sviluppo (compatibile con entrambi)
- **Bootstrap** per lo stile

---

## 🧩 Funzionalità

✅ Campo input collegato a Mapbox Address Autofill  
✅ Suggerimenti dinamici mentre l’utente scrive  
✅ Al click su un suggerimento → compilazione automatica dei campi indirizzo  
✅ Ritorno dei dati completi al parent component  
✅ Coordinate GPS incluse per eventuale geolocalizzazione su mappa  

---

## ⚙️ Setup

### 1️⃣ Installazione
```bash
npm install
npm install @mapbox/search-js-react

