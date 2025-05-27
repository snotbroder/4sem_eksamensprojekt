import AccordionParent from "@/components/ui/accordion/AccordionParent";
import accordionContentFAQ from "@/copy_content/accordionFAQ";
import Head from "next/head";
export default function Faq() {
  // Schema markup forsøg
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does your menu works?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All our menus are sharing dishes and must be ordered by the entire table. We also offer a la carte, where we recommend 2-3 dishes per person.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to show a theater ticket for the theatermenu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It is not necessary to show a theater ticket to order our theater menu.",
        },
      },
      {
        "@type": "Question",
        name: "What if I'm a party of more than 9 people?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "At our restaurant we warmly welcome larger parties of 9 people or more. Whether it's a birthday, company party, anniversary or another special occasion, we are ready to create a festive evening for you and your guests. Contact us today to hear more about the possibilities, and let us help plan your next event. We look forward to being a part of your big night.",
        },
      },
      {
        "@type": "Question",
        name: "Are you hiring?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can always apply unsolicited by sending us your CV by email. We are always open to new people in our family.",
        },
      },
      {
        "@type": "Question",
        name: "Where are you located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gl. Kongevej 27, 1610 København V",
        },
      },
      {
        "@type": "Question",
        name: "Opening hours & public holiday",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Monday to Thursday: 17-24 and Friday and Saturday: 17.30-24. We are open every public holiday except Christmas Eve.",
        },
      },
      {
        "@type": "Question",
        name: "Can I buy a giftcard?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we also sell giftcards – which you can buy here https://www.restaurantlamar.com/gavekort",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </Head>
      <main>
        <div className="grid md:grid-cols-5 ">
          <div data-aos="fade-up" className="px-s md:px-6xl md:col-span-3 mt-[12vh] py-m">
            <h1>F.A.Q.</h1>
            <AccordionParent contentSource={accordionContentFAQ} />
          </div>
          <div className="md:col-span-2 bg-fixed bg-[url('/Image_bank/lamar_repeatingtext_secondary500.svg'),_url('/Image_bank/aboutus/interior2.png')] bg-bottom-left bg-auto"></div>
        </div>
      </main>
    </>
  );
}
