import MacOSCodeBlock from "@/components/MacOSCodeBlock"

export default function HomePage() {

  const pythonCode = `def fibonacci(n):
    """
    Calcule la suite de Fibonacci de manière récursive.
    """
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

# Afficher les 10 premiers nombres
results = [fibonacci(i) for i in range(10)]
print(f"Séquence générée : {results}")`;

  return (
    <div className="min-h-screen bg-white text-black flex flex-col justify-center items-center p-4">
      <main className="max-w-2xl text-center space-y-6">

        <p className="text-5xl md:text-7xl font-black tracking-tighter">
          Bienvenue sur CodeStar.
        </p>

        <MacOSCodeBlock
          code={pythonCode}
          language="python"
          filename="fibonacci.py"
          allowCopy={true}    
        />
        
      </main>
    </div>
  );
}