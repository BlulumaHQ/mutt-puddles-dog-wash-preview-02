import PageMeta from "../components/PageMeta";
import SectionHeading from "../components/SectionHeading";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "I just have to say I'm not one who takes time to do a review but after my experience I just had to. I have a 1 year old English bulldog and he can be difficult sometimes when it's something new to him. But I have been looking around for a place I can take him to where I could get him groomed or be able to do it myself. I was up late looking at all these different places that offer self wash or grooming and came across this amazing place and so glad I did. I made the phone call and brought my baby Winston in the same day.",
    author: "Winston's Owner",
  },
  {
    text: "I never used a service like this before and wow!! The owners were so helpful and patient with me. They made me feel very comfortable and addressed any or all my questions. I found my spot for Winston's pampering days. And the cost for him was great along with the extra perks they offer. If you are looking for a relaxing experience with your pet this is the place. I can go on and on but I would definitely recommend this place. Thank you guys again. Winston and I will see you soon.",
    author: "Winston's Owner",
  },
];

const Testimonials = () => (
  <>
    <PageMeta title="Testimonials | Mutt Puddles Dog Wash LLC" />
    <section className="py-20 lg:py-28">
      <div className="section-container max-w-4xl">
        <SectionHeading overline="TESTIMONIALS" title="What Our Clients Say" centered />
        <div className="space-y-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="relative bg-background rounded-card card-shadow p-8 md:p-10"
            >
              <Quote className="absolute top-4 left-4 h-12 w-12 text-secondary/10" />
              <blockquote className="relative text-foreground text-base md:text-lg leading-relaxed mb-4">
                "{t.text}"
              </blockquote>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm font-semibold text-foreground">— {t.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Testimonials;
