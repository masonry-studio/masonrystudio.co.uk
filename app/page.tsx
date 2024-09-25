export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen">
      <div className="flex flex-col items-center gap-16">
        <svg width="217" height="175" viewBox="0 0 217 175" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M109.081 108.919L1.58108 2.00002L1 57.7838L109.081 166.446L216 57.7838V2L109.081 108.919Z" fill="white" stroke="white" />
          <path d="M215.919 116.446L157.811 174.554L215.919 174.554V116.446Z" fill="white" />
          <path d="M1 116.446L58.8105 173.973L1 173.973V116.446Z" fill="white" />
        </svg>
        <div className="flex flex-col items-center gap-3">

          <h1 className="text-5xl font-black font-display">
            Masonry Studio
          </h1>
          <code className="font-mono text-2xl font-semibold">
            Under Construction
          </code>
        </div>
      </div>
    </main>
  );
}
