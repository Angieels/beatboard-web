import { useState } from "react";
import {
  ArrowDown, ArrowRight, AudioLines, BarChart3, CalendarDays, Check,
  ChevronDown, Disc3, Headphones, Heart, Menu, Mic2, Music2,
  Play, ShieldCheck, Sparkles, Wallet, X
} from "lucide-react";

const GITHUB_URL = "#"; // Pega aquí el enlace del repositorio público, si quieres mostrarlo.

const features = [
  { icon: Music2, title: "Tu música en un solo lugar", text: "Publica tus canciones y construye un espacio donde nuevas personas puedan descubrir tu sonido." },
  { icon: CalendarDays, title: "Organiza tus presentaciones", text: "Mantén tus eventos y fechas importantes más ordenados, sin perder de vista lo que viene." },
  { icon: Wallet, title: "Lleva tus finanzas", text: "Registra ingresos y movimientos relacionados con tu actividad artística." },
  { icon: BarChart3, title: "Conoce a tu audiencia", text: "Consulta reproducciones, comentarios y señales que te ayuden a entender cómo conecta tu música." },
  { icon: Heart, title: "Recibe opiniones", text: "Da espacio a las reseñas y comentarios de quienes escuchan tus canciones." },
  { icon: Disc3, title: "Construye tu catálogo", text: "Organiza sencillos, EP y álbumes para presentar tu trabajo con más claridad." }
];

