import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthCard } from "@/components/AuthCard";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();
  return (
    <AuthCard
      cardTitle="Forgot your password?"
      cardDescription="Enter your email below to receive a password reset link."
      footerContent="Login with Google"
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
          <Button type="submit" className="w-full">
            Send Reset Link
          </Button>
          <div className="text-center text-sm">
            Remember your password?
            <Button variant="link" onClick={() => navigate("/signin")}>
              Sign In
            </Button>
          </div>
        </div>
      </form>
    </AuthCard>
  );
};

export default ForgetPassword;
