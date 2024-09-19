# TaskTracker :clipboard:

TaskTracker è un'applicazione di gestione delle attività costruita con **Angular**. Consente agli utenti di creare, visualizzare, modificare e cancellare task tramite chiamate API REST e un'interfaccia moderna.

## Funzionalità principali

- Aggiungi nuove attività con titolo, descrizione e promemoria.
- Visualizza una lista di task.
- Modifica e cancella task esistenti.
- Attiva/disattiva promemoria per i task.
- Comunicazione con un server mock tramite HTTP per gestire i dati.

## Tecnologie utilizzate

- **Angular**
- **TypeScript**
- **HTML/CSS**
- **JSON Server**: API REST fittizia per simulare il backend.
- **HttpClientModule**: Modulo Angular per effettuare chiamate HTTP.
- **FontAwesome**: Per migliorare l'interfaccia utente con l'integrazione di icone.

## Struttura del progetto

  - **app/app**: Contiene i componenti e servizi Angular per l'interfaccia utente.
  - **Task.ts**: Definisce l'interfaccia Task, che rappresenta la struttura di un task.
  - **mock-Tasks.ts**: Contiene una lista mock di task utile per simulare l'inizializzazione dei task.
  - **db.json** : File JSON che simula un database per i task.
  - **task.services.ts** : Gestisce le chiamate HTTP per ottenere, aggiungere, modificare o eliminare task.

## Installazione

1. Clona il repository:
    ```bash
   git clone https://github.com/Salvo-25/TaskTracker.git
2. Installa le dipendenze:
   ```bash
   npm istall
3. Avvia il server di sviluppo:
   ```bash
   ng serve
4. Avvia il server JSON:
   ```bash
   npm run server

---

## Contatti🌐  

- **LinkedIn**  : [Salvatore Di Dio](https://www.linkedin.com/in/salvatore-di-dio-/)

- **Email**  : didiosalvatore25@gmail.com

## Ringraziamenti🙌 

Grazie per aver preso il tempo di leggere il mio README e per il tuo interesse nel progetto! Se hai domande o suggerimenti non esitare a contattarmi



  
