import React from "react";
import DropDownWithCheckList from "../../components/DropDownWithCheckList";

const ServiceAreas = () => {
  let arr1 = [
    {
      title: "Annandale",
    },
    {
      title: "Baileys Crossroads",
    },
    {
      title: "Burke",
    },
    {
      title: "Centreville",
    },
    {
      title: "Chantilly",
    },
    {
      title: "Clifton",
    },
    {
      title: "Dunn Loring",
    },
    {
      title: "Fair Oaks",
    },
    {
      title: "Fairfax",
    },
    {
      title: "Fairfax Station",
    },
    {
      title: "Fort Hunt",
    },
    {
      title: "Franconia",
    },
    {
      title: "Great Falls",
    },
  ];
  let arr2 = [
    {
      title: "Groveton",
    },
    {
      title: "Hayfield",
    },
    {
      title: "Hybla Valley",
    },
    {
      title: "Kings Park",
    },
    {
      title: "Lake Barcroft",
    },
    {
      title: "Lincolnia",
    },
    {
      title: "Lorton",
    },
    {
      title: "Mantua",
    },
    {
      title: "McLean",
    },
    {
      title: "Merrifield",
    },
    {
      title: "Mount Vernon",
    },
    {
      title: "Newington",
    },
  ];
  let arr3 = [
    {
      title: "North Springfield"
    },
    {
      title: "Oakton"
    },
    {
      title: "Pimmit Hills"
    },
    {
      title: "Reston"
    },
    {
      title: "Rose Hill"
    },
    {
      title: "Seven Corners"
    },
    {
      title: "Springfield"
    },
    {
      title: "Tysons Corner"
    },
    {
      title: "Vienna"
    },
    {
      title: "West Springfield"
    },
    {
      title: "Woodlawn"
    },
  ]

let nArr1 =
[
  {title: "Bealeton"},
  {title:"Calverton"},
  {title:"Catlett"},
  {title:"Marshall"},
  {title:"Midland"}
]

let nArr2 =
[
  {title:" New Baltimore"},
  {title: "Opal"},
  {title:"Remington"},
  {title:"The Plains"},
  {title:"Warrenton"}
]


let n3Arr1 =[
  [
    {title:" Ashburn"},
    {title: "Belmont"},
    {title:"Brambleton"},
    {title:"Broadlands"},
    {title:"Countryside"},
    {title:"Dulles"},
    {title:"Hamilton"},
    {title:"Hillsboro"},
    {title:"Leesburg"}
]
] 

  return (
    <>
      <section>
        <div className="py-[3rem] sm:py-[3rem] px-4 sm:px-10 md:px-0 bg-primary">
          <h1 className="font-bold text-white text-3xl sm:text-4xl md:text-5xl raleway text-center">
            SERVICE AREAS
          </h1>
        </div>
      </section>
      <section className="px-4">
        <DropDownWithCheckList padding={'py-16'} subtitle={'Fairfax County:'} title={'Service Areas in Virginia'} arr1={arr1} arr2={arr2} arr3={arr3}/>
      </section>
    </>
  );
};

export default ServiceAreas;
