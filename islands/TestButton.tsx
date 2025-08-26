export default function TestButton() {
  return (
    <button
      type="button"
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      onClick={() => alert("Button clicked!")}
    >
      Click Me
    </button>
  );
}
