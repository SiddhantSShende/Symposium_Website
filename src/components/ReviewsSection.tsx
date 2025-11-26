import { motion } from "framer-motion";

const reviews = [
  {
    quote: "Symposium helped me find three new clients in my first month. The VR networking events are game-changing for making real connections.",
    author: "Sarah Chen",
    role: "Founder, TechConsult Agency",
    rating: 5
  },
  {
    quote: "I closed two major partnerships through the platform. Being able to showcase what I offer and what I need made all the difference.",
    author: "Marcus Rodriguez",
    role: "CEO, Growth Ventures",
    rating: 5
  },
  {
    quote: "The clubs feature is incredible. I created an exclusive investor community and now deal flow has never been better.",
    author: "Emily Watson",
    role: "Angel Investor & Advisor",
    rating: 5
  }
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="relative py-32 px-6 md:px-12 bg-background z-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2 
          className="text-5xl md:text-7xl font-serif mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Success Stories
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.author}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="p-8 bg-card border border-border/50 rounded-lg hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <motion.svg
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.15 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="w-5 h-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>
              
              <p className="text-lg leading-relaxed mb-8 italic font-serif text-foreground/80">
                "{review.quote}"
              </p>
              
              <div className="pt-6 border-t border-border/50">
                <p className="font-medium text-foreground">{review.author}</p>
                <p className="text-sm text-muted-foreground mt-1">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
