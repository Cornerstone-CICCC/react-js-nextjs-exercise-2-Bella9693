// app/users/[id]/page.tsx
import Link from "next/link";

export const fetchUserById = async (id: string) => {
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  return res.json();
};

export default async function UserDetail({
  params,
}: {
  params: { id: string };
}) {
  // Next.js 13에서는 params가 Promise일 수 있음
  const { id } = await params; // 👈 여기서 await 필요
  const user = await fetchUserById(id);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">
        {user.firstName} {user.lastName}
      </h1>
      <ul className="space-y-2">
        <li>Age: {user.age}</li>
        <li>Gender: {user.gender}</li>
        <li>Email: {user.email}</li>
      </ul>
      <Link
        href="/users"
        className="text-blue-500 hover:underline mt-5 inline-block"
      >
        Back
      </Link>
    </div>
  );
}
