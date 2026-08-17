'use client';
import Link from 'next/link' // 
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 p-4 max-w-md mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">爪巴伴侣</h1>
        <p className="text-slate-500">你好，雨霖</p>
      </div>

      {/* 宠物卡片 */}
      <div className="bg-white rounded-xl shadow p-4 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">🦎</span>
          <div>
            <h2 className="font-semibold text-lg">小黄</h2>
            <p className="text-sm text-slate-500">豹纹守宫 · 8个月 · 62g</p>
          </div>
        </div>
        <div className="my-3">
          <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded text-sm">今日状态：正常</span>
        </div>
        <div className="flex gap-3 text-sm text-slate-600 mb-3">
          <span>🍽 喂食</span>
          <span>💩 排便</span>
          <span>⚖️ 体重</span>
        </div>
        <button className="w-full bg-emerald-600 text-white py-2 rounded-lg">
          问 AI
        </button>
      </div>

     {/* 添加宠物入口占位 */}
<div className="text-center text-slate-400 text-sm mt-8">
<Link href="/add-pet" className="text-emerald-600 underline">添加更多爬宠档案 →</Link>
</div>
    </main>
  );
}