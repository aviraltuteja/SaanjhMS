import AutoLogin from "../components/auth/auto-login";
import LoginForm from "../components/auth/login-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <AutoLogin />
      <LoginForm />
    </div>
  );
}
