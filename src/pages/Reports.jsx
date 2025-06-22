import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Reports() {
  return (
    <Tabs defaultValue="overview" className="space-y-4">
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <TabsList className="overflow-x-auto overflow-y-hidden">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
        </TabsList>
        <div className="flex items-center space-x-2">
          <Button>Download</Button>
        </div>
      </div>
      <TabsContent value="overview" className="space-y-4">
        {/* Overview Content Here */}
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>
              A summary of your business performance.
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            {/* Chart or key stats can go here */}
            <p>Overview report content will be displayed here.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="sales" className="space-y-4">
        {/* Sales Report Content Here */}
        <Card>
          <CardHeader>
            <CardTitle>Sales Report</CardTitle>
            <CardDescription>A detailed breakdown of sales.</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            {/* Chart or table for sales can go here */}
            <p>Sales report content will be displayed here.</p>
          </CardContent>
        </Card>
      </TabsContent>
      {/* Add more TabsContent for other reports */}
    </Tabs>
  );
}
