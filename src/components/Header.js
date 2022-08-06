import React from 'react'

export default function Header() {
  return (
    <header className='p-8 pb-4 bg-sky-500 text-white md:flex items-center'>
        <h1 className='text-5xl'>Weather.fz</h1>
        <p className='md:pl-4 mt-2'>Today's Weather Report</p>
        <span className='mt-2 ml-auto text-2xl'>{today}</span>
    </header>
  );
}

var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

var today = day + "/" + month + "/" + year;