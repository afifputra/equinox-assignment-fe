import Table from "react-bootstrap/Table";
import { createPortal } from "react-dom";
import ModalEdit from "./ModalEdit";
import { useState } from "react";

interface TableProps {
  data: any;
  refecth: () => void;
}

const modalElement = document.getElementById("modal-root");

const TableComponent: React.FC<TableProps> = ({ data, refecth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [editData, setEditData] = useState<any>({});

  const handleShowModal = (item: any, type: string) => {
    setIsOpen(true);
    if (type === "edit") {
      setEditData(item);
    } else {
      setEditData({});
    }
  };

  const handleDelete = (id: number) => {
    console.log(id);
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Car Name</th>
          <th>Day Rate</th>
          <th>Month Rate</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: any, index: number) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.car_name}</td>
            <td>{item.day_rate}</td>
            <td>{item.month_rate}</td>
            <td>
              <img src={item.image} alt={item.name} width="100" />
            </td>
            <td>
              <button
                className="btn btn-primary"
                onClick={handleShowModal.bind(null, item, "edit")}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={handleDelete.bind(null, item.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>

      {modalElement &&
        createPortal(
          <ModalEdit
            isOpen={isOpen}
            onClose={() => {
              setIsOpen(false);
              refecth();
            }}
            data={editData}
          />,
          modalElement
        )}
    </Table>
  );
};

export default TableComponent;
