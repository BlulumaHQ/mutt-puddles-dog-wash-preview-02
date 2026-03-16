import PageMeta from "../components/PageMeta";
import SectionHeading from "../components/SectionHeading";
import { motion } from "framer-motion";

const tips = [
  { title: "Regular Brushing", body: "Brush your dog's coat regularly to prevent matting and remove loose hair. This also helps distribute natural oils for a healthier, shinier coat." },
  { title: "Bathing Frequency", body: "Most dogs only need a bath every 4-6 weeks. Over-bathing can strip natural oils from their coat. Use dog-specific shampoo — never human shampoo." },
  { title: "Nail Trimming", body: "Keep your dog's nails trimmed to prevent discomfort and potential joint problems. If you can hear their nails clicking on the floor, it's time for a trim." },
  { title: "Ear Cleaning", body: "Check and clean your dog's ears regularly to prevent infections. Use a vet-recommended ear cleaning solution and cotton balls." },
  { title: "Dental Care", body: "Brush your dog's teeth regularly with dog-specific toothpaste. Dental health is crucial for your pet's overall well-being." },
  { title: "Start Young", body: "Introduce grooming routines early in your pet's life. Puppies that get accustomed to grooming grow into dogs that are calmer during the process." },
];

const Tips = () => (
  <>
    <PageMeta title="Tips | Mutt Puddles Dog Wash LLC" />
    <section className="py-20 lg:py-28">
      <div className="section-container">
        <SectionHeading overline="HELPFUL TIPS" title="Pet Grooming Tips" description="Keep your furry friend looking and feeling great between grooming sessions." centered />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, i) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="bg-background rounded-card card-shadow p-8 hover:card-shadow-hover hover:-translate-y-1 transition-all"
            >
              <span className="text-3xl font-extrabold text-primary/20 mb-2 block">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-lg font-extrabold text-foreground mb-3">{tip.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{tip.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Tips;
