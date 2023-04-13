import './App.css';

function getInput(){
  let textVal = document.getElementById("editor").value,
      listNode = document.getElementById("list"),
      liNode = document.createElement("li"),
      txtNode = document.createTextNode(textVal);

      liNode.prepend(txtNode);
      listNode.prepend(liNode);
}

function App() {
  return (
  <div class="container-fluid">
  <div class="row">
    <div class="col text-center text-white bg-success">
     <h2>Insert your text here</h2> 
      </div>
    <div class="col text-center text-white bg-success">
          <h2>Added text</h2>
  </div>
  </div>
<div class="row">
   <div class="col-6 d-flex flex-column">
      <div class="form-group flex-grow-1 d-flex flex-column">
<textarea id="editor" class="form-control flex-grow-1"></textarea>
<button onClick={e=>getInput(e)}>Submit</button>
</div>
</div>
  <div class="col">
          <div  id="preview">
            <ul id="list">
            </ul>
      </div>
  </div>    

</div>
</div>
  );
}

export default App;
