import { Mail, Phone, Download, ExternalLink } from "lucide-react";
import DataRain from "@/components/ui/data-rain";
import Experience from "@/components/experience";
import Headshot from "@/components/headshot";
import { article, letter } from "@/lib/content";

const nav = ["about", "resume", "accolades", "references", "writing", "contact"];

const accolades = [
  ["Dean’s List · 4.0 GPA", "UMass Amherst, every semester", "Consistency taught me to manage time and to treat every course, including the ones outside finance, as part of the same skill set."],
  ["Excel Proficiency Certification", "Cengage Certification of Proficiency", "Excel is the daily tool of FP&A. Certifying it gave me a verified base to build models and reporting on."],
  ["Citi Wealth Job Simulation", "Professional certification", "It gave me a first look at how client needs shape financial recommendations."],
  ["Finance Society Market Briefings", "September 2025–May 2026", "Leading weekly briefings taught me to condense macro trends and data releases into a few points a group can act on."],
];

const projects = [
  ["Apple Three-Statement Model & DCF Valuation", "Project · July 2026 · Excel, published on GitHub",
   "An integrated model linking the income statement, balance sheet, and cash flow statement, built on five years of historical data (2021–2025) with projections for 2026–2028. It includes revenue, margin, working-capital, capital-expenditure, and share-count assumptions across multiple growth scenarios, a DCF with WACC and terminal-growth sensitivity analysis, and an executive dashboard.",
   "This project taught me that a model is a chain of linked assumptions. A small change in one place flows through all three statements, so disciplined structure and checks matter as much as the forecast itself."],
  ["Invoice & Account Reconciliation, Centrifuge Equipment Services", "Work sample · Summer 2025",
   "I reviewed about 150 invoices per month against records in Oracle Cloud ERP, resolving pricing, quantity, and documentation discrepancies, reconciled 5 accounts during month-end close, and standardized 3,000+ transaction records so they were easier to find and match.",
   "Close deadlines taught me to work accurately and methodically under time pressure, and that clean, well-organized records save everyone downstream time."],
];

