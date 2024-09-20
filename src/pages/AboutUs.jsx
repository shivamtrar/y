import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const AboutUs = () => {
  return (
    <>
      <Nav/>
      <div>
      <section className="sl-main-section">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-xl-6">
        <div className="sl-sectionHead" style={{ textAlign: "left" }}>
          <h2 style={{ paddingTop: "2%" }}>Who we are?</h2>
          <p>
            <br />
            Geek Care is a comprehensive tech and appliance repair service
            provider that caters to a wide range of electronic devices and
            appliances. Specializing in services for Computers &amp; Tablets,
            Mobile Devices, Printers, WiFi &amp; Networking, TV &amp; Home
            Theater, Video Games &amp; Entertainment, Cameras &amp; Camcorders,
            Smart Home, Home Security, Drones, Audio &amp; Video, TV Mounting,
            Major Appliances, Small Appliances, and more, Geek Care aims to
            address the diverse repair service needs of its customers.
          </p>
          <p>
            <br />
            One notable feature of Geek Care is their commitment to prompt and
            efficient service. Customers can conveniently book appointments for
            repairs, installations, troubleshooting, or device pickups. The
            company's experts are equipped with the knowledge and skills to
            swiftly diagnose and address a wide array of tech-related issues,
            ensuring that customers can get back to using their devices without
            unnecessary delays.
          </p>
        </div>
      </div>
      <div className="col-lg-6 col-xl-6">
        <img src="../assets/about-us-banner-sq.webp" alt="" />
      </div>
      <div className="col-lg-12 col-xl-12">
        <div className="sl-sectionHead" style={{ textAlign: "left" }}>
          <p>
            <br />
            Geek Care also emphasizes the importance of keeping customers
            connected. In addition to repair services, they offer protection
            plans to safeguard devices from potential damage. Whether it's a
            cracked screen on a mobile device, a malfunctioning appliance, or a
            networking issue, Geek Care strives to provide comprehensive
            solutions that cover the entire spectrum of tech and appliances
            care.
          </p>
          <p>
            <br />
            With a broad range of services covering various tech and appliance
            categories, Geek Care positions itself as a one-stop solution for
            individuals seeking reliable and expert assistance with their
            electronic devices and appliances. Whether it's enhancing the
            performance of a computer, fixing a smartphone glitch, setting up a
            home theater system, or addressing issues with smart home devices,
            Geek Care is dedicated to making technology accessible and
            functional for all.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      </div>
      <Footer/>
    </>
  )
}

export default AboutUs
