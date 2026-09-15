import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Image } from "@/components/ui/image";
import { Check } from "lucide-react";

export default function BlueprintDialog({ item, children }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-3xl overflow-hidden bg-[#F7F7F5] p-0 sm:rounded-none">
        <div className="grid sm:grid-cols-2">
          <Image
            src={item.image}
            alt={item.title}
            className="h-64 w-full object-cover sm:h-full"
          />
          <div className="p-6 sm:p-8">
            <DialogHeader className="space-y-1 p-0 text-left">
              <p className="font-mono text-[10px] tracking-[0.35em] text-[#4A5D4E]">
                BLUEPRINT VIEW — {item.meta}
              </p>
              <DialogTitle className="font-display text-2xl font-light text-[#121212]">
                {item.title}
              </DialogTitle>
              <DialogDescription className="text-sm text-[#121212]/60">
                {item.blurb}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-6 space-y-4 text-sm">
              <div>
                <p className="font-mono text-[10px] tracking-[0.3em] text-[#121212]/40">
                  ORIGINAL SURFACE
                </p>
                <p className="mt-1 text-[#121212]/80">{item.original}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.3em] text-[#121212]/40">
                  WRAP APPLIED
                </p>
                <p className="mt-1 text-[#121212]/80">{item.wrap}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.3em] text-[#121212]/40">
                  SPEC
                </p>
                <ul className="mt-2 space-y-1.5">
                  {item.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 text-[#121212]/80">
                      <Check className="h-3.5 w-3.5 text-[#B8860B]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
