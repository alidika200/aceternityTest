// import React from 'react';
// import './Bracket.css';
// import Header from './Layout';
// import profilePic from './assets/shitpost.jpg';
// import SideNav from './dropDownNavBar';

// const Bracket = () => {
//   return (
//     <>
     
//       <div className="theme theme-dark">
//       <Header playerName="Ali" backgroundImage={profilePic} />
//       <SideNav />
//         <div className="bracket disable-image">
//           <div className="column one">
//             <div className="match winner-top">
//               <div className="match-top team">
            
//                 <span className="name">Orlando Jetsetters</span>
//                 <span className="score">2</span>
//               </div>
//               <div className="match-bottom team">
             
//                 <span className="name">D.C. Senators</span>
//                 <span className="score">1</span>
//               </div>
//               <div className="match-lines">
//                 <div className="line one"></div>
//                 <div className="line two"></div>
//               </div>
//               <div className="match-lines alt">
//                 <div className="line one"></div>
//               </div>
//             </div>
//             <div className="match winner-bottom">
//               <div className="match-top team">
              
//                 <span className="name">New Orleans Rockstars</span>
//                 <span className="score">1</span>
//               </div>
//               <div className="match-bottom team">
         
//                 <span className="name">West Virginia Runners</span>
//                 <span className="score">2</span>
//               </div>
//               <div className="match-lines">
//                 <div className="line one"></div>
//                 <div className="line two"></div>
//               </div>
//               <div className="match-lines alt">
//                 <div className="line one"></div>
//               </div>
//             </div>
//             <div className="match winner-top">
//               <div className="match-top team">
            
//                 <span className="name">Denver Demon Horses</span>
//                 <span className="score">2</span>
//               </div>
//               <div className="match-bottom team">
          
//                 <span className="name">Chicago Pistons</span>
//                 <span className="score">0</span>
//               </div>
//               <div className="match-lines">
//                 <div className="line one"></div>
//                 <div className="line two"></div>
//               </div>
//               <div className="match-lines alt">
//                 <div className="line one"></div>
//               </div>
//             </div>
//             <div className="match winner-top">
//               <div className="match-top team">
     
//                 <span className="name">San Francisco Porters</span>
//                 <span className="score">2</span>
//               </div>
//               <div className="match-bottom team">
      
//                 <span className="name">Seattle Climbers</span>
//                 <span className="score">1</span>
//               </div>
//               <div className="match-lines">
//                 <div className="line one"></div>
//                 <div className="line two"></div>
//               </div>
//               <div className="match-lines alt">
//                 <div className="line one"></div>
//               </div>
//             </div>
//           </div>
//           <div className="column two">
//             <div className="match winner-bottom">
//               <div className="match-top team">
   
//                 <span className="name">Orlando Jetsetters</span>
//                 <span className="score">1</span>
//               </div>
//               <div className="match-bottom team">
     
//                 <span className="name">West Virginia Runners</span>
//                 <span className="score">2</span>
//               </div>
//               <div className="match-lines">
//                 <div className="line one"></div>
//                 <div className="line two"></div>
//               </div>
//               <div className="match-lines alt">
//                 <div className="line one"></div>
//               </div>
//             </div>
//             <div className="match winner-bottom">
//               <div className="match-top team">
         
//                 <span className="name">Denver Demon Horses</span>
//                 <span className="score">1</span>
//               </div>
//               <div className="match-bottom team">
       
//                 <span className="name">San Francisco Porters</span>
//                 <span className="score">2</span>
//               </div>
//               <div className="match-lines">
//                 <div className="line one"></div>
//                 <div className="line two"></div>
//               </div>
//               <div className="match-lines alt">
//                 <div className="line one"></div>
//               </div>
//             </div>
            
//           </div>
//           <div className="column three">
//             <div className="match winner-top">
//               <div className="match-top team">

//                 <span className="name">West Virginia Runners</span>
//                 <span className="score">3</span>
//               </div>
//               <div className="match-bottom team">

//                 <span className="name">San Francisco Porters</span>
//                 <span className="score">2</span>
//               </div>
//               <div className="match-lines">
//                 <div className="line one"></div>
//                 <div className="line two"></div>
//               </div>
//               <div className="match-lines alt">
//                 <div className="line one"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Bracket;













// import React, { useState } from 'react';
// import './Bracket.css';
// import Header from './Layout';
// import profilePic from './assets/shitpost.jpg';
// import SideNav from './dropDownNavBar';

// const Bracket = () => {
//   // State to hold team data
//   const [matches, setMatches] = useState([
//     { seed: 1, name: 'Orlando Jetsetters', score: 2 },
//     { seed: 8, name: 'D.C. Senators', score: 1 },
//     // Add other matches similarly
//   ]);

