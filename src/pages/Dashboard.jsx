import React from "react";
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
import { Users, DollarSign, Package, ShoppingCart, Truck } from "lucide-react";

const Dashboard = () => {
  const stats = [
    { title: "Total Distributors", value: "125", icon: Truck },
    { title: "Sales Persons", value: "34", icon: Users },
    { title: "Earnings", value: "₹1,50,231", icon: DollarSign },
    { title: "Procurement", value: "₹85,678", icon: Package },
    { title: "Total Orders", value: "1,250", icon: ShoppingCart },
    { title: "Pending Orders", value: "72", icon: ShoppingCart },
  ];

  const reportData = {
    today: [
      { item: "Paneer", qty: 25, price: "₹6,250" },
      { item: "Milk", qty: 150, price: "₹7,500" },
    ],
    weekly: [
      { item: "Paneer", qty: 175, price: "₹43,750" },
      { item: "Milk", qty: 1050, price: "₹52,500" },
      { item: "Ghee", qty: 50, price: "₹25,000" },
    ],
    monthly: [
      { item: "Paneer", qty: 750, price: "₹1,87,500" },
      { item: "Milk", qty: 4500, price: "₹2,25,000" },
      { item: "Ghee", qty: 200, price: "₹1,00,000" },
      { item: "Curd", qty: 1000, price: "₹40,000" },
    ],
    yearly: [
      { item: "Paneer", qty: 9000, price: "₹22,50,000" },
      { item: "Milk", qty: 54000, price: "₹27,00,000" },
      { item: "Ghee", qty: 2400, price: "₹12,00,000" },
      { item: "Curd", qty: 12000, price: "₹4,80,000" },
    ],
  };

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="weekly" className="w-full">
            <TabsList>
              <TabsTrigger value="today">Today</TabsTrigger>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="yearly">Yearly</TabsTrigger>
            </TabsList>
            {Object.keys(reportData).map((period) => (
              <TabsContent value={period} key={period}>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item</TableHead>
                      <TableHead>Item Qty</TableHead>
                      <TableHead className="text-right">Total Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {reportData[period].map((row) => (
                      <TableRow key={row.item}>
                        <TableCell className="font-medium">
                          {row.item}
                        </TableCell>
                        <TableCell>{row.qty}</TableCell>
                        <TableCell className="text-right">
                          {row.price}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </>
  );
};

export default Dashboard;
