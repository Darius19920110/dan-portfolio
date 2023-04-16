const ContactInfo = () => {
  return (
    <div className="content contacts">
      {/* title */}
      <div className="title">Get in Touch</div>
      {/* content */}
      <div className="row">
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="map">
            <iframe
              style={{ border: 0, width: "100%", height: "100%" }}
              loading="lazy"
              allowfullscreen
              src="https://www.google.com/maps/embed/v1/place?q=place_id:Eis0NyBCbGFja3dlbGwgRHIsIEJvZGljb3RlLCBCYW5idXJ5IE9YMTYsIFVLIjASLgoUChIJSYQ9Qccnd0gRoIyp2z9qypMQLyoUChIJ_4f3qLgnd0gRrK4R365MDAg&key=AIzaSyAgCHqBg_thgWa7Gb6ckDNhk9HRr3XZQs4"
            ></iframe>
          </div>

          <div className="row">
            <div className="col col-lg-6r text-center">
              <span>
                <strong>Address</strong>
              </span>
              <br />
              <span>47 Blackwell Drive</span>
              <br />
              <span>Bodicote</span>
              <br />
              <span>Banbury</span>
              <br />
              <span>OX16 9PF</span>
            </div>
            <div className="col col-lg-6r text-center">
              <span>
                <strong>Email</strong>
              </span>
              <br />
              <span>meszidani22@gmail.com</span>
              <br />
              <span>
                <strong>Mobile</strong>
              </span>
              <br />
              <span>+447565303499</span>
            </div>
          </div>
          <div className="row">
            <div className="col col-lg-6r text-center">
              <span>
                <strong>LinkedIn</strong>
              </span>
              <br />
              <span>
                <a
                  href="https://www.linkedin.com/in/dan-meszaros"
                  target="_blank"
                >
                  www.linkedin.com/in/dan-meszaros
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default ContactInfo;
