'use client';

import { useEffect, useRef, useState } from 'react';

const projects = [
  { name: 'Astra', type: 'Fintech / 2026', tone: 'violet', metric: '+218%', label: 'wzrost konwersji', copy: 'Nowy wymiar inwestowania' },
  { name: 'Morrow', type: 'Architecture / 2026', tone: 'blue', metric: '4.8×', label: 'dłuższa sesja', copy: 'Przestrzeń, która oddycha' },
  { name: 'Noema', type: 'AI Product / 2025', tone: 'pearl', metric: '37 dni', label: 'od idei do startu', copy: 'Inteligencja po ludzku' },
];

const services = [
  ['01', 'Strategia', 'Odkrywamy sedno marki, odbiorców i przewagę. Zanim powstanie piksel, wiemy dokąd zmierzamy.'],
  ['02', 'Experience design', 'Projektujemy intuicyjne ścieżki i interfejsy, które wyglądają świeżo i prowadzą do działania.'],
  ['03', 'Creative development', 'Kodujemy szybkie, responsywne doświadczenia z ruchem, głębią i charakterem.'],
  ['04', 'Growth & care', 'Mierzymy, iterujemy i dbamy o stronę po premierze, żeby rosła razem z biznesem.'],
];

export default function Home() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const stage = stageRef.current;
    const onMove = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      stage?.style.setProperty('--rx', `${-y * 9}deg`);
      stage?.style.setProperty('--ry', `${x * 13}deg`);
      document.documentElement.style.setProperty('--mx', `${event.clientX}px`);
      document.documentElement.style.setProperty('--my', `${event.clientY}px`);
    };
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.14 },
    );
    document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));
    window.addEventListener('pointermove', onMove);
    return () => { window.removeEventListener('pointermove', onMove); observer.disconnect(); };
  }, []);

  const project = projects[activeProject];

  return (
    <main>
      <div className="aurora" aria-hidden="true" />
      <header className="nav glass">
        <a className="brand" href="#top" aria-label="NOVA — strona główna"><span className="brand-mark"><i /></span>NOVA<span>.</span></a>
        <nav aria-label="Główna nawigacja"><a href="#uslugi">Usługi</a><a href="#projekty">Realizacje</a><a href="#proces">Proces</a></nav>
        <a className="nav-cta" href="#kontakt">Porozmawiajmy <b>↗</b></a>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow"><span /> Digital studio · Warszawa / wszędzie</div>
        <h1>Tworzymy strony<br />z <em>innego wymiaru.</em></h1>
        <p className="lead">Strategia, design i technologia połączone w cyfrowe doświadczenia, których nie da się przewinąć obojętnie.</p>
        <div className="hero-actions">
          <a className="primary" href="#kontakt">Zacznijmy projekt <span>↗</span></a>
          <a className="text-link" href="#projekty">Zobacz nasze światy <span>↓</span></a>
        </div>
        <div className="stage-wrap" aria-label="Interaktywna makieta strony">
          <div className="stage" ref={stageRef}>
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="scene-panel glass">
              <div className="scene-top"><span className="scene-logo">N°24</span><span>EXPERIENCE / DESIGN</span><i /></div>
              <div className="scene-copy"><small>THE NEW</small><strong>DIGITAL<br />ORBIT</strong><a href="#projekty" aria-label="Otwórz projekty">↗</a></div>
              <div className="planet"><div className="planet-glow" /></div>
              <div className="scene-foot"><span>IMMERSIVE WEB</span><span>01 — 06</span></div>
            </div>
            <div className="float-card card-one glass"><span>01</span><b>Design, który<br />przyciąga.</b></div>
            <div className="float-card card-two glass"><div className="wave">⌁⌁⌁</div><small>ŁADOWANIE EMOCJI</small><b>98%</b></div>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true"><div>NIE ROBIMY ZWYKŁYCH STRON <i>✦</i> BUDUJEMY CYFROWE DOŚWIADCZENIA <i>✦</i> NIE ROBIMY ZWYKŁYCH STRON <i>✦</i> BUDUJEMY CYFROWE DOŚWIADCZENIA <i>✦</i></div></div>

      <section className="section intro reveal" id="uslugi">
        <div className="section-tag"><span>01</span> Co robimy</div>
        <div className="intro-grid">
          <h2>Łączymy odważne idee<br />z <em>precyzyjnym wykonaniem.</em></h2>
          <p>Nie projektujemy dekoracji. Budujemy systemy, które opowiadają historię marki, wywołują emocje i zamieniają zainteresowanie w realny wynik.</p>
        </div>
        <div className="service-list">
          {services.map(([num, title, copy]) => <article className="service glass" key={num} tabIndex={0}><span>{num}</span><h3>{title}</h3><p>{copy}</p><b>↗</b></article>)}
        </div>
      </section>

      <section className="section projects reveal" id="projekty">
        <div className="section-tag"><span>02</span> Wybrane realizacje</div>
        <div className="projects-head"><h2>Światy, które<br /><em>już działają.</em></h2><p>Przesuń, kliknij, odkrywaj.</p></div>
        <div className="project-shell glass">
          <div className={`project-art ${project.tone}`} key={project.name}>
            <div className="art-grid" /><div className="project-orb"><i /></div>
            <span className="micro">NOVA / SELECTED WORK</span>
            <strong>{project.copy}</strong>
            <div className="project-ui glass"><small>LIVE SIGNAL</small><b>{project.metric}</b><span>{project.label}</span></div>
          </div>
          <div className="project-info">
            <span className="project-index">0{activeProject + 1} / 0{projects.length}</span>
            <h3>{project.name}</h3><p>{project.type}</p>
            <a href="#kontakt">Zobacz case study <b>↗</b></a>
            <div className="project-tabs" role="tablist" aria-label="Wybierz projekt">
              {projects.map((item, index) => <button key={item.name} role="tab" aria-selected={index === activeProject} onClick={() => setActiveProject(index)}><span>0{index + 1}</span>{item.name}</button>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section stats reveal" aria-label="Wyniki">
        <div><strong>42</strong><span>premiery cyfrowe</span></div><div><strong>11</strong><span>międzynarodowych nagród</span></div><div><strong>4.9</strong><span>średnia ocena współpracy</span></div><div><strong>93%</strong><span>klientów wraca z kolejnym pomysłem</span></div>
      </section>

      <section className="section process reveal" id="proces">
        <div className="section-tag"><span>03</span> Nasz proces</div>
        <h2>Od pierwszej iskry<br />do <em>wielkiego wejścia.</em></h2>
        <div className="process-line"><i /></div>
        <div className="steps">
          <article><span>01 / DISCOVER</span><div className="step-dot" /><h3>Rozumiemy</h3><p>Warsztat, cele, ludzie i sedno produktu. Zadajemy pytania, które otwierają właściwe drzwi.</p></article>
          <article><span>02 / CREATE</span><div className="step-dot" /><h3>Projektujemy</h3><p>Tworzymy kierunek wizualny, narrację i prototyp. Każdy ruch ma znaczenie.</p></article>
          <article><span>03 / BUILD</span><div className="step-dot" /><h3>Budujemy</h3><p>Precyzyjny kod, szybkie działanie i jakość na każdym ekranie. Bez kompromisów.</p></article>
          <article><span>04 / LAUNCH</span><div className="step-dot" /><h3>Uruchamiamy</h3><p>Testy, analityka, premiera i opieka. Efekt nie kończy się na publikacji.</p></article>
        </div>
      </section>

      <section className="section manifesto reveal">
        <div className="manifesto-orb" aria-hidden="true"><i /><b /></div>
        <span className="quote-mark">“</span><blockquote>Dobra strona mówi, czym jesteś.<br /><em>Wybitna pokazuje, kim możesz się stać.</em></blockquote>
        <p>— Zespół NOVA</p>
      </section>

      <section className="contact reveal" id="kontakt">
        <div className="contact-glow" />
        <div className="section-tag"><span>04</span> Następny krok</div>
        <h2>Masz pomysł?<br /><em>Wprawmy go w ruch.</em></h2>
        <p>Opowiedz nam, co budujesz. Wrócimy z pierwszymi przemyśleniami w ciągu 48 godzin.</p>
        <a className="contact-button" href="mailto:hello@nova.studio?subject=Nowy%20projekt">hello@nova.studio <span>↗</span></a>
        <footer><a className="brand" href="#top"><span className="brand-mark"><i /></span>NOVA<span>.</span></a><span>© 2026 NOVA DIGITAL STUDIO</span><div><a href="#uslugi">Instagram</a><a href="#projekty">Behance</a><a href="#top">LinkedIn</a></div></footer>
      </section>
    </main>
  );
}

