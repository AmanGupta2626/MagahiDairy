import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthCard } from "@/components/AuthCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <AuthCard
      cardTitle="Create an account"
      cardDescription="Enter your details below to create an account"
      footerContent="Sign up with Google"
    >
      <form>
        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <div className="grid gap-2">
            <Label>Role</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sales-executive">Sales Executive</SelectItem>
                <SelectItem value="distributor">Distributor</SelectItem>
                <SelectItem value="driver">Driver</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
          <div className="text-center text-sm">
            Already have an account?
            <Button variant="link" onClick={() => navigate("/sign-in")}>
              Sign In
            </Button>
          </div>
        </div>
      </form>
    </AuthCard>
  );
};

export default SignUp;
