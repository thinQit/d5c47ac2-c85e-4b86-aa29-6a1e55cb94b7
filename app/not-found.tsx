import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      <div className="max-w-md text-center space-y-4">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-muted-foreground">This page stepped out for a sneaker run.</p>
        <Button asChild className="transition-all duration-200 hover:scale-105">
          <a href="/">Back to Home</a>
        </Button>
      </div>
    </main>
  );
}
