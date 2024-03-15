import { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useUpdateCar, usePostCar } from "../services/mutation";

interface IForm {
  id: string;
  car_name: string;
  day_rate: number;
  month_rate: number;
  image: string;
}

interface IModalEdit {
  isOpen: boolean;
  onClose: () => void;
  data: IForm;
}

const ModalEdit: React.FC<IModalEdit> = ({ isOpen, onClose, data }) => {
  const [form, setForm] = useState({
    car_name: "",
    day_rate: 0,
    month_rate: 0,
    image: "",
  });

  const { mutate } = useUpdateCar(data.id ?? "");

  useEffect(() => {
    if (data) {
      setForm(data);
    }
  }, [data]);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    mutate(form, {
      onSuccess: (data) => {
        onClose();
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Car</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Car Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter car name"
              name="car_name"
              value={form.car_name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Day Rate</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter day rate"
              name="day_rate"
              value={form.day_rate}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Month Rate</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter month rate"
              name="month_rate"
              value={form.month_rate}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter image url"
              name="image"
              value={form.image}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalEdit;
