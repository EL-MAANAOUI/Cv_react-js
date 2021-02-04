
import React from 'react';
import './Header.css';

export default function Header(){
    return (
        <div className="header">
        <div className="image">
        <img src="/images/pdp.jpg" alt="" width="150px" className="img"/>
        </div>
        <div  style={{border:"1px"}}>
          <h2 style={{marginTop:"-0.2%"}}>Etudiante en Génie Informatique à la recherche d’un stage PFE</h2>
          <h2 className="tt">KHOULOUD EL MAANAOUI</h2>
          </div>
          <img src="/images/calendar.png" alt=""  width="30px" className="calendrier"/>
          <p className="p1"><strong>23/06/1997, Tétouan, MA </strong></p>
          <img src="/images/placeholder.png" alt=""  width="30px" className="location"/>
          <p className="p2"><strong>Tétouan, MAROC </strong></p>
          <img src="/images/phonecall.png" alt=""  width="30px" className="phone"/>
          <p className="p3"><strong>06.18.91.25.53</strong></p>
          <img src="/images/email.png" alt=""  width="30px" className="mail"/>
          <p className="p4"><strong>khouloud.elmaanaoui@gmail.com</strong></p>
          <img src="/images/linkedin.png" alt=""  width="30px" className="linkedin"/>
          <p className="p5"><strong>linkedin.com/in/khouloud-el-maanaoui/</strong></p>
        </div>
      );
}
