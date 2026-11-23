
import { useState } from 'react';
import { Heart, Plus, Minus } from 'lucide-react';

const questions = [
  {
    question: 'How do I order a custom cake?',
    answer:
      'Send us a message with your cake idea, preferred date, and serving size. We would love to discuss your design!'
  },
  {
    question: 'How far in advance should I order?',
    answer:
      'We recommend contacting us as early as possible so we can check availability for your special date.'
  },
  {
    question: 'Can I request a personalized cake design?',
    answer:
      'Absolutely! Tell us about your theme, colors, and inspiration, and we can discuss a cake made just for you.'
  },
  {
    question: 'What flavors do you offer?',
    answer:
      'Visit our Flavors page to explore our cake and frosting options.'
  },
  {
    question: 'How much do custom cakes cost?',
    answer:
      'Pricing depends on the size, design, and details of your cake. Contact us for a personalized quote.'
  }
];

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);

  return (
    <main className="faq-page">
      <section className="faq-intro">
        <p className="eyebrow">
          HERE TO MAKE THINGS SWEETER
        </p>

        <h1>
          A few sweet <em>answers.</em>
        </h1>

        <p>
          Everything you might want to know before
          ordering something special.
        </p>
      </section>

      <section className="faq-questions">
        {questions.map((item, index) => (
          <div className="faq-item" key={index}>
            <button
              type="button"
              className="faq-question"
              aria-expanded={openQuestion === index}
              onClick={() =>
                setOpenQuestion(
                  openQuestion === index ? null : index
                )
              }
            >
              <span>{item.question}</span>

              {openQuestion === index
                ? <Minus size={20} />
                : <Plus size={20} />}
            </button>

            {openQuestion === index && (
              <p className="faq-answer">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </section>

      <section className="contact-section" id="contact">
        <Heart size={25} />

        <p className="eyebrow">
          LET'S CELEBRATE TOGETHER
        </p>

        <h2>
          Have a sweet idea <em>in mind?</em>
        </h2>

        <p>
          Get in touch to ask about a custom cake
          or your next celebration.
        </p>

        <a
          href="mailto:CakesToCrumbs@gmail.com"
          className="btn btn-primary faq-contact-button"
        >
          GET IN TOUCH
        </a>
      </section>
    </main>
  );
}
