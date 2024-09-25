import Icons from "@/components/icons";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen-no-nav">
      <div className="flex flex-col items-center gap-16">
        <Icons.Masonry className="w-64 h-64" />
        <div className="flex flex-col items-center gap-3 text-center">
          <h1 className="text-3xl font-black md:text-4xl lg:text-5xl font-display">
            Masonry Studio
          </h1>
          <code className="font-mono text-xl font-semibold md:text-2xl lg:text-3xl">
            Under Construction
          </code>
        </div>
      </div>
    </main>
  );
}
