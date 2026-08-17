'use client';
import { useRouter } from 'next/navigation';

export default function AddPet() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-slate-50 p-4 max-w-md mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">新增爬宠档案</h1>
        <p className="text-slate-500">填写小家伙的信息</p>
      </div>

      <div className="bg-white rounded-xl shadow p-4 space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">宠物名字</label>
          <input
            type="text"
            className="w-full border border-slate-300 rounded-lg px-3 py-2"
            placeholder="例如：小黄"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">品种</label>
          <input
            type="text"
            className="w-full border border-slate-300 rounded-lg px-3 py-2"
            placeholder="例如：豹纹守宫"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">年龄</label>
          <input
            type="text"
            className="w-full border border-slate-300 rounded-lg px-3 py-2"
            placeholder="例如：8个月"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">体重(g)</label>
          <input
            type="number"
            className="w-full border border-slate-300 rounded-lg px-3 py-2"
            placeholder="例如：62"
          />
        </div>
        <button className="w-full bg-emerald-600 text-white py-2 rounded-lg">
          保存档案
        </button>
        <button
          type="button"
          onClick={() => router.push('/')}
          className="w-full border border-slate-300 py-2 rounded-lg text-slate-600"
        >
          返回首页
        </button>
      </div>
    </main>
  );
}
