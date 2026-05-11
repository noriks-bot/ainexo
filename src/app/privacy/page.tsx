'use client';

export default function PrivacyPage() {
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 24px',
      fontFamily: "'Inter', sans-serif",
      color: '#1a1a1a',
      lineHeight: '1.7',
    } as React.CSSProperties,
    header: {
      textAlign: 'center' as const,
      marginBottom: '48px',
      paddingBottom: '32px',
      borderBottom: '1px solid #e5e7eb',
    },
    logo: {
      display: 'inline-block',
      marginBottom: '24px',
      textDecoration: 'none',
    },
    logoText: {
      fontSize: '28px',
      fontWeight: '800',
      color: '#7c3aed',
      letterSpacing: '-0.5px',
    },
    pageTitle: {
      fontSize: '32px',
      fontWeight: '700',
      color: '#111827',
      marginBottom: '8px',
    },
    lastUpdated: {
      fontSize: '14px',
      color: '#6b7280',
    },
    section: {
      marginBottom: '40px',
    },
    h2: {
      fontSize: '22px',
      fontWeight: '700',
      color: '#111827',
      marginBottom: '16px',
      paddingBottom: '8px',
      borderBottom: '2px solid #7c3aed',
    },
    p: {
      marginBottom: '14px',
      fontSize: '16px',
      color: '#374151',
    },
    ul: {
      paddingLeft: '24px',
      marginBottom: '14px',
    },
    li: {
      marginBottom: '8px',
      fontSize: '16px',
      color: '#374151',
    },
    infoBox: {
      backgroundColor: '#f5f3ff',
      border: '1px solid #ddd6fe',
      borderRadius: '8px',
      padding: '16px 20px',
      marginBottom: '20px',
    },
    infoBoxText: {
      margin: '0',
      fontSize: '15px',
      color: '#5b21b6',
    },
    footer: {
      marginTop: '60px',
      paddingTop: '24px',
      borderTop: '1px solid #e5e7eb',
      textAlign: 'center' as const,
    },
    backLink: {
      display: 'inline-block',
      color: '#7c3aed',
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: '500',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <a href="/" style={styles.logo}>
          <span style={styles.logoText}>ainexo</span>
        </a>
        <h1 style={styles.pageTitle}>Politika zasebnosti</h1>
        <p style={styles.lastUpdated}>Zadnja posodobitev: 10. maj 2026</p>
      </div>

      <div style={styles.infoBox}>
        <p style={styles.infoBoxText}>
          Ta politika zasebnosti je skladna z Uredbo (EU) 2016/679 (GDPR) in Zakonom o varstvu osebnih podatkov (ZVOP-2). Vaše podatke obdelujemo zakonito, pošteno in pregledno.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.h2}>1. Upravljavec podatkov</h2>
        <p style={styles.p}>
          Upravljavec vaših osebnih podatkov je:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Podjetje:</strong> ainexo d.o.o.</li>
          <li style={styles.li}><strong>Naslov:</strong> Trg komandanta Staneta 8, 1000 Ljubljana, Slovenija</li>
          <li style={styles.li}><strong>E-pošta:</strong> info@ainexo.com</li>
        </ul>
        <p style={styles.p}>
          ainexo d.o.o. je odgovoren za zakonito obdelavo vaših osebnih podatkov v skladu z veljavno zakonodajo o varstvu podatkov.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.h2}>2. Katere podatke zbiramo</h2>
        <p style={styles.p}>Zbiramo in obdelujemo naslednje kategorije osebnih podatkov:</p>

        <p style={styles.p}><strong>Identifikacijski in kontaktni podatki:</strong></p>
        <ul style={styles.ul}>
          <li style={styles.li}>Ime in priimek</li>
          <li style={styles.li}>E-poštni naslov</li>
        </ul>

        <p style={styles.p}><strong>Podatki iz kviza in profila:</strong></p>
        <ul style={styles.ul}>
          <li style={styles.li}>Odgovori na vprašanja v uvodnem kvizu (cilji, izkušnje z UI, področje dela)</li>
          <li style={styles.li}>Podatki o napredku v tečaju</li>
          <li style={styles.li}>Nastavitve profila</li>
        </ul>

        <p style={styles.p}><strong>Plačilni podatki:</strong></p>
        <ul style={styles.ul}>
          <li style={styles.li}>Podatki o naročniškem načrtu in zgodovini plačil</li>
          <li style={styles.li}>Podatki o plačilni metodi (shranjeni pri plačilnem procesorju Stripe — mi nimamo dostopa do polnih podatkov kartice)</li>
        </ul>

        <p style={styles.p}><strong>Tehnični podatki:</strong></p>
        <ul style={styles.ul}>
          <li style={styles.li}>IP-naslov in podatki o napravi</li>
          <li style={styles.li}>Podatki o brskalniki in operacijskem sistemu</li>
          <li style={styles.li}>Podatki o uporabi platforme (čas prijave, obiskane vsebine)</li>
          <li style={styles.li}>Piškotki (glejte razdelek o piškotkih)</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.h2}>3. Namen obdelave podatkov</h2>
        <p style={styles.p}>Vaše osebne podatke obdelujemo za naslednje namene:</p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Zagotavljanje storitev:</strong> Ustvarjanje in upravljanje vašega računa, dostop do tečajev in vsebin, obdelava plačil</li>
          <li style={styles.li}><strong>Personalizacija:</strong> Prilagoditev vsebin vašemu profilu in ciljem (na podlagi odgovorov iz kviza)</li>
          <li style={styles.li}><strong>Komunikacija:</strong> Pošiljanje transakcijskih e-poštnih sporočil (potrdila naročnin, opomniki)</li>
          <li style={styles.li}><strong>Tržno komuniciranje:</strong> Pošiljanje novic, promocij in izobraževalnih vsebin — <strong>samo ob vašem izrecnem soglasju</strong></li>
          <li style={styles.li}><strong>Varnost in preprečevanje zlorab:</strong> Zaščita platforme pred nepooblaščenim dostopom</li>
          <li style={styles.li}><strong>Analitika:</strong> Izboljšanje platforme in vsebine na podlagi anonimiziranih podatkov o uporabi</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.h2}>4. Pravna podlaga za obdelavo</h2>
        <p style={styles.p}>Vaše podatke obdelujemo na naslednjih pravnih podlagah:</p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Izpolnitev pogodbe (čl. 6(1)(b) GDPR):</strong> Obdelava, ki je potrebna za zagotavljanje naročene storitve</li>
          <li style={styles.li}><strong>Zakonita obveznost (čl. 6(1)(c) GDPR):</strong> Hramba računovodskih in davčnih dokumentov</li>
          <li style={styles.li}><strong>Privolitev (čl. 6(1)(a) GDPR):</strong> Tržno komuniciranje in neobvezni piškotki — soglasje lahko kadar koli prekličete</li>
          <li style={styles.li}><strong>Zakoniti interesi (čl. 6(1)(f) GDPR):</strong> Varnost platforme, analitika in preprečevanje goljufij</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.h2}>5. Hramba podatkov</h2>
        <p style={styles.p}>Vaše podatke hranimo le toliko časa, kolikor je potrebno za dosego namena obdelave:</p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Podatki računa:</strong> Do izbrisa računa + 30 dni za varnostno kopijo</li>
          <li style={styles.li}><strong>Plačilni podatki in računi:</strong> 10 let (zakonska obveznost)</li>
          <li style={styles.li}><strong>Tržno komuniciranje:</strong> Do preklica soglasja</li>
          <li style={styles.li}><strong>Tehnični dnevniki:</strong> 90 dni</li>
          <li style={styles.li}><strong>Podatki iz kviza:</strong> Do izbrisa računa</li>
        </ul>
        <p style={styles.p}>
          Po preteku roka hrambe podatke varno izbrišemo ali anonimiziramo.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.h2}>6. Pravice posameznikov</h2>
        <p style={styles.p}>Kot posameznik imate v skladu z GDPR naslednje pravice:</p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Pravica do dostopa (čl. 15):</strong> Zahtevate lahko kopijo vseh vaših osebnih podatkov, ki jih obdelujemo</li>
          <li style={styles.li}><strong>Pravica do popravka (čl. 16):</strong> Zahtevate lahko popravek netočnih ali nepopolnih podatkov</li>
          <li style={styles.li}><strong>Pravica do izbrisa (čl. 17):</strong> Zahtevate lahko izbris vaših podatkov (&ldquo;pravica do pozabe&rdquo;), kadar za obdelavo ni več pravne podlage</li>
          <li style={styles.li}><strong>Pravica do omejitve obdelave (čl. 18):</strong> Zahtevate lahko začasno omejitev obdelave vaših podatkov</li>
          <li style={styles.li}><strong>Pravica do prenosljivosti (čl. 20):</strong> Zahtevate lahko izvoz vaših podatkov v strojno berljivi obliki</li>
          <li style={styles.li}><strong>Pravica do ugovora (čl. 21):</strong> Ugovarjate lahko obdelavi na podlagi zakonitih interesov ali za namene neposrednega trženja</li>
          <li style={styles.li}><strong>Pravica do preklica privolitve:</strong> Soglasje za tržno komuniciranje lahko kadar koli prekličete (odjava iz e-pošte ali kontakt na info@ainexo.com)</li>
        </ul>
        <p style={styles.p}>
          Zahtevo za uveljavljanje pravic pošljite na info@ainexo.com. Odgovorimo v 30 dneh.
        </p>
        <p style={styles.p}>
          Če menite, da vaše pravice niso spoštovane, imate pravico do pritožbe pri Informacijskem pooblaščencu RS (ip-rs.si).
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.h2}>7. Piškotki</h2>
        <p style={styles.p}>
          Naša platforma uporablja piškotke za zagotavljanje delovanja storitve in izboljšanje uporabniške izkušnje. Ločimo med:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Nujni piškotki:</strong> Potrebni za delovanje platforme (prijava, seja) — ne zahtevajo soglasja</li>
          <li style={styles.li}><strong>Analitični piškotki:</strong> Beležijo anonimno statistiko obiska — zahtevajo soglasje</li>
          <li style={styles.li}><strong>Tržni piškotki:</strong> Omogočajo ciljano oglaševanje — zahtevajo soglasje</li>
        </ul>
        <p style={styles.p}>
          Piškotke upravljate v nastavitvah brskalnika ali prek naše pasice za piškotke ob prvem obisku. Preklic soglasja za neobvezne piškotke ne vpliva na dostop do storitev.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.h2}>8. Varnost podatkov</h2>
        <p style={styles.p}>
          Uvajamo tehnične in organizacijske ukrepe za zaščito vaših osebnih podatkov pred nepooblaščenim dostopom, izgubo ali uničenjem:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Šifriranje podatkov med prenosom (HTTPS/TLS)</li>
          <li style={styles.li}>Šifriranje shranjenih podatkov</li>
          <li style={styles.li}>Omejen dostop do podatkov — le pooblaščeni zaposleni</li>
          <li style={styles.li}>Redno varnostno kopiranje podatkov</li>
          <li style={styles.li}>Plačila obdeluje certificiran ponudnik (Stripe, PCI-DSS Level 1)</li>
        </ul>
        <p style={styles.p}>
          V primeru varnostnega incidenta vas bomo obvestili v skladu z zakonskimi zahtevami (72 ur za Informacijskega pooblaščenca, brez nepotrebnega odlašanja za posameznike).
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.h2}>9. Spremembe politike zasebnosti</h2>
        <p style={styles.p}>
          To politiko zasebnosti lahko občasno posodabljamo. O bistvenih spremembah vas bomo obvestili prek e-pošte ali z obvestilom na platformi vsaj 14 dni pred uveljavitvijo.
        </p>
        <p style={styles.p}>
          Vedno si oglejte datum zadnje posodobitve na vrhu te strani. Nadaljnja uporaba platforme po spremembi pomeni sprejetje posodobljene politike.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.h2}>10. Kontakt za vprašanja o zasebnosti</h2>
        <p style={styles.p}>Za vsa vprašanja v zvezi z obdelavo vaših osebnih podatkov nas kontaktirajte:</p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Podjetje:</strong> ainexo d.o.o.</li>
          <li style={styles.li}><strong>Naslov:</strong> Trg komandanta Staneta 8, 1000 Ljubljana, Slovenija</li>
          <li style={styles.li}><strong>E-pošta:</strong> info@ainexo.com</li>
        </ul>
        <p style={styles.p}>
          Odgovorimo v 30 dneh od prejema vaše zahteve.
        </p>
      </div>

      <div style={styles.footer}>
        <a href="/" style={styles.backLink}>← Nazaj na začetno stran</a>
      </div>
    </div>
  );
}
