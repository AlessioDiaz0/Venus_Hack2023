export default function DashboardLayout({ children }) {
  return (
    <main class="min-h-screen bg-gradient-to-b p-4 from-purple-950 via-indigo-950 to-slate-950">
      <div class="flex justify-center p-4">
        <span class="font-Nunito font-extrabold text-4xl bg-gradient-to-r from-fuchsia-200 to-violet-400 bg-clip-text text-transparent">
          <a href="/">VenusLingo!</a>
        </span>
      </div>
      <div class="flex justify-end m-3">
        <span>
          <button
            type="button"
            class="text-indigo-950 bg-gradient-to-r from-indigo-200 to-fuchsia-200 px-3 py-2 rounded-xl font-bold hover:from-indigo-100 hover:to-fuchsia-100"
          >
            Log Out
          </button>
        </span>
      </div>
      {children}
    </main>
  );
}
