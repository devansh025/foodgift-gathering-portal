
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">How FoodConnect Works</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Connecting restaurants with surplus food to NGOs in need - a simple process that makes a big difference.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md"
        >
          <div className="bg-connect-green-100 dark:bg-connect-green-900/20 h-12 w-12 flex items-center justify-center rounded-full mb-6 text-connect-green-600 font-bold text-xl">1</div>
          <h3 className="text-xl font-bold mb-3">Restaurants Sign Up</h3>
          <p className="text-muted-foreground mb-4">
            Restaurants create an account and verify their business information to join the platform.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <span className="text-connect-green-500 mr-2">•</span>
              <span>Quick and easy signup process</span>
            </li>
            <li className="flex items-start">
              <span className="text-connect-green-500 mr-2">•</span>
              <span>Simple dashboard to manage donations</span>
            </li>
            <li className="flex items-start">
              <span className="text-connect-green-500 mr-2">•</span>
              <span>Track impact and contribution history</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md"
        >
          <div className="bg-connect-green-100 dark:bg-connect-green-900/20 h-12 w-12 flex items-center justify-center rounded-full mb-6 text-connect-green-600 font-bold text-xl">2</div>
          <h3 className="text-xl font-bold mb-3">Post Surplus Food</h3>
          <p className="text-muted-foreground mb-4">
            When restaurants have surplus food, they easily post details, photos, quantity, and pickup information.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <span className="text-connect-green-500 mr-2">•</span>
              <span>List food type, quantity, and expiry</span>
            </li>
            <li className="flex items-start">
              <span className="text-connect-green-500 mr-2">•</span>
              <span>Upload photos of available food</span>
            </li>
            <li className="flex items-start">
              <span className="text-connect-green-500 mr-2">•</span>
              <span>Set pickup times and location details</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md"
        >
          <div className="bg-connect-green-100 dark:bg-connect-green-900/20 h-12 w-12 flex items-center justify-center rounded-full mb-6 text-connect-green-600 font-bold text-xl">3</div>
          <h3 className="text-xl font-bold mb-3">NGOs Claim & Pickup</h3>
          <p className="text-muted-foreground mb-4">
            Verified NGOs browse available donations, reserve what they need, and arrange pickup.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <span className="text-connect-green-500 mr-2">•</span>
              <span>Receive notifications of new donations</span>
            </li>
            <li className="flex items-start">
              <span className="text-connect-green-500 mr-2">•</span>
              <span>Reserve food before expiration</span>
            </li>
            <li className="flex items-start">
              <span className="text-connect-green-500 mr-2">•</span>
              <span>Coordinate pickup with restaurant</span>
            </li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-connect-green-50 dark:bg-connect-green-900/10 p-8 rounded-xl shadow-md text-center max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h2>
        <p className="text-muted-foreground mb-6">
          Join our community of restaurants and NGOs working together to reduce food waste and fight hunger.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-connect-green-500 hover:bg-connect-green-600">
            <Link to="/signup">Sign Up Now</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/browse">Browse Available Food</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default HowItWorks;
