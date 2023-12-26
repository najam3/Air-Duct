import React from 'react'
import SecondaryBanner from '../../components/SecondaryBanner'
import DropDownWithCheckList from '../../components/DropDownWithCheckList'
import OurClients from '../../components/OurClients'


let arr1 = [
    {
        "title": "National Naval Medical Center (Bethesda)"
    },
    {
        "title": "Alexandria Hospital Center"
    },
    {
        "title": "Maryland General Hospital (Baltimore)"
    },
    {
        "title": "Sacred Heart Hospital"
    },
    {
        "title": "Washington County Hospital (Hagerstown)"
    },
    {
        "title": "Walter Reed Army Medical Center"
    },
    {
        "title": "INOVA Commonwealth Care Center"
    },
    {
        "title": "Falls Church Medical Center"
    },
    {
        "title": "INOVA Fairfax Hospital"
    }
]

let arr2 = [
    {
        "title": "Marriott Hotels and Resorts"
    },
    {
        "title": "Comfort Inn"
    },
    {
        "title": "Pheonix Park Hotel"
    },
    {
        "title": "Holiday Inns and Suites"
    },
    {
        "title": "The Mansion on O Street Hotel"
    },
    {
        "title": "Carrodoc Hall (Leesburg, VA)"
    },
    {
        "title": "Red Fox Inn (Middleburg, VA)"
    }
]
let arr3 = [
    {
        "title": "Fort Belvoir (Defense CEETA)"
    },
    {
        "title": "Army Research Laboratory"
    },
    {
        "title": "National Defense University (Fort McNair)"
    },
    {
        "title": "Fort Myer (Arlington)"
    },
    {
        "title": "National Naval Medical Center (Bethesda)"
    },
    {
        "title": "Walter Reed Army Medical Center"
    },
    {
        "title": "The Pentagon"
    },
    {
        "title": "National Museum of the Marine Corps"
    },
    {
        "title": "Naval Research Laboratory"
    },
    {
        "title": "Patuxent Naval Air Station"
    }
]
let arr4 = [
    {
        "title": "Outback Steakhouse"
    },
    {
        "title": "Le Auberge Chez Francois"
    },
    {
        "title": "The Monocle (Capital Hill)"
    },
    {
        "title": "TGIF (Fridays)"
    },
    {
        "title": "Peking Gourmet Inn"
    },
    {
        "title": "Red Lobster"
    },
    {
        "title": "Olive Garden"
    },
    {
        "title": "Nick’s Restaurant"
    },
    {
        "title": "Olney Grill"
    },
    {
        "title": "Blue Ridge Grill"
    },
    {
        "title": "Jerry’s Subs and Pizza"
    },
    {
        "title": "Chadwick’s Old Town Alexandria"
    }
]
let arr5 =[
    {
        "title": "George Washington University"
    },
    {
        "title": "Saint Theresa School"
    },
    {
        "title": "American University"
    },
    {
        "title": "Loudoun County Public Schools"
    },
    {
        "title": "City of Fairfax Schools"
    },
    {
        "title": "Virginia Commonwealth University"
    },
    {
        "title": "Georgetown University"
    },
    {
        "title": "Alexandria City Public Schools"
    },
    {
        "title": "University of Maryland"
    },
    {
        "title": "George Mason University"
    },
    {
        "title": "Howard University"
    }
]
let arr6 = [
    {
        "title": "The Home Depot"
    },
    {
        "title": "Bed, Bath, and Beyond"
    },
    {
        "title": "TJ Maxx"
    },
    {
        "title": "Marshalls"
    },
    {
        "title": "Wal-Mart"
    },
    {
        "title": "K-Mart"
    },
    {
        "title": "Anthropologie"
    },
    {
        "title": "Select Comfort Sleep Center"
    },
    {
        "title": "Lady Foot Locker"
    },
    {
        "title": "B Dalton Booksellers"
    },
    {
        "title": "Williams-Sonoma"
    },
    {
        "title": "Sprint/Nextel"
    }
]
let arr7 = 
    [
        {
            "title": "Department of Energy Forrestal Building"
        },
        {
            "title": "General Services Administration Headquarters"
        },
        {
            "title": "Department of Interior"
        },
        {
            "title": "US State Department"
        },
        {
            "title": "Bureau of Engraving and Printing"
        },
        {
            "title": "Central Intelligence Agency"
        },
        {
            "title": "Department of Defense"
        },
        {
            "title": "United States Postal Service"
        },
        {
            "title": "City of Fairfax"
        }
    ]
