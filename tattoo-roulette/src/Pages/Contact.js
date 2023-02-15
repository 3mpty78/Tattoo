import React from "react";

const Contact = () => {
  function Submit() {
    const handleSumbit = (e) => {
      e.preventDefault();
    };
  }
  return (
    <>
      <div>
        <form action="submit">
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Votre mesage"
          ></textarea>
          <button onClick={handleSubmit}>Envoyer</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
