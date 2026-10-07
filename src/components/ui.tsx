import { useRef, useState, type ReactNode } from "react";
import { motion, type Variants } from "motion/react";
import { ArrowUpRight, Scissors } from "lucide-react";
import mrFreshLogo from "../images/mrfreshbarberlogo.png";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.9,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Reveal = ({
  children,
  v = fadeUp,
  className = "",
}: {
  children: ReactNode;
  v?: Variants;
  className?: string;
}) => (
  <motion.div
    variants={v}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-80px" }}
    className={className}
  >
    {children}
  </motion.div>
);

export const Stagger = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-80px" }}
    className={className}
  >
    {children}
  </motion.div>
);

/* Real Mr. Fresh Barbershop Logo */
export const Logo = ({ size = 54 }: { size?: number }) => (
  <motion.div
    className="relative grid shrink-0 place-items-center"
    style={{
      width: size,
      height: size,
    }}
    whileHover={{ scale: 1.05 }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 20,
    }}
  >
    <img
      src={mrFreshLogo}
      alt="Mr. Fresh Barbershop"
      className="h-full w-full object-contain"
    />
  </motion.div>
);

export function Button({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [p, setP] = useState({ x: 0, y: 0 });

  const ext = href.startsWith("http");

  return (
    <motion.a
      ref={ref}
      href={href}
      {...(ext
        ? {
            target: "_blank",
            rel: "noopener noreferrer",
          }
        : {})}
      animate={p}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();

        setP({
          x: (e.clientX - r.left - r.width / 2) * 0.18,
          y: (e.clientY - r.top - r.height / 2) * 0.25,
        });
      }}
      onMouseLeave={() => setP({ x: 0, y: 0 })}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 px-7 py-3 text-sm font-bold tracking-wide transition-colors ${
        variant === "solid"
          ? "bg-gold text-ink hover:bg-bone"
          : "border border-bone/30 text-bone hover:border-gold hover:text-gold"
      } ${className}`}
    >
      {children}

      <ArrowUpRight
        size={16}
        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </motion.a>
  );
}

export const Heading = ({ title, sub }: { title: string; sub?: string }) => (
  <Reveal className="mb-14 max-w-3xl">
    <h2 className="display text-5xl sm:text-7xl">{title}</h2>

    {sub && <p className="mt-5 text-lg text-bone/65">{sub}</p>}
  </Reveal>
);

export const Photo = ({
  src,
  label,
  className = "",
}: {
  src?: string;
  label: string;
  className?: string;
}) => (
  <div
    className={`relative overflow-hidden bg-gradient-to-br from-coal via-[#221d17] to-ink ${className}`}
  >
    {src ? (
      <img
        src={src}
        alt={label}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    ) : (
      <div
        role="img"
        aria-label={`${label} (placeholder)`}
        className="grid h-full w-full place-items-center text-center text-xs text-bone/35"
      >
        <span>
          <Scissors className="mx-auto mb-2 text-gold/50" />
          Add photo: {label}
        </span>
      </div>
    )}
  </div>
);
