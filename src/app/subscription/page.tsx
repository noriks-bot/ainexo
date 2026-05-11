'use client';

export default function SubscriptionPage() {
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
    planGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '16px',
      marginBottom: '24px',
    },
    planCard: {
      border: '1px solid #e5e7eb',
      borderRadius: '12px',
      padding: '20px',
      textAlign: 'center' as const,
    },
    planCardHighlight: {
      border: '2px solid #7c3aed',
      borderRadius: '12px',
      padding: '20px',
      textAlign: 'center' as const,
      backgroundColor: '#f5f3ff',
    },
    planName: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#111827',
      marginBottom: '4px',
    },
    planDuration: {
      fontSize: '13px',
      color: '#6b7280',
      marginBottom: '12px',
    },
    planBadge: {
      display: 'inline-block',
      backgroundColor: '#7c3aed',
      color: '#fff',
      fontSize: '11px',
      fontWeight: '600',
      padding: '2px 8px',
      borderRadius: '99px',
      marginBottom: '8px',
    },
    guaranteeBox: {
      backgroundColor: '#f0fdf4',
      border: '1px solid #bbf7d0',
      borderRadius: '8px',
      padding: '16px 20px',
      marginBottom: '20px',
    },
    guaranteeText: {
      margin: '0',
      fontSize: '15px',
      color: '#166534',
      fontWeight: '500',
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
        <h1 style={styles.pageTitle}>Pogoji naročnine</h1>
        <p style={styles.lastUpdated}>Zadnja posodobitev: 10. maj 2026</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.h2}>1. Naročniški načrti</h2>
        <p style={styles.p}>
          ainexo ponuja naslednje naročniške načrte za dostop do platforme in izobraževalnih vsebin:
        </p>

        <div style={styles.planGrid}>
          <div style={styles.planCard}>
            <div style={styles.planName}>Tedenski načrt</div>
            <div style={styles.planDuration}>7 dni dostopa</div>
            <p style={{ fontSize: '14px', color: '#6b7280', margin: '0' }}>
              Popoln za preizkus platforme in kratkoročno učenje
            </p>
          </div>
          <div style={styles.planCardHighlight}>
            <div style={styles.planBadge}>Priporočeno</div>
            <div style={styles.planName}>Mesečni načrt</div>
            <div style={styles.planDuration}>28 dni dostopa</div>
            <p style={{ fontSize: '14px', color: '#5b21b6', margin: '0' }}>
              Idealen za 28-dnevni izziv — celoten program
            </p>
          </div>
          <div style={styles.planCard}>
            <div style={styles.planName}>Tromesečni načrt</div>
            <div style={styles.planDuration}>84 dni dostopa</div>
            <p style={{ fontSize: '14px', color: '#6b7280', margin: '0' }}>
              Za poglobljeno učenje in utrjevanje znanja
            </p>
          </div>
        </div>

        <p style={styles.p}>
          Podrobnosti o vsakem načrtu (vključene vsebine, cena, dostop do skupnosti) so navedene na strani z cenami. Vsak načrt vključuje popoln dostop do vseh lekcij in materialov za izbrano obdobje.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.h2}>2. Cene in plačila</h2>
        <p style={styles.p}>
          Cene naročniških načrtov so navedene na spletni strani ainexo in so v eurih (EUR). Cene vključujejo davek na dodano vrednost (DDV), kjer je to zakonsko predpisano.
        </p>
        <p style={styles.p}>Plačila sprejemamo prek:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Kreditnih in debetnih kartic (Visa, Mastercard, American Express)</li>
          <li style={styles.li}>Bančnega transferja (za letne načrte)</li>
          <li style={styles.li}>Digitalnih denarnic, kjer so na voljo</li>
        </ul>
        <p style={styles.p}>
          Plačila obdeluje Stripe Inc., certificiran ponudnik plačilnih storitev (PCI-DSS Level 1). ainexo nima dostopa do polnih podatkov vaše plačilne kartice.
        </p>
        <p style={styles.p}>
          Po uspešnem plačilu prejmete potrdilo na vaš e-poštni naslov. Račun za plačano naročnino je na voljo v vašem profilu.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.h2}>3. Samodejno podaljšanje</h2>
        <p style={styles.p}>
          Vsi naročniški načrti se <strong>samodejno podaljšujejo</strong> ob koncu vsakega obdobja, razen če naročnino pravočasno prekinete.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Tedenski načrt: podaljša se vsak 7. dan</li>
          <li style={styles.li}>Mesečni načrt: podaljša se vsak 28. dan</li>
          <li style={styles.li}>Tromesečni načrt: podaljša se vsak 84. dan</li>
        </ul>
        <p style={styles.p}>
          Pred vsakim podaljšanjem vam pošljemo opomnik na e-poštni naslov vsaj <strong>3 dni vnaprej</strong>. Naročnino lahko prekinete kadar koli (glejte razdelek Preklic naročnine).
        </p>
        <p style={styles.p}>
          Ob neuspelem plačilu vas takoj obvestimo in vam damo 7-dnevni rok za posodobitev plačilne metode, preden začasno prekinemo dostop.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.h2}>4. Preklic naročnine</h2>
        <p style={styles.p}>
          Naročnino lahko <strong>prekinete kadar koli</strong> brez kazni ali posebnih pogojev:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>V svojem profilu: <em>Nastavitve → Naročnina → Preklic naročnine</em></li>
          <li style={styles.li}>Prek e-pošte: info@ainexo.com</li>
        </ul>
        <p style={styles.p}>
          Po preklicu ohranite dostop do platforme do konca plačanega obdobja. Takrat se dostop samodejno zaključi in ni nadaljnjih zaračunavanj.
        </p>
        <p style={styles.p}>
          Priporočamo preklic vsaj <strong>24 ur pred datumom naslednjega zaračunavanja</strong>, da zagotovite pravočasno obdelavo.
        </p>
        <p style={styles.p}>
          Po preklicu naročnine vaš račun ostane aktiven (brez plačljivih vsebin). Račun in podatke lahko kadar koli izbrišete v nastavitvah profila.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.h2}>5. Vračila</h2>

        <div style={styles.guaranteeBox}>
          <p style={styles.guaranteeText}>
            ✓ 7-dnevna garancija vračila denarja — brez vprašanj
          </p>
        </div>

        <p style={styles.p}>
          Ponujamo <strong>7-dnevno garancijo vračila denarja</strong> za vse nove naročnine. Če v prvih 7 dneh po zakupu niste zadovoljni, vam povrnemo celoten znesek — brez vprašanj.
        </p>
        <p style={styles.p}>Pogoji za vračilo:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Zahteva mora biti poslana v 7 dneh od datuma prvega plačila</li>
          <li style={styles.li}>Zahtevo pošljite na info@ainexo.com z naslovom &ldquo;Zahteva za vračilo&rdquo;</li>
          <li style={styles.li}>Navedite ime, e-poštni naslov in datum nakupa</li>
        </ul>
        <p style={styles.p}>
          Vračila za podaljšane naročnine (po 7-dnevnem obdobju garancije) se presojajo posamično. V primeru tehničnih napak ali izrednih okoliščin nas kontaktirajte — poizkušali bomo najti pravično rešitev.
        </p>
        <p style={styles.p}>
          Odobrena vračila so obdelana v 5–10 delovnih dneh in se povrnejo na prvotno plačilno metodo.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.h2}>6. Spremembe cen</h2>
        <p style={styles.p}>
          ainexo si pridržuje pravico do spremembe cen naročniških načrtov. O vsakršni spremembi cen vas bomo obvestili vsaj <strong>14 dni vnaprej</strong> prek e-pošte.
        </p>
        <p style={styles.p}>
          Obstoječe naročnine: vaša naročnina bo ob naslednji obnovi zaračunana po novi ceni. Do takrat ostane cena nespremenjena.
        </p>
        <p style={styles.p}>
          Če se s novo ceno ne strinjate, imate pravico prekiniti naročnino pred datumom naslednje obnove — dostop do konca plačanega obdobja vam bo seveda ostal.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.h2}>7. Kontakt</h2>
        <p style={styles.p}>Za vprašanja o naročnini, plačilih ali vračilih smo vam na voljo:</p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Podjetje:</strong> ainexo d.o.o.</li>
          <li style={styles.li}><strong>Naslov:</strong> Trg komandanta Staneta 8, 1000 Ljubljana, Slovenija</li>
          <li style={styles.li}><strong>E-pošta:</strong> info@ainexo.com</li>
        </ul>
        <p style={styles.p}>
          Odgovorimo v 1–2 delovnih dneh. Za nujne zadeve v zvezi z zaračunavanjem si prizadevamo za odgovor isti delovni dan.
        </p>
        <p style={styles.p}>
          Glejte tudi naše <a href="/terms" style={{ color: '#7c3aed' }}>Pogoje uporabe</a> in <a href="/privacy" style={{ color: '#7c3aed' }}>Politiko zasebnosti</a>.
        </p>
      </div>

      <div style={styles.footer}>
        <a href="/" style={styles.backLink}>← Nazaj na začetno stran</a>
      </div>
    </div>
  );
}
