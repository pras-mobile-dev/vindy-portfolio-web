import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 py-24 sm:px-8">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
        That page does not exist
      </h1>
      <p className="mt-4 max-w-prose leading-relaxed text-ink-500">
        The link may be out of date, or the address may have a typo in it. Everything on this site
        lives on a single page.
      </p>
      <p className="mt-8">
        <Link
          href="/"
          className="rounded bg-ink-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-ink-800"
        >
          Back to the portfolio
        </Link>
      </p>
    </main>
  );
}
