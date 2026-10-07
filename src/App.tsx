import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  animate,
  useInView,
  AnimatePresence,
} from "motion/react";
import {
  Menu,
  X,
  Phone,
  MapPin,
  Star,
  Instagram,
  Facebook,
  Music2,
  ArrowRight,
} from "lucide-react";
import {
  SITE,
  NAV,
  SERVICES,
  BARBERS,
  GALLERY,
  REVIEWS,
  HOURS,
} from "./data/site";
import {
  Button,
  Heading,
  Logo,
  Photo,
  Reveal,
  Stagger,
  fadeUp,
  scaleIn,
} from "./components/ui";
import Booking from "./components/Booking";
import heroImage from "./images/heroimage.png";
import { useRef } from "react";

const id = (n: string) => n.toLowerCase();

function Navbar() {
  const [small, setSmall] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setSmall(scrollY > 40);
    f();
    addEventListener("scroll", f, { passive: true });
    return () => removeEventListener("scroll", f);
  }, []);
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${small ? "border-line bg-ink/85 py-2 backdrop-blur-md" : "border-transparent py-5"}`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-5"
      >
        <a
          href="#home"
          aria-label="Mr. Fresh Barbershop home"
          className="flex items-center gap-3"
        >
          <Logo size={small ? 38 : 48} />
          <span className="display hidden text-2xl sm:block">Mr. Fresh</span>
        </a>
        <ul className="hidden items-center gap-8 text-sm lg:flex">
          {NAV.map((n) => (
            <li key={n}>
              <a
                href={`#${id(n)}`}
                className="text-bone/70 transition-colors hover:text-gold"
              >
                {n}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href={SITE.booksy}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-11 items-center bg-gold px-6 text-sm font-bold text-ink hover:bg-bone sm:inline-flex"
          >
            BOOK NOW
          </a>
          <button
            className="grid size-12 place-items-center lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-ink lg:hidden"
          >
            <ul className="px-5 pb-6">
              {NAV.map((n) => (
                <li key={n}>
                  <a
                    onClick={() => setOpen(false)}
                    href={`#${id(n)}`}
                    className="display block border-b border-line py-4 text-4xl"
                  >
                    {n}
                  </a>
                </li>
              ))}
            </ul>
            <div className="px-5 pb-6">
              <Button href={SITE.booksy} className="w-full">
                BOOK NOW
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 90]);

  const lines = ["Look fresh.", "Feel fresh."];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-10 size-[40rem] rounded-full bg-gold/10 blur-3xl" />

      {/* Animated lines */}
      {[20, 45, 70].map((t, i) => (
        <motion.span
          key={t}
          className="absolute left-0 h-px w-1/3 bg-gradient-to-r from-transparent via-gold/40 to-transparent"
          style={{ top: `${t}%` }}
          animate={{ x: ["-40%", "300%"] }}
          transition={{
            duration: 9 + i * 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
        {/* LEFT SIDE */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-6 flex items-center gap-2 text-sm text-gold"
          >
            <MapPin size={16} />
            Kent, Washington
          </motion.p>

          <h1 className="display text-[clamp(4rem,13vw,10rem)]">
            {lines.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.6 + i * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-8 max-w-md text-lg text-bone/70"
          >
            Premium cuts, clean fades, and sharp styles in the heart of Kent,
            WA.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href={SITE.booksy}>BOOK YOUR CUT</Button>

            <Button href="#services" variant="ghost">
              VIEW SERVICES
            </Button>
          </motion.div>
        </div>

        {/* RIGHT SIDE / HERO IMAGE */}
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.3,
            delay: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative"
        >
          {/* Hero image */}
          <div className="group relative aspect-[4/5] overflow-hidden border border-line bg-coal">
            <motion.img
              src={heroImage}
              alt="Mr. Fresh Barbershop"
              className="h-full w-full object-cover"
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 1.8,
                delay: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.04 }}
            />

            {/* Dark cinematic overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />

            {/* Subtle gold glow */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent opacity-60" />
          </div>

          {/* Floating logo */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -left-6 -top-6 hidden sm:block"
          >
            <Logo size={88} />
          </motion.div>

          {/* Open today badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-5 -left-5 border border-gold/50 bg-ink/90 px-5 py-3 backdrop-blur"
          >
            <p className="text-xs text-bone/60">Open today</p>

            <p className="display text-2xl text-gold">{SITE.closesToday}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-28">
      <Heading
        title="The fresh standard"
        sub="Classic barbering. Modern precision."
      />
      <Stagger className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <motion.a
            variants={fadeUp}
            key={s.name}
            href={SITE.booksy}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6 }}
            className="group relative block bg-ink p-8 transition-colors hover:bg-coal"
          >
            <motion.span
              whileHover={{ rotate: -12 }}
              className="inline-block text-gold"
            >
              <s.icon size={30} />
            </motion.span>
            <h3 className="display mt-8 text-4xl">{s.name}</h3>
            <p className="mt-3 text-bone/60">{s.desc}</p>
            <p className="mt-8 flex items-center justify-between text-sm text-gold">
              {s.price || "View price / Book"}
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-2"
              />
            </p>
            <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
          </motion.a>
        ))}
      </Stagger>
    </section>
  );
}

function Barbers() {
  return (
    <section
      className="mx-auto max-w-7xl px-5 py-28"
      aria-labelledby="barbers-h"
    >
      <Heading
        title="Meet the barbers"
        sub="Placeholder profiles. Swap in your team in src/data/site.ts."
      />
      <Stagger className="grid gap-8 md:grid-cols-3">
        {BARBERS.map((b, i) => (
          <motion.article variants={fadeUp} key={i} className="group">
            <Photo
              src={b.photo}
              label="Barber portrait"
              className="aspect-[3/4] border border-line"
            />
            <h3 className="display mt-5 text-3xl">{b.name}</h3>
            <p className="text-sm text-gold">{b.specialty}</p>
            <p className="mt-2 text-bone/60">{b.bio}</p>
            <a
              href={SITE.booksy}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-bold hover:text-gold"
            >
              Book with us{" "}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </motion.article>
        ))}
      </Stagger>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-5 py-28">
      <Heading
        title="The work"
        sub="Fades, beards and the shop. Add your own photos in the data file."
      />
      <Stagger className="grid grid-cols-2 gap-3 md:grid-cols-4 [grid-auto-rows:9rem] md:[grid-auto-rows:12rem]">
        {GALLERY.map((g) => (
          <motion.figure
            variants={scaleIn}
            key={g.label}
            className={`group relative overflow-hidden ${g.tall ? "row-span-2" : ""}`}
          >
            <Photo src={g.src} label={g.label} className="h-full w-full" />
            <figcaption className="absolute inset-0 flex items-end justify-between bg-ink/0 p-4 text-sm opacity-0 transition-all group-hover:bg-ink/60 group-hover:opacity-100">
              {g.label}
              <ArrowRight size={16} />
            </figcaption>
          </motion.figure>
        ))}
      </Stagger>
    </section>
  );
}

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (inView) {
      const c = animate(0, to, {
        duration: 1.4,
        onUpdate: (v) => {
          if (ref.current)
            ref.current.textContent = String(Math.round(v)).padStart(2, "0");
        },
      });
      return () => c.stop();
    }
  }, [inView, to]);
  return <span ref={ref}>00</span>;
}
function About() {
  return (
    <section id="about" className="border-y border-line bg-coal py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center">
        <Reveal v={scaleIn}>
          <Photo
            label="Shop interior"
            className="aspect-[4/5] border border-line"
          />
        </Reveal>
        <div>
          <Reveal>
            <h2 className="display text-5xl sm:text-7xl">
              More than a haircut. It's the fresh experience.
            </h2>
            <p className="mt-6 max-w-lg text-lg text-bone/65">
              Mr. Fresh Barbershop is a local Kent barber shop focused on
              precision cuts, fades, grooming and a great customer experience.
              Walk in sharp, walk out fresh.
            </p>
          </Reveal>
          <Stagger className="mt-12 grid grid-cols-3 gap-4">
            {["Precision", "Style", "Experience"].map((l, i) => (
              <motion.div
                variants={fadeUp}
                key={l}
                className="border-t border-gold pt-4"
              >
                <p className="display text-5xl text-gold">
                  <Counter to={i + 1} />
                </p>
                <p className="mt-1 text-sm">{l}</p>
              </motion.div>
            ))}
          </Stagger>
          <div className="mt-10">
            <Button href={SITE.booksy}>BOOK YOUR CUT</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      <Stagger className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
        {[
          "Precision cuts",
          "Clean fades",
          "Expert grooming",
          "Local Kent shop",
        ].map((t) => (
          <motion.p
            variants={fadeUp}
            key={t}
            className="display bg-ink p-8 text-4xl"
          >
            {t}
          </motion.p>
        ))}
      </Stagger>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="overflow-hidden py-28">
      <div className="mx-auto max-w-7xl px-5">
        <Heading
          title="What our clients say"
          sub="Placeholder reviews. Replace with real Google reviews in src/data/site.ts."
        />
      </div>
      <div
        className="flex snap-x gap-4 overflow-x-auto px-5 pb-4 sm:px-[max(1.25rem,calc((100vw-80rem)/2+1.25rem))]"
        tabIndex={0}
        aria-label="Customer reviews"
      >
        {REVIEWS.map((r, i) => (
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.7 }}
            className="w-80 shrink-0 snap-start border border-line bg-coal p-7"
          >
            <div className="flex gap-1 text-gold" aria-label="5 out of 5 stars">
              {[0, 1, 2, 3, 4].map((n) => (
                <Star key={n} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="mt-5 text-bone/75">{r.text}</p>
            <footer className="mt-6 text-sm text-gold">{r.name}</footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="mx-auto max-w-7xl px-5 py-28">
      <Heading title="Come get fresh" />
      <div className="grid gap-8 lg:grid-cols-2">
        <Reveal className="border border-line bg-coal p-8">
          <address className="not-italic">
            <p className="display text-4xl">
              {SITE.address[0]}
              <br />
              {SITE.address[1]}
            </p>
            <a
              href={`tel:${SITE.tel}`}
              className="mt-4 inline-flex min-h-11 items-center gap-2 text-lg text-gold"
            >
              <Phone size={18} />
              {SITE.phone}
            </a>
          </address>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={SITE.directions}>GET DIRECTIONS</Button>
            <Button href={`tel:${SITE.tel}`} variant="ghost">
              CALL NOW
            </Button>
          </div>
          <div
            className="relative mt-8 aspect-[16/7] overflow-hidden border border-line bg-ink [background-image:linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] [background-size:32px_32px]"
            aria-hidden
          >
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gold">
              <MapPin size={36} />
            </span>
          </div>
        </Reveal>
        <Reveal className="border border-line p-8">
          <p className="display text-5xl text-gold">Open today</p>
          <p className="mb-6 text-xl">{SITE.closesToday}</p>
          <dl>
            {HOURS.map(([d, h]) => (
              <div
                key={d}
                className="flex justify-between border-b border-line py-3"
              >
                <dt>{d}</dt>
                <dd className="text-bone/50">{h}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-coal px-5 py-32 text-center">
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute left-1/2 top-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold blur-[120px]"
      />
      <Reveal className="relative">
        <h2 className="display text-[clamp(3.5rem,11vw,9rem)]">
          Ready to get fresh?
        </h2>
        <p className="mt-4 text-xl text-bone/70">Your chair is waiting.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href={SITE.booksy}>BOOK YOUR APPOINTMENT</Button>
          <Button href={`tel:${SITE.tel}`} variant="ghost">
            CALL {SITE.phone}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  const soc = [
    [Instagram, "Instagram", SITE.social.instagram],
    [Facebook, "Facebook", SITE.social.facebook],
    [Music2, "TikTok", SITE.social.tiktok],
  ] as const;
  return (
    <footer className="mx-auto grid max-w-7xl gap-10 px-5 py-16 pb-28 md:grid-cols-3 md:pb-16">
      <div>
        <Logo size={56} />
        <p className="display mt-4 text-3xl">{SITE.name}</p>
        <p className="mt-2 text-bone/60">{SITE.address.join(", ")}</p>
        <a href={`tel:${SITE.tel}`} className="text-gold">
          {SITE.phone}
        </a>
      </div>
      <nav aria-label="Footer">
        <ul className="grid grid-cols-2 gap-2">
          {NAV.map((n) => (
            <li key={n}>
              <a
                className="inline-flex min-h-9 items-center text-bone/70 hover:text-gold"
                href={`#${id(n)}`}
              >
                {n}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <a
          href={SITE.booksy}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center text-gold underline"
        >
          Book on Booksy
        </a>
        <div className="mt-4 flex gap-3">
          {soc.map(([I, l, h]) => (
            <a
              key={l}
              href={h}
              aria-label={l}
              className="grid size-11 place-items-center border border-line hover:border-gold hover:text-gold"
            >
              <I size={18} />
            </a>
          ))}
        </div>
      </div>
      <p className="border-t border-line pt-6 text-sm text-bone/50 md:col-span-3">
        © 2026 Mr. Fresh Barbershop. All rights reserved.
      </p>
    </footer>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[70] h-0.5 origin-left bg-gold"
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Booking />
        <Barbers />
        <Gallery />
        <About />
        <Why />
        <Reviews />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <a
        href={SITE.booksy}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed inset-x-4 bottom-4 z-50 flex min-h-14 items-center justify-center bg-gold font-bold text-ink shadow-2xl md:hidden"
      >
        BOOK NOW
      </a>
    </>
  );
}
