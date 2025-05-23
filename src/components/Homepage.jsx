import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

function HomePage() {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <>
      <Container
        className="fluid mt-5 text-center p-4 rounded shadow-lg"
        style={{
          border: "2px solid black",
          backgroundColor: "#8CDBFF",
          maxWidth: "300px",
        }}
      >
        <h1>Trova la tua città</h1>
        <p>Città</p>

        <Form onSubmit={handleSubmit} className="d-flex justify-content-center flex-column align-items-center  ">
          <Form.Group className="mb-3 w-50">
            <Form.Control type="text" placeholder="Inserisci città" value={city} onChange={handleChange} />
          </Form.Group>
          <Button variant="dark" type="submit" className="ms-2">
            Cerca Città
          </Button>
        </Form>
      </Container>
    </>
  );
}
export default HomePage;
