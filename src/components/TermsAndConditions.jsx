import React from 'react';
import { Strings } from '~/config/Strings';

const TermsAndConditions = ({ darkTheme }) => {
  return (
    <div
      id="terms-policy"
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
              {Strings.termsConditions.title}
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
              Bine ați venit la Scoala Auto CLD, operată de CLD Auto Drive
              Consult SRL. Accesul la și utilizarea site-ului nostru și a
              serviciilor noastre presupune acceptarea și respectarea acestor
              termeni și condiții. Vă rugăm să citiți cu atenție acești termeni
              și condiții înainte de a utiliza site-ul nostru.
            </p>
            <p className="textJustify">
              Scoala Auto CLD, operată de CLD Auto Drive Consult SRL, nu își
              asumă nicio responsabilitate pentru orice pierdere sau daună,
              inclusiv, fără limitare, daune directe, indirecte, accidentale,
              speciale, consecințiale sau exemplare, care rezultă din utilizarea
              sau incapacitatea de utilizare a site-ului nostru sau a
              informațiilor conținute pe acesta.
            </p>
            <h5 className={'text-4 mt-4 ' + (darkTheme ? 'text-white' : '')}>
              Definiții
            </h5>
            <ol className="lh-lg">
              <li>
                "Noi", "nostru" sau "Școala Auto CLD" se referă la CLD Auto
                Drive Consult SRL și oricare dintre filialele sale.
              </li>
              <li>"Site-ul" se referă la site-ul web al Școlii Auto CLD.</li>
              <li>
                "Utilizator" sau "dumneavoastră" se referă la orice persoană
                care accesează sau utilizează site-ul nostru.
              </li>
            </ol>
            <h5 className={'text-4 mt-4 ' + (darkTheme ? 'text-white' : '')}>
              Drepturile de autor
            </h5>
            <p className="textJustify">
              Conținutul site-ului nostru, inclusiv, dar fără a se limita la,
              textul, grafica, imaginile, videoclipurile, sunetele și logo-urile
              sunt proprietatea noastră sau a partenerilor noștri și sunt
              protejate de legea drepturilor de autor.
            </p>
            <p className="textJustify">
              Conținutul site-ului nostru poate fi utilizat numai în scopuri
              personale și non-comerciale. Este interzisă utilizarea, copierea
              sau distribuirea conținutului site-ului nostru în orice alt mod
              fără acordul nostru scris prealabil.
            </p>
            <h5 className={'text-4 mt-4 ' + (darkTheme ? 'text-white' : '')}>
              Utilizarea site-ului nostru
            </h5>
            <p className="textJustify">
              Utilizarea site-ului nostru este permisă numai în scopuri legale
              și în conformitate cu acești termeni și condiții.
            </p>
            <p className="textJustify">
              Nu sunteți autorizat să utilizați site-ul nostru în niciun fel
              care ar putea să cauzeze daune sau să afecteze site-ul nostru sau
              să interfereze cu utilizarea și beneficiile oferite de site
            </p>

            <h5 className={'text-4 mt-4 ' + (darkTheme ? 'text-white' : '')}>
              Disponibilitatea site-ului
            </h5>
            <p className="textJustify">
              Ne rezervăm dreptul de a restricționa accesul la site-ul nostru
              sau de a-l întrerupe în orice moment și fără notificare
              prealabilă. Nu garantăm că site-ul nostru va fi disponibil în mod
              continuu sau fără erori.
            </p>
            <h5 className={'text-4 mt-4 ' + (darkTheme ? 'text-white' : '')}>
              Modificări ale termenilor și condițiilor
            </h5>
            <p className="textJustify">
              Ne rezervăm dreptul de a actualiza sau modifica termenii și
              condițiile noastre în orice moment și fără notificare prealabilă.
              Este responsabilitatea dumneavoastră să verificați periodic
              această pagină pentru a fi la curent cu modificările. Continuarea
              utilizării site-ului nostru după publicarea modificărilor
              constituie acceptarea acestor modificări.
            </p>
            <h5 className={'text-4 mt-4 ' + (darkTheme ? 'text-white' : '')}>
              Legea aplicabilă
            </h5>
            <p className="textJustify">
              Acești termeni și condiții vor fi guvernați și interpretați în
              conformitate cu legile României. Orice litigiu care rezultă din
              sau în legătură cu acești termeni și condiții va fi supus
              jurisdicției exclusive a tribunalelor din România.
            </p>
            <h5 className={'text-4 mt-4 ' + (darkTheme ? 'text-white' : '')}>
              Contact
            </h5>
            <p className="textJustify">
              Dacă aveți întrebări sau comentarii referitoare la acești termeni
              și condiții, vă rugăm să ne contactați folosind detaliile de
              contact afisate pe site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
