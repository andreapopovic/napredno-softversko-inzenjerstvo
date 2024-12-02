# TechBlogApp
Ova aplikacija predstavlja modernu CRUD aplikaciju koja omogućava korisnicima da kreiraju, uređuju, brišu i čitaju blogove na teme poput mašinskog učenja, frameworks-a, i drugih relevantnih tehnoloških oblasti. Aplikacija je osmišljena kao alat za tehnološku zajednicu koji omogućava deljenje znanja, povezivanje i organizaciju informacija na jednoj platformi. Cilj ove aplikacije je da pokaze upotrebu NextJS-a.

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
2. API rute: Ugrađeni backend API-ji za povezivanje sa Appwrite-om i dodatnu funkcionalnost.
3. Jednostavna integracija: Laka integracija sa alatima poput Appwrite-a i podrška za moderne tehnologije (React, TypeScript).
4. Pogodan za CRUD aplikacije: Next.js omogućava brzu i jednostavnu implementaciju CRUD operacija zahvaljujući:
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

--------------------------------------------------------------------------------------------------------------------------------------------
# ShareTheRecipe
Ova aplikacija predstavlja modernu aplikaciju koja korisnicima omogućava da dele recepte sa slikama i pregledaju postojeće recepte. Aplikacija je osmišljena kao platforma za ljubitelje kuvanja, gde korisnici mogu deliti inspiraciju i otkrivati nove kulinarske ideje.

# Pokretanje projekta i koraci za instalaciju:

1. Kloniranje repozitorijuma
2. Instalacija zavisnosti: npm install
3. Pokretanje aplikacije: npm run dev

Nakon uspesnog pokretanja aplikacija će biti dostupna na: http://localhost:3000

# Tehnologije

- Frontend: Next.js sa CSS Modules za stilizovanje.
- Backend: Next.js API rute za server-side logiku.
- Baza podataka: better-sqlite3.

# Funkcionalnosti

- Dodavanje recepata: Kreiranje novih recepata sa slikama i detaljnim uputstvima.
- Prikaz recepata: Pregled svih recepata sa slikama i ključnim informacijama.

# Zašto je korišćen Next.js?

Next.js je idealan izbor za ovu aplikaciju zbog:

1. Server-side rendering (SSR): Poboljšane performanse i SEO optimizacija, što omogućava lakše pronalaženje recepata putem pretraživača.
2. API rute: Omogućavaju lako rukovanje backend logikom, kao što su dodavanje recepata u bazu ili preuzimanje podataka.
3. Podrška za rad sa slikama: Next.js pruža ugrađeni alat za optimizaciju slika, što je ključno za brzo i efikasno učitavanje recepata sa slikama.
4. Modularnost: Pruža strukturu koja olakšava upravljanje kodom i omogućava lako dodavanje novih funkcionalnosti.

# Zašto je korišćen better-sqlite3?

better-sqlite3 je odabran za bazu podataka zbog:

1. Brzine: Veoma je brz za lokalne CRUD operacije, što ga čini idealnim za aplikacije kao što je RecipeShare.
2. Jednostavnosti upotrebe: Laka konfiguracija i intuitivan API za rad sa SQLite bazama.
3. Lokalni fajl: Podaci se čuvaju lokalno u SQLite fajlu, što smanjuje složenost instalacije.

# Zašto su korišćeni CSS Modules?

CSS Modules su izabrani za stilizovanje jer:

1. Lokalni stilovi: Omogućavaju izolaciju stilova na nivou komponente, čime se izbegava konflikt stilova.
2. Jednostavnost: Lako je održavati i ažurirati stilove bez rizika od uticaja na druge delove aplikacije.
3. Podrška u Next.js-u: Prirodno integrišu CSS Modules u proces izgradnje aplikacije.

# Problem koji rešava

RecipeShare rešava problem razmene recepata i inspiracije među ljubiteljima kuvanja. Aplikacija omogućava:

1. Jednostavno deljenje recepata sa slikama i detaljnim opisima.
2. Centralizovan prostor za pretragu i pregled raznih recepata.
3. Brz i efikasan način za organizaciju i skladištenje omiljenih recepata.
4. Uz podršku za slike i optimizaciju performansi, RecipeShare pruža odličan korisnički doživljaj i lakoću upotrebe za sve korisnike.

