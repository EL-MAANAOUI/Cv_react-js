import React from 'react';
import './Content.css';


export default function Content(){
    return(
        <div className="contenu">
        <div className="formation">
        <div className="innerContent" >
        <img src="/images/hat.png" alt="" width="50px" className="hat"/>
           <h2 className="forma"> FORMATIONS:</h2>
           
        </div>
         <div className="info" >
             <strong className="text" > Université Abdelmalek Essaâdi | 2019 – 2021 </strong> 
             <p className="text" style={{marginTop:"-4px"}} >Master Spécialisé Ingénierie Informatique</p>
         </div>
         <div className="info" >
             <strong className="text" > Université Abdelmalek Essaâdi | 2018 – 2019 </strong> 
             <p className="text" style={{marginTop:"-4px"}} >Licence d’Etudes Fondamentales en Sciences
Mathématiques et Informatique</p>
         </div>
         <div className="info" >
             <strong className="text" > Université Abdelmalek Essaâdi | 2015 – 2018 </strong> 
             <p className="text" style={{marginTop:"-4px"}} >DEUG en Sciences Mathématiques et Informatique</p>
         </div>
                  <div className="info" >
             <strong className="text" > Lycée Hassan II | 2012 – 2015 </strong> 
             <p className="text" style={{marginTop:"-4px"}} >Baccalauréat en Sciences Physiques</p>
         </div>
         <div className="info" >
             <strong className="text" > Institut Français | 2010 et 2011 </strong> 
             <p className="text" style={{marginTop:"-4px"}} >Certificat de Mérite à la participation à la 2ème et 3ème édition
Du Concours « Le plaisir de lire »</p>
         </div>
        </div>
        <div className="formation">
        <div className="innerContent" >
        <img src="/images/portfolio.png" alt="" width="50px" className="hat"/>
           <h2 className="forma"> EXPÉRIENCE PROFESSIONNELLE :</h2>
           
        </div>
         <div className="info" >
             <strong className="text" > Clinique AL NAKHIL | Secrétaire administrative polyvalente </strong> 
             <p className="text" style={{marginTop:"-4px"}} >&nbsp;&nbsp;&nbsp;Tétouan - Du 01/04/2019 jusqu’à présent<br/>
             &nbsp;&nbsp;&nbsp; Préparer les médicaments et faire l’inventaire<br/>
             &nbsp;&nbsp;&nbsp; Opératrice de saisie<br/>
             &nbsp;&nbsp;&nbsp; Surveiller le stock de médicaments</p>
         </div>
         <div className="info" >
             <strong className="text" >Clinique AL NAKHIL | Stage au service de la pharmacie </strong> 
             <p className="text" style={{marginTop:"-4px"}} >&nbsp;&nbsp;&nbsp;Tétouan - Du 19/07/18 jusqu’à 30/03/19<br/>
             &nbsp;&nbsp;&nbsp; Traiter les dossiers des patients</p>
         </div>
        </div>
        <div className="formation">
        <div className="innerContent" >
        <img src="/images/graphic.png" alt="" width="50px" className="hat"/>
           <h2 className="forma"> PROJETS ACADÉMIQUES :</h2>
           
        </div>
         <div className="info" >
             <strong className="text" > APPLICATION MÉDICALE </strong> 
             <p className="text" style={{marginTop:"-4px"}} >&nbsp;&nbsp;&nbsp; REACT NATIVE, FIREBASE<br/>
             &nbsp;&nbsp;&nbsp; Application mobile qui gère tous les besoins</p>
         </div>
         <div className="info" >
             <strong className="text" >ASUSTEC </strong> 
             <p className="text" style={{marginTop:"-4px"}} >&nbsp;&nbsp;&nbsp;Java EE, Spring, Hibernate, JSF, Struts<br/>
             &nbsp;&nbsp;&nbsp;Système de gestion de stock et de vente</p>
        </div>
        <div className="info" >
             <strong className="text" >APPLICATION POUR LA GESTION D’UN RESTAURANT </strong> 
             <p className="text" style={{marginTop:"-4px"}} >&nbsp;&nbsp;&nbsp;PHP, Angular, MySQL<br/>
             &nbsp;&nbsp;&nbsp;Coté cliente et coté administrateur qui gèrent les multitâches</p>
        </div>
        </div>
        </div>
    )
}