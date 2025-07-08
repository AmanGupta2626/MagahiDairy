import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  DollarSign, 
  Package, 
  ShoppingCart, 
  Truck, 
  TrendingUp, 
  TrendingDown,
  Activity,
  Calendar,
  BarChart3,
  PieChart,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();
  const [selectedPeriod, setSelectedPeriod] = useState("weekly");

  const stats = [
    { 
      title: "Total Distributors", 
      value: "125", 
      change: "+12%",
      trend: "up",
      icon: Truck,
      color: "from-blue-500 to-blue-600"
    },
    { 
      title: "Sales Persons", 
      value: "34", 
      change: "+5%",
      trend: "up",
      icon: Users,
      color: "from-green-500 to-green-600"
    },
    { 
      title: "Total Revenue", 
      value: "₹1,50,231", 
      change: "+18%",
      trend: "up",
      icon: DollarSign,
      color: "from-purple-500 to-purple-600"
    },
    { 
      title: "Procurement", 
      value: "₹85,678", 
      change: "-3%",
      trend: "down",
      icon: Package,
      color: "from-orange-500 to-orange-600"
    },
    { 
      title: "Total Orders", 
      value: "1,250", 
      change: "+25%",
      trend: "up",
      icon: ShoppingCart,
      color: "from-pink-500 to-pink-600"
    },
    { 
      title: "Pending Orders", 
      value: "72", 
      change: "-8%",
      trend: "down",
      icon: Activity,
      color: "from-red-500 to-red-600"
    },
  ];

  const reportData = {
    today: [
      { item: "Paneer", qty: 25, price: "₹6,250", change: "+15%" },
      { item: "Milk", qty: 150, price: "₹7,500", change: "+8%" },
      { item: "Ghee", qty: 12, price: "₹6,000", change: "+22%" },
    ],
    weekly: [
      { item: "Paneer", qty: 175, price: "₹43,750", change: "+12%" },
      { item: "Milk", qty: 1050, price: "₹52,500", change: "+18%" },
      { item: "Ghee", qty: 50, price: "₹25,000", change: "+25%" },
      { item: "Curd", qty: 200, price: "₹8,000", change: "+10%" },
    ],
    monthly: [
      { item: "Paneer", qty: 750, price: "₹1,87,500", change: "+20%" },
      { item: "Milk", qty: 4500, price: "₹2,25,000", change: "+15%" },
      { item: "Ghee", qty: 200, price: "₹1,00,000", change: "+30%" },
      { item: "Curd", qty: 1000, price: "₹40,000", change: "+12%" },
    ],
    yearly: [
      { item: "Paneer", qty: 9000, price: "₹22,50,000", change: "+28%" },
      { item: "Milk", qty: 54000, price: "₹27,00,000", change: "+22%" },
      { item: "Ghee", qty: 2400, price: "₹12,00,000", change: "+35%" },
      { item: "Curd", qty: 12000, price: "₹4,80,000", change: "+18%" },
    ],
  };

  const recentActivities = [
    { action: "New order received", time: "2 minutes ago", type: "order" },
    { action: "Payment processed", time: "15 minutes ago", type: "payment" },
    { action: "Delivery completed", time: "1 hour ago", type: "delivery" },
    { action: "New distributor added", time: "2 hours ago", type: "distributor" },
    { action: "Inventory updated", time: "3 hours ago", type: "inventory" },
  ];

  return (
    <div className="space-y-6 p-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Welcome back, {user?.name || "User"}! 👋
            </h1>
            <p className="text-blue-100 text-lg">
              Here's what's happening with your franchise today
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">₹45,678</div>
                <div className="text-blue-100 text-sm">Today's Revenue</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">156</div>
                <div className="text-blue-100 text-sm">Orders Today</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title} className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <div className={`p-3 rounded-full bg-gradient-to-r ${stat.color}`}>
                <stat.icon className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className={`flex items-center text-sm font-medium ${
                  stat.trend === "up" ? "text-green-600" : "text-red-600"
                }`}>
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 mr-1" />
                  )}
                  {stat.change}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts and Reports Section */}
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        {/* Main Reports Card */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl font-bold">Sales Reports</CardTitle>
                <p className="text-gray-600 mt-1">Track your sales performance</p>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-blue-600" />
                <PieChart className="h-5 w-5 text-purple-600" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs value={selectedPeriod} onValueChange={setSelectedPeriod} className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="today">Today</TabsTrigger>
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Yearly</TabsTrigger>
              </TabsList>
              {Object.keys(reportData).map((period) => (
                <TabsContent value={period} key={period} className="mt-6">
                  <div className="rounded-lg border">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gray-50">
                          <TableHead className="font-semibold">Product</TableHead>
                          <TableHead className="font-semibold">Quantity</TableHead>
                          <TableHead className="font-semibold text-right">Revenue</TableHead>
                          <TableHead className="font-semibold text-right">Growth</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {reportData[period].map((row) => (
                          <TableRow key={row.item} className="hover:bg-gray-50">
                            <TableCell className="font-medium">
                              <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                {row.item}
                              </div>
                            </TableCell>
                            <TableCell>{row.qty}</TableCell>
                            <TableCell className="text-right font-semibold">
                              {row.price}
                            </TableCell>
                            <TableCell className="text-right">
                              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                row.change.startsWith('+') 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-red-100 text-red-800'
                              }`}>
                                {row.change}
                              </span>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold">Recent Activities</CardTitle>
              <Activity className="h-5 w-5 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'order' ? 'bg-blue-500' :
                    activity.type === 'payment' ? 'bg-green-500' :
                    activity.type === 'delivery' ? 'bg-purple-500' :
                    activity.type === 'distributor' ? 'bg-orange-500' :
                    'bg-gray-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 text-center group">
              <ShoppingCart className="h-8 w-8 mx-auto mb-2 text-gray-400 group-hover:text-blue-600" />
              <p className="font-medium text-sm">New Order</p>
            </button>
            <button className="p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-green-500 hover:bg-green-50 transition-all duration-200 text-center group">
              <Users className="h-8 w-8 mx-auto mb-2 text-gray-400 group-hover:text-green-600" />
              <p className="font-medium text-sm">Add Distributor</p>
            </button>
            <button className="p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-purple-500 hover:bg-purple-50 transition-all duration-200 text-center group">
              <Package className="h-8 w-8 mx-auto mb-2 text-gray-400 group-hover:text-purple-600" />
              <p className="font-medium text-sm">Update Inventory</p>
            </button>
            <button className="p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-orange-500 hover:bg-orange-50 transition-all duration-200 text-center group">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-gray-400 group-hover:text-orange-600" />
              <p className="font-medium text-sm">View Reports</p>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
