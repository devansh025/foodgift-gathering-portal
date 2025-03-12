
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { AtSign, Building, Lock, User, MapPin, Phone, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

const SignUp = () => {
  const [userType, setUserType] = useState("restaurant");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    phone: "",
    agreeTerms: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.password || !formData.address || !formData.phone) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.agreeTerms) {
      toast({
        title: "Error",
        description: "You must agree to the terms and conditions.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      
      toast({
        title: "Account created!",
        description: "Welcome to FoodConnect. You can now sign in.",
      });
      
      // Redirect to login
      navigate("/login");
    }, 1500);
  };
  
  return (
    <div className="max-w-xl mx-auto px-6 md:px-10 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="border-gray-200 dark:border-gray-800 shadow-lg">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
            <CardDescription>
              Join FoodConnect and start making a difference
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="restaurant" onValueChange={setUserType} className="w-full mb-6">
              <TabsList className="grid grid-cols-2 w-full">
                <TabsTrigger value="restaurant">Restaurant</TabsTrigger>
                <TabsTrigger value="ngo">NGO</TabsTrigger>
              </TabsList>
              <TabsContent value="restaurant" className="mt-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Create an account to share your surplus food with NGOs in your community.
                </p>
              </TabsContent>
              <TabsContent value="ngo" className="mt-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Create an account to connect with restaurants and claim available food donations.
                </p>
              </TabsContent>
            </Tabs>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      {userType === "restaurant" ? "Restaurant Name" : "Organization Name"}
                    </Label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        name="name"
                        placeholder={userType === "restaurant" ? "Restaurant name" : "Organization name"}
                        value={formData.name}
                        onChange={handleChange}
                        className="pl-9"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contact">Contact Person</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="contact"
                        name="contact"
                        placeholder="Full name"
                        className="pl-9"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <AtSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-9"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={handleChange}
                        className="pl-9"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="pl-9"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="address"
                      name="address"
                      placeholder="Full address"
                      value={formData.address}
                      onChange={handleChange}
                      className="pl-9"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="pl-9"
                      required
                    />
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="agreeTerms"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, agreeTerms: checked as boolean })
                    }
                  />
                  <label
                    htmlFor="agreeTerms"
                    className="text-sm text-muted-foreground cursor-pointer"
                  >
                    I agree to the{" "}
                    <Link
                      to="/terms"
                      className="text-connect-green-600 hover:text-connect-green-700 underline"
                    >
                      terms of service
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/privacy"
                      className="text-connect-green-600 hover:text-connect-green-700 underline"
                    >
                      privacy policy
                    </Link>
                    .
                  </label>
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-connect-green-500 hover:bg-connect-green-600"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating account..." : "Create Account"}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="justify-center border-t border-gray-100 dark:border-gray-800 px-6 py-4">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-connect-green-600 hover:text-connect-green-700">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default SignUp;
