import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#241C37] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h5 className="text-lg font-semibold mb-4">About</h5>
            <p className="text-sm text-white">
              MoneyMe Pty Ltd (trading as Money) (ABN 42 626 094 773) Australian
              Credit Licence 528698 provides information about credit products.
              Money does not compare all products or issuers available in
              Australia. We are not a broker or credit provider and when we
              provide information via this website, we are not providing you
              with a recommendation or suggestion about a particular credit
              product. We may receive a commission when you apply for a home
              loan as a result of outbound links on this website.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Contact</h5>
            <ul className="space-y-5 text-sm text-white">
              <li>
                📞 Phone: (+61 7 3017 8899) <br />
                7am - 7pm, Monday to Friday
              </li>
              <li>✉️ Email: customercar@moneyme.com</li>
              <li>📍 Address: GPO Box 7001 Brisbane Qld 4001</li>
            </ul>
          </div>

          {/* More Links Section */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Our Services</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to={"/home-loans"}
                  className="text-white hover:text-red-500 transition"
                >
                  Home Loans
                </Link>
              </li>
              <li>
                <Link
                  to={"/personal-loans"}
                  className="text-white hover:text-red-500 transition"
                >
                  Personal Loans
                </Link>
              </li>
              <li>
                <Link
                  to={"/business-loans"}
                  className="text-white hover:text-red-500 transition"
                >
                  Business Loans
                </Link>
              </li>
              <li>
                <Link
                  to={"/education-loans"}
                  className="white hover:text-red-500 transition"
                >
                  Education Loans
                </Link>
              </li>
              <li>
                <Link
                  to={"/health-insurance"}
                  className="text-white hover:text-red-500 transition"
                >
                  Health Insurance
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="https://www.facebook.com"
                  className="flex items-center text-white hover:text-blue-500 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.icons8.com/?size=96&id=118497&format=png"
                    alt="Facebook"
                    width="20"
                    height="20"
                    className="mr-2"
                  />
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.instagram.com/singhaitelecomsagar?igsh=MTk1d3JuY2NzM3gyMQ=="
                  className="flex items-center text-white hover:text-pink-500 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.icons8.com/?size=96&id=Xy10Jcu1L2Su&format=png"
                    alt="Instagram"
                    width="20"
                    height="20"
                    className="mr-2"
                  />
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.twitter.com"
                  className="flex items-center text-white hover:text-sky-400 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png"
                    alt="Twitter"
                    width="20"
                    height="20"
                    className="mr-2"
                  />
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  to="https://wa.me/7905786808"
                  className="flex items-center text-white hover:text-green-300 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.icons8.com/?size=96&id=16713&format=png"
                    alt="WhatsApp"
                    width="20"
                    height="20"
                    className="mr-2"
                  />
                  WhatsApp (Chat Now)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#241C37] text-center py-4 text-sm text-white">
        &copy; {new Date().getFullYear()} Target Market Determinations for our
        products available here. © 2025 copyright of MoneyMe Pty Ltd ACN 082 587
        095 Australian Credit Licence 395219
      </div>
    </footer>
  );
}

export default Footer;
