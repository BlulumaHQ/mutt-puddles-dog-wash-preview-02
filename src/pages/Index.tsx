import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Scissors,
  ShowerHead,
  Star,
  BadgePercent,
  Quote,
  Clock,
  Shield,
  Sparkles,
  Medal,
  CheckCircle2,
  Heart,
  ArrowDown,
  ChevronRight,
} from "lucide-react";
import PageMeta from "../components/PageMeta";
import ContactForm from "../components/ContactForm";

const heroSlides = [
  { src: "/images/hero-bg.jpg", alt: "Happy golden retriever after grooming" },
  { src: "/images/hero-bg-2.jpg", alt: "Fluffy white dog being groomed" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const CTAButton = ({ className = "" }: { className?: string }) => (
  <a
    href="tel:2535313387"
    className={`inline-flex items-center gap-2.5 px-8 py-4 rounded-button bg-primary text-primary-foreground font-extrabold text-base hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary/25 ${className}`}
  >
    <Phone className="h-5 w-5" />
    Call (253) 531-3387 — Book Now
  </a>
);

const CTAButtonSecondary = ({ text = "View Our Services" }: { text?: string }) => (
  <Link
    to="/services/"
    className="inline-flex items-center gap-2 px-8 py-4 rounded-button border-2 border-secondary text-secondary font-bold text-base hover:bg-secondary hover:text-secondary-foreground transition-all"
  >
    {text}
    <ChevronRight className="h-4 w-4" />
  </Link>
);

/* ─── 1. HOOK ─── */
const HeroHook = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % heroSlides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={heroSlides[current].src}
            alt={heroSlides[current].alt}
            className="w-full h-full object-cover object-right"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/40" />
      </div>

      <div className="relative section-container py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-bold text-primary">Trusted Since 2007</span>
          </div>
          <h1 className="heading-display text-primary-foreground mb-6">
            The Right Pet Groomer in Tacoma, WA for Your Furry Friend
          </h1>
          <p className="text-xl text-primary-foreground/85 leading-relaxed mb-10 max-w-xl">
            Professional grooming services and upscale self-serve wash amenities. Your pet deserves the best.
          </p>
          <div className="flex flex-wrap gap-4">
            <CTAButton />
            <CTAButtonSecondary />
          </div>
        </motion.div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all ${i === current ? "bg-primary w-8" : "bg-primary-foreground/40 w-2.5"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 right-8 text-primary-foreground/50 hidden md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
};

/* ─── 2. PROBLEM ─── */
const ProblemSection = () => (
  <section className="py-16 lg:py-20 bg-foreground text-primary-foreground">
    <div className="section-container text-center max-w-3xl">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">
          Sound familiar?
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
          Finding an Affordable, Trustworthy Groomer Shouldn't Be This Hard
        </h2>
        <p className="text-primary-foreground/70 text-lg leading-relaxed">
          You love your pet — but expensive grooming bills, long wait times, and unfamiliar environments make pet care stressful. You deserve a better option.
        </p>
      </motion.div>
    </div>
  </section>
);

/* ─── 3. AGITATION ─── */
const AgitationSection = () => (
  <section className="py-16 lg:py-20">
    <div className="section-container max-w-4xl">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {[
          { title: "Overpriced Salons", desc: "Most groomers charge a premium with no transparency on pricing or services." },
          { title: "Stressful for Pets", desc: "Unfamiliar environments and handlers can make grooming traumatic for your furry friend." },
          { title: "No DIY Option", desc: "Want to groom your dog yourself? Most places don't even offer that." },
        ].map((item) => (
          <motion.div key={item.title} variants={fadeUp} className="p-6">
            <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mx-auto mb-4">
              <X_Icon />
            </div>
            <h3 className="font-extrabold text-lg text-foreground mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

/* ─── 4. SOLUTION ─── */
const SolutionSection = () => (
  <section className="py-20 lg:py-28 bg-muted">
    <div className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">THE SOLUTION</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-6">
            What We Do
          </h2>
          <p className="prose-body text-muted-foreground mb-4">
            If you want to treat your pet to a nice grooming session or you want to learn how to groom your dog by yourself, we are the specialists who will offer you the professional services you need. Serving customers in Tacoma, WA, we can offer you grooming services or help you become the pet groomer of your furry friend.
          </p>
          <p className="prose-body text-muted-foreground mb-8">
            With Mutt Puddles Dog Wash, you will rely on skilled and experienced people.
          </p>
          <CTAButton />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <img
            src="/images/Pet-Groomer-1080x720.jpg"
            alt="Professional Pet Groomer at Mutt Puddles"
            className="w-full rounded-card object-cover shadow-xl"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

/* ─── 5. BENEFITS ─── */
const BenefitsSection = () => (
  <section className="py-20 lg:py-28">
    <div className="section-container">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
        <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">WHY CHOOSE US</p>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4">
          Everything Your Pet Needs — Under One Roof
        </h2>
      </motion.div>

      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: ShowerHead, title: "Self-Service Dog Wash", desc: "Clean tubs, towels, shampoos, conditioners, and professional tools. Bond with your pet in our spa-like facility." },
          { icon: Scissors, title: "Professional Grooming", desc: "Skilled and experienced groomers for all breeds. Your pet's satisfaction is our priority." },
          { icon: Heart, title: "Safe & Comfortable", desc: "We are a self service dog wash facility and pet grooming salon that will give you safety and comfort for you and your pets." },
          { icon: CheckCircle2, title: "Top-of-the-Line Equipment", desc: "Having top-of-the-line tubs, we give you a place where you can bath and bond with your pet." },
          { icon: Sparkles, title: "Learn As You Go", desc: "Our employees will assist you in learning to care for the appearance of your pet by yourself, while avoiding the cost of a professional pet groomer." },
          { icon: Shield, title: "Since 2007", desc: "Renowned for our professional services, we have been running Mutt Puddles Dog Wash since 2007 with the goal to meet the individual requirements of every customer." },
        ].map((benefit) => (
          <motion.div
            key={benefit.title}
            variants={fadeUp}
            className="bg-background rounded-card p-8 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-250"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
              <benefit.icon className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-lg font-extrabold text-foreground mb-3">{benefit.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

/* ─── 6. TRUST ─── */
const TrustSection = () => (
  <section className="py-20 lg:py-28 bg-foreground text-primary-foreground">
    <div className="section-container max-w-4xl">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center">
        <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">REAL REVIEWS</p>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-10">
          Don't Just Take Our Word For It
        </h2>
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative bg-primary-foreground/5 border border-primary-foreground/10 rounded-card p-10 md:p-14">
        <Quote className="absolute top-6 left-6 h-16 w-16 text-primary/20" />
        <div className="relative">
          <blockquote className="text-primary-foreground text-lg md:text-xl leading-relaxed mb-6">
            "I just have to say I'm not one who takes time to do a review but after my experience I just had too. I have a 1 year old English bulldog and he can be difficult sometimes when it's something new to him. But I have been looking around for a place I can take him to where I could get him groomed or be able to do it myself. I was up late looking at all these different places that offer self wash or grooming and came across this amazing place and so glad I did. I made the phone call and brought my baby Winston in the same day. I never used a service like this before and wow!! The owners were so helpful and patient with me. They made me feel very comfortable and addressed any or all my questions. I found my spot for Winston's pampering days. And the cost for him was great along with the extra perks they offer. If you are looking for a relaxing experience with your pet this is the place. I can go on and on but I would definitely recommend this place. Thank you guys again. Winston and I will see you soon"
          </blockquote>
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-sm font-bold text-primary-foreground/80">— Winston's Owner</p>
        </div>
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-10 text-center">
        <Link
          to="/testimonials/"
          className="text-primary font-bold hover:underline underline-offset-4 transition-colors"
        >
          Read More Reviews →
        </Link>
      </motion.div>
    </div>
  </section>
);

/* ─── 7. OFFER — Promos ─── */
const OfferSection = () => (
  <section className="py-20 lg:py-28">
    <div className="section-container">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
        <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">SPECIAL OFFERS</p>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4">
          Affordable Grooming for Everyone
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We believe every pet deserves quality care — that's why we offer discounts to those who serve our community.
        </p>
      </motion.div>

      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {[
          { icon: Clock, label: "Happy Hour", sub: "Call for Details", highlight: false },
          { icon: Sparkles, label: "Senior Discounts", sub: "Available", highlight: false },
          { icon: Medal, label: "Military Discount", sub: "Thank You for Service", highlight: true },
          { icon: Shield, label: "Police K-9", sub: "FREE", highlight: true },
        ].map((promo) => (
          <motion.div
            key={promo.label}
            variants={fadeUp}
            className={`flex flex-col items-center text-center gap-3 p-6 rounded-card transition-all ${
              promo.highlight
                ? "bg-primary/10 border-2 border-primary/30"
                : "bg-muted"
            }`}
          >
            <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center">
              <promo.icon className="h-7 w-7 text-primary" />
            </div>
            <div>
              <p className="text-sm font-extrabold text-foreground">{promo.label}</p>
              <p className="text-xs text-muted-foreground">{promo.sub}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

/* ─── 8. CTA ─── */
const CTASection = () => (
  <section className="py-16 lg:py-20 bg-primary">
    <div className="section-container text-center">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4 tracking-tight">
          Ready to Pamper Your Pet?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
          Conveniently located in Tacoma, WA, we are the ideal choice for anyone looking for an affordable groomer in the area.
        </p>
        <a
          href="tel:2535313387"
          className="inline-flex items-center gap-2.5 px-10 py-5 rounded-button bg-foreground text-primary-foreground font-extrabold text-lg hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl"
        >
          <Phone className="h-5 w-5" />
          Call Now — (253) 531-3387
        </a>
      </motion.div>
    </div>
  </section>
);

/* ─── 9. REINFORCEMENT — Location & Map ─── */
const ReinforcementSection = () => (
  <section className="py-20 lg:py-28 bg-muted">
    <div className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">VISIT US</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-6">
            Conveniently Located in Tacoma, WA
          </h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <p className="text-muted-foreground">Whether you are looking for a dog groomer, or you want to learn how to groom your pets without having to rely on professionals, we are here to help.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <p className="text-muted-foreground">The environment we create for our clients and their pets is essential for our services, which is why we have special arrangements for different kinds of pets.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <p className="text-muted-foreground">Our facility offers the perfect combination of Spa ambiance and upscale self-serve grooming facility amenities.</p>
            </div>
          </div>
          <div className="bg-background rounded-card card-shadow p-6">
            <h3 className="font-extrabold text-lg text-foreground mb-2">Mutt Puddles Dog Wash</h3>
            <p className="text-sm text-muted-foreground mb-1">605 156th St E, Tacoma, WA 98445</p>
            <a href="tel:2535313387" className="text-sm font-bold text-primary hover:text-primary/80 transition-colors">
              (253) 531-3387
            </a>
            <p className="text-xs text-muted-foreground mt-3">Emergency Hours Available Upon Request</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-background rounded-card card-shadow overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2712.5!2d-122.403!3d47.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490fbe5b1a4e4e7%3A0x6e5c6d6c7c8b9a0b!2s605%20156th%20St%20E%2C%20Tacoma%2C%20WA%2098445!5e0!3m2!1sen!1sus!4v1700000000000"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mutt Puddles Dog Wash Location"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

/* ─── 10. FINAL CTA — Contact Form ─── */
const FinalCTASection = () => (
  <section id="contact-section" className="py-20 lg:py-28">
    <div className="section-container max-w-3xl">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-12">
        <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">GET IN TOUCH</p>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4">
          Send Us a Message Today
        </h2>
        <p className="text-muted-foreground text-lg">
          Call us today for further details or send us a message below.
        </p>
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="bg-background rounded-card card-shadow p-8 md:p-12">
        <ContactForm />
      </motion.div>
    </div>
  </section>
);

/* ─── MAIN ─── */
const Index = () => {
  return (
    <>
      <PageMeta
        title="Home | Mutt Puddles Dog Wash"
        description="Professional dog grooming and self-service wash facility in Tacoma, WA. Since 2007, providing a spa-like experience for you and your furry friends."
      />
      <HeroHook />
      <ProblemSection />
      <AgitationSection />
      <SolutionSection />
      <BenefitsSection />
      <TrustSection />
      <OfferSection />
      <CTASection />
      <ReinforcementSection />
      <FinalCTASection />
    </>
  );
};

export default Index;
