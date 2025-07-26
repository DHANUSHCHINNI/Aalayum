import { Card, CardContent } from "@/components/ui/card";
const StorySection = () => {
  return (
    <section
      id="story"
      className="py-20 bg-secondary/30 relative"
      style={{
        backgroundImage: 'url("/v1043-003a.jpg")',
        backgroundSize: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'multiply'
      }}
    >
      <div className="absolute inset-0 bg-secondary/80"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Story
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey through generations of authentic South Indian culinary traditions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-primary mb-4">Heritage & Tradition</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Founded in 1987 by our grandmother Lakshmi Amma, Aalayum began as a small family kitchen
                  sharing authentic recipes from the heart of Tamil Nadu and Kerala. What started as a passion for
                  preserving traditional flavors has grown into a beloved restaurant that serves the community with
                  the same love and authenticity.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in serving food that nourishes not just the body, but the soul. Every dish is prepared
                  with traditional methods, using spices ground fresh daily and recipes that have been passed down
                  through three generations. Our vision is to be a bridge between the rich culinary heritage of
                  South India and food lovers everywhere.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-primary mb-4">Fresh Ingredients</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We source our ingredients directly from local farmers and trusted suppliers who share our
                  commitment to quality. From hand-picked curry leaves to stone-ground spices, every ingredient
                  is carefully selected to ensure the authentic taste that defines South Indian cuisine.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-primary mb-4">Community & Culture</h3>
                <p className="text-muted-foreground leading-relaxed">
                  More than just a restaurant, we are a cultural hub where families gather to celebrate traditions
                  and create memories. Our warm hospitality reflects the South Indian philosophy of "Atithi Devo Bhava"
                  - treating guests as divine. Every meal is an opportunity to share our culture and stories.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-primary mb-8">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4 animate-fade-in">
              <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🌱</span>
              </div>
              <h4 className="text-xl font-semibold text-primary">Authenticity</h4>
              <p className="text-muted-foreground">
                Traditional recipes prepared with time-honored methods
              </p>
            </div>
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">❤️</span>
              </div>
              <h4 className="text-xl font-semibold text-primary">Love</h4>
              <p className="text-muted-foreground">
                Every dish is prepared with care and served with warmth
              </p>
            </div>
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="text-xl font-semibold text-primary">Quality</h4>
              <p className="text-muted-foreground">
                Premium ingredients and exceptional standards in every meal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;