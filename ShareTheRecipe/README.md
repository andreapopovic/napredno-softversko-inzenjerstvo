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
2. Static site generation (SSG): Brže učitavanje stranica za recepte koji se retko menjaju.
3. API rute: Omogućavaju lako rukovanje backend logikom, kao što su dodavanje recepata u bazu ili preuzimanje podataka.
4. Podrška za rad sa slikama: Next.js pruža ugrađeni alat za optimizaciju slika, što je ključno za brzo i efikasno učitavanje recepata sa slikama.
5. Modularnost: Pruža strukturu koja olakšava upravljanje kodom i omogućava lako dodavanje novih funkcionalnosti.

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
