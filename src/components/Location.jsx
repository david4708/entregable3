import React from 'react'

const Location = ({location}) => {


  return (

    <section className='h-[130px] w-full mt-40  font-Fira_Code text-white bg-white/20 mx-auto top-full item-center border-solid border-white/30 ' >

    <h2 className='bottom-5 top-5 text-center font-Fira_Code text-white'>{location?.name}</h2>

    <ul className="px-5 w-full justify-between  mt-5 absolute flex sm:relative sm:flex-auto sm:text-justify">

    <li>Type: {location?.type}</li>
    <li>Dimension: {location?.dimension}</li>
    <li>population: {location?.residents.length}</li>
    </ul>

    </section>
  )
}

export default Location