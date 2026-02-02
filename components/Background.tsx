'use client'

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20" />
      <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-400/40 dark:bg-purple-500 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-60 dark:opacity-20 animate-float" />
      <div className="absolute top-0 -right-4 w-96 h-96 bg-indigo-400/40 dark:bg-blue-500 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-60 dark:opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-400/40 dark:bg-pink-500 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-60 dark:opacity-20 animate-float" style={{ animationDelay: '4s' }} />
    </div>
  )
}
