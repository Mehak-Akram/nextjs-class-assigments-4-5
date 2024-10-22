
let Contact = () => {
    return (
      <div>
        <div className="contact-section" id="contact-us">
                <h1>Contact Us</h1>
            <div className="contact-right">
              <form>
                <input type="text" name="Name" placeholder="Your Name" required />
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
                <br />
                <textarea name="message" placeholder="Your Message"></textarea>
                <br />
                <button type="submit" className="action_btn3">
                  Submit
                </button>
              </form>
            </div>
          </div>
      </div>
  
    );
  };
  
  export default Contact;
  