import data from "../../../../data/applicants";
import CardTemplate from "./card-template.tsx";

const Cards = () => {
  return (
    <div>
      {data.map((item: any) => (
        <div key={item.id}>
          <CardTemplate item={item} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
