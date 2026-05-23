import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-4 px-6 text-sm text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with React & Vite</p>
      </div>
    </footer>
  );
}
