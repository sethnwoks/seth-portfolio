"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()} className="inline-flex items-center gap-2 rounded border border-teal-300/60 px-4 py-2 text-sm font-medium text-teal-300 transition-colors hover:bg-teal-400/10">
      <Printer size={16} /> Print / Save as PDF
    </button>
  );
}
