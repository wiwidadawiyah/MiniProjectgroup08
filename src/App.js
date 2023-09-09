import './App.css';
import React from 'react';
import * as Unicons from '@iconscout/react-unicons';
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from './slider/Carousel';
import './slider/slide.css';
import './content/style.css';
import './floating/floating.css';
import './promotion/promotion.css';
import './event/event.css'
import './floating/cal.css'


const images = [
  "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

function App() {
  return (
    <div className="main">
      <nav>
        <div className="bar">
          <ul className="nav-logo">
          </ul>
          <form class="d-flex">
            <input class="nav-form-control" type="text" placeholder="Search"/>
            <button class="nav-btn-primary" type="button"><b><Unicons.UilSearchAlt /></b></button>
          </form>
          <ul>
            {/* eslint-disable-next-line */}
            <a target='_blank' className="reactLogo"><b><Unicons.UilReact/></b></a>
          </ul>
        </div>
      </nav>
      <Carousel images={images} />

      {/* eslint-disable-next-line */}
      <marquee className="div-marquee"><b>mini Project 01 | Grup 08</b></marquee>
      <div className="row">
        <div className="col-9">
          <div>
            <h1>TRIP TOUR</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, neque a quod enim tenetur, nihil reprehenderit tempore eveniet commodi eos fugiat! Quo doloremque, dolorem laboriosam delectus sed quidem officiis consequuntur!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, obcaecati nam pariatur doloribus aspernatur tenetur. Exercitationem laudantium, nulla repellat sunt delectus laborum et illum cum incidunt, dolor quo voluptates tempore.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos praesentium aut magnam! Provident beatae natus assumenda quisquam laborum dignissimos modi debitis illum. Quam debitis iste at laboriosam doloribus. Esse, error.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, neque a quod enim tenetur, nihil reprehenderit tempore eveniet commodi eos fugiat! Quo doloremque, dolorem laboriosam delectus sed quidem officiis consequuntur!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, obcaecati nam pariatur doloribus aspernatur tenetur. Exercitationem laudantium, nulla repellat sunt delectus laborum et illum cum incidunt, dolor quo voluptates tempore.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos praesentium aut magnam! Provident beatae natus assumenda quisquam laborum dignissimos modi debitis illum. Quam debitis iste at laboriosam doloribus. Esse, error.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, neque a quod enim tenetur, nihil reprehenderit tempore eveniet commodi eos fugiat! Quo doloremque, dolorem laboriosam delectus sed quidem officiis consequuntur!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, obcaecati nam pariatur doloribus aspernatur tenetur. Exercitationem laudantium, nulla repellat sunt delectus laborum et illum cum incidunt, dolor quo voluptates tempore.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos praesentium aut magnam! Provident beatae natus assumenda quisquam laborum dignissimos modi debitis illum. Quam debitis iste at laboriosam doloribus. Esse, error.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, neque a quod enim tenetur, nihil reprehenderit tempore eveniet commodi eos fugiat! Quo doloremque, dolorem laboriosam delectus sed quidem officiis consequuntur!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, obcaecati nam pariatur doloribus aspernatur tenetur. Exercitationem laudantium, nulla repellat sunt delectus laborum et illum cum incidunt, dolor quo voluptates tempore.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos praesentium aut magnam! Provident beatae natus assumenda quisquam laborum dignissimos modi debitis illum. Quam debitis iste at laboriosam doloribus. Esse, error.</p>
          </div>
          {/* disini untuk promosi tag medsos */}
          <div className="Promotion">
            <h2>promote</h2>
          </div>
        </div>
        {/* disini untuk counter ticketing */}
        <div className="col-3">
          <div id="MyForm">
              <h1>Reservation</h1>
              {/* eslint-disable-next-line */}
              <marquee className="form-marquee">|      - Feel Free -      |      Grab it Fast..!!!      |      - Feel Free -      |      Grab it Fast..!!!      |</marquee>
              <label for="name"><b>Name</b></label>
              <input type="text" placeholder="Enter Full Name" name="name" required/>
              <br/>
              <label for="psw"><b>Phone</b></label>
              <input type="password" placeholder="Enter Phone Number" name="contact" required/>
              <br/>
              <button type="submit" class="btn"><Unicons.UilTicket/>Kick !!!</button>
          </div>
          <br/>
          <div className="calendar">
            <div class="month">
              <ul>
                <li class="prev">&#10094;</li>
                <li class="next">&#10095;</li>
                <li>Sept<span >2021</span></li>
              </ul>
            </div>

            <ul class="weekdays">
              <li>Mo</li>
              <li>Tu</li>
              <li>We</li>
              <li>Th</li>
              <li>Fr</li>
              <li>Sa</li>
              <li>Su</li>
            </ul>

            <ul class="days">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li><span class="active">10</span></li>
              <li>11</li>
              <li>12</li>
              <li>13</li>
              <li>14</li>
              <li>15</li>
              <li>16</li>
              <li>17</li>
              <li>18</li>
              <li>19</li>
              <li>20</li>
              <li>21</li>
              <li>22</li>
              <li>23</li>
              <li>24</li>
              <li>25</li>
              <li>26</li>
              <li>27</li>
              <li>28</li>
              ...expand...
            </ul>
          </div>
        </div>
      </div>
      <div className="event">
        Timeline Event
      </div>
      <div className="nav-end">
        <ul>
            <li>
              <a href="/"> Home </a>
            </li>
            <li>
              <a href="/about"> About </a>
            </li>
            <li>
              <a href="/contact"> Contact </a>
            </li>
          </ul>
      </div>
      <div className="footer">
        <div className="fo-end"></div><br/>
        <div>
          <b>follow us : </b><br/>
          {/* eslint-disable-next-line */}
          <a href='https://www.twitter.com/' target="_blank" className="Unicons.UilFacebookF" ><Unicons.UilTwitterAlt/></a>
          {/* eslint-disable-next-line */}
          <a href='https://www.whatsapp.com/' target="_blank" className="Unicons.UilFacebookF" ><Unicons.UilWhatsappAlt/></a>
          {/* eslint-disable-next-line */}
          <a href='https://www.youtube.com/@PurwadhikaTV' target="_blank" className="Unicons.UilYoutube" ><Unicons.UilYoutube/></a>
          {/* eslint-disable-next-line */}
          <a href='https://www.instagram.com/purwadhikaschool/' target='_blank' className="Unicons.ilInstagramAlt" ><Unicons.UilInstagramAlt/></a>
            {/* eslint-disable-next-line */}
          <a href='https://www.facebook.com/purwadhikadigitalschool/' target="_blank" className="Unicons.UilFacebookF" ><Unicons.UilFacebookF/></a>
        </div>
        <br/>
        <div>
          {/* eslint-disable-next-line */}
          <p class="w3-medium">Powered by <a href="https://github.com/wiwidadawiyah" target="_blank" class="w3-hover-text-green">github.io</a>
                        {/* eslint-disable-next-line */}
                         | Supported by <a href="https://purwadhika.com/" target="_blank" class="w3-hover-text-green">purwadhika</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;
