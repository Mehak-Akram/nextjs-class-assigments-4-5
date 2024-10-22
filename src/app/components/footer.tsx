import Link from "next/link"

let Footer = ()=>{
    return(
        <div>
    <footer>
      <div className="footer" id="footer">
        <ul className="link">
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
        <div className="blank-foot"><p className="text-heading">© 2024 Mehak Akram | All Rights Reserved.</p></div>
      </div> 
    </footer>
        </div>
    )
}

export default Footer