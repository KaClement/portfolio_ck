import React from 'react'
import './challenges.css'
import Transcript from '../../assets/HTB Academy Student Transcript.pdf'
const Challenges = () => {
    return ( 
      <section className='challenges__section'>

        <div>
                <h2>What I'm working on... </h2>
           
        </div>
        <div className='challenges_completed'>
            <article className='challenges_item'>
                    <h5> <a href="https://play.picoctf.org/users/Kams" target="_blank" >PicoCTF</a></h5>
            </article>
                
                <article className='challenges_item'>
                    <h5> <a href={Transcript} download target="_blank" >HackTheBox</a></h5>                    <p></p>
                </article>

            <article className='challenges_item'>
                    <h5> <a href="https://tryhackme.com/p/Kams" target="_blank" >TryHackMe</a></h5>
                </article>
        </div>



            

      </section>
    )
}

export default Challenges