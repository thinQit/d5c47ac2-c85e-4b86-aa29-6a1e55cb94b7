"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      <div className="max-w-md text-center space-y-4">
        <h1 className="text-3xl font-bold">Something went wrong</h1>
        <p className="text-muted-foreground">We couldn’t load this page. Please try again.</p>
        <Button onClick={() => reset()} className="transition-all duration-200 hover:scale-105">
          Try again
        </Button>
      </div>
    </main>
  );
}
