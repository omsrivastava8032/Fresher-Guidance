
import { cn } from "@/lib/utils";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <div className="flex flex-col items-center">
        <div className="relative w-16 h-16">
          <div 
            className={cn(
              "absolute w-full h-full rounded-full border-4 border-t-primary",
              "border-r-transparent border-b-transparent border-l-transparent",
              "animate-spin"
            )}
          />
          <div 
            className={cn(
              "absolute w-full h-full rounded-full border-4 border-t-transparent",
              "border-r-primary/30 border-b-transparent border-l-primary/30",
              "animate-spin [animation-duration:1.5s]"
            )}
          />
        </div>
        <p className="mt-4 text-muted-foreground animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
