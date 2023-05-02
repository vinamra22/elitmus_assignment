import React from 'react';
import Header from '../components/Header';

const Domov = () => {
  return (

    <div className='container'>

      <Header />
      
      <div className='domov'>

          <div className='text'>
            <div>
              <h1 className='typing'>Year project</h1>
            </div>
            <p>
                Year project in the form of a website with a focus on working with web technologies, social networks, encryption, forhens and malware analysis.Its task is to raise awareness of
                these technologies and their dangers.The competition is suitable mainly for secondary school students and above.
                <br></br><br></br>
                
                This is o /Catch the flag \ game.To move to the next Levl, it is necessary to find the password mentioned above on the use of the technology mentioned above
                <strong>/lx-heslo \ </strong>.Alternatively, otherwise specified in a specific level.
                <br></br><br></br>
                The project is inspired by CTF competitions such as tryhackme, hackthebox, cybergame, hackquest.

            </p>
         </div>
      </div>

    </div>

  )
}

export default Domov;