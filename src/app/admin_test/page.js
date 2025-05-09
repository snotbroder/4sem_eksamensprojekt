import Test from "../admin_components/Test";
import TestVisualizer from "../admin_components/TestVisualizer";
import Section_text_and_image from "../admin_components/Section_text_and_image";
import Section_text_background_and_images from "../admin_components/Section_text_background_and_images";
import Section_breakup_w_component from "../admin_components/Section_breakup_w_component";
import TestComponent from "../admin_components/TestComponent";
import Dashboard_card from "../dashboard_components/Dashboard_card";
import Dashboard_menucard from "../dashboard_components/Dashboard_menucard";

export default function admin_test() {
  return (
    <div className="flex flex-col gap-xl">
      <h1 className="text-3xl">Admin test</h1>
      <Dashboard_card></Dashboard_card>
      <Dashboard_menucard></Dashboard_menucard>
      {/* <div className="">
        <Section_text_and_image reversedOrder="" btn_txt="BUTTON TXT" btn_href="https://example.com" img="store_building_facade_stroke_design" h1="Headline 1" h2="Headline 2" p="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsa quidem quas adipisci. Reprehenderit corporis fugiat ad dolorum alias quis."></Section_text_and_image>
        <Section_text_background_and_images></Section_text_background_and_images>      
        <Section_breakup_w_component motive="Join">
        <TestComponent></TestComponent>
      </Section_breakup_w_component>
        <Test></Test>
        <TestVisualizer></TestVisualizer>
      </div> */}
    </div>
  );
}
