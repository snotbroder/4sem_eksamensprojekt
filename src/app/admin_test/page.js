import Test from "../admin_components/Test";
import TestVisualizer from "../admin_components/TestVisualizer";

export default function admin_test() {
  return (
    <div>
      <h1 className="text-3xl">Admin test</h1>

      <Test></Test>
      <TestVisualizer></TestVisualizer>
    </div>
  );
}
