import React from 'react'

export default function Header() {
  return (
    <header className='items-center p-8 pb-4 text-white bg-sky-500 md:flex'>
        <h1 className='text-5xl'>Weather.fz</h1>
        <p className='mt-2 md:pl-4'>Today's Weather Report | Tomorrow's Forecast</p>
        <span className='mt-2 ml-auto text-2xl'>{today}</span>
    </header>
  );
}

var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

var today = day + "/" + month + "/" + year;