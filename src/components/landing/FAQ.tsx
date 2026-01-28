import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does setup take?",
    answer:
      "Most systems are fully built and running within 1-2 weeks. We start with a 60-minute discovery call to understand your practice, then I build everything while you focus on clients.",
  },
  {
    question: "What if I'm not technical?",
    answer:
      "Perfect—that's exactly who this is for. I handle all the technical work. You'll receive a simple walkthrough, and I'm always a text away if you need help.",
  },
  {
    question: "What software do I need?",
    answer:
      "I build your system to integrate with whatever financial planning software you already use—eMoney, RightCapital, MoneyGuidePro, etc. No need to switch tools.",
  },
  {
    question: "What does ongoing support look like?",
    answer:
      "You get direct text/email access to me. Need a tweak? New workflow? Something's not working? Just reach out. I'm your growth partner, not a faceless support ticket.",
  },
  {
    question: "Is there a contract or commitment?",
    answer:
      "No long-term contracts. After the initial build, ongoing support is month-to-month. You stay because it's working, not because you're locked in.",
  },
  {
    question: "How is this different from buying CRM software?",
    answer:
      "CRM software gives you a blank canvas and wishes you luck. I build a complete, working system configured for your specific practice—with automations running from day one.",
  },
];

const FAQ = () => {
  return (
    <section className="relative py-20 lg:py-28">
      {/* Subtle transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.015] to-transparent" />
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-primary mb-3">
            Common questions
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border bg-card px-6"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-body pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
