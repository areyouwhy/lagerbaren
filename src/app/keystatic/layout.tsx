import KeystaticApp from "./keystatic";

export default function KeystaticLayout() {
  return (
    <>
      <KeystaticApp />
      <a
        href="/help"
        target="_blank"
        rel="noopener"
        aria-label="Öppna hjälpguiden i en ny flik / Open the help guide in a new tab"
        className="fixed bottom-4 right-4 z-50 rounded-full border border-white/20 bg-black/80 px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-black"
      >
        Hjälp / Help
      </a>
    </>
  );
}
