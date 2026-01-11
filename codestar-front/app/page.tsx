import MacOSCodeBlock from "./components/MacOSCodeBlock";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col justify-center items-center p-4">
      <main className="max-w-2xl text-center space-y-6">
        <p className="text-5xl md:text-7xl font-black tracking-tighter">
          Bienvenue sur CodeStar.
        </p>

        <MacOSCodeBlock 
          className=""
          code = "const code_star = goat"
          filename="script.js"
          language="javascript"
          allowCopy={true}
        />
      </main>
    </div>
  );
}