//   // Function to handle editing team name or score
//   const handleEdit = (index, field, value) => {
//     const updatedMatches = [...matches];
//     updatedMatches[index][field] = value;
//     setMatches(updatedMatches);
//   };

//   return (
//     <>
//       <div className="theme theme-dark">
//         <Header playerName="Ali" backgroundImage={profilePic} />
//         <SideNav />
//         <div className="bracket disable-image">
//           <div className="column one">
//             {matches.map((match, index) => (
//               <div key={index} className="match winner-top">
//                 <div className="match-top team">
//         
//                   <span className="seed">{match.seed}</span>
//                   <span className="name" onClick={() => {
//                     const newName = prompt('Enter new name:', match.name);
//                     if (newName !== null) {
//                       handleEdit(index, 'name', newName);
//                     }
//                   }}>{match.name}</span>
//                   <span className="score" onClick={() => {
//                     const newScore = prompt('Enter new score:', match.score);
//                     if (newScore !== null) {
//                       handleEdit(index, 'score', parseInt(newScore));
//                     }
//                   }}>{match.score}</span>
//                 </div>
//                 <div className="match-bottom team">
//                   {/* Display the second team and its details similarly */}
//                 </div>
//                 <div className="match-lines">
//                   <div className="line one"></div>
//                   <div className="line two"></div>
//                 </div>
//                 <div className="match-lines alt">
//                   <div className="line one"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           {/* Add other columns similarly */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Bracket;

import React, { useState } from 'react';
import './Bracket.css';
import Header from './Layout';
import profilePic from './assets/shitpost.jpg';
import SideNav from './dropDownNavBar';

