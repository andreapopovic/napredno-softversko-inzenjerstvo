Ova aplikacija predstavlja modernu CRUD aplikaciju koja omogućava korisnicima da kreiraju, uređuju, brišu i čitaju blogove na teme poput mašinskog učenja, frameworks-a, i drugih relevantnih tehnoloških oblasti. Aplikacija je osmišljena kao alat za tehnološku zajednicu koji omogućava deljenje znanja, povezivanje i organizaciju informacija na jednoj platformi.

# Pokretanje projekta i koraci za instalaciju:

1. Kloniranje repozitorijuma
2. Instalacija zavisnosti: npm install
3. Pokretanje aplikacije: npm run dev
4. Pokretanje Appwrite servera: Instalirajte i konfigurišite Appwrite koristeći Appwrite dokumentaciju (https://appwrite.io/docs).
5. Postavite bazu podataka, kolekcije i API ključeve kako je specificirano u projektu. (Primer api kljuceva koji su korisceni nalazi se u .env fajlu).

Nakon uspesnog pokretanja aplikacija će biti dostupna na: http://localhost:3000

# Tehnologije

- Frontend: Next.js sa Tailwind CSS-om za stilizovanje.
- Backend: Next.js API rute za server-side logiku i integraciju sa Appwrite-om.
- Baza podataka: Appwrite baza podataka.

# Funkcionalnosti

- Dodavanje blogova: Kreiranje novih postova.
- Uređivanje: Izmena sadržaja blogova.
- Brisanje: Uklanjanje blogova iz baze.
- Prikaz : Pregled svih postova.

# Zašto je korišćen Appwrite?

Appwrite je izabran jer nudi sveobuhvatnu podršku za backend funkcionalnosti:

1. Self-hosted rešenje: Omogućava punu kontrolu nad podacima i privatnošću.
2. Jednostavna konfiguracija: Kreiranje kolekcija i upravljanje bazom podataka kroz intuitivni UI.
3. Realtime API: Ažuriranje podataka u realnom vremenu, što je korisno za dinamične aplikacije poput BlogTech-a.

# Zašto je korišćen Next.js?

Next.js je idealan izbor za aplikacije ovog tipa zbog:

1. Server-side rendering (SSR): Pruža bolje performanse i SEO optimizaciju, što je ključno za blog platforme. Upravo zato je izabrana ova tema.
2. Static site generation (SSG): Omogućava statičko generisanje stranica za povećanje brzine učitavanja.
3. API rute: Ugrađeni backend API-ji za povezivanje sa Appwrite-om i dodatnu funkcionalnost.
4. Jednostavna integracija: Laka integracija sa alatima poput Appwrite-a i podrška za moderne tehnologije (React, TypeScript).
5. Pogodan za CRUD aplikacije: Next.js omogućava brzu i jednostavnu implementaciju CRUD operacija zahvaljujući:
   - Ugrađenim API rutama koje omogućavaju kreiranje RESTful endpointa.
   - Efikasnom upravljanju podacima i renderingom na strani servera ili klijenta, u zavisnosti od potreba.
   - Podršci za modularnost, što olakšava održavanje i proširenje koda.

# Zašto je korišćen Tailwind CSS?

Tailwind CSS je izabran za stilizovanje zbog:

1. Brzine razvoja: Tailwind omogućava brzo stilizovanje komponenata direktno u HTML/JSX fajlovima, čime se smanjuje vreme potrebno za pisanje CSS koda.
2. Prilagodljivosti: Lako prilagođavanje stilova pomoću ugrađenih klasa i konfiguracije.
3. Jedinstvenosti dizajna: Omogućava kreiranje prilagođenih dizajna bez ograničenja koja nameću tradicionalni CSS framework-ovi poput Bootstrapa.
4. Modularnosti: Koristi pristup "utility-first", što doprinosi čistijem i modularnijem kodu.
   Tailwind je bio idealan izbor za ovu aplikaciju, jer omogućava jednostavno stilizovanje korisničkog interfejsa uz visok nivo prilagodljivosti.

# Problem koji rešava

U tehnološkoj zajednici često nedostaje centralizovan prostor za deljenje i organizovanje sadržaja. BlogTech rešava taj problem pružajući:

1. Prostor za deljenje ekspertskih znanja.
2. Jednostavno i efikasno upravljanje blogovima.
3. Centralizovanu platformu za čitanje i učenje o raznim temama.
4. Zbog dobre SEO podrske lako možemo pronaći blog vezan za temu koja nas zanima i o kojoj želimo da naučimo nešto novo.
