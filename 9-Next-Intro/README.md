# Oppgave 9 - Next.js med API

I denne oppgaven skulle vi lage en enkel applikasjon som skulle hente informasjon fra en liste via ett api.

### Applikasjon

- `/` hjem
- `/todo` applikasjonen

### API

- `/api/todos`
  - `GET` henter alle gjøremål i listen
  - `POST` legger til ett gjøremål fra `body`
- `/api/todos/[id]`
  - `REMOVE` fjerner gjøremål med id fra listen
  - `PUT` oppdaterer status på gjøremål `done: true`
