import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import dosaImage from "@/assets/dosa.jpg";
import idliImage from "@/assets/idli.jpg";
import biryaniImage from "@/assets/biryani.jpg";
import vadaImage from "@/assets/vada.jpg";
import thaliImage from "@/assets/thali.jpg";

const menuItems = [
  {
    id: 1,
    name: "Masala Dosa",
    price: "₹120",
    description: "Crispy fermented crepe made from rice and lentil batter, filled with spiced potato filling and served with sambar and coconut chutney",
    image: dosaImage,
    category: "Breakfast"
  },
  {
    id: 2,
    name: "Idli Sambar",
    price: "₹80",
    description: "Soft, fluffy steamed rice cakes served with aromatic sambar and a variety of traditional chutneys",
    image: idliImage,
    category: "Breakfast"
  },
  {
    id: 3,
    name: "Hyderabadi Biryani",
    price: "₹280",
    description: "Fragrant basmati rice layered with tender meat, aromatic spices, and slow-cooked to perfection in traditional dum style",
    image: biryaniImage,
    category: "Main Course"
  },
  {
    id: 4,
    name: "Medu Vada",
    price: "₹90",
    description: "Crispy, golden-brown lentil donuts with a soft interior, served hot with coconut chutney and sambar",
    image: vadaImage,
    category: "Snacks"
  },
  {
    id: 5,
    name: "South Indian Thali",
    price: "₹220",
    description: "Complete traditional meal with rice, sambar, rasam, multiple vegetable curries, pickles, papad, and dessert served on banana leaf",
    image: thaliImage,
    category: "Main Course"
  }
];

const MenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Breakfast", "Main Course", "Snacks"];

  const filteredItems = selectedCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover authentic South Indian delicacies prepared with traditional recipes and the finest ingredients
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all ${
                  selectedCategory === category
                    ? "gradient-gold text-primary shadow-lg"
                    : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card 
                  className="menu-item cursor-pointer group overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full text-sm font-semibold">
                      {item.price}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-primary">{item.name}</h3>
                      <span className="text-sm text-muted-foreground bg-secondary px-2 py-1 rounded">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">{item.name}</h3>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-2xl font-bold text-accent">{item.price}</span>
                        <span className="text-sm text-muted-foreground bg-secondary px-2 py-1 rounded">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;