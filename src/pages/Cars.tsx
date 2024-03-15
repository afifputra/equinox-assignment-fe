import Layouts from "../layouts";
import { Alert } from "react-bootstrap";
import TableComponent from "../components/Table";
import { useGetCars } from "../services/query";

const Cars: React.FC = () => {
  const { data, isLoading, isError, error, refetch } = useGetCars();

  if (isLoading) {
    return (
      <Layouts>
        <div>Loading...</div>
      </Layouts>
    );
  }

  return (
    <Layouts>
      {isError && <Alert variant="danger">{error.message}</Alert>}
      <TableComponent data={data.data} refetch={refetch} />
    </Layouts>
  );
};

export default Cars;
