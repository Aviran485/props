import FilterList from "./components/FilterList";
import WelcomeMessage from "./components/WelcomeMessage";
import ImageWithCaption from "./components/ImageWithCaption";
import ColorBlock from "./components/ColorBlock";
import ActionButton from "./components/ActionButton";


function App() {
  return (
    // <div className="App">
    //   <WelcomeMessage name ='Connor Mcgregor'/>
    //   <FilterList words = {['react','jsx','javascript','ui']} minLength={5}/>
    //   <FilterList/>
    // </div>
    <div>
      {/* Exercise 1 */}
      <h3>ColorBlock Examples:</h3>
      <ColorBlock color="blue" />
      <ColorBlock color="red" />
      <ColorBlock />

      {/* Exercise 2 */}
      <h3>ActionButton Example:</h3>
      <ActionButton
        label="Click me"
        onAction={() => alert('Button clicked!')}
      />

      {/* Exercise 3*/}
      <h3>ImageWithCaption Examples:</h3>
      <ImageWithCaption
        src="https://via.placeholder.com/150"
        caption="Sample Image"
      />
      <ImageWithCaption caption="No Image Provided" />
    </div>
  );
}

export default App;
