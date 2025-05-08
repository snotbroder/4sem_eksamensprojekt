import Test from "../admin_components/Test";
import TestVisualizer from "../admin_components/TestVisualizer";
import Section_text_and_image from "../admin_components/Section_text_and_image";

export default function admin_test() {
  return (
    <div>
      <h1 className="text-3xl">Admin test</h1>
      <Section_text_and_image reversedOrder="" btn_txt="BUTTON TXT" btn_href="https://example.com" img="store_building_facade_stroke_design" h1="Headline 1" h2="Headline 2" p="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsa quidem quas adipisci. Reprehenderit corporis fugiat ad dolorum alias quis."></Section_text_and_image>
      <div className="opacity-0">
        <Test></Test>
        <TestVisualizer></TestVisualizer>
      </div>
    </div>
  );
}
