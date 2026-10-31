import Link from "next/link";
import {ArrowLeft,ArrowRight,Camera,ClipboardList,CreditCard,Lock,Phone,Mail} from "lucide-react";

const groups = [
  {title:"Dermatologia",items:["Acne","Alopecia (cuoio capelluto, ciglia, sopracciglia e corpo)","Calvizie maschile e femminile","Eczema acuto e cronico","Dermatite atopica","Dermatite acuta e cronica","Dermatite anale e perianale","Dermatite periorale","Dermatite seborroica","Dermatite delle mani","Dermatosi durante la gravidanza","Dermatite palpebrale","Ferite recenti","Follicolite acuta e cronica","Herpes simplex","Herpes zoster (fuoco di Sant’Antonio)","Infezioni batteriche","Molluschi contagiosi","Pitiriasi alba, rosea e versicolor"]},
  {title:"Oncologia cutanea",items:["Cheratosi attiniche o solari, nei a eventuale rischio","Basaliomi (carcinomi basocellulari)","Melanomi","Spinaliomi (carcinomi spinocellulari)","Altre neoformazioni benigne, premaligne o maligne della cute"]},
  {title:"Estetica",items:["Acne e brufoli del viso, décolleté e del dorso","Alopecia e caduta dei capelli","Macchie del viso e delle mani","Macchie di avambracci e gambe","Melasma","Pelle secca del viso e del corpo, mani, piedi e unghie","Prevenzione di rughe del viso","Prevenzione dell’invecchiamento del viso","Prevenzione dell’invecchiamento del collo, décolleté e mani","Prevenzione dell’invecchiamento della pelle del corpo","Secchezza del viso e delle palpebre","Secchezza della pelle del corpo","Secchezza delle mani","Secchezza dei piedi","Unghie fragili, sfaldate, secche e opache"]}
];

