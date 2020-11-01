import "./App.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function App() {
  return (
    <div class="container">
      <div class="row">
        <div class="col align-self-center">
          <h1 class="text-center">React Textarea with Editor</h1>
          {/* <!-- contact form --> */}
          <form>
            <Editor
              wrapperClassName="wrapper"
              editorClassName="editor"
              toolbarClassName="toolbar"
            />

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
