import PageMeta from "../components/PageMeta";
import SectionHeading from "../components/SectionHeading";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServicePage = ({ title, metaTitle, content, ctaText, ctaLink }: {
  title: string; metaTitle: string; content: string[]; ctaText?: string; ctaLink?: string;
}) => (
  <>
    <PageMeta title={metaTitle} />
    <section className="py-20 lg:py-28">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <SectionHeading overline="SERVICES" title={title} />
            {content.map((p, i) => (
              <p key={i} className="prose-body text-muted-foreground mb-4">{p}</p>
            ))}
            {ctaText && ctaLink && (
              <Link to={ctaLink} className="inline-flex items-center px-6 py-3 rounded-button bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all mt-4">
                {ctaText}
              </Link>
            )}
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
            <img src="/images/Pet-Groomer-1080x720.jpg" alt={title} className="w-full rounded-card object-cover" style={{ outline: "1px solid rgba(0,0,0,0.1)", outlineOffset: "-1px" }} />
          </motion.div>
        </div>
      </div>
    </section>
  </>
);

export const DogWashStudio = () => (
  <ServicePage
    metaTitle="Dog Wash Studio | Mutt Puddles Dog Wash LLC"
    title="Dog Wash Studio in Tacoma, WA"
    content={[
      "Our dog wash studio is designed to provide a comfortable and enjoyable experience for both you and your pet. We feature state-of-the-art tubs, professional grooming tables, and a relaxing spa-like atmosphere.",
      "Our facility offers the perfect combination of spa ambiance and upscale self-serve grooming facility amenities. All supplies are included — towels, shampoos, conditioners, perfumes, and professional tools.",
      "Whether you're an experienced pet groomer or a first-time visitor, our friendly staff will guide you through the entire process."
    ]}
    ctaText="Contact Us"
    ctaLink="/contact-us/"
  />
);

export const ServiceDogWash = () => (
  <ServicePage
    metaTitle="Self-Service Dog Wash | Mutt Puddles Dog Wash LLC"
    title="Self-Service Dog Wash in Tacoma, WA"
    content={[
      "We offer clean tubs, towels, shampoos, conditioners, and perfumes to clients who want to groom their pets on their own. Our self-service facility presents you with all the professional grooming tools and tables you may need.",
      "Our employees will assist you with the entire process. Our facility offers the perfect combination of spa ambiance and upscale self-serve grooming facility amenities.",
      "Additionally, you can get an affordable grooming service. Your satisfaction is our priority."
    ]}
    ctaText="View All Services"
    ctaLink="/services/"
  />
);

export const PetGroomer = () => (
  <ServicePage
    metaTitle="Pet Groomer in Tacoma, WA | Mutt Puddles Dog Wash LLC"
    title="Pet Groomer in Tacoma, WA"
    content={[
      "If you want to treat your pet to a nice grooming session, we are the specialists who will offer you the professional services you need. Serving customers in Tacoma, WA, we can offer you grooming services or help you become the pet groomer of your furry friend.",
      "With Mutt Puddles Dog Wash LLC, you will rely on skilled and experienced people who prioritize your pet's comfort and well-being.",
      "Our groomers are trained to handle all breeds and sizes, ensuring every pet receives personalized care."
    ]}
    ctaText="Book Now"
    ctaLink="/contact-us/"
  />
);

export const DogGrooming = () => (
  <ServicePage
    metaTitle="Dog Grooming in Tacoma, WA | Mutt Puddles Dog Wash LLC"
    title="Dog Grooming in Tacoma, WA"
    content={[
      "Our professional dog grooming services are designed to keep your furry friend looking and feeling their best. From basic baths to full grooming packages, we offer a range of services to meet your pet's needs.",
      "Our experienced groomers use high-quality products and gentle techniques to ensure your pet's comfort throughout the grooming process.",
      "We specialize in breed-specific grooming styles and can accommodate special requests to make sure your pet looks exactly how you want."
    ]}
    ctaText="Contact Us"
    ctaLink="/contact-us/"
  />
);

export const DogGroomer = () => (
  <ServicePage
    metaTitle="Dog Groomer in Tacoma, WA | Mutt Puddles Dog Wash LLC"
    title="Dog Groomer in Tacoma, WA"
    content={[
      "Looking for a reliable dog groomer in Tacoma? Mutt Puddles Dog Wash LLC has been serving pet owners since 2007 with professional grooming services that your furry friend will love.",
      "Our groomers treat every pet like family, ensuring a stress-free and enjoyable experience. We take pride in our attention to detail and commitment to your pet's well-being.",
      "Whether you need a simple bath and brush or a complete grooming makeover, we've got you covered."
    ]}
    ctaText="Schedule a Visit"
    ctaLink="/contact-us/"
  />
);
