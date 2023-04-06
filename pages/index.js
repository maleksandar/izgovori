import Head from 'next/head';
import Footer from '@components/Footer';
import React, { useState } from 'react';
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const izgovoriZaPre = [
  `Usraću te večeras`,
  `Videćeš ko vozi traktor, a ko otvara kapiju`,
  `Naulji guzu`,
  `Ima da te skupljaju po box-u`,
  `Najjači sam alooo`,
  `Jači sam na clean-u, nemaš šansi`,
  `Kidam DU, nećete me stići`,
  `Jesi spreman da dobiješ po guzi?`,
  `Videćemo čija majka crnu vunu prede`,
  `Ti si, dečko, truba`,
  `Nisi svestan šta te čeka`,
  `Ostaviću te u prašini`,
  `Pojedem sladoled i uništavam WOD-ove`,
  `Dobio sam Lazu Đukića pre 5 godina na treningu`,
  `Ako ikad pomislite da ste dotakli vrh CF-a, ne zavaravajte se, u pitanju su samo moja muda!`,
];

const izgovoriZaPosle = [
  `Aa brate, nisam stigo da jedem`,
  `Nisam ništa spavo sinoć`,
  `Sve tvoje vežbe buraz`,
  `Nisam znao koliki je TC dok nije bilo kasno`,
  `Bila gužva na veslu, tu sam izgubio 2min`,
  `Bolela me glava, još pre treninga`,
  `Lako je tebi sa 10 kila manje`,
  `A jebiga, ti radiš sa Marom`,
  `Partner mi je bulja, inace bih te dobio`,
  `Partneri me koče`,
  `Hoću li ikad raditi u paru sa nekim ko je spreman, pitam?`,
  `Pomago sam kumu da prenese orman pre treninga`,
  `Ma nešto sam nervozan ceo dan`,
  `Usraću te sledeći put`,
  `Dopingovao si se NOCCO-m, naravno da si me dobio`,
  `Prejeo sam se bate`,
  `Nije trebalo da jedem onu pljeku pre treninga`,
  `Znao sam da će ona palačinka biti kap koja je prelila cašu`,
];

const RandomPhrase = ({ phrases, buttonTitle }) => {
  const [phrase, setPhrase] = useState('');

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setPhrase(phrases[randomIndex]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <button
        onClick={handleClick}
        style={{
          marginBottom: '1rem',
          padding: '1rem',
          borderRadius: '0.5rem',
          background: 'linear-gradient(to bottom, #FFDB58, #FFB90F)',
          border: 'none',
          color: 'black',
          fontWeight: 'bold',
          letterSpacing: '0.1rem',
          fontFamily: 'Impact, Charcoal, sans-serif',
          cursor: 'pointer',
        }}
      >
        {buttonTitle}
      </button>
      <p
        style={{
          backgroundColor: 'rgba(0,0,0, 0.75)',
          textAlign: 'center',
          fontSize: '2rem',
          color: 'white',
          textTransform: 'uppercase',
          fontWeight: '900',
          letterSpacing: '0.1rem',
          textShadow: '0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.5)',
          borderRadius: '10px',
          padding: '10px',
        }}
      >
        {phrase}
      </p>
    </div>
  );
};
export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Izgovori</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='content'>
        <RandomPhrase phrases={izgovoriZaPre} buttonTitle={'Kurčenje i izgovori pre treninga'} />
        <RandomPhrase phrases={izgovoriZaPosle} buttonTitle={'Zašto se ne računa, nakon što je izgubio?'} />
      </div>
    </div>
  );
}
