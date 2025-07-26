import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContactUs = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/lovable-uploads/358ab9b4-15b8-484f-95eb-2065f540646e.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 text-center z-10">
        <div className="max-w-4xl mx-auto animate-fade-in flex flex-col items-center text-center space-y-10">
          <h1 className="text-7xl md:text-9xl font-bold text-white font-playfair">
            Aalayum
            <span className="block text-accent text-3xl md:text-12xl font-normal mt-6">
              Authentic South Indian Flavors
            </span>
          </h1>


          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToMenu}
              size="lg"
              className="min-w-[200px] gradient-gold text-primary hover:scale-105 transition-transform text-lg px-8 py-6"
            >
              Explore Menu
            </Button>
            <Button
              onClick={scrollToContactUs}
              size="lg"
              className="min-w-[200px] gradient-gold text-primary hover:scale-105 transition-transform text-lg px-8 py-6"
            >
              Contact Us
            </Button>
          </div>
        </div>

      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;