'use client';

import Image from 'next/image';
import { useFunnel } from '@/context/FunnelContext';

export default function TestimonialsPage() {
  const { nextPage } = useFunnel();

  return (
    <div className="page-fade-in flex flex-col bg-white" style={{ maxWidth: 390, margin: '0 auto', minHeight: '100vh' }}>
      {/* Header */}
      <header
        className="flex items-center justify-between px-4"
        style={{ height: 48, borderBottom: '1px solid #ECECEC' }}
      >
        <button className="p-1" aria-label="Nazaj">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="#100018" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <Image src="/images/logo.svg" alt="ainexo" width={120} height={36} />
        <div style={{ width: 22 }} />
      </header>

      {/* Step progress bar - 4/4 filled */}
      <div className="flex gap-2" style={{ padding: '12px 20px 0' }}>
        <div style={{ flex: 1, height: 4, background: '#5653FE', borderRadius: 2 }} />
        <div style={{ flex: 1, height: 4, background: '#5653FE', borderRadius: 2 }} />
        <div style={{ flex: 1, height: 4, background: '#5653FE', borderRadius: 2 }} />
        <div style={{ flex: 1, height: 4, background: '#5653FE', borderRadius: 2 }} />
      </div>

      {/* Content */}
      <div style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 32, paddingBottom: 100 }}>
        {/* Title */}
        <h1 style={{ fontSize: 28, fontWeight: 800, color: '#100018', lineHeight: 1.25, textAlign: 'center' }}>
          Poglejte kako ainexo opolnomoči uporabnike
        </h1>

        {/* Stats row */}
        <div className="flex justify-between" style={{ marginTop: 32, paddingLeft: 8, paddingRight: 8 }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 32, fontWeight: 800, color: '#5653FE' }}>1M+</p>
            <p style={{ fontSize: 13, color: '#565B66', marginTop: 4, lineHeight: 1.3 }}>Uporabnikov se je<br />naučilo novih veščin</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 32, fontWeight: 800, color: '#5653FE' }}>240k+</p>
            <p style={{ fontSize: 13, color: '#565B66', marginTop: 4, lineHeight: 1.3 }}>Uporabnikov je pridobilo<br />AI certifikate</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 32, fontWeight: 800, color: '#5653FE' }}>90%</p>
            <p style={{ fontSize: 13, color: '#565B66', marginTop: 4, lineHeight: 1.3 }}>Pozitivnih<br />ocen</p>
          </div>
        </div>

        {/* Section title */}
        <h2 style={{ fontSize: 24, fontWeight: 800, color: '#100018', textAlign: 'center', marginTop: 40, lineHeight: 1.3 }}>
          Slišite kaj drugi pravijo o ainexo
        </h2>

        {/* Review 1 - Trustpilot style */}
        <div style={{ border: '1px solid #E8E8E8', borderRadius: 20, padding: '24px', marginTop: 24 }}>
          {/* Author row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div style={{ width: 44, height: 44, borderRadius: 22, background: '#E0E0E0', overflow: 'hidden', position: 'relative' }}>
                <Image src="/images/avatar-matej.jpg" alt="" fill className="object-cover" />
              </div>
              <div>
                <p style={{ fontSize: 16, fontWeight: 700, color: '#100018' }}>Matej T.</p>
              </div>
            </div>
            <button style={{ fontSize: 20, color: '#9CA3AF' }}>⋮</button>
          </div>

          <p style={{ fontSize: 13, color: '#9CA3AF', marginTop: 4 }}>Ljubljana · 1 ocena · 0 koristnih glasov</p>

          {/* Stars + date */}
          <div className="flex items-center gap-3" style={{ marginTop: 16 }}>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ fontSize: 22, color: '#FBBF24' }}>★</span>
              ))}
            </div>
            <span style={{ fontSize: 14, color: '#9CA3AF' }}>8. oktober 2025</span>
          </div>

          {/* Solicited badge */}
          <div className="flex items-center gap-1.5" style={{ marginTop: 8 }}>
            <span style={{ fontSize: 14, color: '#3B82F6' }}>✓</span>
            <span style={{ fontSize: 13, color: '#3B82F6', fontWeight: 500 }}>Zaprošeno</span>
          </div>

          {/* Review text */}
          <p style={{ fontSize: 15, color: '#3A3A4A', lineHeight: 1.6, marginTop: 16 }}>
            Lekcije v tem tečaju vključujejo scenarije iz resničnega sveta, ki jih zlahka vidim, da jih uporabljam pri vsakodnevnih aktivnostih, ki jih opravljam kot del svojega dela. Lekcije nudijo vpogled v pravilno oblikovanje pozivov za doseganje smiselnih rezultatov, hkrati pa sledijo etičnim smernicam, ki morajo urejati uporabo AI orodij pri našem delu.
          </p>

          <p style={{ fontSize: 13, color: '#9CA3AF', marginTop: 16 }}>Datum izkušnje: 7. oktober 2025</p>
        </div>

        {/* Review 2 - LinkedIn style */}
        <div style={{ border: '1px solid #E8E8E8', borderRadius: 20, padding: '24px', marginTop: 16 }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div style={{ width: 44, height: 44, borderRadius: 22, background: '#E0E0E0', overflow: 'hidden', position: 'relative' }}>
                <Image src="/images/avatar-ana.jpg" alt="" fill className="object-cover" />
              </div>
              <div>
                <p style={{ fontSize: 16, fontWeight: 700, color: '#100018' }}>Ana M. <span style={{ fontSize: 13, color: '#9CA3AF', fontWeight: 400 }}>· 3+</span></p>
                <p style={{ fontSize: 13, color: '#9CA3AF' }}>Študentka prava</p>
                <p style={{ fontSize: 12, color: '#9CA3AF' }}>pred 2 mesecema</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span style={{ fontSize: 14, color: '#0A66C2', fontWeight: 700 }}>+ Sledi</span>
              <button style={{ fontSize: 20, color: '#9CA3AF', marginLeft: 8 }}>⋮</button>
            </div>
          </div>

          <p style={{ fontSize: 15, color: '#3A3A4A', lineHeight: 1.6, marginTop: 16 }}>
            ✨ Pravkar sem zaključila vznemirljivo učno pot! ✨{'\n'}
            Nedavno sem zaključila AI tečaj na ainexo, ki je pokrival:{'\n'}
            ✅ Jasper AI – odklepanje moči AI-podprte kreacije vsebin{'\n'}
            ✅ DeepSeek AI – raziskovanje naprednega AI razmišljanja in reševanja problemov{'\n'}
            ✅ 28-dnevni AI izziv – praktična uporaba AI orodij dosledno in kreativno{'\n\n'}
            Ta izkušnja je bila izjemno poučna, saj mi je zagotovila ne le tehnično znanje, ampak tudi praktične aplikacije, kako lahko AI preoblikuje delovne tokove, poveča produktivnost in spodbudi inovativnost.{'\n\n'}
            Velika zahvala <span style={{ color: '#0A66C2', fontWeight: 600 }}>ainexo</span> za tako strukturiran in privlačen program.{'\n'}
            Veselim se uporabe teh veščin v resničnih projektih!
          </p>
        </div>

        {/* Review 3 - LinkedIn style */}
        <div style={{ border: '1px solid #E8E8E8', borderRadius: 20, padding: '24px', marginTop: 16 }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div style={{ width: 44, height: 44, borderRadius: 22, background: '#E0E0E0', overflow: 'hidden', position: 'relative' }}>
                <Image src="/images/avatar-nina.jpg" alt="" fill className="object-cover" />
              </div>
              <div>
                <p style={{ fontSize: 16, fontWeight: 700, color: '#100018' }}>Nina K. <span style={{ fontSize: 13, color: '#9CA3AF', fontWeight: 400 }}>· 3+</span></p>
                <p style={{ fontSize: 13, color: '#9CA3AF' }}>Študentka marketinga | Univerza v Lj...</p>
                <p style={{ fontSize: 12, color: '#9CA3AF' }}>pred 3 meseci</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span style={{ fontSize: 14, color: '#0A66C2', fontWeight: 700 }}>+ Sledi</span>
              <button style={{ fontSize: 20, color: '#9CA3AF', marginLeft: 8 }}>⋮</button>
            </div>
          </div>

          <p style={{ fontSize: 15, color: '#3A3A4A', lineHeight: 1.6, marginTop: 16 }}>
            To poletje sem opravila več kot 41 ur AI usposabljanja prek <span style={{ color: '#0A66C2', fontWeight: 600 }}>ainexo</span>, in pridobila certifikate v sedmih vodilnih AI platformah.{'\n\n'}
            Skozi program sem raziskovala, kako lahko AI izboljša ustvarjanje vsebin, poenostavi raziskovanje in podpre kreativno strategijo. Praktično usposabljanje mi je pomagalo pridobiti globlje razumevanje inženiringa pozivov, vizualne generacije in praktičnih aplikacij besedilnih in slikovnih orodij.{'\n\n'}
            Certificirana v:{'\n'}
            • Claude 3.7{'\n'}
            • DALL·E{'\n'}
            • DeepSeek{'\n'}
            • Jasper AI{'\n'}
            • MidJourney{'\n'}
            • ChatGPT{'\n'}
            • Stable Diffusion{'\n\n'}
            <span style={{ color: '#0A66C2' }}>#AI #AICertifikat #ProfesionalniRazvoj #ainexo</span>
          </p>
        </div>

        {/* Review 4 - Twitter/X style */}
        <div style={{ border: '1px solid #E8E8E8', borderRadius: 20, padding: '24px', marginTop: 16 }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div style={{ width: 44, height: 44, borderRadius: 22, background: '#E0E0E0', overflow: 'hidden', position: 'relative' }}>
                <Image src="/images/avatar-petra.jpg" alt="" fill className="object-cover" />
              </div>
              <div>
                <p style={{ fontSize: 16, fontWeight: 700, color: '#100018' }}>Petra.XRR</p>
                <p style={{ fontSize: 13, color: '#9CA3AF' }}>@PetraKripto</p>
              </div>
            </div>
            <button style={{ fontSize: 20, color: '#9CA3AF' }}>···</button>
          </div>

          <p style={{ fontSize: 15, color: '#3A3A4A', lineHeight: 1.6, marginTop: 16 }}>
            Živjo Jure!{'\n'}
            Točno tako! Ta teden sem začela AI usposabljanje z ainexo. Nisem imela pojma, koliko bi lahko izboljšala svoje veščine in učinkovitost, in šele na površju sem! Lahko se usedete in pustite, da vas AI nadomesti, ali pa ga uporabite za izboljšanje svojih veščin! Začnite delati!
          </p>

          <p style={{ fontSize: 13, color: '#9CA3AF', marginTop: 16 }}>
            9:41 · 13. okt 2025 · <strong style={{ color: '#3A3A4A' }}>80</strong> Ogledov
          </p>
        </div>
      </div>

      {/* Sticky NADALJUJ button */}
      <div style={{ position: 'sticky', bottom: 0, background: 'linear-gradient(transparent, white 20%)', paddingTop: 24, paddingBottom: 24, paddingLeft: 20, paddingRight: 20 }}>
        <button
          onClick={nextPage}
          className="w-full font-bold uppercase"
          style={{
            background: '#5653FE',
            color: 'white',
            height: 60,
            borderRadius: 16,
            fontSize: 18,
          }}
        >
          NADALJUJ
        </button>
      </div>
    </div>
  );
}
