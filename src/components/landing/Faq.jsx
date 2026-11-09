import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Eyebrow } from "./Icon";
import { FAQ } from "@/data/content";

export const Faq = () => (
  <section id="faq" className="bg-forest-deep py-20 sm:py-28">
    <div className="mx-auto max-w-3xl px-5">
      <Eyebrow>Questions frÃ©quentes</Eyebrow>
      <h2 className="mt-4 text-3xl font-bold text-cream sm:text-4xl">
        Tu te poses encore des questions ?
      </h2>
      <Accordion
        type="single"
        collapsible
        className="mt-10"
        data-testid="faq-accordion"
      >
        {FAQ.map((f, i) => (
          <AccordionItem key={f.q} value={`q${i}`} className="border-gold/25">
            <AccordionTrigger
              data-testid={`faq-trigger-${i}`}
              className="py-5 font-display text-base text-cream hover:no-underline hover:text-gold sm:text-lg [&>svg]:text-gold"
            >
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-base text-cream-muted">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);