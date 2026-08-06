# SEO – co jeszcze zostało do zrobienia

Punkty 1–4 (kanonikalizacja, dane strukturalne, tytuły/opisy, menu w HTML) są zrobione.
Poniżej to, co wymaga decyzji biznesowych albo treści od klienta.

Dane wejściowe: Google Search Console, eksport „Skuteczność w wyszukiwarce” za 3 miesiące
do 2026-08-06 (2706 kliknięć / 28 877 wyświetleń na zapytaniach, 92% ruchu mobilnego).

---

## Punkt 5 – nowe strony pod realne zapytania

Ruch jest dziś niemal w całości brandowy (~2200 z 2706 kliknięć to warianty „bar u piotra”).
Wzrost siedzi w zapytaniach niebrandowych, na które dostajemy wyświetlenia, ale nie mamy
dla nich dedykowanej strony.

### 5.1. `/dowoz` – obiady z dowozem

Zapytania bez własnej strony (3 mies.):

| Zapytanie | Wyświetlenia | Kliknięcia | Pozycja |
|---|---|---|---|
| tanie obiady z dowozem gliwice | 364 | 5 | **1,57** |
| obiady dla seniorów z dowozem gliwice | 290 | 10 | 5,6 |
| jedzenie na dowóz gliwice | 253 | 6 | 7,22 |
| obiady z dowozem gliwice | 161 | 6 | 2,01 |
| obiady abonamentowe gliwice | 118 | 6 | 2,18 |
| obiady na dowóz gliwice | 69 | 6 | 1,45 |
| obiady gliwice dowóz | 80 | 4 | 2,11 |

Informacje o dowozie są dziś rozrzucone po `/menu` (koszt dowozu, opakowania) i nigdzie
nie tworzą spójnej strony.

**Potrzebne od klienta:**
- zasady i ceny **abonamentów** (dzienny/tygodniowy/miesięczny, czy jest zniżka)
- czy jest osobna **oferta dla seniorów** i na jakich warunkach (to zapytanie ma 290
  wyświetleń przy pozycji 5,6 – realna nisza)
- obszar dowozu (dziś wiemy tylko: Gliwice, od 40 zł, do 7 km – 9 zł, powyżej – 18 zł)
- godziny przyjmowania zamówień na dowóz

**Do zrobienia w kodzie:** strona `/dowoz` z `h1` „Obiady z dowozem w Gliwicach”, tabelą
kosztów dostawy, sekcją o abonamentach, `FAQPage` w JSON-LD (pytania: obszar, minimalna
kwota, czas dostawy), link z głównej i z `/menu`.

### 5.2. `/catering` – catering firmowy

| Zapytanie | Wyświetlenia | Kliknięcia | Pozycja |
|---|---|---|---|
| catering gliwice | 159 | 0 | **37,26** |
| obiady do biura gliwice | 136 | 0 | 10,53 |

Strona `/dlafirm` istnieje, ale słowo „catering” pada w niej raz, a treść dotyczy głównie
budów. Pozycja 37 na „catering gliwice” oznacza, że Google w ogóle nie wiąże nas z tą frazą.

**Do rozważenia:** rozbudować `/dlafirm` (a nie tworzyć drugiej strony – kanibalizacja),
dodać sekcje „obiady do biura”, „catering na konferencje”, „catering okolicznościowy”.
Uwaga: `/cele` wspomina o organizacji konferencji do 80 osób i wesel do 350 osób – jeśli
te usługi już działają, są warte osobnych sekcji, bo to zupełnie inne zapytania.

**Potrzebne od klienta:** czy usługi z projektu KPOD (konferencje, wesela, catering
abonamentowy, grill) są już uruchomione i można je sprzedawać na stronie.

### 5.3. Stołówka Studencka – NIE robimy tu strony

To osobny lokal i **ma własną stronę**. Zapytania „stołówka studencka gliwice” (415 wyśw.,
CTR 13%), „stołówka u piotra” (160 wyśw.), „stołówka studencka” (138 wyśw.) powinny
kierować tam, nie tutaj.

**Do zrobienia:**
- ustalić adres URL tamtej strony i podlinkować ją z `obiady-gliwice.pl` (stopka + sekcja
  „nasze lokale”), żeby nie konkurować z samym sobą o te frazy
- dodać `sameAs` / powiązanie między wizytówkami Google obu lokali
- rozważyć `Organization` w JSON-LD z dwoma `Restaurant` jako `subOrganization`

**Potrzebne od klienta:** adres URL strony Stołówki Studenckiej.

### 5.4. Treść pod „bar mleczny gliwice”

Największa pojedyncza szansa w całym raporcie: rodzina fraz „bar mleczny” to ~6700
wyświetleń i tylko ~85 kliknięć (5240 wyśw. przy pozycji 3,65 i CTR 1,32%).

Fraza „bar mleczny” po zmianach jest już w tytule i opisie strony głównej oraz w
`servesCuisine` w JSON-LD, ale **nie ma jeszcze treści**, która by ją rozwijała.

**Do zrobienia:** sekcja na stronie głównej albo osobna strona o tym, że serwujemy kuchnię
domową w cenach baru mlecznego – z konkretnymi cenami dań, bo to one decydują o kliknięciu.

Uwaga: przy tak niskim CTR na pozycji 3,65 sporą część kliknięć zabiera zapewne pakiet
lokalny (mapa). Część roboty jest więc poza kodem – patrz niżej.

### 5.5. Poza kodem – Google Business Profile

Dla „bar mleczny gliwice”, „obiady gliwice”, „bar gliwice” wyniki lokalne dominują nad
organicznymi. Bez zadbanej wizytówki (kategorie, zdjęcia, godziny, menu, opinie, posty)
sama optymalizacja strony nie odblokuje tych zapytań.

**Do zrobienia:** audyt wizytówki, spójność NAP z `src/config/business.ts`
(ul. Zwycięstwa 17, 44-100 Gliwice, +48 32 232 24 02), podmiana przybliżonych współrzędnych
geo w `business.ts` na dokładne z wizytówki.

---

## Rzeczy do sprawdzenia po deployu

- `curl -I http://obiady-gliwice.pl/` oraz `https://www.obiady-gliwice.pl/` – oba mają
  zwrócić **301**. Serwer to nginx, więc `public/.htaccess` może być ignorowany; wtedy
  przekierowania trzeba wpisać w konfiguracji nginx po stronie hostingu.
- Zgłosić `https://obiady-gliwice.pl/sitemap-index.xml` w Search Console.
- Docelowo przejść w GSC na **właściwość domenową** (Domain), żeby widzieć wszystkie
  warianty URL-i w jednym miejscu.
- Po zaindeksowaniu sprawdzić w GSC → Strony, czy warianty `http://`, `www.` znikają
  z indeksu na rzecz jednego kanonicznego adresu.
