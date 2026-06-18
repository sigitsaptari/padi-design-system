"use client"
import * as React from "react"
import { TextField } from "@/components/ui/textfield"
import { Button } from "@/components/ui/button"
import { SearchNormal1, Calendar, ArrowDown2 } from "iconsax-react"
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from "recharts"

const pieData = [
  { name: 'Success', value: 60, color: '#25974c' },
  { name: 'Client Error', value: 20, color: '#f58179' },
  { name: 'Server Error', value: 20, color: '#f5b041' },
];

const lineData = [
  { name: 'Senin', value: 64 },
  { name: 'Selasa', value: 47 },
  { name: 'Rabu', value: 68 },
  { name: 'Kamis', value: 80 },
  { name: 'Jumat', value: 61 },
];

export default function DashboardPage() {
  return (
    <div className="px-[48px] py-[24px] max-w-[1200px] mx-auto space-y-8">
      
      {/* Header Section */}
      <div>
        <h1 className="text-[28px] font-bold text-[#444b55] leading-[42px]">Dashboard Analytic</h1>
        <p className="text-[#686e76] text-[16px] leading-[24px] mt-1">tagline here</p>
        
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <TextField 
            placeholder="Cari API disini" 
            size="sm" 
            className="w-[300px]"
            iconR={<SearchNormal1 size={16} />} 
          />
          
          <div className="relative">
            <select className="appearance-none h-[36px] px-[16px] pr-10 border border-[#dee3ed] rounded-[4px] bg-white text-[12px] font-bold text-[#444b55] focus:outline-none w-[130px]">
              <option>Staging</option>
              <option>Production</option>
            </select>
            <ArrowDown2 size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#444b55] pointer-events-none" />
          </div>

          <div className="relative">
            <div className="flex items-center h-[36px] px-[16px] gap-3 border border-[#dee3ed] rounded-[4px] bg-white text-[12px] text-[#444b55] w-[180px] cursor-text">
              <Calendar size={16} />
              <span className="truncate">Pilih Rentang Tanggal</span>
            </div>
          </div>

          <Button variant="primary-outline" className="h-[36px] border-tosca-500 text-tosca-500 font-bold text-[12px] px-4 rounded-[4px]">
            Reset
          </Button>
        </div>
      </div>

      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-[24px]">
        <div className="bg-white p-[20px] border border-[#dee3ed] rounded-[12px]">
          <p className="text-[16px] font-medium text-[#686e76] leading-[24px]">Total API Hit</p>
          <h2 className="text-[34px] font-bold text-[#444b55] leading-[48px] mt-1">428,190</h2>
        </div>
        <div className="bg-white p-[20px] border border-[#dee3ed] rounded-[12px]">
          <p className="text-[16px] font-medium text-[#686e76] leading-[24px]">Total Success Request</p>
          <h2 className="text-[34px] font-bold text-[#25974c] leading-[48px] mt-1">402</h2>
        </div>
        <div className="bg-white p-[20px] border border-[#dee3ed] rounded-[12px]">
          <p className="text-[16px] font-medium text-[#686e76] leading-[24px]">Total Error Request</p>
          <h2 className="text-[34px] font-bold text-[#ee3124] leading-[48px] mt-1">500</h2>
        </div>
        <div className="bg-white p-[20px] border border-[#dee3ed] rounded-[12px]">
          <p className="text-[16px] font-medium text-[#686e76] leading-[24px]">Success Rate</p>
          <h2 className="text-[34px] font-bold text-[#25974c] leading-[48px] mt-1">98%</h2>
        </div>
      </div>

      {/* Data Table */}
      <div>
        <h3 className="text-[18px] font-bold text-[#444b55] leading-[26px] mb-4">Top 10 API Hit</h3>
        <div className="bg-white border border-[#dee3ed] rounded-[4px] overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-[#f3f5fc] border-b border-[#dee3ed]">
              <tr>
                <th className="px-[16px] h-[56px] font-bold text-[14px] text-[#444b55]">Nama API</th>
                <th className="px-[16px] h-[56px] font-bold text-[14px] text-[#444b55]">Total Hit</th>
                <th className="px-[16px] h-[56px] font-bold text-[14px] text-[#444b55]">Persentase Sukses</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#dee3ed]">
              {[
                { name: 'API Production A', hit: '50.000', percent: '100%' },
                { name: 'API Production B', hit: '40.000', percent: '98%' },
                { name: 'API Staging A', hit: '35.000', percent: '80%' },
                { name: 'API Production C', hit: '30.000', percent: '75%' },
                { name: 'API Staging B', hit: '31.000', percent: '76%' },
                { name: 'API Production D', hit: '37.000', percent: '90%' },
                { name: 'API Staging D', hit: '20.000', percent: '50%' },
                { name: 'API Production E', hit: '18.000', percent: '40%' },
              ].map((row, idx) => (
                <tr key={idx} className="bg-white">
                  <td className="px-[16px] h-[56px] text-[14px] text-[#444b55]">{row.name}</td>
                  <td className="px-[16px] h-[56px] text-[14px] text-[#444b55]">{row.hit}</td>
                  <td className="px-[16px] h-[56px] text-[14px] text-[#444b55]">{row.percent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Lower Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-[24px]">
        {[
          { label: 'Latency/Response Time', value: '200ms' },
          { label: 'Error Breakdown', value: '402' },
          { label: 'API Usage/Credential', value: '50' },
          { label: 'Rate Limit Monitoring', value: '100' },
          { label: 'Peak Usage Per Time', value: '5Min' },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-[20px] border border-[#dee3ed] rounded-[12px]">
            <p className="text-[14px] font-medium text-[#686e76]">{item.label}</p>
            <h3 className="text-[24px] font-bold text-[#444b55] mt-2">{item.value}</h3>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div className="bg-white p-[24px] border border-[#dee3ed] rounded-[12px] flex flex-col">
          <h3 className="text-[18px] font-bold text-[#444b55] mb-6">Statistic Response Code</h3>
          <div className="flex-1 flex flex-col items-center justify-center relative min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={0}
                  outerRadius={100}
                  dataKey="value"
                  stroke="none"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <RechartsTooltip />
              </PieChart>
            </ResponsiveContainer>
            {/* Legend inside pie */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="flex flex-col items-center">
                 {/* This could be styled text over pie segments if needed */}
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-6 mt-4">
            {pieData.map((entry, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: entry.color }}></span>
                {entry.name}
              </div>
            ))}
          </div>
        </div>

        {/* Line Chart */}
        <div className="bg-white p-[24px] border border-[#dee3ed] rounded-[12px] flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[18px] font-bold text-[#444b55]">Statistic Response Code</h3>
            <div className="relative">
              <select className="appearance-none h-8 px-3 pr-8 border border-[#dee3ed] rounded-2 bg-white text-xs font-medium text-gray-600 focus:outline-none">
                <option>Harian</option>
                <option>Mingguan</option>
              </select>
              <ArrowDown2 size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>
          </div>
          <div className="flex-1 min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#a5b4fc" 
                  strokeWidth={2}
                  dot={{ fill: '#fff', stroke: '#a5b4fc', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6 }} 
                />
                <CartesianGrid stroke="#f3f4f6" strokeDasharray="5 5" vertical={true} />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#6b7280' }} 
                  dy={10} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#6b7280' }} 
                  domain={[0, 100]}
                  ticks={[0, 20, 40, 60, 80, 100]}
                />
                <RechartsTooltip 
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center mt-4">
            <div className="flex items-center gap-2 text-xs text-gray-600 font-medium">
              <div className="flex items-center">
                <div className="w-4 h-px bg-[#a5b4fc]"></div>
                <div className="w-1.5 h-1.5 rounded-full border border-[#a5b4fc] bg-white -ml-2.5"></div>
              </div>
              Trend Penggunaan API
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
