import { File, PlusCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export function Drivers() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Drivers</CardTitle>
            <CardDescription>
              Manage your drivers and their assignments.
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" className="h-8 gap-1">
              <File className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Export
              </span>
            </Button>
            <Button size="sm" className="h-8 gap-1">
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Add Driver
              </span>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden md:table-cell">Phone</TableHead>
              <TableHead className="hidden md:table-cell">
                Vehicle No.
              </TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Ramesh Kumar</TableCell>
              <TableCell>
                <Badge variant="outline">On-duty</Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                +91 98765 43210
              </TableCell>
              <TableCell className="hidden md:table-cell">
                UP32-AB-1234
              </TableCell>
              <TableCell>{/* Actions Dropdown Here */}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Suresh Singh</TableCell>
              <TableCell>
                <Badge variant="secondary">Off-duty</Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                +91 98765 43211
              </TableCell>
              <TableCell className="hidden md:table-cell">
                UP32-CD-5678
              </TableCell>
              <TableCell>{/* Actions Dropdown Here */}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>24</strong> drivers
        </div>
      </CardFooter>
    </Card>
  );
}
