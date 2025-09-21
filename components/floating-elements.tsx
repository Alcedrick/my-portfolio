"use client"

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating code symbols */}
      <div className="absolute top-20 left-10 text-primary/20 text-2xl animate-float">{"</>"}</div>
      <div className="absolute top-40 right-20 text-accent/20 text-xl animate-float-delayed">{"{}"}</div>
      <div className="absolute bottom-40 left-20 text-primary/20 text-lg animate-float-slow">{"()"}</div>
      <div className="absolute bottom-20 right-10 text-accent/20 text-2xl animate-float">{"[]"}</div>
      <div className="absolute top-60 left-1/2 text-primary/20 text-xl animate-float-delayed">{"=>"}</div>

      {/* Floating geometric shapes */}
      <div className="absolute top-32 right-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float-slow"></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-accent/30 rounded-full animate-float"></div>
      <div className="absolute top-1/2 right-12 w-1 h-1 bg-primary/40 rounded-full animate-float-delayed"></div>
    </div>
  )
}
