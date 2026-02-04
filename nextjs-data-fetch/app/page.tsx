import Link from "next/link";

export default function HomePage() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to NextJS Data Fetch Exercise
      </h1>
      <p className="mb-4">Click below to see users list:</p>
      <Link href="/users" className="text-blue-600 hover:underline">
        Go to Users
      </Link>
    </div>
  );
}
