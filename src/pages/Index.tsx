import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Scissors, ShowerHead, Star, BadgePercent, Quote, Clock, Shield, Sparkles, Medal } from "lucide-react";

const heroSlides = [
  { src: "/images/hero-bg.jpg", alt: "Happy golden retriever after grooming" },
  { src: "/images/hero-bg-2.jpg", alt: "Fluffy white dog being groomed" },
];
import PageMeta from "../components/PageMeta";
import SectionHeading from "../components/SectionHeading";
import ContactForm from "../components/ContactForm";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const promos = [
  { icon: Clock, label: "Happy Hour", sub: "Call for Details" },
  { icon: Sparkles, label: "Senior Discounts", sub: "Available" },
  { icon: Medal, label: "Military Discount", sub: "Thank You for Service" },
  { icon: Shield, label: "Police K-9", sub: "FREE" },
];

const services = [
  {
    icon: ShowerHead,
    title: "Self-Service Dog Wash",
    desc: "Clean tubs, towels, shampoos, conditioners, and professional tools. Bond with your pet in our spa-like facility.",
    link: "/service-dog-wash-tacoma-wa/",
  },
  {
    icon: Scissors,
    title: "Professional Grooming",
    desc: "Skilled and experienced groomers for all breeds. Your pet's satisfaction is our priority.",
    link: "/dog-grooming-tacoma-wa/",
  },
  {
    icon: BadgePercent,
    title: "Special Offers",
    desc: "Police K-9 FREE, Military & Senior Discounts. Happy Hour available — call for details.",
    link: "/contact-us/",
  },
];

const HeroSlideshow = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={heroSlides[current].src}
            alt={heroSlides[current].alt}
            className="w-full h-full object-cover object-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-foreground/70" />
      </div>
      <div className="relative section-container py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl"
        >
          <p className="overline text-primary mb-4">SINCE 2007</p>
          <h1 className="heading-display text-primary-foreground mb-6">
            The Right Pet Groomer in Tacoma, WA for Your Furry Friend
          </h1>
          <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8 max-w-xl">
            Professional grooming services and upscale self-serve wash amenities since 2007.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:2535313387"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-button bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Phone className="h-4 w-4" />
              Book an Appointment
            </a>
            <Link
              to="/services/"
              className="inline-flex items-center px-6 py-3 rounded-button border-2 border-secondary text-secondary-foreground font-semibold text-sm bg-secondary/10 hover:bg-secondary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              View Services
            </Link>
          </div>
        </motion.div>
      </div>
      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-primary w-8" : "bg-primary-foreground/50"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <>
      <PageMeta
        title="Home | Mutt Puddles Dog Wash"
        description="Professional dog grooming and self-service wash facility in Tacoma, WA. Since 2007, providing a spa-like experience for you and your furry friends."
      />

      {/* Hero */}
      <HeroSlideshow />

      {/* Promos */}
      <section className="py-12 bg-muted">
        <div className="section-container">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {promos.map((promo) => (
              <motion.div
                key={promo.label}
                variants={item}
                className="flex flex-col items-center text-center gap-3"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center">
                  <promo.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{promo.label}</p>
                  <p className="text-xs text-muted-foreground">{promo.sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About preview */}
      <section className="py-20 lg:py-28">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <p className="overline mb-3">ABOUT US</p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-6">
                What We Do
              </h2>
              <p className="prose-body text-muted-foreground mb-4">
                If you want to treat your pet to a nice grooming session or you want to learn how to groom your dog by yourself, we are the specialists who will offer you the professional services you need. Serving customers in Tacoma, WA, we can offer you grooming services or help you become the pet groomer of your furry friend.
              </p>
              <p className="prose-body text-muted-foreground mb-6">
                With Mutt Puddles Dog Wash, you will rely on skilled and experienced people.
              </p>
              <Link
                to="/about-us/"
                className="inline-flex items-center px-6 py-3 rounded-button bg-secondary text-secondary-foreground font-semibold text-sm hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Learn More About Us
              </Link>
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
                className="w-full rounded-card object-cover"
                style={{ outline: "1px solid rgba(0,0,0,0.1)", outlineOffset: "-1px" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="section-container">
          <SectionHeading
            overline="OUR SERVICES"
            title="Our Dog Grooming Services"
            description="We offer clean tubs, towels, shampoos, conditioners, and perfumes to clients who want to groom their pets on their own or rely on our professional groomers."
            centered
          />
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={item}
                className="group bg-background rounded-card p-8 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-250"
              >
                <div className="w-12 h-12 rounded-button bg-secondary/10 flex items-center justify-center mb-5">
                  <service.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-extrabold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.desc}</p>
                <Link
                  to={service.link}
                  className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 lg:py-28">
        <div className="section-container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="relative bg-background rounded-card card-shadow p-10 md:p-14"
          >
            <Quote className="absolute top-6 left-6 h-16 w-16 text-secondary/10" />
            <div className="relative">
              <p className="overline mb-4">CLIENT'S TESTIMONIAL</p>
              <blockquote className="text-foreground text-lg md:text-xl leading-relaxed mb-6">
                "I found my spot for Winston's pampering days. The owners were so helpful and patient with me. They made me feel very comfortable and addressed any or all my questions. If you are looking for a relaxing experience with your pet this is the place. I would definitely recommend this place."
              </blockquote>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-2 text-sm font-semibold text-foreground">— Winston's Owner</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="contact-section" className="py-20 lg:py-28 bg-muted">
        <div className="section-container">
          <SectionHeading
            overline="GET IN TOUCH"
            title="Conveniently Located in Tacoma, WA"
            description="We are the ideal choice for anyone who is looking for an affordable groomer in the area. Call us today for further details!"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-background rounded-card card-shadow p-8">
              <ContactForm />
            </div>
            <div className="space-y-6">
              <div className="bg-background rounded-card card-shadow overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2712.5!2d-122.403!3d47.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490fbe5b1a4e4e7%3A0x6e5c6d6c7c8b9a0b!2s605%20156th%20St%20E%2C%20Tacoma%2C%20WA%2098445!5e0!3m2!1sen!1sus!4v1700000000000"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mutt Puddles Dog Wash Location"
                  className="rounded-t-card"
                />
              </div>
              <div className="bg-background rounded-card card-shadow p-6">
                <h3 className="font-extrabold text-lg text-foreground mb-2">Mutt Puddles Dog Wash</h3>
                <p className="text-sm text-muted-foreground mb-1">605 156th St E, Tacoma, WA 98445</p>
                <a href="tel:2535313387" className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                  (253) 531-3387
                </a>
                <p className="text-xs text-muted-foreground mt-3">Emergency Hours Available Upon Request</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
