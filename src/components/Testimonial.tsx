import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Content Creator",
    comment:
      "AvatarSnap transformed my social media presence. The AI-generated avatars look incredibly professional and unique!",
    rating: 5,
    image:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    name: "David Chen",
    role: "Marketing Director",
    comment:
      "Our entire team uses AvatarSnap for consistent professional headshots across platforms. The quality is unmatched.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    name: "Emily Rodriguez",
    role: "Game Developer",
    comment:
      "The variety of styles is incredible. I use the pixel art avatars for my game characters and they're perfect!",
    rating: 4,
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    name: "Sarah Johnson",
    role: "Content Creator",
    comment:
      "AvatarSnap transformed my social media presence. The AI-generated avatars look incredibly professional and unique!",
    rating: 5,
    image:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    name: "David Chen",
    role: "Marketing Director",
    comment:
      "Our entire team uses AvatarSnap for consistent professional headshots across platforms. The quality is unmatched.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    name: "Emily Rodriguez",
    role: "Game Developer",
    comment:
      "The variety of styles is incredible. I use the pixel art avatars for my game characters and they're perfect!",
    rating: 4,
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section
      className="py-16 md:py-24 bg-black text-white relative overflow-hidden"
      id="reviews"
    >
      <div className="container mx-auto max-w-[90%] w-full md:w-[1250px] px-4 sm:px-6 lg:px-2 relative z-10">
        <div className="text-center mb-10 md:mb-20 px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            What Our Users Say
          </h2>
          <p className="text-zinc-400 mt-2 text-sm md:text-base">
            Cool Feedback From Cool People
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-neutral-950/80 border border-neutral-950/60 rounded-xl shadow-md p-6 relative"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-500 text-yellow-500"
                  />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <Star
                    key={i + testimonial.rating}
                    className="w-5 h-5 text-neutral-600"
                  />
                ))}
              </div>

              <p className="text-neutral-300 mb-6 italic">
                "{testimonial.comment}"
              </p>

              <div className="flex items-center mt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="font-medium text-white">{testimonial.name}</h4>
                  <p className="text-sm text-neutral-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
