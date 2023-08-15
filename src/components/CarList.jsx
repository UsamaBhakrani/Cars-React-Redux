import { useSelector } from "react-redux";

const CarList = () => {
  const cars = useSelector((state) => {
    return state.cars.data;
  });
  console.log(cars);

  return (
    <div>
      {cars.map((car) => (
        <li key={car.id}>
          {car.name}
          {car.cost}
        </li>
      ))}
    </div>
  );
};

export default CarList;