const Bracket = () => {
  // State to hold team data
  const [matches, setMatches] = useState([
    { name: 'Orlando Jetsetters', score: 0},
    { name: 'D.C. Senators', score: 0 },
    { name: 'New Orleans Rockstars', score: 0 },
    { name: 'West Virginia Runners', score: 0 },
    { name: 'Denver Demon Horses', score: 0 },
    { name: 'Chicago Pistons', score: 0 },
    { name: 'Ali', score: 0 },
    { name: 'hasan', score: 0 },
    { name: 'null', score: 0 },
    { name: 'null', score: 0 },
    { name: 'null', score: 0 },
    { name: 'mahdi', score: 0 },
    {name: 'null', score: 0 },
    { name: 'null', score: 0 },
    { name: 'null', score: 0 }
  ]);

  // Function to handle editing team name or score
  const handleEdit = (index, field, value) => {
    const updatedMatches = [...matches];
    updatedMatches[index][field] = value;
    setMatches(updatedMatches);
  };

  return (
    <>
      <div className="theme theme-dark">
        <Header playerName="Ali" backgroundImage={profilePic} />
        <SideNav />
        <div className="bracket disable-image">
          <div className="column one">
            {/* First column - first 8 teams */}
            {matches.slice(0, 8).map((match, index) => (
              <div key={index} className="match winner-top">
                <div className="match-top team">
                  <span className="image"></span>
                  <span className="name" onClick={() => {
                    const newName = prompt('Enter new name:', match.name);
                    if (newName !== null) {
                      handleEdit(index, 'name', newName);
                    }
                  }}>{match.name}</span>
                  <span className="score" onClick={() => {
                    const newScore = prompt('Enter new score:', match.score);
                    if (newScore !== null) {
                      handleEdit(index, 'score', parseInt(newScore));
                    }
                  }}>{match.score}</span>
                </div>
                <div className="match-lines">
                  <div className="line one"></div>
                  <div className="line two"></div>
                </div>
                <div className="match-lines alt">
                  <div className="line one"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="column two">
            {/* Second column - players 9 to 12 */}
            {matches.slice(8, 12).map((match, index) => (
              <div key={index} className="match winner-top">
                <div className="match-top team">
                  <span className="image"></span>
                  <span className="name" onClick={() => {
                    const newName = prompt('Enter new name:', match.name);
                    if (newName !== null) {
                      handleEdit(index + 8, 'name', newName); // Adjust index for correct editing
                    }
                  }}>{match.name}</span>
                  <span className="score" onClick={() => {
                    const newScore = prompt('Enter new score:', match.score);
                    if (newScore !== null) {
                      handleEdit(index + 8, 'score', parseInt(newScore)); // Adjust index for correct editing
                    }
                  }}>{match.score}</span>
                </div>
                <div className="match-lines">
                  <div className="line one"></div>
                  <div className="line two"></div>
                </div>
                <div className="match-lines alt">
                  <div className="line one"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="column three">
            {/* Third column - players 13 and 14 */}
            {matches.slice(12, 14).map((match, index) => (
              <div key={index} className="match winner-top">
                <div className="match-top team">
                  <span className="image"></span>
                  <span className="name" onClick={() => {
                    const newName = prompt('Enter new name:', match.name);
                    if (newName !== null) {
                      handleEdit(index + 12, 'name', newName); // Adjust index for correct editing
                    }
                  }}>{match.name}</span>
                  <span className="score" onClick={() => {
                    const newScore = prompt('Enter new score:', match.score);
                    if (newScore !== null) {
                      handleEdit(index + 12, 'score', parseInt(newScore)); // Adjust index for correct editing
                    }
                  }}>{match.score}</span>
                </div>
                <div className="match-lines">
                  <div className="line one"></div>
                  <div className="line two"></div>
                </div>
                <div className="match-lines alt">
                  <div className="line one"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="column four">
            {/* Fourth column - player 15 */}
            {matches.slice(14, 15).map((match, index) => (
              <div key={index} className="match winner-top">
                <div className="match-top team">
                  <span className="image"></span>
                  <span className="name" onClick={() => {
                    const newName = prompt('Enter new name:', match.name);
                    if (newName !== null) {
                      handleEdit(index + 14, 'name', newName); // Adjust index for correct editing
                    }
                  }}>{match.name}</span>
                  <span className="score" onClick={() => {
                    const newScore = prompt('Enter new score:', match.score);
                    if (newScore !== null) {
                      handleEdit(index + 14, 'score', parseInt(newScore)); // Adjust index for correct editing
                    }
                  }}>{match.score}</span>
                </div>
                <div className="match-lines">
                  <div className="line one"></div>
                  <div className="line two"></div>
                </div>
                <div className="match-lines alt">
                  <div className="line one"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Bracket;





// import React, { useState } from 'react';
// import './Bracket.css';
// import Header from './Layout';
// import profilePic from './assets/shitpost.jpg';
// import SideNav from './dropDownNavBar';

// const Bracket = () => {
//   // State to hold team data
//   const [matches, setMatches] = useState([
//     { name: 'Orlando Jetsetters', score: 0 },
//     { name: 'D.C. Senators', score: 0 },
//     { name: 'New Orleans Rockstars', score: 0 },
//     { name: 'West Virginia Runners', score: 0 },
//     { name: 'Denver Demon Horses', score: 0 },
//     { name: 'Chicago Pistons', score: 0 },
//     { name: 'Seattle Climbers', score: 0 },
//     { name: 'San Francisco Porters', score: 0 }
//   ]);

//   // Function to handle editing team name or score
//   const handleEdit = (index, field, value) => {
//     const updatedMatches = [...matches];
//     updatedMatches[index][field] = value;
//     setMatches(updatedMatches);
//   };

//   return (
//     <>
//       <div className="theme theme-dark">
//         <Header playerName="Ali" backgroundImage={profilePic} />
//         <SideNav />
//         <div className="bracket disable-image">
//           <div className="column one">
//             {matches.map((match, index) => (
//               <div key={index} className={`match winner-top ${index % 2 === 0 ? 'pair-top' : 'pair-bottom'}`}>
//                 <div className="match-top team">
//                   <span className="image"></span>
//                   <span className="name" onClick={() => {
//                     const newName = prompt('Enter new name:', match.name);
//                     if (newName !== null) {
//                       handleEdit(index, 'name', newName);
//                     }
//                   }}>{match.name}</span>
//                   <span className="score" onClick={() => {
//                     const newScore = prompt('Enter new score:', match.score);
//                     if (newScore !== null) {
//                       handleEdit(index, 'score', parseInt(newScore));
//                     }
//                   }}>{match.score}</span>
//                 </div>
//                 {index % 2 === 0 && (
//                   <div className="match-bottom team">
//                     <span className="image"></span>
//                     <span className="name" onClick={() => {
//                       const newName = prompt('Enter new name:', matches[index + 1].name);
//                       if (newName !== null) {
//                         handleEdit(index + 1, 'name', newName);
//                       }
//                     }}>{matches[index + 1].name}</span>
//                     <span className="score" onClick={() => {
//                       const newScore = prompt('Enter new score:', matches[index + 1].score);
//                       if (newScore !== null) {
//                         handleEdit(index + 1, 'score', parseInt(newScore));
//                       }
//                     }}>{matches[index + 1].score}</span>
//                   </div>
//                 )}
//                 <div className="match-lines">
//                   <div className="line one"></div>
//                   <div className="line two"></div>
//                 </div>
//                 {index % 2 === 1 && (
//                   <div className="match-lines alt">
//                     <div className="line one"></div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//           <div className="column two">
//             {/* Add more matches or use a loop for generating columns */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Bracket;






// import React, { useState } from 'react';
// import './Bracket.css';
// import Header from './Layout';
// import profilePic from './assets/shitpost.jpg';
// import SideNav from './dropDownNavBar';

// const Bracket = () => {
//   // State to hold team data
//   const [matches, setMatches] = useState([
//     { name: 'Orlando Jetsetters', score: 0},
//     { name: 'D.C. Senators', score: 0 },
//     { name: 'New Orleans Rockstars', score: 0 },
//     { name: 'West Virginia Runners', score: 0 },
//     { name: 'Denver Demon Horses', score: 0 },
//     { name: 'Chicago Pistons', score: 0 },
//     { name: 'Seattle Climbers', score: 0 },
//     { name: 'ali', score: 0 },
//     { name: 'mhmd', score: 0 },
//     { name: 'Hsen', score: 0 },
//     { name: 'haydar', score: 0 },
//     { name: 'mahdi', score: 0 },
//     {name: 'ja7sh', score: 0 },
//     { name: 'bheem', score: 0 },
//     { name: '5anzeer', score: 0 }
//   ]);

//   // Function to handle editing team name or score
//   const handleEdit = (index, field, value) => {
//     const updatedMatches = [...matches];
//     updatedMatches[index][field] = value;
//     setMatches(updatedMatches);
//   };

//   return (
//     <>
//       <div className="theme theme-dark">
//         <Header playerName="Ali" backgroundImage={profilePic} />
//         <SideNav />
//         <div className="bracket disable-image">
//           <div className="column one">
//             {matches.map((match, index) => (
//               <div key={index} className="match winner-top">
//                 <div className="match-top team">
//                   <span className="image"></span>
//                   <span className="name" onClick={() => {
//                     const newName = prompt('Enter new name:', match.name);
//                     if (newName !== null) {
//                       handleEdit(index, 'name', newName);
//                     }
//                   }}>{match.name}</span>
//                   <span className="score" onClick={() => {
//                     const newScore = prompt('Enter new score:', match.score);
//                     if (newScore !== null) {
//                       handleEdit(index, 'score', parseInt(newScore));
//                     }
//                   }}>{match.score}</span>
//                 </div>
//                 <div className="match-lines">
//                   <div className="line one"></div>
//                   <div className="line two"></div>
//                 </div>
//                 <div className="match-lines alt">
//                   <div className="line one"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="column two">
//             {/* Second set of matches */}
//             {matches.map((match, index) => (
//               <div key={index} className="match winner-top">
//                 <div className="match-top team">
//                   <span className="image"></span>
//                   <span className="name" onClick={() => {
//                     const newName = prompt('Enter new name:', match.name);
//                     if (newName !== null) {
//                       handleEdit(index , 'name', newName); // Adjust index for correct editing
//                     }
//                   }}>{match.name}</span>
//                   <span className="score" onClick={() => {
//                     const newScore = prompt('Enter new score:', match.score);
//                     if (newScore !== null) {
//                       handleEdit(index , 'score', parseInt(newScore)); // Adjust index for correct editing
//                     }
//                   }}>{match.score}</span>
//                 </div>
//                 <div className="match-lines">
//                   <div className="line one"></div>
//                   <div className="line two"></div>
//                 </div>
//                 <div className="match-lines alt">
//                   <div className="line one"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="column three">
//             {/* Third set of matches */}
//             {matches.map((match, index) => (
//               <div key={index} className="match winner-top">
//                 <div className="match-top team">
//                   <span className="image"></span>
//                   <span className="name" onClick={() => {
//                     const newName = prompt('Enter new name:', match.name);
//                     if (newName !== null) {
//                       handleEdit(index , 'name', newName); // Adjust index for correct editing
//                     }
//                   }}>{match.name}</span>
//                   <span className="score" onClick={() => {
//                     const newScore = prompt('Enter new score:', match.score);
//                     if (newScore !== null) {
//                       handleEdit(index , 'score', parseInt(newScore)); // Adjust index for correct editing
//                     }
//                   }}>{match.score}</span>
//                 </div>
//                 <div className="match-lines">
//                   <div className="line one"></div>
//                   <div className="line two"></div>
//                 </div>
//                 <div className="match-lines alt">
//                   <div className="line one"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="column four">
//             {/* Fourth set of matches (single player) */}
//             {matches.map((match, index) => (
//               <div key={index} className="match winner-top">
//                 <div className="match-top team">
//                   <span className="image"></span>
//                   <span className="name" onClick={() => {
//                     const newName = prompt('Enter new name:', match.name);
//                     if (newName !== null) {
//                       handleEdit(index , 'name', newName); // Adjust index for correct editing
//                     }
//                   }}>{match.name}</span>
//                   <span className="score" onClick={() => {
//                     const newScore = prompt('Enter new score:', match.score);
//                     if (newScore !== null) {
//                       handleEdit(index , 'score', parseInt(newScore)); // Adjust index for correct editing
//                     }
//                   }}>{match.score}</span>
//                 </div>
//                 <div className="match-lines">
//                   <div className="line one"></div>
//                   <div className="line two"></div>
//                 </div>
//                 <div className="match-lines alt">
//                   <div className="line one"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Bracket;