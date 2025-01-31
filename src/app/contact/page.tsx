// app/contact/page.js
export default function Contact() {
    return (
      <div>
        <h1>Contact Me</h1>
        <form name="contact" method="POST" data-netlify="true">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
