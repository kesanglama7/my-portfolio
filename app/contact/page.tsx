import ContactForm from "@/components/contact/contact-form";


export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-4xl mt-[10vh]">
        <h1 className="text-2xl font-semibold tracking-wide text-black">
          Contact
        </h1>
        <p className="mt-3 text-[15px] text-black/70 max-w-xl">
          Got a project? Send the details. If it’s interesting, I’ll reply fast.
        </p>
        
        <ContactForm />
      </div>
    </main>
  );
}
