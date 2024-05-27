import './footer.scss'

export default function Footer() {
  return (
    <>
      <footer className="flex justify-between flex-wrap px-[80px]">
        <div className="flex flex-col items-start">
          <h1 className='font-[700]'> EStore </h1>
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


        <div className="col install">
          <h4>Install App</h4>
          <p>From App store or Google play</p>
          <div className="row">
            <img src="/img/pay/app.jpg" alt="" />
            <img src="/img/pay/play.jpg" alt="" />
          </div>
          <p>Secured Payment Gateways </p>
          <img src="/img/pay/pay.png" alt="" />
        </div>

        <div className="copyright">
          <p>© 2024, Sandip Shakya - EStore</p>
        </div>
      </footer>
    </>
  )
}
