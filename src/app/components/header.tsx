import Link from "next/link";

let Header = () => {
  return (
    <div>
      <header>
        <div className="navbar">
          <div className="logo">
            <a href="#">
              MY <span className="green">BLOGS</span>
            </a>
          </div>
          <ul className="links">
            <Link href="./">
              <li>Home</li>
            </Link>
            <Link href="./">
              <li>Blogs</li>
            </Link>
            <Link href="contact-us">
                <li>Contact-Us</li>
              </Link>
          </ul>
          <a href="#footer" className="action_btn">
            know more
          </a>
        </div>
      </header>
      <hr />
    </div>
  );
};

export default Header;
