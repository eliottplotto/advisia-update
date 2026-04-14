export default function SeoFooterText({ text }: { text: string }) {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <p
          className="text-sm leading-[1.85] whitespace-pre-line"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          {text}
        </p>
      </div>
    </section>
  );
}
