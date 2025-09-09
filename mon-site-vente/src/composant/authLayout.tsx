import type { ReactNode } from "react";

type AuthLayoutProps = {
  title: string;
  children: ReactNode;
  message?: string | null;
};

export default function AuthLayout({ title, children, message }: AuthLayoutProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-md">
        {message && (
          <p className="text-red-600 text-center font-medium mb-4">{message}</p>
        )}

        <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">
          {title}
        </h1>

        {children}
      </div>
    </div>
  );
}
