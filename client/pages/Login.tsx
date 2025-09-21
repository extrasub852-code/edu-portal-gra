import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="mx-auto max-w-md px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-[#003057]">Login</h1>
      <form className="mt-6 space-y-4">
        <input type="email" placeholder="Email" className="w-full rounded-md border border-[#003057]/20 px-3 py-2 text-sm text-[#003057] focus:outline-none focus:ring-2 focus:ring-[#B3A369]" />
        <input type="password" placeholder="Password" className="w-full rounded-md border border-[#003057]/20 px-3 py-2 text-sm text-[#003057] focus:outline-none focus:ring-2 focus:ring-[#B3A369]" />
        <button className="w-full rounded-md bg-[#003057] px-4 py-2 text-sm font-semibold text-[#B3A369]">Login</button>
      </form>
      <p className="mt-3 text-sm text-[#003057]/80">
        No account? <Link to="/signup" className="font-semibold text-[#003057] underline">Sign up</Link>
      </p>
    </div>
  );
}
