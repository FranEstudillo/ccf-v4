import VestuariosList from "@/components/VestuariosList";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Gestión de Vestuarios</h1>
      <VestuariosList />
    </main>
   
  );
}
