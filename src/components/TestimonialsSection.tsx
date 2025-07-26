import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    comment: "The most authentic South Indian food I've had outside of my grandmother's kitchen! The dosas are perfectly crispy and the sambar takes me back to my childhood in Chennai.",
    location: "Mumbai"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    rating: 5,
    comment: "Outstanding biryani and exceptional service. The flavors are rich and authentic. This has become our family's favorite weekend dining spot.",
    location: "Bangalore"
  },
  {
    id: 3,
    name: "Anitha Menon",
    rating: 5,
    comment: "Finally found a place that serves traditional Kerala-style food with the perfect balance of spices. The thali is a complete experience in itself!",
    location: "Kochi"
  },
  {
    id: 4,
    name: "Suresh Iyer",
    rating: 5,
    comment: "The idli here is soft as clouds and the chutneys are divine. Staff is incredibly warm and welcoming. Highly recommend for anyone craving authentic South Indian cuisine.",
    location: "Hyderabad"
  },
  {
    id: 5,
    name: "Deepa Reddy",
    rating: 5,
    comment: "Love the traditional banana leaf serving! It adds to the authentic experience. The rasam is exactly like my mother used to make. Will definitely be back!",
    location: "Pune"
  },
  {
    id: 6,
    name: "Vikram Nair",
    rating: 5,
    comment: "Best South Indian restaurant in the city! Fresh ingredients, traditional cooking methods, and reasonable prices. The vada is crispy perfection!",
    location: "Delhi"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            What Our Guests Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our valued customers about their dining experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="hover:shadow-lg transition-shadow duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-accent text-accent" 
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.comment}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-secondary/50 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">35+</div>
              <div className="text-muted-foreground">Menu Items</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.8★</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;