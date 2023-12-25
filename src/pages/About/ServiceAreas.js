import React, { useState } from "react";
import DropDownWithCheckList from "../../components/DropDownWithCheckList";
import { RiArrowDownSFill } from "react-icons/ri";
import BarAppointment from "../../components/BarAppointment";
import OurClients from "../../components/OurClients";

const ServiceAreas = () => {
  const [open, setOpen] = useState(false);
  const [openMaryland, setOpenMaryland] = useState(false);

    function toggleDropdown() {
        setOpen(!open);
    }

    function needToOpenMaryland() {
      setOpenMaryland(!openMaryland);
    }

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
let n3Arr2 = [
  
    {title:"Lovettsville"},
    {title:"Lowes Island"},
    {title:"Middleburg"},
    {title:"Purcellville"},
    {title:"Round Hill"},
    {title:"South Riding"},
    {title:"Sterling"},
    {title:"Sugarland Run"}
]

let n4Arr1 = [
    {title:"Bull Run"},
    {title:"Bull Run Mountain Estates"},
    {title:"Dale City"},
    {title:"Dumfries"},
    {title:"Gainesville"},
    {title:"Haymarket"},
    {title:"Independent Hill"},
    {title:"Lake Ridge"},
    {title:"Linton Hall"},
    {title:"Manassas"}
]
let n4Arr2 = [
  
    {title:"Manassas Park"},
    {title:"Montclair"},
    {title:"Nokesville"},
    {title:"Occoquan"},
    {title:"Potomac Mills"},
    {title:"Quantico"},
    {title:"Sudley"},
    {title:"West Gate"},
    {title:"Woodbridge"}

]

let n5Arr1 = [
  {
      "title": " Aspen Hill"
  },
  {
      "title": "Barnesville"
  },
  {
      "title": "Bethesda"
  },
  {
      "title": "Brookeville"
  },
  {
      "title": "Burtonsville"
  },
  {
      "title": "Cabin John"
  },
  {
      "title": "Chevy Chase"
  },
  {
      "title": "Clarksburg"
  },
  {
      "title": "Colesville"
  },
  {
      "title": "Damascus"
  },
  {
      "title": "Darnestown"
  },
  {
      "title": "Derwood"
  },
  {
      "title": " Forest Glen"
  },
  {
      "title": " Friendship Heights"
  },
  {
      "title": " Friendship Village"
  },
  {
      "title": " Gaithersburg"
  }
]


let n5Arr2 = [
  {
      "title": " Garrett Park"
  },
  {
      "title": " Germantown"
  },
  {
      "title": " Glen Echo"
  },
  {
      "title": " Glenmont"
  },
  {
      "title": " Hillandale"
  },
  {
      "title": " Kemp Mill"
  },
  {
      "title": " Kensington"
  },
  {
      "title": " Layhill"
  },
  {
      "title": " Laytonsville"
  },
  {
      "title": " Montgomery Village"
  },
  {
      "title": " North Bethesda"
  },
  {
      "title": " North Chevy Chase"
  },
  {
      "title": " North Kensington"
  },
  {
      "title": " North Potomac"
  },
  {
      "title": " Olney"
  },
  {
      "title": " Poolesville"
  }
]

let n5Arr3 = [
  {
      "title": " Potomac"
  },
  {
      "title": " Potomac Woods"
  },
  {
      "title": " Redland"
  },
  {
      "title": " Rockville"
  },
  {
      "title": " Rollins Park"
  },
  {
      "title": " Rossmoor"
  },
  {
      "title": " Sandy Springs"
  },
  {
      "title": " Silver Spring"
  },
  {
      "title": " Somerset"
  },
  {
      "title": " South Kensington"
  },
  {
      "title": " Takoma Park"
  },
  {
      "title": " Travilah"
  },
  {
      "title": " Westmore"
  },
  {
      "title": " Wheaton"
  },
  {
      "title": " White Oak"
  },
  {
      "title": " Woodley Gardens"
  }
]

let n6Arr1 = [
  {
      "title": " Accokeek"
  },
  {
      "title": " Adelphi"
  },
  {
      "title": " Beltsville"
  },
  {
      "title": " Berwyn Heights"
  },
  {
      "title": " Bladensburg"
  },
  {
      "title": " Brandywine"
  },
  {
      "title": " Brentwood"
  },
  {
      "title": " Calverton"
  },
  {
      "title": " Clinton"
  },
  {
      "title": " College Park"
  },
  {
      "title": " Forestville"
  }
]

let n6Arr2 = [
  {
      "title": " Glenarden"
  },
  {
      "title": " Glenn Dale"
  },
  {
      "title": " Greenbelt"
  },
  {
      "title": " Hillcrest Heights"
  },
  {
      "title": " Hyattsville"
  },
  {
      "title": " Landover"
  },
  {
      "title": " Largo"
  },
  {
      "title": " Laurel"
  },
  {
      "title": " Marlow Heights"
  },
  {
      "title": " Mitchellville"
  },
  {
      "title": " Mount Rainier"
  },
  {
      "title": " New Carrollton"
  }
]

let n6Arr3 =[
  {
      "title": " Oxon Hill"
  },
  {
      "title": " Queenstown"
  },
  {
      "title": " Seabrook"
  },
  {
      "title": " Seat Pleasant"
  },
  {
      "title": " Springdale"
  },
  {
      "title": " Suitland"
  },
  {
      "title": " Temple Hills"
  },
  {
      "title": " Upper Marlboro"
  },
  {
      "title": " Woodlawn"
  },
  {
      "title": " Woodmore"
  }
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
   
      <section className="px-4 py-12">
        <article>
        <button
          className={`flex w-full ${open ? '' : 'border-b'} pb-3 text-3xl gap-4 justify-center text-secondary items-center`}
          type="button"
          aria-haspopup="menu"
          onClick={toggleDropdown}
        >
          <span className="font-bold">Service Areas in Virginia{""}</span>
          <RiArrowDownSFill className={`${open ? 'rotate-180' : 'rotate-0'} transition-transform`} />
        </button>
        </article>
        <DropDownWithCheckList padding={'py-16'} subtitle={'Fairfax County:'} arr1={arr1} arr2={arr2} arr3={arr3} open={open}/>
        <DropDownWithCheckList padding={'py-16'} subtitle={'Fauqier County:'} arr1={nArr1} arr2={nArr2} open={open} />
        <DropDownWithCheckList padding={'py-16'} subtitle={'Loudoun County:'} arr1={n3Arr1} arr2={n3Arr2} open={open} />
        <DropDownWithCheckList padding={'py-16'} subtitle={'Prince William County:'} arr1={n4Arr1} arr2={n4Arr2} open={open} />
      </section>
      
   
      <section className="px-4 py-12">
        <article>
        <button
          className={`flex w-full ${openMaryland ? '' : 'border-b'} pb-3 text-3xl gap-4 justify-center text-secondary items-center`}
          type="button"
          aria-haspopup="menu"
          onClick={needToOpenMaryland}
        >
          <span className="font-bold">Service Areas in Maryland{""}</span>
          <RiArrowDownSFill className={`${openMaryland ? 'rotate-180' : 'rotate-0'} transition-transform`}/>
        </button>
        </article>
        <DropDownWithCheckList padding={'py-16'} subtitle={'Montgomery County:'} arr1={n5Arr1} arr2={n5Arr2} arr3={n5Arr3} open={openMaryland} />
        <DropDownWithCheckList padding={'py-16'} subtitle={`Prince George's County:`} arr1={n6Arr1} arr2={n6Arr2} arr3={n6Arr3} open={openMaryland} />
      </section>
   
      <section>
        <img src="/assets/map-still-1.webp" className="w-full" alt="map" />
      </section>
      <BarAppointment 
      background={'bg-[#fff]'}
      content={'Atlantic Duct Cleaning provides duct cleaning, Aeroseal air duct sealing, dryer vent cleaning, and commercial kitchen exhaust cleaning to residential and commercial customers located in Northern Virginia & Maryland.      '}
      content2={`If your location is not listed, please call us at <a class="underline font-semibold text-[#81a7ce] hover:text-secondary">(703) 435-4485</a> and one of our representatives will determine if we service your area.      `}
      padding={'py-10'}
     margin={'mb-2'}
     />

     <OurClients background={'bg-neutral200'}/>
    </>
  );
};

export default ServiceAreas;
