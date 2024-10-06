import React from 'react'
import bootstrap from 'bootstrap'
import './css/form.css'
import Carousel from 'react-bootstrap/Carousel';
import { Card,Button } from 'react-bootstrap';
import Navbar from './layout/Navbar';
import Footer from '../component/Footer';

function Home() {
  return (
    <>
    <Navbar/>
      <div className='container p-4 mt-2'>
        <div className='row p-4'>
          <div className='col-md'>
          <Card  id='carosel' >
            <Card.Img variant="top" src={'https://images.squarespace-cdn.com/content/v1/5beb0a44f2e6b1113f9519d9/1622845384116-ZXDSWUHQTCEV7N9X78EZ/Have+a+safe+flight.jpg?format=500w'} />
               <Card.Body>
                 <Card.Title id="title">Our reponsibility is you</Card.Title>
               </Card.Body>
          </Card>
          </div>
          <div className='col-md'>
          <Card  id='carosel' >
            <Card.Img variant="top" src={'https://www.papercitymag.com/wp-content/uploads/2020/07/200414Corona_spray-web03-1200x800-1.jpg'}/>
               <Card.Body>
                 <Card.Title id="title">We Provide Full Safety</Card.Title>
               </Card.Body>
          </Card>
          </div>
          <div className='col-md '>
          <Card  id='carosel' >
            <Card.Img variant="top" src={'https://www.papercitymag.com/wp-content/uploads/2020/07/200414Corona_spray-web03-1200x800-1.jpg'}/>
               <Card.Body>
                 <Card.Title id="title">Your Safety Is Priority</Card.Title>
               </Card.Body>
          </Card>
          </div>
          <div className='col-md '>
          <Card  id='carosel' >
            <Card.Img variant="top" src={'https://images.squarespace-cdn.com/content/v1/5beb0a44f2e6b1113f9519d9/1622845602680-UVFW4UTIAWBBW6DCFSZY/Safe+flight+message.jpg'}/>
               <Card.Body>
                 <Card.Title id="title">Better hospitality</Card.Title>
               </Card.Body>
          </Card>
          </div>
        </div>
        <div className='container'>
        <div className='row mt-4 p-4'>
         <Card id='cardcarosel'>
           <Card.Body>
           <Carousel indicators={false}>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={'https://d3pvfs0dgh4r2q.cloudfront.net/Desktop/FlyEarly.jpg'}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={'https://d3pvfs0dgh4r2q.cloudfront.net/Desktop/WalnutD.jpg'}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={"https://d3pvfs0dgh4r2q.cloudfront.net/Desktop/IntConnBag1.png"}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img 
      className="d-block w-100"
      src={"https://d3pvfs0dgh4r2q.cloudfront.net/Desktop/RBLBank.jpg"}
      alt="Forth slide"
    />
  </Carousel.Item>
</Carousel>
           </Card.Body>
         </Card>
       
       </div>
       <div class="row mt-4 p-4">
    <div class="col">
      <img id='rowimg' src={'https://d3pvfs0dgh4r2q.cloudfront.net/website/MainComponent/common/ImportantLinks/chng.png'}/>
      <h3>Change Assist</h3>
    </div>
    <div class="col">
      <img id='rowimg' src={'https://d3pvfs0dgh4r2q.cloudfront.net/website/MainComponent/common/ImportantLinks/dealshome.png'}/>
      <h3>Get Deals</h3>
    </div>
    <div class="col">
      <img id='rowimg' src={'https://d3pvfs0dgh4r2q.cloudfront.net/website/MainComponent/common/ImportantLinks/covid.png'}/>
      <h3>Covid Info</h3>
    </div>
    <div class="col">
      <img id='rowimg' src={'https://d3pvfs0dgh4r2q.cloudfront.net/website/MainComponent/common/ImportantLinks/screen.png'}/>
      <h3>SpiceScreen
</h3>
    </div>
    <div class="col">
       <img id='rowimg' src={'https://d3pvfs0dgh4r2q.cloudfront.net/website/MainComponent/common/ImportantLinks/activity1.png'}/> 
       <h3>Activities</h3>
    </div>
    <div class="col">
       <img id='rowimg' src={'https://d3pvfs0dgh4r2q.cloudfront.net/website/MainComponent/common/ImportantLinks/gst.png'}/>
       <h3>GST Invoice</h3>
    </div>
  </div>
  <div class="row mt-4 p-4">
  <Carousel id='captioncarousel' controls={false} indicators={false}>
  <Carousel.Item>
   
      <p>Due to high call volume at our Reservation Center, we encourage you to use ourChange Assist portal to choose alternate flights or refund for your rescheduled/cancelled flights, at your own convenience.</p>
  
  </Carousel.Item>
  <Carousel.Item>
   
      <p>Due to high call volume at our Reservation Center, we encourage you to use ourChange Assist portal to choose alternate flights or refund for your rescheduled/cancelled flights, at your own convenience.</p>
  
  </Carousel.Item>
  <Carousel.Item>
 
      <p>Ahmedabad Airport Advisory: Commencement of the scheduled runway re-carpeting work at Sardar Vallabhbhai Patel International airport will be carried out from January 17 till May 31, 2022, between 9am and 6pm.</p>
   
  </Carousel.Item>
  <Carousel.Item>

      <p>Due to high call volume at our Reservation Center, we encourage you to use ourChange Assist portal to choose alternate flights or refund for your rescheduled/cancelled flights, at your own convenience.</p>

  </Carousel.Item>
  <Carousel.Item>

      <p>your rescheduled/cancelled flights, at your own convenience.With the commencement of our summer schedule, there may be a revision in some of our flights. Please check flight status before proceeding to the airport.</p>

  </Carousel.Item>
</Carousel>
  </div>
        </div>
    
      </div> 
      <Footer />
     </>
    
  )
}

export default Home