const steps = [
  ["01", "Crea tu espacio", "Regístrate y configura tu perfil artístico con tu nombre, biografía y estilo."],
  ["02", "Comparte tu música", "Sube tus canciones y organiza tu catálogo para que las personas puedan escucharte."],
  ["03", "Impulsa tu proyecto", "Gestiona eventos, revisa tus estadísticas y mantén tu carrera más organizada."]
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);

  const closeMenu = () => setMenuOpen(false);
  const faqs = [
    ["¿BeatBoard tiene algún costo?", "No. BeatBoard está pensado para que artistas y oyentes puedan disfrutar de la plataforma gratis."],
    ["¿La plataforma muestra anuncios?", "La experiencia de BeatBoard está diseñada para escucharse sin anuncios."],
    ["¿Necesito ser artista para usar BeatBoard?", "No. También puedes entrar para descubrir música, escuchar canciones y guardar tus favoritas."],
    ["¿Puedo administrar mi proyecto musical?", "Sí. El espacio de artista reúne herramientas para organizar canciones, álbumes, eventos, finanzas y reseñas."]
  ];

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="BeatBoard inicio">
          <span className="brand-mark"><AudioLines size={22} /></span>
          <span>BeatBoard<span className="brand-period">.</span></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#beneficios" onClick={closeMenu}>Beneficios</a>
          <a href="#artistas" onClick={closeMenu}>Para artistas</a>
          <a href="#como-funciona" onClick={closeMenu}>Cómo funciona</a>
          <a href="#preguntas" onClick={closeMenu}>Preguntas</a>
          <a className="nav-cta" href="#beneficios">Explorar BeatBoard <ArrowRight size={16} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="inicio">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> UN ESPACIO PARA LA MÚSICA LOCAL</div>
            <h1>Tu música merece<br /><em>llegar más lejos.</em></h1>
            <p className="hero-lead">Descubre nuevos sonidos y ayuda a que los artistas locales impulsen su carrera. Todo lo que necesitas para vivir la música, en un mismo espacio.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#beneficios">Conoce BeatBoard <ArrowRight size={18} /></a>
              <a className="text-link" href="#artistas">Soy artista <ArrowDown size={16} /></a>
            </div>
            <div className="hero-notes">
              <span><Check size={15} /> Gratis</span>
              <span><Check size={15} /> Sin anuncios</span>
              <span><Check size={15} /> Hecho para escuchar</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Ilustración decorativa de música">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="vinyl">
              <div className="vinyl-groove groove-one" />
              <div className="vinyl-groove groove-two" />
              <div className="vinyl-groove groove-three" />
              <div className="vinyl-label"><AudioLines size={34} /><span>BB</span></div>
            </div>
            <div className="floating-note note-top"><Music2 size={25} /></div>
            <div className="floating-note note-bottom"><Headphones size={25} /></div>
            <div className="mini-player">
              <div className="mini-cover"><Disc3 size={25} /></div>
              <div className="mini-track"><b>Tu próximo sonido</b><span>Está por descubrirse</span></div>
              <span className="play-circle"><Play size={15} fill="currentColor" /></span>
            </div>
            <span className="art-caption">DALE PLAY A LO LOCAL</span>
          </div>
          <a className="scroll-cue" href="#beneficios"><span /> Desliza para descubrir</a>
        </section>

        <section className="intro-band">
          <div className="section-wrap intro-inner">
            <span className="section-kicker">MÁS QUE ESCUCHAR</span>
            <p>Creemos que detrás de cada canción hay una historia, un esfuerzo y un sueño que merece ser escuchado.</p>
            <span className="intro-spark"><Sparkles size={30} /></span>
          </div>
        </section>

        <section className="section-wrap benefits-section" id="beneficios">
          <div className="section-heading">
            <div><span className="section-kicker">UN SOLO LUGAR, MUCHAS POSIBILIDADES</span><h2>La música se vive<br /><em>a tu manera.</em></h2></div>
            <p>BeatBoard conecta la experiencia de escuchar música con herramientas que ayudan a los artistas a llevar sus proyectos con más orden.</p>
          </div>
          <div className="feature-grid">
            {features.map(({ icon: Icon, title, text }, index) => (
              <article className="feature-card" key={title}>
                <div className="feature-icon"><Icon size={23} strokeWidth={1.7} /></div>
                <span className="feature-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="feature-line" />
              </article>
            ))}
          </div>
        </section>

        <section className="artist-section" id="artistas">
          <div className="section-wrap artist-layout">
            <div className="artist-visual">
              <div className="artist-card card-back"><span>BEATBOARD STUDIO</span><AudioLines size={36} /></div>
              <div className="artist-card card-front">
                <div className="studio-top"><span className="live-dot" /> TU ESPACIO CREATIVO</div>
                <div className="studio-wave"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div>
                <div className="studio-bottom"><div><b>Tu carrera, más organizada.</b><small>Música · Eventos · Finanzas</small></div><span className="studio-play"><Play size={17} fill="currentColor" /></span></div>
              </div>
              <div className="artist-sticker"><Mic2 size={21} /><span>HECHO PARA<br />ARTISTAS</span></div>
            </div>
            <div className="artist-copy">
              <span className="section-kicker">PARA QUIENES CREAN</span>
              <h2>Tu talento es el centro.<br /><em>Tu carrera, más clara.</em></h2>
              <p>Sabemos que ser artista es mucho más que hacer música. También implica organizar fechas, cuidar tus finanzas, compartir tu trabajo y conectar con quienes te escuchan.</p>
              <ul className="artist-checks">
                <li><Check size={17} /> Un perfil para presentar tu proyecto.</li>
                <li><Check size={17} /> Herramientas para organizar tu actividad musical.</li>
                <li><Check size={17} /> Un espacio para compartir tus canciones.</li>
              </ul>
              <a className="button button-light" href="#artistas">Quiero impulsar mi música <ArrowRight size={18} /></a>
            </div>
          </div>
        </section>

        <section className="section-wrap steps-section" id="como-funciona">
          <div className="center-heading"><span className="section-kicker">EMPEZAR ES SENCILLO</span><h2>De tu primera canción<br /><em>a tu próximo gran paso.</em></h2></div>
          <div className="steps-grid">
            {steps.map(([number, title, text]) => <article className="step" key={number}><span className="step-number">{number}</span><div className="step-rule" /><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section className="promise-section">
          <div className="section-wrap promise-inner">
            <div className="promise-icon"><ShieldCheck size={31} /></div>
            <div><span className="section-kicker">NUESTRA PROMESA</span><h2>La música primero.<br /><em>Sin complicaciones.</em></h2></div>
            <div className="promise-points"><p><Check size={17} /> Acceso gratuito</p><p><Check size={17} /> Escucha sin anuncios</p><p><Check size={17} /> Reproducción en segundo plano*</p><small>*Sujeto a la compatibilidad del dispositivo y la versión de la aplicación.</small></div>
          </div>
        </section>

        <section className="section-wrap faq-section" id="preguntas">
          <div className="faq-intro"><span className="section-kicker">¿QUIERES SABER MÁS?</span><h2>Preguntas<br /><em>frecuentes.</em></h2><p>Unas respuestas rápidas para que conozcas mejor BeatBoard.</p></div>
          <div className="faq-list">
            {faqs.map(([q, a], i) => <article className={faqOpen === i ? "faq-item active" : "faq-item"} key={q}>
              <button onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}><span>{q}</span><ChevronDown size={19} /></button>
              {faqOpen === i && <p>{a}</p>}
            </article>)}
          </div>
        </section>

        <section className="final-cta">
          <div className="section-wrap final-cta-inner">
            <AudioLines className="cta-mark" size={35} />
            <span className="section-kicker">EL PRÓXIMO SONIDO PUEDE SER TUYO</span>
            <h2>¿Le damos <em>play?</em></h2>
            <p>Descubre música, apoya el talento local y forma parte de una comunidad que cree en lo que suena.</p>
            <a className="button button-dark" href="#beneficios">Explorar BeatBoard <ArrowRight size={18} /></a>
          </div>
          <div className="cta-decoration">BB</div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-wrap footer-inner">
          <a className="brand footer-brand" href="#inicio"><span className="brand-mark"><AudioLines size={20} /></span><span>BeatBoard<span className="brand-period">.</span></span></a>
          <p>Hecho para escuchar sin prisa.</p>
          <div className="footer-links"><a href="#beneficios">Beneficios</a><a href="#artistas">Artistas</a>{GITHUB_URL !== "#" && <a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a>}</div>
          <span className="copyright">© {new Date().getFullYear()} BeatBoard</span>
        </div>
      </footer>
    </div>
  );
}

export default App;