
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About FoodConnect</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Our mission is to reduce food waste and fight hunger by connecting restaurants with surplus food to organizations that feed those in need.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            FoodConnect began in 2022 when our founder noticed the disconnect between restaurants with excess food and nearby organizations serving the hungry. What started as a small pilot project in one city has grown into a nationwide initiative.
          </p>
          <p className="text-muted-foreground mb-4">
            Today, we're proud to have helped save thousands of meals from being wasted and provided nutritious food to communities in need across the country.
          </p>
          <p className="text-muted-foreground">
            Our platform makes it simple for restaurants to donate surplus food and for NGOs to find and collect it, creating a sustainable solution to two significant problems: food waste and food insecurity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-connect-green-50 dark:bg-connect-green-900/10 p-8 rounded-xl"
        >
          <h2 className="text-2xl font-bold mb-4">Our Impact</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-connect-green-600">10,000+</p>
              <p className="text-sm text-muted-foreground">Meals Rescued</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-connect-green-600">200+</p>
              <p className="text-sm text-muted-foreground">Partner Restaurants</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-connect-green-600">75+</p>
              <p className="text-sm text-muted-foreground">NGO Partners</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-connect-green-600">25</p>
              <p className="text-sm text-muted-foreground">Cities Served</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="font-bold mb-1">Sarah Johnson</h3>
            <p className="text-sm text-muted-foreground mb-2">Founder & CEO</p>
            <p className="text-sm">Former restaurant owner with a passion for sustainability and community service.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="font-bold mb-1">Michael Lee</h3>
            <p className="text-sm text-muted-foreground mb-2">CTO</p>
            <p className="text-sm">Tech innovator with experience developing platforms for social impact.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="font-bold mb-1">Priya Sharma</h3>
            <p className="text-sm text-muted-foreground mb-2">Community Director</p>
            <p className="text-sm">Experienced in non-profit management and community outreach programs.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="font-bold mb-1">David Rodriguez</h3>
            <p className="text-sm text-muted-foreground mb-2">Operations Manager</p>
            <p className="text-sm">Logistics expert ensuring smooth food pickup and delivery processes.</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold mb-6">Join Our Mission</h2>
        <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
          Whether you're a restaurant with excess food or an organization helping those in need, 
          we invite you to be part of the solution to reduce food waste and hunger in our communities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-connect-green-500 hover:bg-connect-green-600">
            <Link to="/signup">Join as a Partner</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