const skills = ["Financial Modeling", "Excel & PivotTables", "XLOOKUP", "Power BI", "Oracle Cloud ERP", "Account Reconciliation", "Month-End Close"];

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return <h2 id={id} className="scroll-mt-20 mb-6 border-b border-white/20 pb-2 text-3xl font-semibold tracking-tight">{children}</h2>;
}
const card = "rounded-xl border border-white/15 bg-black/60 p-5 backdrop-blur-sm";
function Reflection({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 rounded-md border-l-2 border-cyan-400 bg-cyan-400/10 px-3 py-2 text-sm text-white/80"><b className="text-cyan-300">Reflection: </b>{children}</p>;
}

export default function Page() {
  return (
    <>
      <DataRain />
      <main className="relative z-10 text-white">
      <nav className="fixed inset-x-0 top-0 z-50 flex flex-wrap justify-center gap-5 border-b border-white/10 bg-black/60 px-4 py-3 text-sm backdrop-blur">
        {nav.map((n) => <a key={n} href={`#${n}`} className="capitalize text-white/70 transition hover:text-cyan-300">{n}</a>)}
      </nav>

      <section className="relative min-h-screen">
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-300">Finance · Corporate Finance &amp; FP&amp;A</p>
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">Talal Ahmed Butt</h1>
          <p className="mt-4 max-w-xl text-lg text-white/70">UMass Amherst Isenberg School of Management</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="/resume.pdf" target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 font-medium text-black transition hover:bg-cyan-200"><Download size={16} /> View Resume</a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-white/40 px-5 py-2.5 font-medium transition hover:border-cyan-300 hover:text-cyan-300"><Mail size={16} /> Get in touch</a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl space-y-24 px-5 py-24">
        <section>
          <H2 id="about">Professional Bio</H2>
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
            <Headshot />
            <div className="space-y-4 text-white/80">
              <p>I’m a Finance major at the University of Massachusetts Amherst’s Isenberg School of Management (expected May 2028), with a 4.0 GPA and Dean’s List recognition in every semester. I’m pursuing a career in Corporate Finance and FP&amp;A, where accurate numbers and clear communication come together to guide business decisions.</p>
              <p>My experience spans finance, operations, and consulting across the Middle East. At Centrifuge Equipment Services in Dubai, I reconciled inventory and invoice records in Oracle Cloud ERP and Excel and supported month-end close. In Saudi Arabia, I coordinated workflow for a team of 30+ and standardized performance reporting. In Bahrain, I analyzed financial data for client engagements at FBA Global Consulting.</p>
              <p>Outside the classroom, I build financial models, contribute to the Finance Society’s market briefings, and train Brazilian Jiu-Jitsu. I’m fluent in English and proficient in Arabic and Urdu.</p>
              <div className="flex flex-wrap gap-2 pt-1">{skills.map((s) => <span key={s} className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">{s}</span>)}</div>
            </div>
          </div>
        </section>

        <section>
          <H2 id="resume">Resume</H2>
          <div className="mb-4 flex gap-3">
            <a href="/resume.pdf" target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-cyan-200"><ExternalLink size={14} /> Open PDF</a>
            <a href="/resume.pdf" download className="inline-flex items-center gap-2 rounded-md border border-white/40 px-4 py-2 text-sm hover:border-cyan-300"><Download size={14} /> Download</a>
          </div>
          <div className={card}><h3 className="font-semibold">Education</h3><p className="text-sm text-white/60">University of Massachusetts Amherst, Isenberg School of Management · Expected May 2028</p><p className="mt-2 text-white/80">B.B.A. in Finance · GPA 4.0 · Dean’s List, all semesters</p></div>
          <h3 className="mb-10 mt-14 text-center text-2xl font-semibold">Experience</h3>
          <Experience />
        </section>

        <section>
          <H2 id="accolades">Professional Accolades</H2>
          <div className="grid gap-4 md:grid-cols-2">
            {accolades.map(([t, m, r]) => (<div key={t} className={card}><h3 className="font-semibold">{t}</h3><p className="text-sm text-white/60">{m}</p><Reflection>{r}</Reflection></div>))}
          </div>
        </section>

        <section>
          <H2 id="references">References</H2>
          <div className={`${card} space-y-3 text-white/80`}>
            <p className="text-sm text-white/50">Letter of Recommendation</p>
            <p>To Whom It May Concern,</p>
            {letter.map((p, i) => <p key={i} className="whitespace-pre-line">{p}</p>)}
          </div>
        </section>

        <section>
          <H2 id="writing">Writing Samples</H2>
          <div className="space-y-4">
            <div className={card}>
              <p className="text-sm text-white/60">Industry Article · Opinion · FP&amp;A</p>
              <h3 className="mb-3 text-2xl font-semibold">{article.title}</h3>
              <div className="space-y-3 text-white/80">{article.paragraphs.map((p, i) => <p key={i}>{p}</p>)}</div>
            </div>
            {projects.map(([t, m, d, r]) => (<div key={t} className={card}><h3 className="font-semibold">{t}</h3><p className="text-sm text-white/60">{m}</p><p className="mt-2 text-white/80">{d}</p><Reflection>{r}</Reflection></div>))}
          </div>
        </section>

        <section>
          <H2 id="contact">Contact</H2>
          <div className={`${card} space-y-3`}>
            <p className="text-white/80">I’m seeking Summer 2027 opportunities in Corporate Finance and FP&amp;A.</p>
            <a href="mailto:tbutt@umass.edu" className="flex items-center gap-2 hover:text-cyan-300"><Mail size={16} /> tbutt@umass.edu</a>
            <a href="tel:+14133139106" className="flex items-center gap-2 hover:text-cyan-300"><Phone size={16} /> (413) 313-9106</a>
            <a href="https://linkedin.com/in/talalahmedbutt" target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-cyan-300"><ExternalLink size={16} /> linkedin.com/in/talalahmedbutt</a>
            {/* Add your GitHub link here */}
          </div>
        </section>
      </div>
      <footer className="pb-10 text-center text-sm text-white/40">© 2026 Talal Ahmed Butt</footer>
      </main>
    </>
  );
}
