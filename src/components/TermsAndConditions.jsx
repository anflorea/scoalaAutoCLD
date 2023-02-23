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
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
            <h3 className={'mb-3 mt-4 mt-4 ' + (darkTheme ? 'text-white' : '')}>
              Terms of Use
            </h3>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. Simply
              dummy text of the printing and typesetting industry.
            </p>
            <h5 className={'text-4 mt-4 ' + (darkTheme ? 'text-white' : '')}>
              Part I – Information Simone collects and controls
            </h5>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <h5 className={'text-4 mt-4 ' + (darkTheme ? 'text-white' : '')}>
              Part II – Information that Simone processes on your behalf
            </h5>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <h5 className={'text-4 mt-4 ' + (darkTheme ? 'text-white' : '')}>
              Part III – General
            </h5>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </p>
            <h3 className={'mb-3 mt-4 ' + (darkTheme ? 'text-white' : '')}>
              Privacy Policy
            </h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <ol className="lh-lg">
              <li>
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </li>
              <li>
                Quidam lisque persius interesset his et, Lisque persius
                interesset his et, in quot quidam persequeris vim, ad mea essent
                possim iriure.
              </li>
              <li>
                In quot quidam persequeris vim, ad mea essent possim iriure.
                Quidam lisque persius interesset his et.
              </li>
              <li>
                Quidam lisque persius interesset his et, Lisque persius
                interesset his et.
              </li>
              <li>
                Interesset his et, Lisque persius interesset his et, in quot
                quidam persequeris vim, ad mea essent possim iriure.
              </li>
              <li>
                Persius interesset his et, Lisque persius interesset his et, in
                quot quidam persequeris vim, ad mea essent possim iriure.
              </li>
              <li>
                Quot quidam persequeris vim Quidam lisque persius interesset his
                et, Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </li>
            </ol>
          </div>
          {/* <div class="modal-body text-left tac-text">
            <h2 class="text-center">Termeni şi condiţii</h2>
            <br />
            <br />
            <ol>
              <li>Consimţământ şi acord</li>Prin utilizarea acestui site web, vă
              exprimaţi acordul faţă de termenii şi condiţiile prezentei
              Declaraţii de confidenţialitate. Dacă nu sunteţi de acord cu
              aceşti termeni şi condiţii, vă rugăm să nu dezvăluiţi nici o
              informaţie cu caracter personal, a acestui site.
              <li>Informaţii Generale</li>
              <h5>2.1 Introducere</h5>
              <br />
              Următoarea notificare privind protecția datelor este concepută
              pentru a vă informa cu privire la prelucrarea datelor dvs.
              personale și drepturile dvs. Privind această procesare în
              conformitate cu Regulamentul general privind protecția datelor nr.
              679/2016 (denumit în continuare “Regulamentul”) și legislația
              locală în vigoare.
              <br />
              <h5>2.2. Operatorul</h5>
              <br />
              Noi, societatea VAM DRIVING SCHOOL SRL, reprezentăm operatorul de
              date cu caracter personal în conformitate cu prevederile
              Regulamentului și prin urmare, suntem responsabili pentru
              procesarea datelor descrisă mai jos.
              <br />
              Pentru întrebări sau solicitări privind prelucrarea datelor, vă
              rugăm să contactați persoana responsabilă cu protecția datelor,
              ale cărei date de contact le puteți găsi mai jos.
              <br />
              <h5>2.3. Persoana responsabilă cu protecția datelor</h5>
              <br />
              Puteți contacta Persoana responsabilă cu protecția datelor în
              orice moment, utilizând următoarele date de contact: Alin Murzea.
              E-Mail: murzea_alin@yahoo.com.
              <li>Informaţii cu privire la Procesare</li>
              <h5>3.1. Scopul colectării datelor</h5>
              <br />
              Operatorul de date cu caracter personal colectează datele
              persoanelor vizate prin formularul de înscriere disponibil pe site
              și în timpul tuturor tranzacțiilor comerciale viitoare în scopul
              de a răspunde cerințelor acestora privind obiectul de activitate
              al societății, în vederea încheierii contractelor cu clientii
              societatii, pentru a emite facturile aferente serviciilor oferite.
              <br />
              <h5>3.2. Înregistrarea clienților</h5>
              <br />
              Vom procesa datele personale colectate prin intermediul
              formularului de inscriere existent pe site-ul societatii și în
              cursul viitoarelor tranzacții comerciale, în scopul încheierii și
              executării contractului cu clientii.
              <br />
              Această prelucrare se bazează pe dispozițiile Art. 6, alineatul 1,
              litera b din cuprinsul Regulamentului.
              <br />
              <h5>Beneficiarii datelor</h5>
              <br />
              Societatea VAM DRIVING SCHOOL SRL este unica persoană juridică
              care beneficiază și prelucrează datele personale ale persoanelor
              vizate. Nu se efectuează alte transferuri de date cu caracter
              personal către alți destinatari, cu excepția cazului în care
              deținem obligația aceasta prin lege (de exemplu: prelucrari
              efectuate de serviciile financiare și fiscale, de poliție,
              justiție, securitate socială).
              <br />
              <h5>
                Furnizarea Obligatorie/Voluntară de Date și Durata păstrării
                acestora
              </h5>
              <br />
              Furnizarea următoarelor date este necesară pentru a putea încheia
              un contract cu dvs. și pentru a procesa înregistrarea clientului:
              numele clientului, obiectul de activitate, adresa de facturare,
              adresa de mail, numărul de telefon.
              <br />
              Datele colectate în cadrul procesului de înregistrare a clienților
              sunt furnizate de dumneavoastră în mod voluntar.
              <br />
              Nu sunteţi obligat(ă) să furnizaţi datele. Dacă nu ne furnizați
              aceste date personale, acest lucru nu va avea consecințe asupra
              dumneavoastră.
              <br />
              Refuzul dumneavoastră poate determina însă imposibilitatea
              derulării activităţilor pentru scopurile mai sus indicate.
              <br />
              Datele dumneavoastră personale vor fi stocate pană la momentul
              încetării relației cu clientul, cu excepția cazului în care avem
              obligația legală de a stoca în continuare datele dumneavoastră în
              scopul de a le prezenta autorităților publice, de exemplu
              autorităților fiscale.
              <br />
              Stocarea și transferul datelor dumneavoastră personale către
              autoritățile publice în scopul îndeplinirii unei obligații legale
              se bazează în mod legal pe Art. 6 paragraful 1 teza 1 litera c)
              din Regulament.
              <br />
              În situația în care nu avem obligația de a stoca datele dvs. în
              scopul prezentării acestora autorităților publice vom proceda la
              ștergerea/distrugerea acestora la momentul încetării relației cu
              clientul.
              <br />
              Trebuie să rețineți că pot exista și alte motive care să împiedice
              ștergerea imediată a datelor dumneavoastră, de exemplu, perioade
              obligatorii de arhivare, acțiuni pendinte, pretenții, exercitarea
              sau apărarea unor drepturi legale etc.
              <li>Drepturile dumneavoastră</li>
              <h5>4.1.</h5>Ca și persoană vizată puteți contacta persoana
              responsabilă pentru protecția datelor în orice moment și în mod
              gratuit, cu o notificare, folosind datele de contact menționate
              mai sus la punctul 2.3 în vederea exercitării drepturilor
              dumneavoastră în conformitate cu prevederile Regulamentului.
              <br />
              <h5>4.2.</h5>Aceste drepturi sunt următoarele:
              <ul>
                <li>
                  Dreptul de a primi informații cu privire la prelucrarea
                  datelor și o copie a datelor procesate (dreptul de acces,
                  articolul 15 din Regulament),
                </li>
                <li>
                  Dreptul de a solicita rectificarea datelor inexacte sau
                  completarea datelor incomplete (dreptul la rectificare, art.
                  16 din Regulament),
                </li>
                <li>
                  Puteți solicita ștergerea datelor dumneavoastră cu caracter
                  personal dacă scopul pentru care acestea au fost colectate nu
                  mai există, dacă procesarea acestora contravine prevederilor
                  legale, dacă procesarea acestora afectează în exces interesele
                  dumneavoastră sau dacă procesarea se bazează pe acordul
                  dumneavoastră, acord pe care l-ați revocat (dreptul de a fi
                  uitat, articolul 17 din Regulament),
                </li>
                <li>
                  Dreptul de a solicita restricționarea prelucrării datelor
                  (dreptul la restricționare a prelucrării, articolul 18 din
                  Regulament),
                </li>
                <li>
                  Dreptul de a primi datele personale cu privire la persoana
                  vizată într-un format structurat, utilizat în mod obișnuit și
                  care poate fi citit automat și de a solicita transmiterea
                  acestor date către un alt operator (dreptul la portabilitatea
                  datelor, articolul 20 din Regulament),
                </li>
                <li>
                  Dreptul de a se opune prelucrării datelor cu intenția de a
                  înceta prelucrarea (dreptul la opoziție, articolul 21 din
                  Regulament),
                </li>
                <li>
                  Dreptul de a retrage oricând un consimțământ dat în vederea
                  opririi unei prelucrări a datelor care se bazează pe
                  consimțământul dvs. Retragerea nu va afecta legalitatea
                  prelucrării pe baza consimțământului acordat înainte de
                  retragere (dreptul de retragere a consimțământului, articolul
                  7, alin. 3 dinRegulament).
                </li>
                <li>
                  Dreptul de a depune o plângere la o autoritate de supraveghere
                  dacă considerați că prelucrarea datelor este o încălcare a
                  Regulament (dreptul de a depune o plângere la autoritatea de
                  supraveghere, articolul 77 din Regulament).
                </li>
              </ul>
              <li>Securitatea datelor</li>
              <h5>5.1.</h5>Pentru protecția datelor dumneavoastră, operatorul de
              date cu caracter personal a luat măsuri tehnice și organizatorice
              pentru a proteja aceste date în special împotriva pierderii,
              manipulării sau accesului neautorizat.
              <br />
              <h5>5.2.</h5>Măsurile adoptate sunt verificate în mod regulat și
              sunt adaptate constant la stadiul tehnicii. În cazul unei
              încălcări a protecției datelor dumneavoastră cu caracter personal,
              care se estimează că vor avea drept consecință un risc major
              pentru drepturile și libertățile dumneavoastră, vă vom notifica
              imediat, pe cât posibil într-un interval de 72 de ore.
              <br />
              <h5>5.3.</h5>Vă rugăm să rețineți că sunteți personal răspunzător
              pentru confidențialitatea și păstrarea în condiții de siguranță a
              datelor dumneavoastră de utilizator sau a parolelor dumneavoastră,
              care v-au fost predate sau comunicate.
              <li>Prelucrarea datelor minorilor</li>
              <h5>6.1.</h5>Vă punem în vedere în mod expres că toate
              prelucrările de date cu caracter personal se referă în mod
              exclusiv la persoane care au împlinit vârsta de 16 ani. Utilizarea
              sistemelor și a instrumentelor, precum și a rezultatelor
              procesării datelor utilizatorilor care nu au această vârstă minimă
              este interzisă fără acordul părinților/tutorilor. În cazul în care
              are totuși loc o procesare a datelor cu caracter personal, vom
              sista procesarea acestor date odată cu luarea la cunoștință a
              acestui fapt.
              <li>Datele furnizate de dumneavoastră</li>
              <h5>7.1.</h5>Datele cu caracter personal sunt prelucrate de noi
              conform prevederilor legale în vigoare privind protecția datelor
              cu caracter personal. În cazul în care corespondați cu noi sau
              completați un formular cu date pe pagina noastră web, vă rugăm să
              aveți în vedere faptul că datele menționate de dumneavoastră pe
              formularul respectiv vor fi prelucrate în scopurile descrise la
              punctul 3.
              <li>Datele colectate de noi</li>
              <h5>8.1.</h5>Prelucrări ale datelor pentru care este necesar
              consimțământul
              <br />
              Societatea VAM DRIVING SCHOOL SRL prelucrează date cu caracter
              personal obtinute prin intermediul site-ului societatii pentru
              următoarele scopuri:
              <br />
              Formular de inscriere la scoala de soferi
              <ul>
                <li>
                  La trimiterea formularului de inscriere, datele dumneavoastră
                  cu caracter personal din categoriile nume, prenume, telefon,
                  adresă mail sunt prelucrate de catre operator.
                </li>
                <li>Scop: Înscrierea la școala de șoferi</li>
                <li>
                  Temei: Interes legitim de a prelucra individual întrebările
                  dumneavoastră și de a putea răspunde credibil, respectiv
                  consimțământ pentru prelucrarea datelor de utilizare ale
                  clientului pe pagina web
                </li>
                <li>
                  Durata de stocare: durata de derulare a contractului, la care
                  se adaugă 12 luni.
                </li>
                <li>
                  Consecintele refuzului: în situația în care nu sunteți de
                  acord cu această prelucrare, nu vom primi date despre
                  dumneavoastră și nu vă vom putea oferi detalii despre
                  informațiile solicitate.
                </li>
              </ul>
              <li>Modificări ale prezentei Declaraţii</li>
              <h5>9.1.</h5>Periodic, vom actualiza prezenta Declaraţie de
              confidenţialitate. In măsura în care vom face schimbări în
              conţinutul acestei Declaraţii de confidenţialitate sau dacă vom
              aduce vreo modificare semnificativă în modul în care utilizăm
              informaţiile dvs. personale, vom revizui această Declaraţie de
              confidenţialitate, astfel încât să reflecte modificările
              respective, inclusiv cu revizuirea datei de intrare în vigoare a
              Declaraţiei de confidenţialitate.
              <br />
              Avem rugămintea de a consulta, ori de câte ori aveţi
              posibilitatea, această Declaraţie de confidenţialitate, pentru a
              vă informa în legătură cu modul în care vă utilizăm şi vă protejăm
              informaţiile personale.
              <br />
              Orice modificări se vor aplica numai de la data reviziei.
            </ol>
            <div class="text-center">
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
              >
                Inapoi la site
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
