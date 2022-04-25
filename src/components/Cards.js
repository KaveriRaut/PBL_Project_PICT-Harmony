import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check Out The Features!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                        src='images/timetable.png' 
                        text='Checkout Latest TimeTable'
                        label='TimeTable'
                        path='/services'
                    />
                    <CardItem 
                        src='images/Notice.jpeg'
                        text='Have you read the latest Notice? Checkout Here!'
                        label='Notices'
                        path='/products'
                    />
                    <CardItem 
                        src='images/resource.jpg' 
                        text='Study Material and Resources for Students'
                        label='Resource'
                        path='/products'
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                        src='images/faculty.jpg' 
                        text='Meet our Faculty'
                        label='Faculty'
                        path='/Faculty_info'
                    />
                    <CardItem 
                        src='images/club.jpg'
                        text='Know about Technical and non-Tech Students Clubs at PICT'
                        label='Clubs'
                        path='/Club_info'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
