import "./contacts.css";

function Contacts() {
  return (
    <main className="contacts siteMain">
      <h2 className="contacts__header siteHeader">Contacts</h2>
      <div className="contacts__wrapper">
        <h3 className="contacts__name">email</h3>
        <a className="contacts__mail" href="mailto: alexey.s.antonov@zoho.com">
          alexey.s.antonov@zoho.com
        </a>
        <h3 className="contacts__name">github</h3>
        <a
          className="contacts__github"
          href="https://github.com/french-fries-with-pepper"
        >
          french-fries-with-pepper
        </a>
      </div>
    </main>
  );
}

export default Contacts;
