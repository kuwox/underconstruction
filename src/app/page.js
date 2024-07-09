import { Logo } from "./components/Logo";
import { Wsp } from "./components/ui/Btns";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Logo />
      <Wsp />
    </main>
  );
}
