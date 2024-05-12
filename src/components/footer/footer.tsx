export default function Footer() {
  return (
    <>
      <footer>
        <div className="col">
          <h1> EStore </h1>
          <h4>Contact</h4>
          <p><strong>Address:</strong> 562 Wellington Road, Street 32, San Francisco</p>
          <p><strong>Phone:</strong> +01 2222 365/(+91) 01 2345 6789</p>
          <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
          <div className="follow">
            <h4>Follow Us</h4>
            <div className="icon">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-pinterest-p"></i>
              <i className="fab fa-youtube"></i>

            </div>
          </div>
        </div>

        <div className="col">
          <h4>About</h4>
          <a href="#">About us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact us</a>

        </div>

        <div className="col">
          <h4>About</h4>
          <a href="#">Account</a>
          <a href="#">Sign In</a>
          <a href="#">View Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track My Order</a>
          <a href="#">Help</a>
        </div>

        <div className="col install">
          <h4>Install App</h4>
          <p>From App store or Google play</p>
          <div className="row">
            <img src="img/pay/app.jpg" alt="" />
            <img src="img/pay/play.jpg" alt="" />
          </div>
          <p>Secured Payment Gateways </p>
          <img src="img/pay/pay.png" alt="" />
        </div>

        <div className="copyright">
          <p>© 2023, Tech2 etc - HTML CSS Ecommerce Template</p>
        </div>
      </footer>
    </>
  )
}
