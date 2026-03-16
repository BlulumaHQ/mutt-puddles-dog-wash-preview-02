import PageMeta from "../components/PageMeta";
import SectionHeading from "../components/SectionHeading";
import { motion } from "framer-motion";

const faqs = [
  { q: "What services do you offer?", a: "We offer self-service dog washing and professional pet grooming services. Our facility includes clean tubs, towels, shampoos, conditioners, perfumes, and professional grooming tools." },
  { q: "Do I need to make an appointment?", a: "Walk-ins are welcome for our self-service dog wash. For professional grooming services, we recommend calling ahead at (253) 531-3387 to schedule an appointment." },
  { q: "How much does it cost?", a: "Our pricing varies depending on the service and the size of your pet. We offer competitive rates and special discounts for seniors, military personnel, and police K-9 units. Call us for current pricing." },
  { q: "Do you offer any discounts?", a: "Yes! We offer Senior Discounts, Military Discounts, and Police K-9 services are FREE. We also have Happy Hour specials — call for details." },
  { q: "What should I bring?", a: "For self-service washing, we provide everything you need — tubs, towels, shampoos, conditioners, and grooming tools. Just bring your furry friend!" },
  { q: "How long have you been in business?", a: "We have been proudly serving the Tacoma, WA community since 2007." },
  { q: "What breeds do you groom?", a: "We groom all breeds and sizes. Our experienced groomers are trained to handle different coat types and temperaments." },
  { q: "Are emergency hours available?", a: "Yes, emergency hours are available upon request. Please call us at (253) 531-3387 to arrange." },
];

const FAQ = () => (
  <>
    <PageMeta title="Frequently Asked Questions | Mutt Puddles Dog Wash LLC" />
    <section className="py-20 lg:py-28">
      <div className="section-container max-w-3xl">
        <SectionHeading overline="FAQ" title="Frequently Asked Questions" centered />
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.details
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="group bg-background rounded-card card-shadow"
            >
              <summary className="cursor-pointer px-6 py-5 font-semibold text-foreground list-none flex items-center justify-between">
                {faq.q}
                <span className="text-muted-foreground group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default FAQ;
