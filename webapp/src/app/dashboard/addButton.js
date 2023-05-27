export default function AddButton() {
  return (
    <>
      <select
        name="Language"
        id="select-language"
        class="rounded-xl text-indigo-950 py-2 px-3"
      >
        <option value="" disabled selected hidden>
          Language
        </option>
        <option>Spanish</option>
      </select>
      <button class="max-w-sm text-indigo-950 bg-gradient-to-r from-indigo-200 to-fuchsia-200 px-3 py-2 rounded-xl font-bold hover:from-indigo-100 hover:to-fuchsia-100">
        Add
      </button>
    </>
  );
}
