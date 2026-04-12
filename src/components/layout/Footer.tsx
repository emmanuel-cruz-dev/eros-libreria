import Link from "next/link";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Code2,
  ArrowUpRight,
} from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const FOOTER_LINKS = {
  portfolio: [
    { label: "Proyectos", href: "/projects" },
    { label: "Experiencia", href: "/works" },
    { label: "Formación", href: "/education" },
    { label: "Contacto", href: "/#contact" },
  ],
  social: [
    { label: "GitHub", href: "https://github.com/tu-usuario", icon: Github },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/tu-usuario",
      icon: Linkedin,
    },
    { label: "Twitter", href: "https://twitter.com/tu-usuario", icon: Twitter },
    { label: "Email", href: "mailto:tu@email.com", icon: Mail },
  ],
};

function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        {/* Top section */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4 sm:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-semibold w-fit transition-opacity hover:opacity-80"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-foreground text-background">
                <Code2 className="h-4 w-4" />
              </span>
              Emmanuel Cruz
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-xs">
              Desarrollador fullstack apasionado por construir productos
              digitales con buena experiencia de usuario.
            </p>
            {/* Social icons */}
            <TooltipProvider delayDuration={200}>
              <div className="flex items-center gap-1">
                {FOOTER_LINKS.social.map(({ label, href, icon: Icon }) => (
                  <Tooltip key={label}>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-foreground"
                        asChild
                      >
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={label}
                        >
                          <Icon className="h-4 w-4" />
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>{label}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </div>

          {/* Nav links */}
          <div className="sm:col-span-1">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Portfolio
            </p>
            <ul className="flex flex-col gap-2">
              {FOOTER_LINKS.portfolio.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA / Open to work */}
          <div className="sm:col-span-1">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Estado actual
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span className="text-sm text-muted-foreground">
                  Disponible para nuevos proyectos
                </span>
              </div>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="w-fit gap-1.5"
              >
                <a href="mailto:tu@email.com">
                  Hablemos
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Emmanuel Cruz. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Construido con{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-foreground"
            >
              Next.js
            </a>{" "}
            &{" "}
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-foreground"
            >
              shadcn/ui
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
