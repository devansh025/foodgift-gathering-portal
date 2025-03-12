
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Search, Calendar, MapPin, Clock, Filter, ArrowRight, CheckCircle, Clock3, User, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NgoDashboard = () => {
  const [activeTab, setActiveTab] = useState("available");
  const { toast } = useToast();
  
  // Dummy data for the dashboard (in a real app, this would come from an API)
  const stats = {
    claimed: 18,
    pending: 2,
    completed: 16,
    peopleServed: 325,
    avgResponseTime: "15 min"
  };
  
  const availableFoodItems = [
    {
      id: "1",
      title: "Fresh Pasta & Salad",
      restaurant: "Bella Italian",
      location: "123 Main St, City Center",
      distance: "1.2 km",
      quantity: "5 servings",
      expiresAt: "Today, 8:00 PM",
      category: "Italian",
      imageUrl: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "2",
      title: "Vegetable Curry",
      restaurant: "Spice Garden",
      location: "45 Park Ave, East Side",
      distance: "2.5 km",
      quantity: "3 kg",
      expiresAt: "Today, 9:30 PM",
      category: "Indian",
      imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "3",
      title: "Fresh Baked Goods",
      restaurant: "Morning Bakery",
      location: "78 West St, Downtown",
      distance: "0.8 km",
      quantity: "15 pastries",
      expiresAt: "Tomorrow, 10:00 AM",
      category: "Bakery",
      imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];
  
  const myReservations = [
    {
      id: "r1",
      title: "Sandwich Platter",
      restaurant: "Lunch Box Cafe",
      location: "210 Broadway, North End",
      quantity: "12 sandwiches",
      reservedAt: "Today, 2:30 PM",
      pickupBy: "Today, 7:00 PM",
      status: "reserved",
      imageUrl: "https://images.unsplash.com/photo-1553909489-ec6ebc7d8a97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "r2",
      title: "Rice & Curry Dishes",
      restaurant: "Taste of Asia",
      location: "55 Temple St, Chinatown",
      quantity: "4 large containers",
      reservedAt: "Today, 11:45 AM",
      pickupBy: "Today, 6:00 PM",
      status: "reserved",
      imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356cf4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];
  
  const reservationHistory = [
    {
      id: "h1",
      title: "Pizza (10 slices)",
      restaurant: "City Pizza",
      date: "Yesterday",
      status: "completed",
      peopleServed: 5,
    },
    {
      id: "h2",
      title: "Vegetable Soup & Bread",
      restaurant: "Healthy Bites",
      date: "3 days ago",
      status: "completed",
      peopleServed: 12,
    },
    {
      id: "h3",
      title: "Dessert Assortment",
      restaurant: "Sweet Treats",
      date: "1 week ago",
      status: "completed",
      peopleServed: 8,
    },
  ];
  
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
      <div className="mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-3xl font-bold mb-2">NGO Dashboard</h1>
          <p className="text-muted-foreground">
            Find available food donations and manage your reservations
          </p>
        </motion.div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList className="bg-muted">
          <TabsTrigger value="available">Available Food</TabsTrigger>
          <TabsTrigger value="reservations">My Reservations</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="available" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Claims</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stats.claimed}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {stats.pending} pending, {stats.completed} completed
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">People Served</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stats.peopleServed}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Estimated from your claimed donations
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Average Response Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stats.avgResponseTime}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Time to claim available food
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
              <h2 className="text-xl font-semibold">Available Food Donations</h2>
              <div className="flex w-full sm:w-auto gap-2">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search donations..."
                    className="pl-9 pr-4 w-full"
                  />
                </div>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableFoodItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="h-48 w-full relative">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-connect-green-500">{item.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <div className="mb-3">
                      <span className="text-sm text-muted-foreground">{item.restaurant}</span>
                    </div>
                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{item.location}</span>
                        <span className="text-xs ml-2">({item.distance})</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>Expires: {item.expiresAt}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="bg-gray-100 text-gray-800">
                        {item.quantity}
                      </Badge>
                      <Button asChild size="sm" className="bg-connect-green-500 hover:bg-connect-green-600">
                        <Link to={`/food/${item.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <Button variant="outline" className="bg-gray-50">
                Load More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </TabsContent>
        
        <TabsContent value="reservations">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-xl font-semibold mb-4">My Reservations</h2>
            <div className="space-y-6">
              {myReservations.map((reservation) => (
                <Card key={reservation.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="h-32 w-32 rounded-md overflow-hidden shrink-0">
                        <img
                          src={reservation.imageUrl}
                          alt={reservation.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-semibold mb-2">{reservation.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              {reservation.restaurant}
                            </p>
                            <div className="space-y-1 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-2" />
                                <span>{reservation.location}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-2" />
                                <span>Pickup by: {reservation.pickupBy}</span>
                              </div>
                              <div className="flex items-center">
                                <User className="h-4 w-4 mr-2" />
                                <span>Quantity: {reservation.quantity}</span>
                              </div>
                            </div>
                          </div>
                          <Badge className="bg-blue-500">Reserved</Badge>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Button size="sm" variant="outline">
                            Get Directions
                          </Button>
                          <Button size="sm" variant="outline">
                            Contact Restaurant
                          </Button>
                          <Button size="sm" variant="outline" className="text-yellow-600 border-yellow-200 hover:bg-yellow-50">
                            Mark as Collected
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {myReservations.length === 0 && (
                <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <p className="text-lg font-medium mb-2">No Active Reservations</p>
                  <p className="text-muted-foreground mb-6">
                    You don't have any active food reservations at the moment.
                  </p>
                  <Button asChild>
                    <Link to="/browse">Browse Available Food</Link>
                  </Button>
                </div>
              )}
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
              <h2 className="text-xl font-semibold">Reservation History</h2>
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Filter by Date
              </Button>
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
                          Restaurant
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                          People Served
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {reservationHistory.map((item) => (
                        <tr key={item.id} className="bg-white dark:bg-gray-900 border-b">
                          <td className="px-6 py-4 font-medium">{item.title}</td>
                          <td className="px-6 py-4">{item.restaurant}</td>
                          <td className="px-6 py-4">{item.date}</td>
                          <td className="px-6 py-4">{item.peopleServed}</td>
                          <td className="px-6 py-4">
                            <Badge className="bg-green-500">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              {item.status}
                            </Badge>
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
                  <h3 className="font-semibold mb-2">Your Impact</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    You've served approximately {stats.peopleServed} people through your food claims.
                    Thank you for your contribution to reducing food waste and hunger in our community.
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
                  <Label htmlFor="organization-name">Organization Name</Label>
                  <Input id="organization-name" defaultValue="Community Helpers" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-person">Contact Person</Label>
                  <Input id="contact-person" defaultValue="Emily Chen" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="emily@communityhelpers.org" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+1 (555) 987-6543" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" defaultValue="456 Hope St, City Center" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Organization Description</Label>
                  <Textarea 
                    id="description" 
                    defaultValue="Community Helpers is a non-profit organization dedicated to feeding the homeless and vulnerable populations in our city." 
                  />
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

export default NgoDashboard;
