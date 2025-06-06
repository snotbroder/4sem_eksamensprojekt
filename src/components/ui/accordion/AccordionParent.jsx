import AccordionChild from "./AccordionChild";

function AccordionParent({ contentSource }) {
  contentSource;
  return <ul className="w-full flex flex-col border-b-1 border-darkbrown ">{contentSource.length > 0 ? contentSource.map((content, index) => <AccordionChild key={index} head={content.head} copy={content.copy}></AccordionChild>) : <p>Ingen accordion content at vise :( </p>}</ul>;
}

export default AccordionParent;
