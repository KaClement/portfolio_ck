import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'

const About = () => {
  return (
    <section id='about'>

     
      <div className='about__container'>
        
        <main class='row'>
        
          <section class="col">
            <header class='title'>
              <h2>EDUCATION</h2>
            </header>
            <div class='contents'>
              <div class='box'>
              <h4>2021-2024</h4>
                <h3>Bachelor Universitaire en Système d'information et sciences de services</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Temporibus voluptates facilis sed eligendi culpa.</p>
              </div>
              <div class='box'>
                <h4>2016-2019</h4>
                <h3>Lycée : Baccalauréat Scientifique Mention Bien</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Temporibus voluptates facilis sed eligendi culpa.</p>
              </div>
            </div>

          </section>
          
          <section class="col">
            <header class='title'>
              <h2>Experience</h2>
            </header>
            <div class='contents'>
              <div class='box'>
                <h4>2016</h4>
                <h3>Bénévole - Cours Informatique au senior</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Temporibus voluptates facilis sed eligendi culpa.</p>
              </div>
              <div class='box'>
                <h4>2014-2015</h4>
                <h3>Stage de découverte - FIAT</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Temporibus voluptates facilis sed eligendi culpa.</p>
              </div>
              
            </div>

          </section>




          
        </main>




      </div>

      <div className='about__content'>
        <article className='about__description'>
          <h5 className='about_bullet'>
            <ul>
              <li><a className='a_tooltip' href="https://pgc.unige.ch/main/teachings/details/2021-D200008" target="_blank" title='
              Méthodes de recherche et de tri
              Notion de complexité des algorithmes
              Récursivité et algorithmes de type diviser-conquérir
              Types abstraits, notion de pointeur.
              Structures dynamiques fondamentales:
              chaînes, anneaux, piles, files d attente, listes généralisées, arbres, graphes.  
              '>Algorithme & Structure de données</a></li>

              <li>-</li>

              <li><a className='a_tooltip' href="https://pgc.unige.ch/main/teachings/details/2021-12X003" title='
              Langage Java : environnement, types, syntaxes, librairie standard
              Concepts théoriques : encapsulation, abstraction, polymorphismes, généricité
              Concepts pratiques : classes, instances, interfaces, héritage, types génériques
              Modélisation : analyse, diagrammes UML    
              ' target="_blank">Orienté Objet</a></li>

              <li>-</li>
              <li><a className='a_tooltip' href="https://pgc.unige.ch/main/teachings/details/2021-12X009" target="_blank" title='
                Concepts fondamentaux du système Unix
                Ligne de commande et scripts shell
                Introduction / rappel du langage C
                Fichiers et disques
                Entrées / sorties
                Processus
                Communication entre processus
                Signaux
              '>Système d'exploitation</a></li>

              <li>-</li>
              <li><a className='a_tooltip' href="https://pgc.unige.ch/main/teachings/details/2021-11X004" target="_blank" title='Principes fondamentaux et architecture de base des réseaux
                                    Technologies de transmission et techniques de traitement des erreurs
                                    Technologies de liaison, réseau et transport
                                    Systèmes et applications distribués
                                    Introduction à la sécurité informatique et à la protection des informations digitales
                                    Techniques des protections des réseaux et des ressources informatiques'
                >Réseaux Informatiques</a></li>

              <li>-</li>
              <li><a className='a_tooltip' href="https://pgc.unige.ch/main/teachings/details/2021-12X014" target="_blank" title='
                Bases mathématiques et modèles de calcul
                Schémas de chiffrement et de signature digitale
                Protocoles d authentification et d établissement de clés
                Identité digitale et certification
              '>Cryptographie & Sécurité</a></li>

              <li>-</li>
              <li><a className='a_tooltip' href="https://pgc.unige.ch/main/teachings/details/2021-D200020" target="_blank" title='
          Partie 1 : Transactions et bases de données distribuées 
              1. Accès concurrent aux données et notion de transaction 
              2. Bases de données distribuées : principe général et transactions distribuées

          Partie 2 : RDF et bases de données graphes
              3. Modèle de données RDF 
              4. Langage d interrogation et algèbre SPARQL 
              5. Modélisation conceptuelle avec RDF, OWL et RDF-star 
              6. RDF, intégration et annotation des données 

          Partie 3: Analyse de larges quantités de données 
              7. Timeseries : séries de données chronologiques 
              8. Cas des données et des services de santé 
              9. Analyse de données chronologiques (machine learning, randomisation, vérification des hypothèses)
              '>Base de données</a></li>

              <li>-</li>
              <li><a className='a_tooltip' href="https://pgc.unige.ch/main/teachings/details/2021-D200023" target="_blank"  title='
              1. Fondements des la sécurité de l information et des S.I.
              2. Architectures de sécurité pour les S.I. 
              3. Méthodes pratiques pour la sécurité des S.I.
              '>Sécurité des systèmes d'information</a></li>
              
              <li>-</li>
              <li><a className='a_tooltip' title="Machines de Turing déterministes et non-déterministes 
                            Classes P, NP co-NP et PSPACE 
                            Transformations polynomiales 
                            Problèmes NP-complets et NP-difficiles." 
                            href="https://pgc.unige.ch/main/teachings/details/2021-11X008" target="_blank">Compléxité & Calculabilité</a></li>
            </ul>
        </h5>
        </article>
        </div>
    
    </section>
  )
}

export default About