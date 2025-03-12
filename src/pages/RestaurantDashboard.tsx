
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { PlusCircle, Box, CheckCircle, Clock, Calendar, User, Upload, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const RestaurantDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  // Dummy data for the dashboard (in a real app, this would come from an API)
  const donationStats = {
    total: 32,
    pending: 3,
    completed: 29,
    impactMeals: 256,
    wasteReduced: "128 kg",
  };
  
  const activeDonations = [
    {
      id: "1",
      title: "Pasta & Salad",
      quantity: "5 servings",
      expiresAt: "Today, 8:00 PM",
      status: "available",
      imageUrl: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "2",
      title: "Sandwich Platter",
      quantity: "12 sandwiches",
      expiresAt: "Today, 9:30 PM",
      status: "reserved",
      ngo: "Community Helpers",
      imageUrl: "https://images.unsplash.com/photo-1553909489-ec6ebc7d8a97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "3",
      title: "Fresh Baked Goods",
      quantity: "15 pastries",
      expiresAt: "Tomorrow, 10:00 AM",
      status: "available",
      imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];
  
  const recentHistory = [
    {
      id: "h1",
      title: "Vegetable Curry",
      ngo: "Food for All",
      date: "Yesterday",
      status: "completed",
    },
    {
      id: "h2",
      title: "Pizza (10 slices)",
      ngo: "Hope Kitchen",
      date: "3 days ago",
      status: "completed",
    },
    {
      id: "h3",
      title: "Dessert Assortment",
      ngo: "Community Helpers",
      date: "1 week ago",
      status: "completed",
    },
  ];
  
  const handleAddFoodSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsDialogOpen(false);
      
      toast({
        title: "Food listing created!",
        description: "Your food donation has been posted successfully.",
      });
    }, 1500);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
      <div className="mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-3xl font-bold mb-2">Restaurant Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your food donations and track your impact
          </p>
        </motion.div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList className="bg-muted">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="active">Active Donations</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Donations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{donationStats.total}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {donationStats.pending} pending, {donationStats.completed} completed
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Meals Provided</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{donationStats.impactMeals}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Approx. number of meals from your donations
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Food Waste Reduced</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{donationStats.wasteReduced}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Estimated weight of rescued food
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Active Donations</h2>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-connect-green-500 hover:bg-connect-green-600">
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Add New Donation
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[550px]">
                  <DialogHeader>
                    <DialogTitle>Add New Food Donation</DialogTitle>
                    <DialogDescription>
                      Fill out the details for the food items you'd like to donate.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <form onSubmit={handleAddFoodSubmit}>
                    <div className="grid grid-cols-1 gap-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Food Title</Label>
                        <Input
                          id="title"
                          placeholder="e.g., Pasta & Salad, Sandwich Platter"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="quantity">Quantity</Label>
                          <Input
                            id="quantity"
                            placeholder="e.g., 5 servings, 2kg"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="category">Category</Label>
                          <Select defaultValue="other">
                            <SelectTrigger id="category">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="italian">Italian</SelectItem>
                              <SelectItem value="indian">Indian</SelectItem>
                              <SelectItem value="mexican">Mexican</SelectItem>
                              <SelectItem value="bakery">Bakery</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          placeholder="Describe the food items, ingredients, allergens, etc."
                          rows={3}
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date & Time</Label>
                          <Input
                            id="expiry"
                            type="datetime-local"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="photo">Upload Photo</Label>
                          <div className="flex items-center gap-4">
                            <Button type="button" variant="outline" className="w-full">
                              <Upload className="h-4 w-4 mr-2" />
                              Choose File
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <DialogFooter>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setIsDialogOpen(false)}
                        disabled={isSubmitting}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-connect-green-500 hover:bg-connect-green-600"
                      >
                        {isSubmitting ? "Adding..." : "Add Donation"}
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {activeDonations.map((donation) => (
                <Card key={donation.id} className="overflow-hidden">
                  <div className="h-40 w-full relative">
                    <img
                      src={donation.imageUrl}
                      alt={donation.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      {donation.status === "available" ? (
                        <Badge className="bg-green-500">Available</Badge>
                      ) : (
                        <Badge className="bg-blue-500">Reserved</Badge>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{donation.title}</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Box className="h-4 w-4 mr-2" />
                        <span>{donation.quantity}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>Expires: {donation.expiresAt}</span>
                      </div>
                      {donation.status === "reserved" && donation.ngo && (
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          <span>Reserved by: {donation.ngo}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </TabsContent>
        
        <TabsContent value="active">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Active Donations</h2>
              <Button className="bg-connect-green-500 hover:bg-connect-green-600">
                <PlusCircle className="h-4 w-4 mr-2" />
                Add New Donation
              </Button>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {activeDonations.map((donation) => (
                <Card key={donation.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="h-32 w-32 rounded-md overflow-hidden shrink-0">
                        <img
                          src={donation.imageUrl}
                          alt={donation.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-semibold mb-2">{donation.title}</h3>
                            <div className="space-y-1 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Box className="h-4 w-4 mr-2" />
                                <span>{donation.quantity}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-2" />
                                <span>Expires: {donation.expiresAt}</span>
                              </div>
                              {donation.status === "reserved" && donation.ngo && (
                                <div className="flex items-center">
                                  <User className="h-4 w-4 mr-2" />
                                  <span>Reserved by: {donation.ngo}</span>
                                </div>
                              )}
                            </div>
                          </div>
                          <div>
                            {donation.status === "available" ? (
                              <Badge className="bg-green-500">Available</Badge>
                            ) : (
                              <Badge className="bg-blue-500">Reserved</Badge>
                            )}
                          </div>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                          {donation.status === "available" ? (
                            <Button size="sm" variant="outline" className="text-red-500 border-red-200 hover:bg-red-50">
                              Delete
                            </Button>
                          ) : (
                            <Button size="sm" variant="outline">
                              Contact NGO
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </TabsContent>
        
        <TabsContent value="history">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Donation History</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Filter by Date
                </Button>
                <Button variant="outline" size="sm">
                  Download Report
                </Button>
              </div>
            </div>
            
            <Card>
              <CardContent className="p-0">
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Food Items
                        </th>
                        <th scope="col" className="px-6 py-3">
                          NGO Partner
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentHistory.map((item) => (
                        <tr key={item.id} className="bg-white dark:bg-gray-900 border-b">
                          <td className="px-6 py-4 font-medium">{item.title}</td>
                          <td className="px-6 py-4">{item.ngo}</td>
                          <td className="px-6 py-4">{item.date}</td>
                          <td className="px-6 py-4">
                            <Badge className="bg-green-500">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              {item.status}
                            </Badge>
                          </td>
                          <td className="px-6 py-4">
                            <Button variant="ghost" size="sm">
                              View Details
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            
            <div className="bg-connect-green-50 dark:bg-connect-green-900/20 p-6 rounded-xl">
              <div className="flex gap-4 items-start">
                <div className="bg-connect-green-100 dark:bg-connect-green-800 p-2 rounded-full">
                  <AlertTriangle className="h-6 w-6 text-connect-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Your Impact So Far</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    You've donated {donationStats.total} times, providing approximately {donationStats.impactMeals} meals
                    and reducing waste by {donationStats.wasteReduced}.
                  </p>
                  <Button variant="outline" size="sm">
                    View Full Impact Report
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </TabsContent>
        
        <TabsContent value="settings">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-xl font-semibold">Account Settings</h2>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="restaurant-name">Restaurant Name</Label>
                  <Input id="restaurant-name" defaultValue="Bella Italian" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-person">Contact Person</Label>
                  <Input id="contact-person" defaultValue="Marco Rossi" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="marco@bellaitaliancafe.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" defaultValue="123 Main St, City Center" />
                </div>
                <Button className="bg-connect-green-500 hover:bg-connect-green-600">
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RestaurantDashboard;
