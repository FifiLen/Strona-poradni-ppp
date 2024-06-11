import { ArrowBigRight } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import Link from "next/link";

export function AlertDemo() {
  return (
    <Link href={"/assets/oferta-PPP-Magnolia.pdf"}>
      <Alert className="mx-auto max-w-lg mb-10">
        <ArrowBigRight className="h-4 w-4" />
        <AlertTitle>Zajrzyj do zakładki oferta</AlertTitle>
        <AlertDescription>
          Znajdziesz tam wszystkie usługi dostępne w naszej placówce.
        </AlertDescription>
      </Alert>
    </Link>
  );
}
