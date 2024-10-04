import React from 'react';
import IntroService from '../components/IntroService';
import FAQs from '../components/FAQs';

const MemberShipPage = () => {
  const styles = {
    body: {
    //   backgroundColor: '#333434',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '60vh',
      padding: '3rem 16px',
    },
    main: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Responsive grid columns
      gap: '16px',
      maxWidth: '1024px',
      width: '100%',
    },
    article: {
      backgroundColor: 'var(--skyblue)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      borderRadius: '8px',
      overflow: 'hidden',
      position: 'relative',
      transition: 'all 0.3s',
      border: '2px solid transparent',
    },
    hgroup: {
      padding: '32px',
      backgroundColor: '#393A3A',
      textAlign: 'center',
    },
    price: {
      fontSize: '32px',
      fontWeight: 'bold',
    },
    subtext: {
      fontSize: '16px',
      fontWeight: '300',
    },
    title: {
      textTransform: 'uppercase',
      fontWeight: '300',
      letterSpacing: '2px',
    },
    mainContent: {
      padding: '32px',
      spaceY: '16px',
    },
    ul: {
      listStyleType: 'none',
      padding: '0',
      margin: '0 0 16px 0',
      textAlign: 'center',
      color: 'var(--black)',
      fontSize: '14px',
    },
    label: {
      display: 'block',
      textAlign: 'center',
      cursor: 'pointer',
      padding: '8px 24px',
      width: 'fit-content',
      margin: '0 auto',
      borderRadius: '9999px',
      fontWeight: '300',
      textTransform: 'uppercase',
      color: '#FFF',
      whiteSpace: 'nowrap',
      fontSize: '14px',
      position: 'relative',
      background: 'linear-gradient(to right, black, var(--skyblue))',
      transition: 'all 0.5s',
      border:"1px solid black"
    },
    waves: {
      position: 'absolute',
      inset: '-140px 0 0 0',
      color: '#1d1f20',
      zIndex: '-10',
      borderRadius: '0 0 9999px 9999px',
      overflow: 'hidden',
      transition: 'all 0.5s',
    },
    svg: {
      width: '100%',
      height: '100%',
      viewBox: '0 0 600 1000',
      xmlns: 'http://www.w3.org/2000/svg',
      preserveAspectRatio: 'none',
      overflow: 'auto',
      shapeRendering: 'auto',
      fill: 'currentColor',
    },
  };

  return (
    <>

 <IntroService/>

 <h1 className="heading" style={{ color: "var(--primary)" ,textAlign:"center"}}>
       Our  membership
        <span style={{ color: "var(--grey)" }}>Plans</span>{" "}
      </h1>
      <p className="text" style={{color:"var(--grey)",textAlign:"center"}}>
      Our spaces are designed with productivity in mind, offering a range of amenities to support your workday. From high-speed internet and ergonomic seating to well-equipped conference rooms and cozy lounge areas, we've got everything you need to succeed.
      </p>
    <div style={styles.body}>
      
      <h1 className="sr-only">Pricing</h1>
      <main style={styles.main}>
        <article id="price-1" style={styles.article}>
          <hgroup style={styles.hgroup}>
            <p style={styles.price}>
              $9<span style={styles.subtext}>/mo</span>
            </p>
            <h2 style={styles.title}>Freelancer</h2>
          </hgroup>

          <main style={styles.mainContent}>
            <ul style={styles.ul}>
              <li>1GB of space</li>
              <li>Unlimited traffic</li>
              <li>Forum access</li>
              <li>Support at $25/hour</li>
            </ul>
            <label htmlFor="option-1" style={styles.label}>
              Choose plan
            </label>
          </main>

          <div style={styles.waves}>
            <svg style={styles.svg} viewBox="0 0 600 1000" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0 2000 0 500 Q 150 434 300 500 t 300 0 300 0 300 0 300 0 300 0 v1000 z" />
            </svg>
          </div>
        </article>

        <article id="price-2" style={styles.article}>
          <hgroup style={styles.hgroup}>
            <p style={styles.price}>
              $99<span style={styles.subtext}>/mo</span>
            </p>
            <h2 style={styles.title}>Business</h2>
          </hgroup>

          <main style={styles.mainContent}>
            <ul style={styles.ul}>
              <li>5GB of space</li>
              <li>Unlimited traffic</li>
              <li>Forum access</li>
              <li>Support at $5/hour</li>
            </ul>
            <label htmlFor="option-2" style={styles.label}>
              Choose plan
            </label>
          </main>

          <div style={styles.waves}>
            <svg style={styles.svg} viewBox="0 0 600 1000" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0 2000 0 500 Q 150 434 300 500 t 300 0 300 0 300 0 300 0 300 0 v1000 z" />
            </svg>
          </div>
        </article>

        <article id="price-3" style={styles.article}>
          <hgroup style={styles.hgroup}>
            <p style={styles.price}>
              $499<span style={styles.subtext}>/mo</span>
            </p>
            <h2 style={styles.title}>Enterprise</h2>
          </hgroup>

          <main style={styles.mainContent}>
            <ul style={styles.ul}>
              <li>20GB of space</li>
              <li>Unlimited traffic</li>
              <li>Forum access</li>
              <li>Free Support</li>
            </ul>
            <label htmlFor="option-3" style={styles.label}>
              Choose plan
            </label>
          </main>

          <div style={styles.waves}>
            <svg style={styles.svg} viewBox="0 0 600 1000" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0 2000 0 500 Q 150 434 300 500 t 300 0 300 0 300 0 300 0 300 0 v1000 z" />
            </svg>
          </div>
        </article>
      </main>
    </div>
    <FAQs/>
    </>
  );
};

export default MemberShipPage;
