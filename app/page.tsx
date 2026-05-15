"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Coffee,
  Heart,
  Mail,
  MapPin,
  Menu,
  Music2,
  Phone,
  Play,
  Send,
  Sparkles,
  Star,
  X
} from "lucide-react";
import { useRef, useState } from "react";
import { journalArticles } from "./journal/articles";

const heroImage =
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=2200&q=90";

const drinks = [
  {
    name: "Velvet Øat Latte",
    detail: "single-origin espresso, oat silk, toasted vanilla",
    price: "29 LEI",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Rose Cold Cream",
    detail: "cold brew, rose foam, cocoa dust, sea salt",
    price: "32 LEI",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Midnight Mocha",
    detail: "dark chocolate, double espresso, cream cloud, cacao dust",
    price: "34 LEI",
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=900&q=85"
  }
];

const brunch = [
  ["Truffle Egg Croissant", "buttery layers, soft eggs, black truffle cream", "69 LEI"],
  ["Cacao French Toast", "brioche, espresso anglaise, caramelized banana", "62 LEI"],
  ["Burrata Garden Toast", "heirloom tomatoes, basil oil, toasted sourdough", "66 LEI"],
  ["Smoked Honey Halloumi", "fig jam, za'atar, warm flatbread", "58 LEI"]
];

const gallery = [
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1513267048331-5611cad62e41?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=900&q=85"
];

const socialCards = [
  {
    badge: "IG",
    platform: "Instagram",
    detail: "Carousel posts, story polls, brunch reels",
    href: "https://www.instagram.com/moodcafe.bucharest/",
    images: ["/images/social/table2.png", "/images/social/lifestyle.png", "/images/social/table.png"]
  },
  {
    badge: "FB",
    platform: "Facebook",
    detail: "Events, reservation updates, community posts",
    href: "https://www.facebook.com/profile.php?id=61589791858569",
    images: ["/images/social/barista.png", "/images/social/interior.png", "/images/social/brunch.png"]
  }
];

