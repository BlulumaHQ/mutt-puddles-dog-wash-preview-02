import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import SectionHeading from "../components/SectionHeading";
import { motion } from "framer-motion";

const AboutUs = () => (
  <>
    <PageMeta title="About Us | Mutt Puddles Dog Wash" />
    <section className="py-20 lg:py-28">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <SectionHeading overline="ABOUT US" title="Who We Are" />
            <p className="prose-body text-muted-foreground mb-4">
              Renowned for our professional services and the qualities of our facility, we have been running Mutt Puddles Dog Wash since 2007 with the goal to meet the individual requirements of every customer.
            </p>
            <p className="prose-body text-muted-foreground mb-4">
              Whether you are looking for a dog groomer, or you want to learn how to groom your pets without having to rely on professionals, we are here to help. The environment we create for our clients and their pets is essential for our services, which is why we have special arrangements for different kinds of pets.
            </p>
            <p className="prose-body text-muted-foreground mb-6">
              We are a self service dog wash facility and pet grooming salon that will give you safety and comfort for you and your pets. Having top-of-the-line tubs, we give you a place where you can bathe and bond with your pet.
            </p>
            <Link to="/services/" className="inline-flex items-center px-6 py-3 rounded-button bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all">
              View Our Services
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
            <img src="/images/Pet-Groomer-1080x720.jpg" alt="Pet grooming at Mutt Puddles" className="w-full rounded-card object-cover" style={{ outline: "1px solid rgba(0,0,0,0.1)", outlineOffset: "-1px" }} />
          </motion.div>
        </div>
      </div>
    </section>
  </>
);

export default AboutUs;
