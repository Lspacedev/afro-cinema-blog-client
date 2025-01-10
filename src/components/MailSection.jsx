import { useState } from "react";

function MailSection() {
  return (
    <div className="MailSection">
      <div className="subsciption-container">
        <div className="subs">Subscribe to our mailing list!</div>
        <div>
          <form>
            <input
              className="email"
              type="email"
              placeholder="example@email.com"
            />
            <input id="submit" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default MailSection;
