import PageMeta from "../components/PageMeta";
import SectionHeading from "../components/SectionHeading";
import ContactForm from "../components/ContactForm";
import { MapPin, Phone, Clock } from "lucide-react";

const ContactUs = () => (
  <>
    <PageMeta title="Contact Us | Mutt Puddles Dog Wash LLC" />
    <section className="py-20 lg:py-28">
      <div className="section-container">
        <SectionHeading overline="CONTACT" title="Get in Touch" description="We'd love to hear from you. Send us a message or give us a call!" />
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
            <div className="bg-background rounded-card card-shadow p-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Address</p>
                  <p className="text-sm text-muted-foreground">605 156th St E, Tacoma, WA 98445</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <a href="tel:2535313387" className="text-sm text-primary hover:text-primary/80 transition-colors">(253) 531-3387</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Hours</p>
                  <p className="text-sm text-muted-foreground">Emergency Hours Available Upon Request</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default ContactUs;
