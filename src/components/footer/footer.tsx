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
        </div>

       


        <div className="col install">
          
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
