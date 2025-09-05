"use client";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen text-blue-600 text-lg font-semibold">
        Loading your dashboard...
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-700">
        <div className="text-center">
          <h2 className="text-3xl font-bold">You’re not signed in</h2>
          <p className="text-gray-500 mt-2">Log in to access your TrioDev dashboard.</p>
        </div>
      </div>
    );
  }

  const user = session.user;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="p-0 sm:p-6">
        <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg p-6 rounded-2xl">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold">👋 Welcome, {user.name?.split(" ")[0]}!</h1>
          <button
            onClick={() => signOut({ callbackUrl: "/auth" })}
            className="bg-white text-blue-600 px-5 py-2 rounded-xl shadow hover:bg-gray-100 transition"
          >
            Logout
          </button>
        </div>
      </header>
      </div>

      {/* Main Content */}
      <main className="p-0 sm:p-6 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-2">
        {/* Left: Profile Card */}
        <section className="lg:col-span-1 bg-white rounded-2xl shadow-md p-6 w-full">
          <div className="flex flex-col items-center text-center">
            {user.image ? (
              <Image
                src={user.image}
                alt="Profile"
                width={120}
                height={120}
                className="rounded-full border-4 border-blue-500 shadow-md object-cover"
              />
            ) : (
              <div className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-md bg-gray-200 flex items-center justify-center text-3xl font-bold text-blue-600">
                {user.name?.charAt(0) || "U"}
              </div>
            )}

            <h2 className="mt-4 text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-500">@{user.username || "newuser"}</p>
            <p className="text-gray-400 text-sm">{user.email}</p>

            {/* <button className="mt-5 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition shadow">
              Edit Profile
            </button> */}
          </div>
        </section>

        {/* Right: Dashboard Sections */}
        <section className="lg:col-span-2 space-y-8">
          {/* Account Overview */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-bold text-blue-600 mb-4">Account Overview</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500">Full Name</p>
                <p className="font-medium">{user.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{user.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Username</p>
                <p className="font-medium">{user.username || "Not set"}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Member Since</p>
                <p className="font-medium">Jan 2024</p>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-bold text-blue-600 mb-4">My Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* {[
                { title: "Website Redesign", status: "Active", color: "bg-green-100 text-green-700" },
                { title: "E-commerce Store", status: "Completed", color: "bg-blue-100 text-blue-700" },
                { title: "Portfolio Setup", status: "Pending", color: "bg-yellow-100 text-yellow-700" },
              ].map((proj, i) => (
                <div
                  key={i}
                  className="p-5 border rounded-xl shadow-sm hover:shadow-lg transition bg-gray-50"
                >
                  <h4 className="font-semibold text-lg">{proj.title}</h4>
                  <span
                    className={`mt-2 inline-block px-3 py-1 text-xs rounded-full font-medium ${proj.color}`}
                  >
                    {proj.status}
                  </span>
                </div>
              ))} */}
              No Projects Yet
            </div>
          </div>

          {/* Activity Feed */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-bold text-blue-600 mb-4">Recent Activity</h3>
            {/* <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <p className="text-gray-700">Updated profile picture</p>
                <span className="text-gray-400 text-sm ml-auto">2h ago</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                <p className="text-gray-700">Created new project <b>Portfolio Setup</b></p>
                <span className="text-gray-400 text-sm ml-auto">1d ago</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                <p className="text-gray-700">Completed <b>E-commerce Store</b></p>
                <span className="text-gray-400 text-sm ml-auto">3d ago</span>
              </li>
            </ul> */}
            No Recent Activity
          </div>
        </section>
      </main>
    </div>
  );
}
