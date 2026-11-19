export function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute h-[420px] w-[420px] rounded-full bg-light-blue-2 opacity-60 blur-[10px]" />
      <div className="relative z-10 w-full max-w-[420px] rounded-[20px] bg-white p-8 shadow-[0_10px_30px_rgba(10,31,87,0.08)]">
        <span className="inline-block rounded-full bg-light-blue px-2.5 py-[3px] text-[11px] font-bold text-blue">
          Visibility → Opportunity
        </span>
        <div className="mt-5 mb-5 flex h-[120px] items-end gap-2.5">
          {[35, 55, 40, 80, 60, 95].map((h, i) => (
            <i
              key={i}
              style={{ height: `${h}%` }}
              className={`block flex-1 rounded-t-[6px] ${i % 2 === 1 ? "bg-blue" : "bg-light-blue-2"}`}
            />
          ))}
        </div>
        {[
          "Website Development",
          "Social Media Management",
          "Creative Visual Design",
        ].map((label, i) => (
          <div key={label} className={`flex items-center justify-between py-2.5 ${i !== 0 ? "border-t border-border" : ""}`}>
            <span className="text-[13px] text-grey">{label}</span>
            <span className="text-[13px] font-bold text-deep-blue">Active</span>
          </div>
        ))}
      </div>
    </div>
  );
}
