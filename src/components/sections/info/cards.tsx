import CardTemplate from "./card-template.tsx";

const data = [
  {
    id: 1,
    name: "K***** D*****",
    location: {
      province: "Golbasi",
      city: "Ankara",
    },
    personal: {
      gender: "Kadın",
      age: 31,
    },
    employmentStatus: "Calismiyor",

    education: {
      school: "Bala Anadolu Imam Hatip Lisesi",
      type: "Imam Hatip (Lise)",
    },
  },
  {
    id: 2,
    name: "K***** D*****",
    location: {
      province: "Golbasi",
      city: "Ankara",
    },
    personal: {
      gender: "Kadın",
      age: 31,
    },
    employmentStatus: "Calismiyor",

    education: {
      school: "Bala Anadolu Imam Hatip Lisesi",
      type: "Imam Hatip (Lise)",
    },
    lastJob: {
      title: "Sarkuteri Gorevlisi",
      company: "Gonenli Peynircim",
      begin: "Ocak 2019",
      end: "Subat 2020",
    },
  },
];

const Cards = () => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <CardTemplate item={item} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
