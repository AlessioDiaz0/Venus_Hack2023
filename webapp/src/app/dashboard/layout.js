export default function DashboardLayout({ children }) {
  return (
    <main class="min-h-screen bg-gradient-to-b from-black via-slate-950 to-blue-950">
      <div class="flex justify-center">
        <span class="font-Nunito font-extrabold text-4xl bg-gradient-to-r from-fuchsia-200 to-violet-400 bg-clip-text text-transparent">
          VenusLingo!
        </span>
      </div>
      {children}
    </main>
  );
}
