interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export default function Logo({ className = "", variant = "light" }: LogoProps) {
  if (variant === "dark") {
    return (
      <div className={`flex items-center ${className}`}>
        <img
          src="/viyb-logo-white.png"
          alt="Virgin Islands Yacht Broker"
          className="h-12 w-auto"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/viyb-logo-horizontal.jpg"
        alt="Virgin Islands Yacht Broker"
        className="h-12 w-auto"
      />
    </div>
  );
}
