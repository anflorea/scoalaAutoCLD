import React from 'react';
import { Strings } from '~/config/Strings';

const GDPR = ({ darkTheme }) => {
  return (
    <div
      id="gdpr-policy"
      className="modal fade"
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div
          className={
            'modal-content ' + (darkTheme ? 'bg-dark-2 text-light' : '')
          }
        >
          <div className="modal-header">
            <h5 className={'modal-title ' + (darkTheme ? 'text-white' : '')}>
              {Strings.gdpr.title}
            </h5>
            <button
              type="button"
              className={'btn-close ' + (darkTheme ? 'btn-close-white' : '')}
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body p-4">
            <p className="textJustify">
              Politica noastră de confidențialitate și protecție a datelor cu
              caracter personal pentru Scoala Auto CLD, operată de CLD Auto
              Drive Consult SRL, explică modul în care colectăm, utilizăm,
              protejăm și dezvăluim informațiile cu caracter personal pe care ni
              le furnizați prin intermediul site-ului nostru și a altor canale
              de comunicare.
            </p>
            <p className="textJustify">
              Înțelegem importanța protejării confidențialității și a datelor cu
              caracter personal ale clienților noștri, astfel că luăm măsuri
              adecvate pentru a asigura protecția și securitatea informațiilor
              dvs. cu caracter personal.
            </p>
            <h5 className={'text-4 mt-4 ' + (darkTheme ? 'text-white' : '')}>
              Ce date cu caracter personal colectăm?
            </h5>
            <p className="textJustify">
              În timp ce utilizați site-ul nostru sau solicitați serviciile
              noastre, putem colecta următoarele tipuri de date cu caracter
              personal:
              <ul className="lh-lg">
                <li>Nume și prenume</li>
                <li>Adresa de e-mail</li>
                <li>Numărul de telefon</li>
              </ul>
            </p>
            <h5 className={'text-4 mt-4 ' + (darkTheme ? 'text-white' : '')}>
              De ce colectăm datele dvs. cu caracter personal?
            </h5>
            <p className="textJustify">
              Colectăm și utilizăm datele dvs. cu caracter personal pentru:
              <ul className="lh-lg">
                <li>A vă asista în utilizarea serviciilor noastre</li>
                <li>
                  A ușura procesul de înregistra la școala noastră de șoferi
                </li>
                <li>
                  A facilita procesul de programare pentru orele de instrure
                  teoretică sau practică
                </li>
              </ul>
            </p>
            <h5 className={'text-4 mt-4 ' + (darkTheme ? 'text-white' : '')}>
              Cum protejăm datele dvs. cu caracter personal?
            </h5>
            <p className="textJustify">
              Pentru a proteja informațiile dvs. cu caracter personal, utilizăm
              măsuri de securitate adecvate, inclusiv controlul accesului și
              securitatea rețelei. De asemenea, angajații noștri sunt instruiți
              să protejeze confidențialitatea și să păstreze secretele
              comerciale.
            </p>
            <h5 className={'text-4 mt-4 ' + (darkTheme ? 'text-white' : '')}>
              Cât timp păstrăm datele dvs. cu caracter personal?
            </h5>
            <p className="textJustify">
              Vom păstra datele dvs. cu caracter personal numai pentru perioada
              necesară pentru a îndeplini scopurile pentru care le-am colectat
              sau pentru a îndeplini obligațiile legale.
            </p>
            <h5 className={'text-4 mt-4 ' + (darkTheme ? 'text-white' : '')}>
              Drepturile dvs. în ceea ce privește datele cu caracter personal
            </h5>
            <p className="textJustify">
              Aveți dreptul să ne solicitați accesul, rectificarea sau ștergerea
              datelor cu caracter personal pe care le deținem despre dvs. De
              asemenea, aveți dreptul să ne solicitați să încetăm să vă trimitem
              comunicări de marketing. Pentru a solicita aceste drepturi, vă
              rugăm să ne contactați utilizând detaliile de contact furnizate pe
              site-ul nostru.
            </p>
            <h5 className={'text-4 mt-4 ' + (darkTheme ? 'text-white' : '')}>
              Modificări ale Politicii de Confidențialitate
            </h5>
            <p className="textJustify">
              Politica noastră de confidențialitate poate fi actualizată
              periodic. Orice modificare a acestei politici va fi publicată pe
              site-ul nostru și va intra în vigoare imediat după publicarea sa.
              Vă recomandăm să verificați periodic această pagină pentru a fi la
              curent cu orice modificare a politicii noastre de
              confidențialitate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GDPR;
