import { Container, Col, Row } from 'react-bootstrap'

function Footer() {
  return (
    <footer>
      <Container 
        fluid 
        className="py-2 px-5"
        style={{
          backgroundColor: "#131A22"
        }}
      >
        <Row className="text-secondary py-4 fs-6">
          <Col className="lh-1 pb-3" md={3} sm={12}>
            <p className="text-white pb-2">Get to Know Us</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>About Amazon</p>
            <p>Amazon Devices</p>
          </Col>
          <Col md={3} sm={12} className="lh-1 pb-3">
            <p className="text-white pb-2">Make Money with Us</p>
            <p>Sell products on Amazon</p>
            <p>Sell on Amazon Business</p>
            <p>Sell apps on Amazon</p>
            <p>Become an Affiliate</p>
            <p>Advertise Your Products</p>
            <p>Self-Publish with Us</p>
            <p>Host an Amazon Hub</p>
          </Col>
          <Col md={3} sm={12} className="lh-1 pb-3">
            <p className="text-white pb-2">Amazon Pay Products</p>
            <p>Amazon Business Card</p>
            <p>Shop with Points</p>
            <p>Reload Your Balance</p>
            <p>Amazon Currency</p>
          </Col>
          <Col md={3} sm={12} className="lh-1 pb-3">
            <p className="text-white pb-2">Let Us Help You</p>
            <p>Amazon and COVID-19</p>
            <p>Your Account</p>
            <p>Your Orders</p>
            <p>Shipping Rates & Policies</p>
            <p>Returns & Replacements</p>
            <p>Manage Your Content</p>
            <p>Amazon Assistant</p>
            <p>Help</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer