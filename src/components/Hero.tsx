import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
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
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/f67a9f35-21e2-4153-8cd8-a621b036f897.png" 
              alt="The Aalayum Cafe" 
              className="h-32 md:h-40 w-auto animate-float"
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-playfair">
            Aalayum
            <span className="block text-accent text-3xl md:text-4xl font-normal mt-4">Authentic South Indian Flavors</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToMenu}
              size="lg"
              className="gradient-gold text-primary hover:scale-105 transition-transform text-lg px-8 py-6"
            >
              Explore Menu
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="gradient-gold text-primary hover:scale-105 transition-transform text-lg px-8 py-6"
            >
              Reserve Table
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