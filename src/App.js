import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import useStorage from "./hooks/useStorage";

function App() {
  return (
    <div className="App">
      <Title />
      <UploadForm />
    </div>

  );
}

export default App;
