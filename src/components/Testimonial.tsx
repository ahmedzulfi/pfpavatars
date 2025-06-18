import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Content Creator",
    comment: "AvatarSnap transformed my social media presence. The AI-generated avatars look incredibly professional and unique!",
    rating: 5,
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "David Chen",
    role: "Marketing Director",
    comment: "Our entire team uses AvatarSnap for consistent professional headshots across platforms. The quality is unmatched.",
    rating: 5,
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "Emily Rodriguez",
    role: "Game Developer",
    comment: "The variety of styles is incredible. I use the pixel art avatars for my game characters and they're perfect!",
    rating: 4,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#f5f5f5]  relative overflow-hidden">
      <div className="container mx-auto max-w-[90%] w-full md:w-[1250px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-yellow-100 text-yellow-950">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-950 mb-6">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600">
            Join thousands of satisfied users who have transformed their online presence with AvatarSnap.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 relative"
           
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <Star key={i + testimonial.rating} className="w-5 h-5 text-gray-300" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">"{testimonial.comment}"</p>
              
              <div className="flex items-center mt-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="font-medium text-dark-950">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-yellow-100 rounded-full p-1.5">
                <svg className="w-4 h-4 text-yellow-950" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 12H5C3.89543 12 3 11.1046 3 10V6C3 4.89543 3.89543 4 5 4H9C10.1046 4 11 4.89543 11 6V10C11 13.866 7.86599 17 4 17V15C6.76142 15 9 12.7614 9 10M21 12H18.5C17.3954 12 16.5 11.1046 16.5 10V6C16.5 4.89543 17.3954 4 18.5 4H22.5C23.6046 4 24.5 4.89543 24.5 6V10C24.5 13.866 21.366 17 17.5 17V15C20.2614 15 22.5 12.7614 22.5 10" fill="currentColor" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-yellow-100 rounded-full opacity-30 blur-3xl"></div>
    </section>
  );
};

export default Testimonials;