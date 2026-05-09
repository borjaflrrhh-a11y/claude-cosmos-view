import logoUrl from "@/assets/talentia-logo.jpg";

export function TalentiaLogo({ className = "h-5", invert = true }: { className?: string; invert?: boolean }) {
  return (
    <img
      src={logoUrl}
      alt="Talentia"
      className={`${className} ${invert ? "invert" : ""} object-contain`}
      style={{ filter: invert ? "invert(1) brightness(1.2) contrast(1)" : undefined }}
    />
  );
}
