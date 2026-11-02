import Logo from "@/components/logo";

const jobs = [
  { role: "Finance Intern", org: "Centrifuge Equipment Services", logo: "/logos/centrifuge.png",
    dates: "Jun 2025 - Aug 2025", where: "Dubai, United Arab Emirates", pts: [
    "Maintained and reconciled records for 1,000+ inventory parts in Oracle Cloud ERP and Excel, supporting accurate month-end reporting.",
    "Processed and reviewed about 150 monthly invoices, resolving pricing, quantity, and documentation discrepancies.",
    "Reconciled 5 accounts and prepared financial schedules for management review during month-end close.",
    "Organized and standardized 3,000+ transaction records."] },
  { role: "Operations Intern", org: "Oilfield Supply Company", logo: "/logos/oilfield-supply.png",
    dates: "Jun 2023 - Aug 2023", where: "Khobar, Saudi Arabia", pts: [
    "Coordinated workflow and tracked performance for a team of 30+ employees.",
    "Identified 4 operational bottlenecks and recommended workflow changes.",
    "Standardized Excel reporting across three operational functions."] },
  { role: "Apprentice", org: "FBA Global Consulting", logo: "/logos/fba-global.png",
    dates: "Oct 2022 - Feb 2023", where: "Manama, Bahrain", pts: [
    "Analyzed financial and operational data for 3 client engagements.",
    "Prepared financial summaries and presentation materials for 5 client meetings.",
    "Reviewed and organized 100+ financial records."] },
];

export default function Experience() {
  return (
    <ol className="relative space-y-14">
      <div className="absolute bottom-0 left-7 top-0 w-0.5 bg-white/25 md:left-1/2 md:-translate-x-1/2" />
      {jobs.map((j, i) => {
        const left = i % 2 === 0; // card on the left for even rows (desktop)
        return (
          <li key={j.org} className="relative grid grid-cols-[auto_1fr] items-center gap-x-5 gap-y-3 md:grid-cols-[1fr_auto_1fr] md:gap-x-10">
            <div className="col-start-1 row-span-2 row-start-1 md:col-start-2 md:row-span-1"><Logo src={j.logo} name={j.org} /></div>
            <div className={`col-start-2 row-start-1 md:row-start-1 ${left ? "md:col-start-3 md:text-left" : "md:col-start-1 md:text-right"}`}>
              <p className="text-lg font-medium text-white/90">{j.dates}</p>
              <p className="text-sm text-white/55">{j.where}</p>
            </div>
            <div className={`col-start-2 row-start-2 rounded-lg border border-white/15 bg-black/70 p-6 backdrop-blur-sm md:row-start-1 ${left ? "md:col-start-1" : "md:col-start-3"}`}>
              <h3 className="text-2xl font-semibold">{j.role}</h3>
              <p className="mb-3 text-lg text-white/70">{j.org}</p>
              <ul className="list-disc space-y-2 pl-5 text-white/80">{j.pts.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
