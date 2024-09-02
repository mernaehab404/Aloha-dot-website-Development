import terms from "assets/Terms & Conditions (Aloha Dot)-1.pdf";
export default function TermsConditions() {
  return (
    <div>
      <div className="w-full h-screen">
        <iframe
          src={terms} // Update with the correct path to your PDF
          width="100%"
          height="100%"
          className="border-0"
          title="Terms and Conditions"
        />
      </div>
    </div>
  );
}
