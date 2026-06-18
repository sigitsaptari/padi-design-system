import * as React from "react"
import Link from "next/link"
import { Category, Box, Logout, Notification, SearchNormal1 } from "iconsax-react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-[#f6f9fc]">
      {/* Sidebar */}
      <aside className="w-[280px] flex-shrink-0 border-r bg-white flex flex-col justify-between">
        <div>
          {/* Logo */}
          <div className="flex items-center px-6 py-6 mb-4">
            <h1 className="text-2xl font-bold text-blue-600 tracking-tighter">
              PaDi <span className="text-sm font-semibold tracking-normal text-tosca-500">UMKM</span>
            </h1>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-1 px-4">
            <Link 
              href="/dashboard"
              className="flex items-center gap-3 px-4 py-3 bg-[#f6feff] border-l-4 border-tosca-500 text-tosca-500 font-medium"
            >
              <Category size={20} variant="Bulk" />
              Dashboard
            </Link>
            <Link 
              href="/dashboard/openapi"
              className="flex items-center gap-3 px-4 py-3 text-[#444b55] font-medium hover:bg-gray-50 transition-colors"
            >
              <Box size={20} variant="Bulk" color="currentColor" />
              Open API
            </Link>
          </nav>
        </div>

        {/* User Profile Footer */}
        <div className="p-4 border-t">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm">Asep</span>
                <span className="bg-cyan-100 text-tosca-600 text-[10px] font-bold px-2 py-0.5 rounded-2">Admin</span>
              </div>
              <span className="text-xs text-gray-400">Asep@padiumkm.id</span>
            </div>
            <button className="text-gray-400 hover:text-gray-600 p-2">
              <Logout size={20} variant="Outline" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="h-[88px] bg-white border-b flex items-center justify-end px-6 gap-6 flex-shrink-0">
          <button className="text-gray-400 hover:text-gray-600 relative">
            <Notification size={24} variant="Bulk" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="w-10 h-10 rounded-full bg-gray-200 border border-gray-300 overflow-hidden">
            {/* Placeholder for avatar */}
            <img src="https://ui-avatars.com/api/?name=Asep&background=0D8ABC&color=fff" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
