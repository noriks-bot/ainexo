'use client';

export default function TermsPage() {
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
        <h1 style={styles.pageTitle}>Pogoji uporabe</h1>
        <p style={styles.lastUpdated}>Zadnja posodobitev: 10. maj 2026</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.h2}>1. Splošne določbe</h2>
        <p style={styles.p}>
          Dobrodošli na platformi ainexo. Ti pogoji uporabe urejajo razmerje med podjetjem ainexo d.o.o. (v nadaljevanju: &ldquo;ainexo&rdquo; ali &ldquo;mi&rdquo;) in vsemi uporabniki naše platforme (v nadaljevanju: &ldquo;uporabnik&rdquo; ali &ldquo;vi&rdquo;).
        </p>
        <p style={styles.p}>
          Z dostopom do platforme ainexo ali njeno uporabo potrjujete, da ste prebrali, razumeli in se strinjate s temi pogoji uporabe. Če se s pogoji ne strinjate, vas prosimo, da platforme ne uporabljate.
        </p>
        <p style={styles.p}>
          ainexo d.o.o. je podjetje, registrirano v Republiki Sloveniji, s sedežem na Trg komandanta Staneta 8, 1000 Ljubljana. Za stike z nami nas kontaktirajte na info@ainexo.com.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.h2}>2. Opis storitve</h2>
        <p style={styles.p}>
          ainexo je spletna izobraževalna platforma, ki ponuja tečaje s področja umetne inteligence (UI). Naša osrednja ponudba je <strong>28-dnevni izziv umetne inteligence</strong> — strukturiran program, ki vam v štirih tednih omogoči pridobiti praktična znanja in veščine za uporabo orodij UI v vsakdanjem in poklicnem življenju.
        </p>
        <p style={styles.p}>Naše storitve vključujejo:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Dostop do spletnih video lekcij in pisnih materialov</li>
          <li style={styles.li}>28-dnevni strukturirani učni načrt z dnevnimi nalogami</li>
          <li style={styles.li}>Praktične vaje in projekte s področja UI</li>
          <li style={styles.li}>Dostop do skupnosti učečih se</li>
          <li style={styles.li}>Potrdilo o zaključku programa</li>
        </ul>
        <p style={styles.p}>
          Vsebina in obseg storitev se lahko razlikujeta glede na izbrani naročniški načrt. Pridržujemo si pravico do posodobitve in izboljšave vsebin brez predhodnega obvestila.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.h2}>3. Registracija in uporabniški račun</h2>
        <p style={styles.p}>
          Za dostop do plačljivih vsebin platforme ainexo morate ustvariti uporabniški račun. Pri registraciji se obvezujete, da boste:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Navedli točne, aktualne in popolne podatke</li>
          <li style={styles.li}>Vaše podatke sproti posodabljali</li>
          <li style={styles.li}>Geslo hranili varno in zaupno</li>
          <li style={styles.li}>ainexo takoj obvestili o vsakem nepooblaščenem dostopu do vašega računa</li>
        </ul>
        <p style={styles.p}>
          Za odprtje računa morate biti stari vsaj 18 let ali imeti soglasje zakonitega zastopnika. Vsak posameznik lahko odpre le en uporabniški račun. Preprodaja ali delitev dostopa z drugimi osebami je prepovedana.
        </p>
        <p style={styles.p}>
          ainexo si pridržuje pravico, da začasno ali trajno ukine račun, ki krši te pogoje, brez odškodninske odgovornosti.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.h2}>4. Plačila in cene</h2>
        <p style={styles.p}>
          Cene naših storitev so navedene na spletni strani in so izražene v eurih (EUR) z vključenim davkom na dodano vrednost (DDV), kjer je to primerno.
        </p>
        <p style={styles.p}>
          Plačila sprejemamo prek varnih plačilnih sistemov (kreditne in debetne kartice, Stripe in podobni ponudniki). Plačilo se izvede takoj ob nakupu oz. ob obnovitvi naročnine.
        </p>
        <p style={styles.p}>Glede naročnin velja:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Naročnina se samodejno podaljšuje, razen če jo pravočasno prekinete</li>
          <li style={styles.li}>O prihajajoči obnovi vas bomo obvestili z e-poštnim sporočilom</li>
          <li style={styles.li}>Spremembe cen bodo sporočene vsaj 14 dni pred uveljavitvijo</li>
        </ul>
        <p style={styles.p}>
          Za podrobnosti o vračilih in preklicu naročnine glejte naše <a href="/subscription" style={{ color: '#7c3aed' }}>Pogoje naročnine</a>.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.h2}>5. Pravice intelektualne lastnine</h2>
        <p style={styles.p}>
          Vsa vsebina na platformi ainexo — vključno z video posnetki, pisnimi gradivi, grafičnimi elementi, logotipi, programsko kodo in drugimi materiali — je zaščitena z zakoni o avtorskih pravicah in drugimi predpisi s področja intelektualne lastnine.
        </p>
        <p style={styles.p}>
          Lastnik vseh teh pravic je ainexo d.o.o. ali njeni licencedajalci. Z nakupom dostopa pridobite osebno, neekskluzivno, neprenosljivo licenco za osebno izobraževalno uporabo vsebin.
        </p>
        <p style={styles.p}>Prepovedano je:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Reproduciranje, distribucija ali javno prikazovanje vsebin brez pisnega soglasja</li>
          <li style={styles.li}>Ustvarjanje izpeljanih del na podlagi naših vsebin</li>
          <li style={styles.li}>Prenos ali prodaja dostopa tretjim osebam</li>
          <li style={styles.li}>Snemanje ali shranjevanje zaščitenih vsebin</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.h2}>6. Omejitev odgovornosti</h2>
        <p style={styles.p}>
          Platforma ainexo je zagotovljena &ldquo;takšna, kakršna je&rdquo;. Čeprav si prizadevamo za visoko kakovost vsebin in nemoteno delovanje storitve, ne jamčimo za:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Neprekinjeno ali brezhibno delovanje platforme</li>
          <li style={styles.li}>Doseganje specifičnih rezultatov pri učenju</li>
          <li style={styles.li}>Ustreznost vsebin za vaše specifične potrebe</li>
          <li style={styles.li}>Točnost vseh informacij v hitro razvijajočem se področju UI</li>
        </ul>
        <p style={styles.p}>
          ainexo ne prevzema odgovornosti za posredne, naključne, posebne ali posledične škode, ki bi izhajale iz uporabe ali nezmožnosti uporabe naših storitev.
        </p>
        <p style={styles.p}>
          Naša skupna odgovornost je omejena na znesek, ki ste ga plačali za storitev v zadnjih 12 mesecih.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.h2}>7. Spremembe pogojev</h2>
        <p style={styles.p}>
          ainexo si pridržuje pravico do spremembe teh pogojev uporabe kadar koli. O bistvenih spremembah vas bomo obvestili prek e-pošte ali z vidnim obvestilom na platformi vsaj 14 dni pred uveljavitvijo sprememb.
        </p>
        <p style={styles.p}>
          Nadaljnja uporaba platforme po uveljavitvi sprememb pomeni vaše strinjanje z novimi pogoji. Če se z novimi pogoji ne strinjate, imate pravico prekiniti naročnino in zapreti račun.
        </p>
        <p style={styles.p}>
          Vedno si oglejte datum zadnje posodobitve na vrhu te strani, da veste, ali so bili pogoji spremenjeni od vaše zadnje prijave.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.h2}>8. Pristojno pravo</h2>
        <p style={styles.p}>
          Ti pogoji uporabe se urejajo in razlagajo v skladu z zakonodajo Republike Slovenije, pri čemer se izvzemajo njene kolizijske norme.
        </p>
        <p style={styles.p}>
          Za vse morebitne spore, ki izhajajo iz teh pogojev ali so z njimi povezani, je pristojno sodišče v Ljubljani, razen če veljavna zakonodaja o varstvu potrošnikov določa drugače.
        </p>
        <p style={styles.p}>
          V primeru spora vas spodbujamo, da nas najprej kontaktirate na info@ainexo.com, saj si prizadevamo za mirno rešitev vsakega nesoglasja.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.h2}>9. Kontakt</h2>
        <p style={styles.p}>Za vsa vprašanja v zvezi s temi pogoji uporabe nas kontaktirajte:</p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Podjetje:</strong> ainexo d.o.o.</li>
          <li style={styles.li}><strong>Naslov:</strong> Trg komandanta Staneta 8, 1000 Ljubljana, Slovenija</li>
          <li style={styles.li}><strong>E-pošta:</strong> info@ainexo.com</li>
        </ul>
        <p style={styles.p}>
          Odgovorimo v 3 delovnih dneh.
        </p>
      </div>

      <div style={styles.footer}>
        <a href="/" style={styles.backLink}>← Nazaj na začetno stran</a>
      </div>
    </div>
  );
}