let arr8 = [
    {
        "title": "Branch Bank and Trust (BB&T)"
    },
    {
        "title": "United Bank"
    },
    {
        "title": "Andrews Federal Credit Union (Andrews AFB)"
    },
    {
        "title": "Northwest Federal Credit Union"
    },
    {
        "title": "Bank of America"
    },
    {
        "title": "Narfe Premiere Federal Credit Union"
    },
    {
        "title": "Navy Federal Credit Union"
    },
    {
        "title": "Pentagon Federal Credit Union (Bowling AFB)"
    },
    {
        "title": "Main Street Bank"
    }
]
let arr9 =[
    {
        "title": "Virginia Theological Seminary"
    },
    {
        "title": "Providence Baptist Church"
    },
    {
        "title": "Church of the Latter Day Saints"
    },
    {
        "title": "Woodside Synagogue"
    },
    {
        "title": "Mormon Temple Visitors Center (MD)"
    },
    {
        "title": "Columbia Baptist Church"
    },
    {
        "title": "Saint Mark’s Catholic Church"
    },
    {
        "title": "Congregation Beth Emeth"
    },
    {
        "title": "Unitarian Universalists (Arlington)"
    },
    {
        "title": "Herndon United Methodist Church"
    },
    {
        "title": "United Christian Parish"
    },
    {
        "title": "Holy Trinity Church"
    },
    {
        "title": "Reston Bible Church"
    },
    {
        "title": "Engleside Baptist Church"
    },
    {
        "title": "Truro Episcopalian Church"
    }
]
let arr10 = [
    {
        "title": "Tischer BMW"
    },
    {
        "title": "Tyson’s Jeep Eagle"
    },
    {
        "title": "Rosenthal Jaguar"
    },
    {
        "title": "Chevy Chase Buick"
    },
    {
        "title": "Fairfax Motors"
    },
    {
        "title": "Star Pontiac"
    },
    {
        "title": "American Service Center"
    },
    {
        "title": "Alexandria Toyota"
    },
    {
        "title": "L&H Motors Mercedes"
    }
]
const ClientList = () => {
  return (
    <>
        <SecondaryBanner title={'CLIENT LIST'} 
        subtitle={'Indoor Environmental Solutions'}
        content={`Atlantic Duct Cleaning is proud to provide residential and commercial air duct cleaning services in Northern Virginia & Maryland. We offer <a class="underline hover:text-secondary text-[#81a7ce]" href="/pageNotFound" >dryer vent cleaning</a>, <a class="underline hover:text-secondary text-[#81a7ce]" href="/pageNotFound" >Aeroseal duct sealing</a>, or <a class="underline hover:text-secondary text-[#81a7ce]" href="/pageNotFound" >kitchen exhaust cleaning</a> services. We are committed to keeping your family or employees safe and healthy with our comprehensive indoor environmental solutions.`}
        secondContent={'We have been in business since 1995 and have delivered over 160,000 successful projects. We are NADCA-Certified and are proud to employ the best HVAC technicians in the business. We prioritize safe, responsible work environments and deeply value our customers’ satisfaction. We are proud to have an extensive list of clients that includes some of the nation’s landmark institutions.'}
        img={'/assets/Commercial-Truck-Pic.jpg'}
        paraB={'mb-6'}
        bg={'bg-neutral200'}
        />

        <section className='px-4 py-12'>
                <span className="text-4xl font-bold  text-secondary mb-6">
                            Some clients we have serviced include:
                </span>     
                <article className='flex flex-col md:flex-row mt-6'>
                        <DropDownWithCheckList 
                        arr1={arr1}
                        subtitle={'Medical/Healthcare Facilities'}
                        open={true}
                        px={'px-0'}
                        countyWidth={'md:w-full'}
                        gap={'me-8'}
                        />
                        <DropDownWithCheckList 
                        arr1={arr2}
                        subtitle={'Hotels'}
                        open={true}
                        px={'px-0'}
                        countyWidth={'md:w-full'}
                        />
                </article>
                <article className='flex flex-col md:flex-row mt-6'>
                        <DropDownWithCheckList 
                        arr1={arr3}
                        subtitle={'Military Bases/Installations'}
                        open={true}
                        px={'px-0'}
                        countyWidth={'md:w-full'}
                        gap={'me-8'}
                        />
                        <DropDownWithCheckList 
                        arr1={arr4}
                        subtitle={'Restaurants'}
                        open={true}
                        px={'px-0'}
                        countyWidth={'md:w-full'}
                        />
                </article>
                <article className='flex flex-col md:flex-row mt-6'>
                        <DropDownWithCheckList 
                        arr1={arr5}
                        subtitle={'Schools/Universities'}
                        open={true}
                        px={'px-0'}
                        countyWidth={'md:w-full'}
                        gap={'me-8'}
                        />
                        <DropDownWithCheckList 
                        arr1={arr6}
                        subtitle={'Retail Stores/Shops'}
                        open={true}
                        px={'px-0'}
                        countyWidth={'md:w-full'}
                        />
                </article>
                <article className='flex flex-col md:flex-row mt-6'>
                        <DropDownWithCheckList 
                        arr1={arr7}
                        subtitle={'Government'}
                        open={true}
                        px={'px-0'}
                        countyWidth={'md:w-full'}
                        gap={'me-8'}
                        />
                        <DropDownWithCheckList 
                        arr1={arr8}
                        subtitle={'Banks/Financial Institutions'}
                        open={true}
                        px={'px-0'}
                        countyWidth={'md:w-full'}
                        />
                </article>
                <article className='flex flex-col md:flex-row mt-6'>
                        <DropDownWithCheckList 
                        arr1={arr9}
                        subtitle={'Churches/Places of Worship'}
                        open={true}
                        px={'px-0'}
                        countyWidth={'md:w-full'}
                        gap={'me-8'}
                        />
                        <DropDownWithCheckList 
                        arr1={arr10}
                        subtitle={'Automotive Dealerships'}
                        open={true}
                        px={'px-0'}
                        countyWidth={'md:w-full'}
                        />
                </article>      
        </section>
    
    <OurClients background={'bg-neutral200'}/>
    </>
  )
}

export default ClientList