// app/users/page.tsx
import Link from "next/link";

export const fetchUsers = async () => {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();
  return data.users;
};

export default async function UsersPage() {
  const users = await fetchUsers();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Users List</h1>
      <ul className="space-y-2">
        {users.map((user: any) => (
          <li key={user.id}>
            <Link
              href={`/users/${user.id}`}
              className="text-blue-500 hover:underline"
            >
              {user.firstName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
