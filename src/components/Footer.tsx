import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-accent">Aalayum Cafe</h3>
            <p className="text-primary-foreground/80">
              Authentic South Indian cuisine served with tradition, love, and the finest ingredients. 
              Experience the true flavors of our heritage.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#story" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Menu Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent">Popular Items</h4>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80">Masala Dosa</li>
              <li className="text-primary-foreground/80">Idli Sambar</li>
              <li className="text-primary-foreground/80">Hyderabadi Biryani</li>
              <li className="text-primary-foreground/80">South Indian Thali</li>
              <li className="text-primary-foreground/80">Medu Vada</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <p className="text-primary-foreground/80 text-sm">
                  123 Spice Street, Food District<br />
                  Chennai, Tamil Nadu 600001
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <p className="text-primary-foreground/80 text-sm">+91 9876543210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <p className="text-primary-foreground/80 text-sm">info@aalayum.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2024 Aalayum Cafe. All rights reserved. | Crafted with ❤️ for authentic South Indian cuisine lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;