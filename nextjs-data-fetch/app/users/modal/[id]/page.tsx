// 서버 컴포넌트 버전
import Link from "next/link";

export default async function UserModal({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(`https://dummyjson.com/users/${params.id}`);
  const user = await res.json();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-3">
          {user.firstName} {user.lastName}
        </h2>
        <p>ID: {user.id}</p>
        <p>First Name: {user.firstName}</p>
        <p>Last Name: {user.lastName}</p>
        <Link
          href="/users"
          className="text-blue-500 hover:underline mt-4 block"
        >
          Close
        </Link>
      </div>
    </div>
  );
}
