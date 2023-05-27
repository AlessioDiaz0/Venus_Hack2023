import AddButton from "./addButton";
export default function Dashboard() {
  return (
    <div class="flex flex-col justify-center p-3 mt-3">
      <h1 class="text-center text-3xl font-semibold m-3">Dashboard</h1>
      <div class="flex min-w-max justify-center p-3 gap-2">
        <AddButton />
      </div>
    </div>
  );
}
