import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  BadgeCheck,
  Check,
  CircleDollarSign,
  Leaf,
  Mail,
  Menu,
  Phone,
  Recycle,
  ShieldCheck,
  X,
} from 'lucide-react';

const steps = [
  { number: '01', title: 'Tell us about your car', copy: 'Share the year, make, model and a few details about its condition.' },
  { number: '02', title: 'Get a cash offer', copy: 'Our team will review the details and talk you through an offer.' },
  { number: '03', title: 'Decide what works for you', copy: 'No pressure. We’ll make the next steps clear before you decide.' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteSent, setQuoteSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  function submitQuote(event) {
    event.preventDefault();
    setQuoteSent(true);
  }

  return (
    <>
      <div className="topline"><span>Auto recycling, done right.</span><span className="topline-right"><span className="open-dot" /> Here when you need us <span className="topline-divider">/</span> <a href="tel:+16044427775">+1 (604) 442-7775 <ArrowUpRight size={13} /></a></span></div>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Aman Auto Recycle home">
          <span className="brand-mark"><Recycle size={25} strokeWidth={2.4} /></span>
          <span className="brand-name">AMAN<span>AUTO RECYCLE</span></span>
        </a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'main-nav nav-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#sell" onClick={closeMenu}>Sell your car</a>
          <a href="#how" onClick={closeMenu}>How it works</a>
          <a href="#about" onClick={closeMenu}>Our approach</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Get in touch <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-photo" role="img" aria-label="Recycled vehicles ready for a second life" />
          <div className="hero-shade" />
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> A better way to move on</div>
              <h1>CASH FOR<br />YOUR <span>CAR.</span></h1>
              <p className="hero-subtitle">Ready to move on from an unwanted vehicle? Tell us about it and get a straightforward cash offer.</p>
              <div className="hero-actions">
                <a className="button button-lime" href="#sell">Get cash for your car <ArrowUpRight size={18} /></a>
                <a className="button button-outline" href="#how">How it works <ArrowUpRight size={18} /></a>
              </div>
              <div className="hero-proof"><div className="proof-icon"><ShieldCheck size={18} /></div><span>Local people. Straight answers.<br /><b>More value from every vehicle.</b></span></div>
            </div>
            <div className="hero-index"><span>01</span><i /> RECLAIM. REUSE. REPEAT.</div>
            <div className="hero-note"><span>01 / 03</span><b>Every vehicle has another chapter.</b></div>
          </div>
          <div className="hero-edge" />
        </section>

        <section className="quick-strip" aria-label="Selling your vehicle">
          <a href="#sell" className="quick-item"><span className="quick-icon"><CircleDollarSign size={21} /></span><span><b>Cash offers</b><small>A clear offer for your vehicle</small></span><ArrowUpRight className="quick-arrow" size={18} /></a>
          <a href="#sell" className="quick-item"><span className="quick-icon"><ShieldCheck size={21} /></span><span><b>No-pressure process</b><small>Decide when you’re ready</small></span><ArrowUpRight className="quick-arrow" size={18} /></a>
          <a href="#about" className="quick-item"><span className="quick-icon"><Leaf size={21} /></span><span><b>Responsible recycling</b><small>More value from every vehicle</small></span><ArrowUpRight className="quick-arrow" size={18} /></a>
        </section>

        <section className="story-section section-pad">
          <div className="story-heading reveal"><div><div className="eyebrow"><span className="eyebrow-line" /> A fresh start for your vehicle</div><h2>ONE LAST DRIVE.<br /><span>A NEW PURPOSE.</span></h2></div><p>We make it easier to move on from a vehicle you no longer need, with a direct conversation and a clear next step.</p></div>
          <div className="story-gallery">
            <div className="gallery-photo gallery-yard reveal" role="img" aria-label="Vehicles waiting to be recycled"><span>01 / MAKE A FRESH START</span></div>
            <div className="gallery-photo gallery-detail reveal" role="img" aria-label="Close-up view of a vehicle being inspected"><span>02 / EVERY VEHICLE HAS VALUE</span></div>
            <div className="gallery-photo gallery-road reveal" role="img" aria-label="Car ready for a new journey"><span>03 / MOVE FORWARD</span></div>
          </div>
        </section>

        <section className="sell-section" id="sell">
          <div className="sell-image reveal" role="img" aria-label="Close-up of an automobile in a recycling yard"><span className="image-caption">A NEW USE FOR WHAT’S NEXT</span></div>
          <div className="sell-content">
            <div className="eyebrow"><span className="eyebrow-line" /> Your car, your call</div>
            <h2>READY TO<br /><span>LET IT GO?</span></h2>
            <p>Scrap, old, damaged or simply no longer needed. Tell us a little about your car and we’ll get back to you with the next step.</p>
            {!quoteSent ? <form className="quote-form" onSubmit={submitQuote}>
              <label>Your name<input required name="name" placeholder="Name" autoComplete="name" /></label>
              <label>Phone number<input required name="phone" placeholder="Best number to reach you" type="tel" autoComplete="tel" /></label>
              <div className="form-row"><label>Vehicle year<input required name="year" placeholder="e.g. 2012" inputMode="numeric" /></label><label>Make & model<input required name="vehicle" placeholder="e.g. Honda Civic" /></label></div>
              <button className="button button-lime form-submit" type="submit">Request a cash offer <ArrowUpRight size={18} /></button>
              <small className="form-legal">Preview only: submitting won’t send these details.</small>
            </form> : <div className="success-panel"><span><Check size={21} /></span><div><b>Thanks for getting in touch.</b><p>This preview doesn’t send enquiries yet. Contact us directly and we’ll help with your offer.</p><div className="success-links"><a href="tel:+16044427775">+1 (604) 442-7775</a><a href="mailto:contact@aman1autorecyle.ca">contact@aman1autorecyle.ca</a></div></div></div>}
          </div>
        </section>

        <section className="process-section section-pad" id="how">
          <div className="process-heading reveal"><div><div className="eyebrow"><span className="eyebrow-line" /> No runaround</div><h2>STRAIGHTFORWARD<br /><span>FROM THE START.</span></h2></div><p>From the first conversation to your final decision, we keep the next step clear.</p></div>
          <div className="steps-grid">{steps.map((step, index) => <article className="step reveal" key={step.number} style={{ '--delay': `${index * 100}ms` }}><div className="step-number">{step.number}<span><ArrowUpRight size={18} /></span></div><h3>{step.title}</h3><p>{step.copy}</p></article>)}</div>
        </section>

        <section className="about-band" id="about">
          <div className="about-mark"><Recycle size={58} strokeWidth={1.4} /></div>
          <div className="about-copy"><div className="eyebrow"><span className="eyebrow-line" /> The way we see it</div><h2>LESS WASTE.<br /><span>MORE WORTH.</span></h2><p>A vehicle might be finished on the road, but it can still have plenty to give. We help make the most of what can be recovered and make it easier to move on.</p><a className="text-link" href="#contact">Meet your local recycling team <ArrowUpRight size={17} /></a></div>
          <div className="about-stat"><span className="stat-icon"><Leaf size={20} /></span><b>More value<br />from every vehicle.</b><small>Responsible reuse starts here.</small></div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-main"><div className="eyebrow"><span className="eyebrow-line" /> Let’s talk</div><h2>WHAT CAN WE<br /><span>HELP WITH?</span></h2><p>Reach out about selling your vehicle and we’ll help you get started.</p><div className="contact-actions"><a className="button button-dark" href="tel:+16044427775"><Phone size={17} /> +1 (604) 442-7775 <ArrowUpRight size={16} /></a></div></div>
          <div className="contact-details"><a className="contact-detail" href="tel:+16044427775"><Phone size={19} /><div><b>Call us</b><span>+1 (604) 442-7775</span></div><ArrowUpRight className="contact-arrow" size={16} /></a><a className="contact-detail" href="mailto:contact@aman1autorecyle.ca"><Mail size={19} /><div><b>Email us</b><span>contact@aman1autorecyle.ca</span></div><ArrowUpRight className="contact-arrow" size={16} /></a><div className="contact-detail"><BadgeCheck size={19} /><div><b>Local and straightforward</b><span>Real help from a real person</span></div></div><div className="contact-location">YOUR LOCAL AUTO RECYCLING TEAM <span>LOCATION DETAILS TO BE ADDED</span></div></div>
        </section>
      </main>

      <footer className="site-footer"><a className="brand footer-brand" href="#home"><span className="brand-mark"><Recycle size={23} /></span><span className="brand-name">AMAN<span>AUTO RECYCLE</span></span></a><span className="footer-note">CASH FOR CARS. RESPONSIBLY RECYCLED.</span><span className="copyright">© {new Date().getFullYear()} Aman Auto Recycle</span><a className="back-top" href="#home" aria-label="Back to top"><ArrowUpRight size={18} /></a></footer>
    </>
  );
}

export default App;
