  import "./home.css";
  import Editor from "../editor/Editor";
  import Output from "../output/Output";
  function Home(){
    return(
        <main className="home siteMain">
            <h2 className="home__header siteHeader">Interpreter</h2>
            <section className="home__editorWrap">
                <Editor/>
                <Output/>
            </section>
        </main>
    )
  }

  export default Home;