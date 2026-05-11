'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useFunnel } from '@/context/FunnelContext';

// ─── Types ───────────────────────────────────────────────────────────────────

type CardStyle = 'singleSelect' | 'fullSingleSelect' | 'multiSelect';

interface Option {
  emoji?: string;
  label: string;
  subtitle?: string;
}

interface Question {
  id: number;
  title: string;
  subtitle?: string;
  style: CardStyle;
  options: Option[];
  showPersonImage?: boolean;
  personImage?: string;
  teaserAfter?: boolean;
  teaserCondition?: (value: string) => boolean;
  teaserTitle?: string;
  teaserDesc?: string;
  teaserImage?: string;
  teaserVariants?: { condition: (v: string) => boolean; title: string; desc: string }[];
}

// ─── Questions Data ───────────────────────────────────────────────────────────

const questions: Question[] = [
  {
    id: 1,
    title: 'Koliko ste stari?',
    subtitle: 'Personalizirali bomo vaš AI izziv glede na vaše odgovore',
    style: 'fullSingleSelect',
    options: [
      { label: '18-24' },
      { label: '25-34' },
      { label: '35-44' },
      { label: '45-54' },
      { label: '55+' },
    ],
  },
  {
    id: 2,
    title: 'Kateri je vaš glavni cilj?',
    style: 'singleSelect',
    options: [
      { emoji: '💰', label: 'Pridobiti finančna znanja' },
      { emoji: '🔧', label: 'Graditi osebne projekte' },
      { emoji: '📈', label: 'Profesionalna rast' },
      { emoji: '🎯', label: 'Načrtovati prihodnost' },
      { emoji: '⭐', label: 'Samoizboljšanje' },
    ],
  },
  {
    id: 3,
    title: 'Se počutite preobremenjeni z AI?',
    style: 'singleSelect',
    options: [
      { emoji: '😫', label: 'Vedno' },
      { emoji: '😟', label: 'Pogosto' },
      { emoji: '😐', label: 'Včasih' },
      { emoji: '😊', label: 'Ne ravno' },
    ],
  },
  {
    id: 4,
    title: 'Kako udobno se počutite z AI orodji?',
    style: 'singleSelect',
    options: [
      { emoji: '🤷', label: 'Nič ne vem' },
      { emoji: '😰', label: 'Zelo se trudim' },
      { emoji: '😐', label: 'Včasih se trudim' },
      { emoji: '😎', label: 'Udobno se počutim' },
    ],
  },
  {
    id: 5,
    title: 'Se bojite, da boste zaostali za AI trendom?',
    style: 'singleSelect',
    options: [
      { emoji: '😰', label: 'Vedno' },
      { emoji: '😟', label: 'Pogosto' },
      { emoji: '🤔', label: 'Včasih' },
      { emoji: '😌', label: 'Ne ravno' },
    ],
    teaserAfter: true,
    teaserCondition: (v) => v === 'Vedno' || v === 'Pogosto',
    teaserTitle: 'Ne skrbite več!',
    teaserDesc: 'Pomagali smo več kot 100.000 odraslim obvladati AI in lahko pomagamo tudi vam. Naš izziv temelji na tisočih urah raziskav in vsebini, skrbno prilagojeni vašim potrebam in znanju!',
  },
  {
    id: 6,
    title: 'Ali menite, da se je težko naučiti AI?',
    style: 'singleSelect',
    options: [
      { emoji: '😓', label: 'Da, ves čas' },
      { emoji: '💪', label: 'Da, ampak se želim naučiti' },
      { emoji: '😊', label: 'Ne, ni težko' },
    ],
  },
  {
    id: 7,
    title: 'Ocenite svoje znanje AI orodij',
    style: 'singleSelect',
    options: [
      { emoji: '😎', label: 'Strokovnjak', subtitle: 'Imam obsežno znanje' },
      { emoji: '😊', label: 'Vešč', subtitle: 'Sem usposobljen' },
      { emoji: '🤔', label: 'Srednji', subtitle: 'Imam nekaj znanja' },
      { emoji: '😬', label: 'Začetnik', subtitle: 'Nimam izkušenj' },
    ],
  },
  {
    id: 8,
    title: 'Ste že kdaj uporabili ChatGPT?',
    style: 'singleSelect',
    options: [
      { emoji: '🤓', label: 'Da, uporabljam ga dnevno' },
      { emoji: '😃', label: 'Da, nekajkrat' },
      { emoji: '🥲', label: 'Bojim se ga uporabiti' },
      { emoji: '😞', label: 'Ne poznam ChatGPT' },
    ],
  },
  {
    id: 9,
    title: 'Katera AI orodja že poznate?',
    subtitle: 'Izberite vse, ki veljajo',
    style: 'multiSelect',
    options: [
      { emoji: '🤔', label: 'Nov v AI orodjih' },
      { emoji: '🎨', label: 'Midjourney' },
      { emoji: '💻', label: 'Google Gemini' },
      { emoji: '🦛', label: 'Otter.ai' },
      { emoji: '🎧', label: 'AIVA' },
      { emoji: '👨‍🎨', label: 'DALL-E' },
      { emoji: '😊', label: 'Jasper' },
      { emoji: '👨‍✈️', label: 'Copilot' },
      { emoji: '🛝', label: 'OpenAI Playground' },
    ],
  },
  {
    id: 10,
    title: 'Kaj vas je zadržalo pri obvladovanju AI orodij?',
    style: 'singleSelect',
    options: [
      { emoji: '🥴', label: 'Ni jasnega sistema' },
      { emoji: '⏰', label: 'Premalo časa' },
      { emoji: '👵', label: 'Počutil sem se prepozno' },
      { emoji: '🤯', label: 'Preveč zapleteno zame' },
    ],
    teaserAfter: true,
    teaserTitle: 'Najboljši čas za obvladovanje AI je bil včeraj. Drugi najboljši čas je danes!',
    teaserDesc: 'Večina ljudi ne vidi rezultatov isti mesec, ko se odloči za spremembo.\nPrejšnji mesec je bil za gradnjo vaše prednosti.\nTa mesec boste veseli, da ste začeli — ker ne boste več začenjali iz ničle.',
  },
  {
    id: 11,
    title: 'Se bojite, da vas bo AI nadomestil?',
    style: 'singleSelect',
    options: [
      { emoji: '😬', label: 'Da, ves čas' },
      { emoji: '🥲', label: 'Da, včasih' },
      { emoji: '😉', label: 'Ne, ker vem kako ga uporabljati' },
      { emoji: '😐', label: 'Nikoli nisem razmišljal o tem' },
    ],
    teaserAfter: true,
    teaserImage: '/images/teaser-man-mountain.jpg',
    teaserTitle: 'Ni razloga za skrb!',
    teaserDesc: 'Naučili vas bomo, kako AI orodja delajo ZA vas — ne namesto vas. Postanite nepogrešljivi v svoji industriji.',
  },
  {
    id: 12,
    title: 'Ste razmišljali kako bi AI znanja vplivala na vašo kariero?',
    style: 'singleSelect',
    options: [
      { emoji: '🥰', label: 'Da, slišal sem o tem' },
      { emoji: '🤓', label: 'Radoveden sem' },
      { emoji: '🧐', label: 'Ne, to je novica zame' },
    ],
  },
  {
    id: 13,
    title: 'Kateri dohodkovni razpon ustreza vašim kariernim ciljem?',
    style: 'fullSingleSelect',
    showPersonImage: true,
    personImage: '/images/quiz-woman.png',
    options: [
      { label: '15.000€ - 30.000€' },
      { label: '30.000€ - 60.000€' },
      { label: 'Več kot 60.000€' },
    ],
  },
  {
    id: 14,
    title: 'Ste pripravljeni na učenje novih veščin ali tehnik?',
    style: 'singleSelect',
    options: [
      { emoji: '👍', label: 'Da' },
      { emoji: '👎', label: 'Ne' },
      { emoji: '🤔', label: 'Hm, nisem prepričan' },
    ],
  },
  {
    id: 15,
    title: 'Na katerih področjih bi se radi preizkusili?',
    subtitle: 'Izberite vse, ki veljajo',
    style: 'multiSelect',
    options: [
      { emoji: '🎨', label: 'Grafični dizajn' },
      { emoji: '✍️', label: 'Ustvarjanje vsebin' },
      { emoji: '💻', label: 'Spletni razvoj' },
      { emoji: '📊', label: 'Digitalni marketing' },
      { emoji: '📱', label: 'Upravljanje družbenih omrežij' },
      { emoji: '🎬', label: 'Video montaža' },
      { emoji: '📷', label: 'Fotografija' },
      { emoji: '🛒', label: 'E-trgovina' },
      { emoji: '💼', label: 'Svetovanje' },
    ],
  },
  {
    id: 16,
    title: 'Ocenite svojo pripravljenost za obvladovanje AI',
    style: 'singleSelect',
    options: [
      { emoji: '🚀', label: 'Pripravljen' },
      { emoji: '👍', label: 'Večinoma pripravljen' },
      { emoji: '🤏', label: 'Delno pripravljen' },
      { emoji: '😐', label: 'Nepripravljen' },
    ],
  },
  {
    id: 17,
    title: 'Vam je lahko ohranjati osredotočenost?',
    style: 'singleSelect',
    teaserAfter: true,
    teaserImage: '/images/teaser-focus.jpg',
    teaserVariants: [
      {
        condition: (v) => v === 'Da, zlahka ostajam osredotočen',
        title: 'To je močna prednost!',
        desc: 'Ko osredotočenost ni problem, je napredek odvisen od smeri. S pravim sistemom se osredotočen trud kopiči veliko hitreje.',
      },
      {
        condition: () => true,
        title: 'To je normalno — le šum!',
        desc: 'Večina ljudi se zmoti, ko stvari niso jasne ali prednostno razporejene. Ko je pot poenostavljena, ostati osredotočen postane veliko lažje.',
      },
    ],
    options: [
      { emoji: '🎯', label: 'Da, zlahka ostajam osredotočen' },
      { emoji: '😅', label: 'Večinoma, a me včasih zmoti' },
      { emoji: '😓', label: 'Pogosto se trudim' },
      { emoji: '😩', label: 'Ne, pogosto odlašam' },
    ],
  },
  {
    id: 18,
    title: 'Nastavimo vaš dnevni cilj obvladovanja AI',
    style: 'fullSingleSelect',
    showPersonImage: true,
    personImage: '/images/quiz-person-goal.png',
    options: [
      { label: '10 min/dan' },
      { label: '15 min/dan' },
      { label: '20 min/dan' },
    ],
  },
  {
    id: 19,
    title: 'Pripravljen sem se zavezati:',
    subtitle: 'Izberite vse, ki veljajo',
    style: 'multiSelect',
    options: [
      { emoji: '📚', label: 'Vsak dan se naučiti nekaj novega' },
      { emoji: '💻', label: 'Ustvariti boljše navade okoli tehnologije' },
      { emoji: '🚀', label: 'Doseči svoje osebne cilje' },
    ],
  },
  {
    id: 20,
    title: 'Kako bi proslavili svoje prve rezultate z AI?',
    subtitle: 'Postavljanje ciljev in nagrajevanje sebe vas ohranja motivirane',
    style: 'singleSelect',
    teaserAfter: true,
    teaserImage: '/images/trophy-v2.jpg',
    teaserTitle: 'Že napreduješ!',
    teaserDesc: 'Raziskave kažejo, da jasni cilji in majhne nagrade krepijo motivacijo in doslednost. Pomagali vam bomo postaviti jasne cilje, poudariti majhne zmage in ohranjati vaš zagon. ainexo ohranja vaše cilje na očeh in pošilja nežne opomnike med učenjem.',
    options: [
      { emoji: '💳', label: 'Poravnati račune' },
      { emoji: '🏦', label: 'Dodati v pokojninski sklad' },
      { emoji: '🛡️', label: 'Dodati v sklad za nujne primere' },
      { emoji: '✈️', label: 'Načrtovati počitnice' },
      { emoji: '👀', label: 'Drugo' },
    ],
  },
];