export default function VisitaOnlinePage() {
  return <main className="tele-page" data-theme="dark">
    <div className="announcement">ABRUSCI DERMA · DERMATOLOGIA E TELEDERMATOLOGIA</div>
    <header className="header tele-header">
      <Link className="brand" href="/"><span>ABRUSCI DERMA</span><small>CHIRURGIA · ONCOLOGIA · LASER · ESTETICA CUTANEA</small></Link>
      <Link className="text-link" href="/"><ArrowLeft size={15}/> Torna alla homepage</Link>
    </header>
    <section className="tele-hero section-pad">
      <p className="eyebrow">SERVIZIO DI TELEDERMATOLOGIA</p>
      <h1>Visita <em>Online</em></h1>
      <h2 className="tele-subtitle">I vantaggi della Visita Online</h2>
      <p>Grazie al servizio di Visita Online, siamo in grado di prestare assistenza a tutti i pazienti che, per diversi motivi, non hanno la possibilità di effettuare una visita in Studio.</p>
      <p>Grazie alle visite online, possiamo diagnosticare, curare e prevenire diversi tipi di patologie e condizioni senza la necessità di spostamenti da parte del paziente: basta compilare l’apposito form e riceverai il tuo consulto online comodamente da casa, evitando costi aggiuntivi come spostamenti, carburante, hotel ecc. Tale servizio è stato ideato pensando ai numerosi pazienti provenienti da diverse regioni d’Italia e dall’estero.</p>
      <div className="tele-safety"><Lock size={18}/> È necessario accedere ai consulti di Teledermatologia da un luogo sicuro e privato, non durante la guida.</div>
    </section>
    <section className="tele-section section-pad">
      <p className="eyebrow">PRIMA DI INIZIARE</p><h2>Cosa si può <em>risolvere</em></h2>
      <p>Molti tipi di lesioni o condizioni cutanee che non hanno bisogno di trattamenti chirurgici o procedure e, quindi, risolvibili in autonomia dal paziente tramite l'applicazione di prodotti appositi, prescritti dal medico dopo un'attenta diagnosi attraverso le foto inviate e le informazioni riferite dal paziente in fase di visita telematica.</p>
      <h3>Cosa non si può risolvere</h3>
      <p>Tutte le lesioni che hanno bisogno di trattamenti o procedure tipo botox, filler, peeling, laser resurfacing per ringiovanire il viso, scleroterapia o laser per varici e per capillari del viso o delle gambe e procedure chirurgiche tipo asportazione di nei, cheratosi, cisti, lipomi, basaliomi e carcinomi, cicatrici da acne, unghie incarnite, ecc.</p>
    </section>
    <section className="tele-section section-pad tele-conditions">
      <p className="eyebrow">PATOLOGIE E CONDIZIONI</p><h2>Trattate <em>telematicamente</em></h2>
      <p>Possiamo aiutarti a fare la diagnosi in via telematica e suggerirti il trattamento più efficace e meno invasivo per le seguenti condizioni e patologie:</p>
      <div className="tele-groups">{groups.map(group=><article className="tele-group" key={group.title}><h3>{group.title}</h3><ul>{group.items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div>
    </section>
    <section className="tele-section section-pad">
      <p className="eyebrow">IL PERCORSO</p><h2>Come <em>funziona?</em></h2>
      <div className="tele-steps">
        <article><Camera/><span>01</span><h3>Scatta delle foto</h3><p>Scatta delle foto dell'area interessata. Assicurati che siano di buona qualità, bene a fuoco e su sfondo nero o scuro. Un piccolo consiglio: puoi utilizzare una maglia o un telo scuro per ovviare al problema.</p></article>
        <article><ClipboardList/><span>02</span><h3>Inserisci i tuoi dati</h3><p>Inserisci i tuoi dati correttamente, descrivendo in modo breve e conciso i tuoi sintomi e la tua situazione. Una volta compilati tutti i campi, carica le tue foto e attendi che il Medico valuti se la tua condizione sia effettivamente risolvibile tramite la visita online.</p></article>
        <article><CreditCard/><span>03</span><h3>Effettua il pagamento</h3><p>Non appena il Medico ti invierà via mail la conferma che il suo problema sia effettivamente risolvibile attraverso la visita online, effettua il pagamento tramite l'apposito pulsante posto sotto il form precedentemente compilato.</p></article>
      </div>
    </section>
    <section className="tele-section section-pad tele-cost">
      <p className="eyebrow">COSTI E MODALITÀ</p><h2>Quanto costa la <em>Visita Online?</em></h2>
      <p>La compilazione e l’invio del form con le relative foto è gratuito. Solo se il Medico dovesse ritenere opportuno effettuare la visita online, verrà richiesto di effettuare il pagamento tramite l’apposita sezione.</p>
      <p className="tele-note">Con ogni consulto riceverai istruzioni valide, personalizzate e molto dettagliate per migliorare e/o evitare secchezza, macchie, rughe e invecchiamento del viso e del corpo.</p>
      <h3>1. Scatta delle foto</h3><p>Per poter valutare bene il problema e suggerire il trattamento più efficace a distanza, inviaci foto ad alta risoluzione delle zone interessate, facendo attenzione alla visibilità della condizione. Le foto, nello specifico, devono essere:</p>
      <ul><li>Ad alta risoluzione</li><li>Su sfondo nero o scuro per aumentare il contrasto con la pelle (anche un telo o una maglia vanno bene)</li><li>A fuoco</li><li>Sia con flash che senza flash</li></ul><p>Le foto che non soddisfano tali requisiti non verranno prese in considerazione.</p>
      <a className="text-link" href="https://abrusciderma.com/visita-online/#1588956151674-d3041431-5334" target="_blank" rel="noreferrer">Guarda gli esempi <ArrowRight size={15}/></a>
    </section>
    <section className="tele-section section-pad tele-form-info">
      <p className="eyebrow">RICHIESTA DI CONSULTO</p><h2>2. Inserisci i <em>tuoi dati</em></h2>
      <p>Per inviare i dati personali, descrivere la condizione, rispondere alle domande sui sintomi e caricare le fotografie, utilizza il modulo protetto predisposto per il servizio.</p>
      <a className="button" href="https://abrusciderma.com/visita-online/#1588956151674-d3041431-5334" target="_blank" rel="noreferrer">Apri il modulo di richiesta <ArrowRight size={16}/></a>
      <p className="tele-small">Il modulo richiede nome, cognome, email, telefono, descrizione della condizione, da quanto tempo è presente il problema, eventuale prurito, fotografie e accettazione della privacy policy.</p>
      <h3>3. Effettua il pagamento</h3>
      <p>Se hai ricevuto dal Medico la conferma che la tua condizione sia risolvibile tramite Teledermatologia, clicca sul pulsante in basso per procedere al pagamento.</p>
      <p><strong>Attenzione:</strong> NON effettuare il pagamento senza prima aver ricevuto conferma dal Medico. Abrusciderm.com e relativi titolari sono da ritenersi sollevati da ogni responsabilità in caso di pagamento effettuato arbitrariamente e senza previa conferma da parte del medico.</p>
      <p>Il sito di riferimento indica il pagamento tramite PayPal o altre carte per un importo di <strong>€200,00</strong>. È possibile effettuare il pagamento anche tramite bonifico bancario. IBAN: <strong>IT79L0310441300000000010306</strong>. A pagamento effettuato, inviare la prova di pagamento a <a href="mailto:studio@abrusciderm.com">studio@abrusciderm.com</a>.</p>
      <a className="button" href="https://abrusciderma.com/visita-online/#1588956151674-d3041431-5334" target="_blank" rel="noreferrer">Vai alla pagina per il pagamento <ArrowRight size={16}/></a>
    </section>
    <section className="tele-contact section-pad">
      <p className="eyebrow">CONTATTI</p><h2>Hai bisogno di <em>informazioni?</em></h2>
      <div className="tele-contact-grid"><a href="tel:+393925356938"><Phone/><span><small>Mobile</small>(+39) 392 535 6938</span></a><a href="tel:+393663955111"><Phone/><span><small>Personale</small>(+39) 366 395 5111</span></a><a href="mailto:abruscivillabrasini@gmail.com"><Mail/><span><small>Email</small>abruscivillabrasini@gmail.com</span></a></div>
      <p className="tele-hours">Orari: Lunedì / Venerdì · 13:00 / 17:00</p>
      <Link className="text-link" href="/">Torna alla homepage <ArrowLeft size={15}/></Link>
    </section>
    <footer className="footer"><div className="footer-bottom"><span>© {new Date().getFullYear()} Abrusci Derma · P. IVA 04905320729</span><Link href="/">Homepage</Link><span>ABRUSCI DERMA</span></div></footer>
  </main>;
}
