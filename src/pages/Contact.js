import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> お問い合わせ</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">指名</label>
          <input name="name" placeholder="指名を入力..." type="text" />
          <label htmlFor="email">メールアドレス</label>
          <input name="email" placeholder="メールアドレスを入力..." type="email" />
          <label htmlFor="message">お問い合わせ内容</label>
          <textarea
            rows="6"
            placeholder="お問い合わせ内容を入力..."
            name="message"
            required
          ></textarea>
          <button type="submit"> 送信</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