const websiteStructure = [
  "Home",
  "About",
  "Drinks",
  "Brunch",
  "Gallery",
  "Social Media",
  "Reviews",
  "Blog",
  "Reservation & Contact"
];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0 }
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      variants={fadeUp}
      className="mb-4 inline-flex items-center gap-2 rounded-full border border-crema/15 bg-crema/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-oat"
    >
      <Sparkles size={14} />
      {children}
    </motion.p>
  );
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [feedbackName, setFeedbackName] = useState("");
  const [feedbackCategory, setFeedbackCategory] = useState("Atmosphere");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackList, setFeedbackList] = useState([
    {
      name: "Lina R.",
      category: "Atmosphere",
      rating: 5,
      message: "Every corner feels styled for golden-hour reels, but the coffee is genuinely exceptional."
    },
    {
      name: "Maya K.",
      category: "Brunch",
      rating: 5,
      message: "A polished brunch spot with the kind of atmosphere people keep posting about."
    },
    {
      name: "Noor A.",
      category: "Drinks",
      rating: 5,
      message: "Warm lighting, elegant plates, and the best tiramisu latte I have tried this semester."
    }
  ]);
  const [contactSent, setContactSent] = useState(false);
  const [contactError, setContactError] = useState("");
  const [reservationForm, setReservationForm] = useState({
    name: "",
    email: "",
    date: "",
    guests: "",
    occasion: "",
    suggestions: ""
  });
  const [satisfactionSent, setSatisfactionSent] = useState(false);
  const [jazzPlaying, setJazzPlaying] = useState(false);
  const [jazzError, setJazzError] = useState(false);
  const jazzAudioRef = useRef<HTMLAudioElement | null>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 700], [0, 180]);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Drinks", href: "#drinks" },
    { label: "Brunch", href: "#brunch" },
    { label: "Gallery", href: "#gallery" },
    { label: "Social Media", href: "#social-media" },
    { label: "Reviews", href: "#reviews" },
    { label: "Blog", href: "#blog" },
    { label: "Reservation & Contact", href: "#reserve" }
  ];

  const toggleJazz = () => {
    const audio = jazzAudioRef.current;

    if (!audio) {
      return;
    }

    if (!audio.paused) {
      audio.pause();
      setJazzPlaying(false);
      return;
    }

    audio.volume = 0.32;
    audio
      .play()
      .then(() => {
        setJazzPlaying(true);
        setJazzError(false);
      })
      .catch(() => {
        setJazzPlaying(false);
        setJazzError(true);
      });
  };

  return (
    <main className="overflow-hidden bg-smoke text-crema">
      <audio
        ref={jazzAudioRef}
        loop
        preload="none"
        src="/audio/mellow-cafe-vibe.mp3"
      />
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8"
      >
        <div className="glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 md:px-6">
          <a href="#home" className="font-display text-2xl font-bold tracking-wide text-crema">
            MØOD <span className="text-caramel">Café</span>
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-crema/72 transition hover:text-caramel"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#reserve"
            className="hidden items-center gap-2 rounded-full bg-crema px-5 py-3 text-sm font-bold text-roast transition hover:bg-caramel md:inline-flex"
          >
            Book a table
            <ArrowRight size={16} />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
            className="grid size-11 place-items-center rounded-full border border-crema/15 bg-crema/8 text-crema md:hidden"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass mx-4 mt-3 rounded-[28px] p-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-semibold text-crema/80 transition hover:bg-crema/10"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </motion.nav>

      <section id="home" className="relative min-h-screen overflow-hidden px-4 pb-12 pt-32 md:px-8 md:pt-40">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <img src={heroImage} alt="" className="h-full w-full object-cover opacity-62 soft-mask" />
          <div className="absolute inset-0 bg-gradient-to-b from-roast/55 via-roast/62 to-smoke" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_0%,rgba(11,9,8,0.55)_58%,#0b0908_100%)]" />
        </motion.div>
        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-9rem)] max-w-7xl items-end gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.13 }}
            className="max-w-4xl pb-4"
          >
            <motion.p variants={fadeUp} className="mb-5 text-sm font-semibold uppercase tracking-[0.38em] text-oat">
              Evening coffee, brunch culture, social glow
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-balance font-display text-6xl font-bold leading-[0.9] text-crema sm:text-7xl md:text-8xl xl:text-9xl"
            >
              MØOD Café
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-lg leading-8 text-crema/78 md:text-xl"
            >
              Specialty coffee, signature brunch, and warm cinematic interiors designed for slow evenings,
              beautiful conversations, and scroll-stopping moments.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#reserve"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-caramel px-7 py-4 font-bold text-roast shadow-glow transition hover:scale-[1.02] hover:bg-crema"
              >
                Reserve online
                <CalendarDays size={18} />
              </a>
              <a
                href="#gallery"
                className="glass inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 font-bold text-crema transition hover:border-caramel/60"
              >
                Watch the vibe
                <Play size={17} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="glass mb-8 rounded-[2rem] p-4 md:mb-16"
          >
            <div className="relative overflow-hidden rounded-[1.5rem]">
              <img
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=90"
                alt="Premium brunch table with coffee and pastries"
                className="h-80 w-full object-cover md:h-[30rem]"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-3xl border border-crema/18 bg-roast/62 p-4 backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-oat">Tonight's mood</p>
                    <p className="mt-1 font-display text-2xl font-semibold">Espresso, candlelight, velvet jazz</p>
                    {jazzError && (
                      <p className="mt-2 text-xs font-semibold text-caramel">
                        Tap again or check that browser sound is not muted.
                      </p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={toggleJazz}
                    className="inline-flex shrink-0 items-center gap-2 rounded-full bg-crema px-4 py-3 text-sm font-bold text-roast transition hover:bg-caramel"
                    aria-label={jazzPlaying ? "Pause jazz" : "Play jazz"}
                  >
                    {jazzPlaying ? "Pause" : "Play"}
                    <Music2 size={17} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        id="about"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.12 }}
        className="mx-auto grid max-w-7xl gap-10 px-4 py-24 md:grid-cols-[0.9fr_1.1fr] md:px-8"
      >
        <div>
          <SectionLabel>About the brand</SectionLabel>
          <motion.h2 variants={fadeUp} className="text-balance font-display text-5xl font-bold md:text-7xl">
            Built like a café, styled like a campaign.
          </motion.h2>
        </div>
        <motion.div variants={fadeUp} className="space-y-7 text-lg leading-8 text-crema/72">
          <p>
            MØOD Café is a luxury café concept for guests who discover places through social media,
            save aesthetic interiors, and book based on atmosphere as much as taste.
          </p>
          <p>
            The brand is built around the idea that a café can be both a real hospitality space and a
            powerful online identity. Every detail is designed to support a complete customer journey:
            someone sees a warm reel, saves a brunch photo, checks the menu, books a table, then shares
            their own version of the experience.
          </p>
          <p>
            MØOD Café shows how interior design, product presentation, customer feedback, and digital
            storytelling can work together. The dark espresso palette, glass textures, cozy lighting,
            and cinematic food photography create a premium atmosphere that feels memorable both in
            person and online.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {["Warm glass lighting", "Creator-friendly tables", "Premium brunch rituals"].map((item) => (
              <div key={item} className="glass rounded-3xl p-5">
                <Heart className="mb-5 text-caramel" size={22} />
                <p className="font-semibold text-crema">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        id="drinks"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.12 }}
        className="px-4 py-24 md:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Featured drinks and desserts</SectionLabel>
          <motion.div variants={fadeUp} className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-3xl font-display text-5xl font-bold md:text-7xl">Signature pieces for the feed and the table.</h2>
            <p className="max-w-md text-crema/68">Editorial café photography, soft shadows, and menu cards designed to feel like saved posts.</p>
          </motion.div>
          <div className="grid gap-5 md:grid-cols-3">
            {drinks.map((item) => (
              <motion.article
                key={item.name}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group glass overflow-hidden rounded-[2rem] p-3"
              >
                <div className="overflow-hidden rounded-[1.45rem]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <h3 className="font-display text-3xl font-semibold">{item.name}</h3>
                    <span className="rounded-full bg-crema px-3 py-1 text-sm font-bold text-roast">{item.price}</span>
                  </div>
                  <p className="text-sm leading-6 text-crema/68">{item.detail}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="brunch"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ staggerChildren: 0.12 }}
        className="px-4 py-24 md:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div variants={fadeUp} className="relative min-h-[34rem] overflow-hidden rounded-[2rem]">
            <img
              src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1200&q=90"
              alt="Luxury brunch spread"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-roast via-roast/26 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm uppercase tracking-[0.28em] text-oat">Signature brunch</p>
              <h2 className="mt-3 font-display text-5xl font-bold">A menu made for slow mornings.</h2>
            </div>
          </motion.div>
          <div className="glass rounded-[2rem] p-6 md:p-9">
            <SectionLabel>Menu cards</SectionLabel>
            <div className="space-y-4">
              {brunch.map(([name, detail, price]) => (
                <motion.div
                  key={name}
                  variants={fadeUp}
                  className="rounded-3xl border border-crema/12 bg-crema/[0.045] p-5 transition hover:border-caramel/45 hover:bg-crema/[0.075]"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="font-display text-3xl font-semibold">{name}</h3>
                      <p className="mt-2 text-sm leading-6 text-crema/64">{detail}</p>
                    </div>
                    <p className="font-bold text-caramel">{price}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="gallery"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.08 }}
        className="px-4 py-24 md:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Instagram gallery</SectionLabel>
          <motion.div variants={fadeUp} className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-3xl font-display text-5xl font-bold md:text-7xl">Designed to be discovered, saved, and shared.</h2>
            <div className="flex gap-3">
              <span className="glass inline-flex size-12 items-center justify-center rounded-full text-caramel">
                IG
              </span>
            </div>
          </motion.div>
          <div className="gallery-grid grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {gallery.map((image, index) => (
              <motion.div
                key={image}
                variants={fadeUp}
                whileHover={{ scale: 0.985 }}
                className={`group relative overflow-hidden rounded-[1.6rem] ${
                  index === 0 ? "row-span-4 md:col-span-2 md:row-span-6" : "row-span-3"
                }`}
              >
                <img src={image} alt="MØOD Café social media visual" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-roast/76 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="rounded-full bg-roast/58 px-3 py-2 text-xs font-bold backdrop-blur-md">#MoodCafe</span>
                  <Star size={17} className="text-caramel" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
        transition={{ staggerChildren: 0.12 }}
        className="px-4 py-24 md:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Cinematic cafe preview</SectionLabel>
          <motion.div variants={fadeUp} className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-3xl font-display text-5xl font-bold md:text-7xl">
              Experience the atmosphere before you arrive.
            </h2>
            <p className="max-w-md text-crema/68">
              A short visual preview supports online promotion by showing the mood, lighting, and social experience before booking.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="glass overflow-hidden rounded-[2.2rem] p-3">
            <div className="relative overflow-hidden rounded-[1.7rem]">
              <video
                className="h-[28rem] w-full object-cover md:h-[38rem]"
                autoPlay
                muted
                loop
                playsInline
                poster="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=90"
              >
                <source
                  src="https://videos.pexels.com/video-files/3772015/3772015-hd_1920_1080_25fps.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-roast/82 via-roast/18 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex flex-col justify-between gap-4 rounded-3xl border border-crema/14 bg-roast/58 p-5 backdrop-blur-xl md:flex-row md:items-center">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-oat">Atmosphere reel</p>
                  <p className="mt-2 font-display text-3xl font-semibold">Barista rituals, espresso steam, warm cafe light.</p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-crema px-4 py-3 text-sm font-bold text-roast">
                  <Play size={16} />
                  Preview
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="social-media"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
        transition={{ staggerChildren: 0.1 }}
        className="px-4 py-24 md:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Social media integration</SectionLabel>
          <motion.div variants={fadeUp} className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-3xl font-display text-5xl font-bold md:text-7xl">Built for Instagram saves and Facebook community updates.</h2>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.instagram.com/moodcafe.bucharest/" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-3 rounded-full border border-crema/14 bg-crema/8 px-5 py-3 text-sm font-bold text-crema transition hover:border-caramel/60 hover:text-caramel">
                Instagram
                <ArrowRight size={16} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61589791858569" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-3 rounded-full border border-crema/14 bg-crema/8 px-5 py-3 text-sm font-bold text-crema transition hover:border-caramel/60 hover:text-caramel">
                Facebook
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
          <div className="grid gap-5 md:grid-cols-2">
            {socialCards.map((social) => (
              <motion.a
                key={social.platform}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="glass rounded-[2rem] p-6"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="grid size-14 place-items-center rounded-full bg-crema text-sm font-black text-roast">{social.badge}</span>
                  <span className="rounded-full border border-crema/12 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-oat">
                    Official page
                  </span>
                </div>
                <h3 className="font-display text-3xl font-semibold">{social.platform}</h3>
                <p className="mt-3 text-sm leading-6 text-crema/66">{social.detail}</p>
                <div className="mt-6 grid grid-cols-3 gap-2">
                  {social.images.map((image) => (
                    <div key={image} className="aspect-[4/5] overflow-hidden rounded-2xl bg-roast">
                      <img src={image} alt={`${social.platform} MØOD Café post`} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
                    </div>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>


      <motion.section
        id="reviews"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ staggerChildren: 0.12 }}
        className="px-4 py-24 md:px-8"
      >
        <div className="glass mx-auto grid max-w-7xl gap-10 rounded-[2.4rem] p-6 md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div variants={fadeUp}>
            <SectionLabel>Customer reviews</SectionLabel>
            <h2 className="font-display text-5xl font-bold md:text-7xl">Reviews from the MØOD table.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-crema/70">
              Read recent impressions or leave your own note about the atmosphere, service, drinks, brunch, or interior design.
            </p>
          </motion.div>
          <motion.form
            variants={fadeUp}
            onSubmit={(event) => {
              event.preventDefault();
              const cleanName = feedbackName.trim() || "Guest";
              const cleanMessage = feedbackMessage.trim();

              if (!cleanMessage) {
                return;
              }

              setFeedbackList((items) => [
                {
                  name: cleanName,
                  category: feedbackCategory,
                  rating,
                  message: cleanMessage
                },
                ...items
              ]);
              setFeedbackName("");
              setFeedbackCategory("Atmosphere");
              setFeedbackMessage("");
              setRating(5);
              setSatisfactionSent(true);
            }}
            className="rounded-[2rem] border border-crema/12 bg-smoke/55 p-5 md:p-7"
          >
            <div className="mb-5 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.22em] text-oat">Name</span>
                <input
                  value={feedbackName}
                  onChange={(event) => setFeedbackName(event.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-crema/12 bg-crema/[0.06] px-4 py-4 text-crema outline-none transition placeholder:text-crema/35 focus:border-caramel"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.22em] text-oat">Category</span>
                <select
                  value={feedbackCategory}
                  onChange={(event) => setFeedbackCategory(event.target.value)}
                  className="w-full rounded-2xl border border-crema/12 bg-roast px-4 py-4 text-crema outline-none transition focus:border-caramel"
                >
                  <option>Atmosphere</option>
                  <option>Drinks</option>
                  <option>Brunch</option>
                  <option>Service</option>
                  <option>Interior design</option>
                </select>
              </label>
            </div>
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.22em] text-oat">1-5 star rating</span>
            <div className="mb-5 flex gap-2">
              {Array.from({ length: 5 }).map((_, index) => {
                const value = index + 1;
                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setRating(value)}
                    aria-label={`Rate ${value} stars`}
                    className="grid size-12 place-items-center rounded-full border border-crema/12 bg-crema/[0.06] text-caramel transition hover:border-caramel"
                  >
                    <Star size={20} fill={value <= rating ? "currentColor" : "none"} />
                  </button>
                );
              })}
            </div>
            <label className="block">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.22em] text-oat">Feedback</span>
              <textarea
                value={feedbackMessage}
                onChange={(event) => setFeedbackMessage(event.target.value)}
                rows={5}
                placeholder="Share your experience, favorite detail, or what could be improved..."
                className="w-full resize-none rounded-2xl border border-crema/12 bg-crema/[0.06] px-4 py-4 text-crema outline-none transition placeholder:text-crema/35 focus:border-caramel"
              />
            </label>
            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-full bg-crema px-6 py-4 font-bold text-roast transition hover:bg-caramel"
            >
              Submit feedback
              <Send size={18} />
            </button>
            {satisfactionSent && (
              <p className="mt-4 rounded-2xl border border-caramel/30 bg-caramel/10 px-4 py-3 text-sm font-semibold text-crema">
                Thank you. Your satisfaction feedback was received.
              </p>
            )}

            <div className="mt-7 border-t border-crema/12 pt-6">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-oat">Recent feedback</p>
              <div className="space-y-3">
                {feedbackList.map((item, index) => (
                  <article key={`${item.name}-${index}`} className="rounded-3xl border border-crema/12 bg-crema/[0.045] p-4">
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="font-display text-2xl font-semibold">{item.name}</p>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-oat">{item.category}</p>
                      </div>
                      <div className="flex gap-1 text-caramel">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            size={14}
                            fill={starIndex < item.rating ? "currentColor" : "none"}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm leading-6 text-crema/70">{item.message}</p>
                  </article>
                ))}
              </div>
            </div>
          </motion.form>
        </div>
      </motion.section>

      <motion.section
        id="blog"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.12 }}
        className="px-4 py-24 md:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionLabel>MØOD Journal</SectionLabel>
          <motion.div variants={fadeUp} className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-3xl font-display text-5xl font-bold md:text-7xl">Marketing notes from the cafe table.</h2>
            <p className="max-w-md text-crema/68">
              Short editorial articles connect the cafe concept to social media behavior, online branding, and modern customer habits.
            </p>
          </motion.div>
          <div className="grid gap-5 md:grid-cols-3">
            {journalArticles.map((article) => (
              <Link key={article.slug} href={`/journal/${article.slug}`} className="block">
                <motion.article variants={fadeUp} whileHover={{ y: -8 }} className="group glass h-full overflow-hidden rounded-[2rem] p-3">
                  <div className="overflow-hidden rounded-[1.45rem]">
                    <img src={article.image} alt={article.title} className="h-64 w-full object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-oat">MØOD Journal</p>
                    <h3 className="font-display text-3xl font-semibold">{article.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-crema/66">{article.excerpt}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-caramel">
                      Read article
                      <ArrowRight size={15} />
                    </span>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.06 }}
        className="px-4 py-20 md:px-8"
      >
        <div className="glass mx-auto max-w-7xl rounded-[2rem] p-6 md:p-9">
          <SectionLabel>Website Structure</SectionLabel>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            {websiteStructure.map((item) => (
              <span key={item} className="rounded-full border border-crema/12 bg-crema/[0.06] px-4 py-3 text-sm font-bold text-crema/76">
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="reserve"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ staggerChildren: 0.12 }}
        className="px-4 py-24 md:px-8"
      >
        <div className="glass mx-auto grid max-w-7xl gap-10 rounded-[2.4rem] p-6 md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div variants={fadeUp}>
            <SectionLabel>Reservations and contact</SectionLabel>
            <h2 className="font-display text-5xl font-bold md:text-7xl">Book the table that matches your mood.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-crema/70">
              Perfect for creator meetups, study brunches, date-night coffee, and intimate celebrations
              built around beautiful atmosphere.
            </p>
            <div className="mt-9 space-y-4 text-crema/76">
              <p className="flex items-center gap-3"><MapPin size={18} className="text-caramel" /> Strada Benjamin Franklin 12, Bucuresti</p>
              <p className="flex items-center gap-3"><Phone size={18} className="text-caramel" /> +40 721 204 040</p>
              <p className="flex items-center gap-3"><Mail size={18} className="text-caramel" /> reservations@moodcafe.ro</p>
            </div>
          </motion.div>
          <motion.form
            id="contact"
            variants={fadeUp}
            onSubmit={(event) => {
              event.preventDefault();
              const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              const guestsNumber = Number(reservationForm.guests);

              if (!reservationForm.name.trim()) {
                setContactError("Please enter your name.");
                setContactSent(false);
                return;
              }

              if (!emailPattern.test(reservationForm.email)) {
                setContactError("Please enter a valid email address.");
                setContactSent(false);
                return;
              }

              if (!reservationForm.date) {
                setContactError("Please choose a reservation date.");
                setContactSent(false);
                return;
              }

              if (!Number.isInteger(guestsNumber) || guestsNumber < 1) {
                setContactError("Please enter at least one guest.");
                setContactSent(false);
                return;
              }

              setReservationForm({
                name: "",
                email: "",
                date: "",
                guests: "",
                occasion: "",
                suggestions: ""
              });
              setContactError("");
              setContactSent(true);
            }}
            className="rounded-[2rem] border border-crema/12 bg-smoke/55 p-5 md:p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.22em] text-oat">Name</span>
                <input
                  value={reservationForm.name}
                  onChange={(event) => setReservationForm((form) => ({ ...form, name: event.target.value }))}
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-crema/12 bg-crema/[0.06] px-4 py-4 text-crema outline-none transition placeholder:text-crema/35 focus:border-caramel"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.22em] text-oat">Email</span>
                <input
                  type="email"
                  value={reservationForm.email}
                  onChange={(event) => setReservationForm((form) => ({ ...form, email: event.target.value }))}
                  placeholder="name@example.com"
                  className="w-full rounded-2xl border border-crema/12 bg-crema/[0.06] px-4 py-4 text-crema outline-none transition placeholder:text-crema/35 focus:border-caramel"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.22em] text-oat">Date</span>
                <input
                  type="date"
                  value={reservationForm.date}
                  onChange={(event) => setReservationForm((form) => ({ ...form, date: event.target.value }))}
                  className="w-full rounded-2xl border border-crema/12 bg-crema/[0.06] px-4 py-4 text-crema outline-none transition placeholder:text-crema/35 focus:border-caramel"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.22em] text-oat">Guests</span>
                <input
                  type="number"
                  min={1}
                  value={reservationForm.guests}
                  onChange={(event) => setReservationForm((form) => ({ ...form, guests: event.target.value }))}
                  placeholder="2"
                  className="w-full rounded-2xl border border-crema/12 bg-crema/[0.06] px-4 py-4 text-crema outline-none transition placeholder:text-crema/35 focus:border-caramel"
                />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.22em] text-oat">Occasion</span>
              <textarea
                value={reservationForm.occasion}
                onChange={(event) => setReservationForm((form) => ({ ...form, occasion: event.target.value }))}
                rows={4}
                placeholder="Brunch, birthday, study session, content shoot..."
                className="w-full resize-none rounded-2xl border border-crema/12 bg-crema/[0.06] px-4 py-4 text-crema outline-none transition placeholder:text-crema/35 focus:border-caramel"
              />
            </label>
            <label className="mt-4 block">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.22em] text-oat">Suggestions</span>
              <textarea
                value={reservationForm.suggestions}
                onChange={(event) => setReservationForm((form) => ({ ...form, suggestions: event.target.value }))}
                rows={3}
                placeholder="Suggest a drink, campaign idea, event night, or content concept..."
                className="w-full resize-none rounded-2xl border border-crema/12 bg-crema/[0.06] px-4 py-4 text-crema outline-none transition placeholder:text-crema/35 focus:border-caramel"
              />
            </label>
            {contactError && (
              <p className="mt-4 rounded-2xl border border-red-300/25 bg-red-400/10 px-4 py-3 text-sm font-semibold text-red-100">
                {contactError}
              </p>
            )}
            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-full bg-crema px-6 py-4 font-bold text-roast transition hover:bg-caramel"
            >
              Send reservation request
              <Coffee size={18} />
            </button>
            {contactSent && (
              <p className="mt-4 rounded-2xl border border-caramel/30 bg-caramel/10 px-4 py-3 text-sm font-semibold text-crema">
                Success. Your reservation request and feedback details were submitted.
              </p>
            )}
          </motion.form>
        </div>
      </motion.section>

      <footer className="border-t border-crema/10 px-4 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="font-display text-3xl font-bold">MØOD Café</p>
            <p className="mt-2 text-sm text-crema/55">Cinematic coffee culture for modern online business promotion.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-crema/68">
            <a href="#home" className="transition hover:text-caramel">Home</a>
            <a href="#drinks" className="transition hover:text-caramel">Menu</a>
            <a href="#reserve" className="transition hover:text-caramel">Reserve</a>
            <a href="https://www.instagram.com/moodcafe.bucharest/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-caramel"><span>IG</span> Instagram</a>
            <a href="https://www.facebook.com/profile.php?id=61589791858569" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-caramel"><span>FB</span> Facebook</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