// ─── Teaser Modal ─────────────────────────────────────────────────────────────

function TeaserModal({ title, desc, onContinue, questionId, image }: { title: string; desc: string; onContinue: () => void; questionId?: number; image?: string }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white page-fade-in" style={{ maxWidth: 480, margin: '0 auto' }}>
      {/* Header with bottom border */}
      <header
        className="relative flex items-center justify-center px-5"
        style={{ height: 56, borderBottom: '1px solid #ECECEC' }}
      >
        <Image src="/images/logo.svg" alt="ainexo" width={140} height={42} />
      </header>

      {/* Image */}
      <div style={{ padding: '16px 20px 0 20px' }}>
        <div className="relative w-full overflow-hidden" style={{ borderRadius: 16, aspectRatio: '4/3' }}>
          <Image src={image || (questionId === 10 ? 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&h=400&fit=crop' : '/images/teaser.webp')} alt="" fill style={{ objectFit: 'contain' }} />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col" style={{ maxWidth: 420, margin: '0 auto', width: '100%', paddingTop: 24, paddingLeft: 24, paddingRight: 24, paddingBottom: 80 }}>
        <h2 className="font-extrabold text-[#100018]" style={{ fontSize: 26, lineHeight: 1.3 }}>{title}</h2>
        <p className="text-[#565B66] leading-relaxed" style={{ fontSize: 16, marginTop: 16 }}>{desc}</p>
      </div>

      {/* Sticky button */}
      <div style={{ position: 'sticky', bottom: 0, background: 'linear-gradient(transparent, white 20%)', padding: '24px 24px 28px' }}>
        <button
          onClick={onContinue}
          className="w-full rounded-2xl text-white font-bold text-lg transition-opacity active:opacity-80 uppercase"
          style={{ background: '#5653FE', height: 56 }}
        >
          NADALJUJ
        </button>
      </div>
    </div>
  );
}

// ─── Main QuizPage ─────────────────────────────────────────────────────────────

export default function QuizPage() {
  const { quizStep, setQuizStep, setQuizAnswer, nextPage, prevPage } = useFunnel();
  const [multiSelected, setMultiSelected] = useState<string[]>([]);
  const [showTeaser, setShowTeaser] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [lastAnswer, setLastAnswer] = useState<string | null>(null);

  const q = questions[quizStep - 1];
  if (!q) return null;

  const total = questions.length;
  const progress = ((quizStep) / total) * 100;

  const handleBack = () => {
    if (quizStep === 1) {
      prevPage();
    } else {
      setQuizStep(quizStep - 1);
      setMultiSelected([]);
      setSelectedAnswer(null);
    }
  };

  const handleSingleAnswer = (label: string) => {
    setSelectedAnswer(label);
    setTimeout(() => {
      setQuizAnswer(q.id, label);
      // Show teaser if question has teaserAfter
      const shouldShowTeaser = q.teaserAfter && (
        !q.teaserCondition || q.teaserCondition(label)
      );
      
      if (shouldShowTeaser && (q.teaserTitle || q.teaserVariants)) {
        setLastAnswer(label);
        setShowTeaser(true);
      } else {
        advanceQuiz();
      }
      setSelectedAnswer(null);
    }, 250);
  };

  const advanceQuiz = () => {
    setShowTeaser(false);
    if (quizStep < total) {
      setQuizStep(quizStep + 1);
      setMultiSelected([]);
      setSelectedAnswer(null);
    } else {
      nextPage();
    }
  };

  const handleMultiToggle = (label: string) => {
    setMultiSelected(prev =>
      prev.includes(label) ? prev.filter(l => l !== label) : [...prev, label]
    );
  };

  const handleMultiConfirm = () => {
    setQuizAnswer(q.id, multiSelected);
    advanceQuiz();
  };

  if (showTeaser && (q.teaserTitle || q.teaserVariants)) {
    let teaserTitle = q.teaserTitle || '';
    let teaserDesc = q.teaserDesc || '';
    
    // Check variants for conditional teaser content
    if (q.teaserVariants && lastAnswer !== null) {
      const variant = q.teaserVariants.find(v => v.condition(lastAnswer));
      if (variant) {
        teaserTitle = variant.title;
        teaserDesc = variant.desc;
      }
    } else if (q.teaserVariants) {
      // Fallback to last variant (default)
      const variant = q.teaserVariants[q.teaserVariants.length - 1];
      teaserTitle = variant.title;
      teaserDesc = variant.desc;
    }
    
    return (
      <TeaserModal
        title={teaserTitle}
        desc={teaserDesc}
        onContinue={advanceQuiz}
        questionId={q.id}
        image={q.teaserImage}
      />
    );
  }

  return (
    <div className="page-fade-in min-h-screen flex flex-col bg-white" style={{ maxWidth: 390, margin: '0 auto' }}>
      {/* Header */}
      <div
        className="flex items-center justify-between px-4"
        style={{ height: 48, borderBottom: '1px solid #ECECEC' }}
      >
        <button onClick={handleBack} className="p-1" aria-label="Nazaj">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="#100018" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <Image src="/images/logo.svg" alt="ainexo" width={120} height={36} />
        <span className="text-sm font-medium"><span style={{ color: '#5653FE', fontWeight: 700 }}>{quizStep}</span><span style={{ color: '#565B66' }}> / {total}</span></span>
      </div>

      {/* Progress bar - thin 3px */}
      <div className="w-full" style={{ height: 3, background: '#ECECEC' }}>
        <div
          className="h-full transition-all duration-300"
          style={{ width: `${progress}%`, background: '#5653FE' }}
        />
      </div>

      {/* Question content */}
      <div className="flex-1 flex flex-col px-4 pt-16 pb-6" style={{ maxWidth: 360, margin: '0 auto', width: '100%' }}>
        {q.showPersonImage ? (
          <QuestionWithImage q={q} onSelect={handleSingleAnswer} selectedAnswer={selectedAnswer} />
        ) : (
          <>
            <h2 className="text-xl font-bold text-[#100018] leading-snug text-center">{q.title}</h2>
            {q.subtitle && (
              <p className="mt-1.5 text-sm text-[#565B66] text-center">{q.subtitle}</p>
            )}
            <div className="mt-16 flex flex-col gap-4">
              {q.style === 'singleSelect' && (
                q.options.map(opt => {
                  const isSelected = selectedAnswer === opt.label;
                  return (
                    <button
                      key={opt.label}
                      onClick={() => handleSingleAnswer(opt.label)}
                      className="flex items-center gap-4 w-full text-left transition-all active:scale-[0.98] focus:outline-none"
                      style={{
                        background: isSelected ? '#EEEEFF' : '#F3F5F6',
                        border: isSelected ? '2px solid #5653FE' : '1px solid #ECECEC',
                        borderRadius: 16,
                        padding: '20px 20px',
                        minHeight: opt.subtitle ? 120 : 90,
                      }}
                    >
                      {opt.emoji && (
                        <span className="flex-shrink-0 flex items-center justify-center" style={{ width: 60, height: 60, fontSize: 52 }}>{opt.emoji}</span>
                      )}
                      <div className="flex-1 min-w-0">
                        <span className="font-bold text-[#222]" style={{ fontSize: 18 }}>{opt.label}</span>
                        {opt.subtitle && (
                          <p className="text-sm text-[#565B66] mt-1">{opt.subtitle}</p>
                        )}
                      </div>
                    </button>
                  );
                })
              )}

              {q.style === 'fullSingleSelect' && (
                <div className="relative flex-1" style={{ minHeight: 480 }}>
                  <div className="flex flex-col gap-4 relative z-10" style={{ maxWidth: '68%' }}>
                    {q.options.map(opt => {
                      const isSelected = selectedAnswer === opt.label;
                      return (
                        <button
                          key={opt.label}
                          onClick={() => handleSingleAnswer(opt.label)}
                          className="flex items-center justify-center text-center font-bold text-[#222] transition-all active:scale-[0.98] focus:outline-none"
                          style={{
                            background: isSelected ? '#EEEEFF' : 'rgba(243,245,246,0.95)',
                            border: isSelected ? '2px solid #5653FE' : '1px solid #ECECEC',
                            borderRadius: 16,
                            padding: '22px 24px',
                            minHeight: 74,
                            fontSize: 18,
                          }}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                  {/* Person image - large, right side, flush with bottom edge */}
                  {q.id === 1 && (
                    <div className="fixed z-0" style={{ right: 0, bottom: 0, width: 260 }}>
                      <Image src="/images/quiz-person.jpg" alt="" width={260} height={450} className="object-contain object-bottom" />
                    </div>
                  )}
                </div>
              )}

              {q.style === 'multiSelect' && (
                <>
                  <div className="flex flex-col gap-4">
                    {q.options.map(opt => {
                      const selected = multiSelected.includes(opt.label);
                      return (
                        <button
                          key={opt.label}
                          onClick={() => handleMultiToggle(opt.label)}
                          className="flex items-center gap-5 w-full text-left transition-all active:scale-[0.98] focus:outline-none"
                          style={{
                            background: selected ? '#F0EFFF' : '#F3F5F6',
                            border: selected ? '2px solid #5653FE' : '1px solid #ECECEC',
                            borderRadius: 16,
                            padding: '24px 20px',
                            minHeight: 100,
                          }}
                        >
                          {opt.emoji && <span className="flex-shrink-0" style={{ fontSize: 52 }}>{opt.emoji}</span>}
                          <span className="font-bold text-[#222] flex-1" style={{ fontSize: 18 }}>{opt.label}</span>
                          {selected && (
                            <div
                              className="flex-shrink-0 flex items-center justify-center"
                              style={{
                                width: 32,
                                height: 32,
                                borderRadius: 8,
                                background: '#5653FE',
                              }}
                            >
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12l5 5L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                  <div style={{ position: 'sticky', bottom: 0, background: 'linear-gradient(transparent, white 20%)', paddingTop: 24, paddingBottom: 24, paddingLeft: 20, paddingRight: 20 }}>
                    <button
                      onClick={handleMultiConfirm}
                      disabled={multiSelected.length === 0}
                      className="w-full rounded-2xl text-white font-bold text-lg transition-opacity disabled:opacity-40 uppercase"
                      style={{ background: '#5653FE', height: 56 }}
                    >
                      NASLEDNJI KORAK
                    </button>
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Question with person image (fullSingleSelect variant) ────────────────────

function QuestionWithImage({ q, onSelect, selectedAnswer }: { q: Question; onSelect: (v: string) => void; selectedAnswer: string | null }) {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex gap-4 items-start">
        <div className="flex-1">
          <h2 className="text-xl font-bold text-[#100018] leading-snug">{q.title}</h2>
        </div>
        {/* Empty spacer on right - person image shows below cards */}
        <div style={{ width: 40 }} />
      </div>
      <div className="relative" style={{ minHeight: 350 }}>
        <div className="flex flex-col gap-4 relative z-10" style={{ maxWidth: '70%' }}>
          {q.options.map(opt => {
            const isSelected = selectedAnswer === opt.label;
            return (
              <button
                key={opt.label}
                onClick={() => onSelect(opt.label)}
                className="flex items-center justify-center font-bold text-[#222] transition-all active:scale-[0.98] focus:outline-none"
                style={{
                  background: isSelected ? '#EEEEFF' : 'rgba(243,245,246,0.95)',
                  border: isSelected ? '2px solid #5653FE' : '1px solid #ECECEC',
                  borderRadius: 16,
                  padding: '22px 24px',
                  minHeight: 74,
                  fontSize: 18,
                }}
              >
                <span>{opt.label}</span>
              </button>
            );
          })}
        </div>
        {/* Person image - right side, from bottom */}
        <div className="fixed z-0" style={{ right: 0, bottom: 0, width: q.personImage === '/images/quiz-person-goal.png' ? 320 : 240 }}>
          <Image src={q.personImage || "/images/quiz-person.jpg"} alt="" width={q.personImage === '/images/quiz-person-goal.png' ? 320 : 240} height={q.personImage === '/images/quiz-person-goal.png' ? 530 : 400} className="object-contain object-bottom" />
        </div>
      </div>
    </div>
  );
}
