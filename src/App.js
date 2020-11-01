import "./App.css";

function App() {
  return (
    <div class="container">
      <div class="row">
        <div class="col align-self-center">
          <h1 class="text-center">React Textarea with Editor</h1>
          {/* <!-- contact form --> */}
          <form>
            <div class="form-group">
              <label for="email_body">Message</label>
              <textarea
                class="form-control"
                id="email_body"
                rows="5"
              ></textarea>
            </div>

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
