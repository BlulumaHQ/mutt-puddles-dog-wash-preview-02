import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import SectionHeading from "../components/SectionHeading";
import { motion } from "framer-motion";
import { ShowerHead, Scissors, Dog, Sparkles, Heart } from "lucide-react";

const services = [
  { icon: ShowerHead, title: "Dog Wash Studio", desc: "Our state-of-the-art studio features clean tubs, professional-grade equipment, and a spa-like atmosphere for your pet.", link: "/dog-wash-studio-tacoma-wa/" },
  { icon: Dog, title: "Self-Service Dog Wash", desc: "We provide towels, shampoos, conditioners, perfumes, and professional grooming tools. You bring the love.", link: "/service-dog-wash-tacoma-wa/" },
  { icon: Scissors, title: "Pet Groomer", desc: "Our skilled groomers handle all breeds with care. Every cut, wash, and style is tailored to your pet's needs.", link: "/pet-groomer-in-tacoma-wa/" },
  { icon: Sparkles, title: "Dog Grooming", desc: "Full grooming packages from bath to blow-dry, nail trim to ear cleaning. Your pet leaves looking and feeling great.", link: "/dog-grooming-tacoma-wa/" },
  { icon: Heart, title: "Dog Groomer", desc: "Experienced groomers who treat your pet like family. We prioritize comfort, safety, and style.", link: "/dog-groomer-tacoma-wa/" },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.3 } } };

const Services = () => (
  <>
    <PageMeta title="Services | Mutt Puddles Dog Wash" />
    <section className="py-20 lg:py-28">
      <div className="section-container">
        <SectionHeading
          overline="OUR SERVICES"
          title="Our Dog Grooming Services"
          description="From self-service dog washing to professional grooming, we have everything your furry friend needs."
          centered
        />
        <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <motion.div key={s.title} variants={item} className="group bg-background rounded-card p-8 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-button bg-secondary/10 flex items-center justify-center mb-5">
                <s.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-extrabold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
              <Link to={s.link} className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">Learn More →</Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
    {/* Badges */}
    <section className="py-12 bg-muted">
      <div className="section-container grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
        <img src="/images/Happy-Hour-call-for-details.png" alt="Happy Hour" className="h-28 md:h-36 object-contain" />
        <img src="/images/senior-discounts.png" alt="Senior Discounts" className="h-28 md:h-36 object-contain" />
        <img src="/images/military-discount.png" alt="Military Discount" className="h-28 md:h-36 object-contain" />
        <img src="/images/Police-K-9-FREE.png" alt="Police K-9 Free" className="h-28 md:h-36 object-contain" />
      </div>
    </section>
  </>
);

export default Services;
