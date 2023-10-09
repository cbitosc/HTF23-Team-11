
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

const Ordered = () => {
    // console.log({name});
    return (
      <div
        className="modal show"
        style={{ display: 'block', position: 'initial', padding:'20px' }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Your Food is ready to pickup</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
            <h2 style={{color:'grenn'}}>Bring home the bacon or "baCAN"</h2>
          </Modal.Body>
  
          <Modal.Footer>
            <Link to="/dashboard/food"><Button variant="secondary">Close</Button></Link>
            <Link to="/"><Button variant="secondary">Done</Button></Link>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
  export default Ordered;