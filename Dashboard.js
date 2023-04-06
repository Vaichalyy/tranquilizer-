import React from "react";
import './game.css'
import logo from "./games/1.jpg";
import logo1 from "./games/2.jpg";
import logo2 from "./games/3.jpg";
import logo3 from "./games/4.jpeg";
import logo4 from "./games/5.jpg";
import logo5 from "./games/6.jpeg"

function Dashboard() {
  return (
    <div className="img">
      <div className="dis" >
        <img src={logo} />
        <div className="para"><p style={{ position: "absolute", left: "40%" }}><strong>BATTLEFIELD</strong></p><br></br>
        <p>Battlefield 2042 is a first-person shooter that marks the return to the iconic all-out warfare of the franchise. 
          In a near-future world transformed by disorder, you must adapt and overcome dynamically changing battlegrounds with
           the help of your squad and a cutting-edge arsenal. At the eleventh hour, there’s no time to hesitate.</p>
           <button>INSTALL</button>

            </div>
      </div>

      <div className="dis" >
        <img src={logo1} />
        <div className="para"><p style={{ position: "absolute", left: "40%" }}><strong>F1® 22</strong></p> <br></br>
        <p>EA SPORTS™ F1® 22 is the official video game of the 2022 FIA Formula One World Championship™. Take your seat for a new 
          season as redesigned cars and overhauled rules redefine race day, test your skills around the new Miami International Autodrome,
           and get a taste of the glitz and glamour in F1® Life. </p>
           <button>INSTALL</button>
           </div>
      </div>

      <div className="dis" >
        <img src={logo5} />
        <div className="para"><p style={{ position: "absolute", left: "40%" }}><strong>Need for Speed™ Hot Pursuit Remastered</strong></p><br></br>
        <p>Feel the thrill of the chase and the rush of escape in Need for Speed Hot Pursuit Remastered on PC. Unleash a savage sense of 
          speed both as an outlaw and a cop in the world's hottest high-performance cars. Outsmart the heat or take down lawbreakers with the
           tactical weaponry at your disposal in a heart-pumping, socially competitive racing experience.</p>
           <button>INSTALL</button>

            </div>
      </div>

      <div className="dis" >
        <img src={logo2} />
        <div className="para"><p style={{ position: "absolute", left: "40%" }}><br></br><strong>WILDHEARTS</strong></p> <br></br><br></br><br></br>
        <p>MThe Wildhearts are an English rock band, formed in 1989 in Newcastle upon Tyne. The band's sound is a mixture of hard rock 
          and melodic pop music, often described in the music press as combining influences as diverse as the Beatles and 1980s-era Metallica.
          The Wildhearts achieved several top 20 singles and two top 10 albums in Britain, though they also faced difficulties with record 
          companies and many internal problems often relating to drugs and depression. Much of the band's early career was affected by bitter
           feuds with their record company, East West.Throughout the band's history, members have regularly been replaced, with the only constant 
           member being the band's founder, singer and guitarist Ginger. Several band members have appeared in the line-up more than once. The 
           band has also been split up or placed on hiatus by Ginger multiple times. In the 2010s, the band convened occasionally for various 
           anniversary tours.</p>
           <button>INSTALL</button>
           </div>
      </div>

      <div className="dis" >
        <img src={logo3}/>
         <div className="para"><p style={{ position: "absolute", left: "40%" }}><br></br><strong>FIFA 23</strong></p> <br></br><br></br>
        <p>FIFA 23 is a football video game published by Electronic Arts. It is the 29th and final installment in the FIFA series that is 
          developed by EA Sports, and the final installment under the FIFA banner, and released worldwide on 30 September 2022 for Nintendo 
          Switch, PlayStation 4, PlayStation 5, Windows, Xbox One and Xbox Series X/S.Kylian Mbappé is the cover athlete for the standard and 
          legacy editions. Mbappé shares the cover of the ultimate edition with Sam Kerr.
          
          Listed in Guinness World Records as the best-selling sports video game franchise in the world, the game is the final under 
          the 29-year partnership between EA and FIFA. Future football games by EA are set to be named under the banner of EA Sports FC.
          IFA 23 features a degree of crossplay. Crossplay is available in FIFA Ultimate Team (FUT) Division Rivals (excluding co-op), FUT
           Champions, FUT Ultimate Online Draft, FUT Online Friendlies (excluding Co-Op), FUT Play a Friend, Online Friendlies, Online Seasons
            (excluding Co-Op Seasons) and the Virtual representation of the Bundesliga. However, crossplay is limited to consoles that fall within
             the same console generation. For example, those on the PlayStation 4 are able to play with and against players on Xbox One, but not
              the PlayStation 5 or Xbox Series X/S and vice versa. Pro Clubs will not support crossplay.</p>
           <button>INSTALL</button>
           </div>
      </div>

      <div className="dis" >
        <img src={logo4} />
        <div className="para"><p style={{ position: "absolute", left: "40%" }}><br></br><strong>Crysis 3</strong></p> <br></br><br></br>
        <p>Crysis 3 is a 2013 first-person shooter video game developed by Crytek and published by Electronic Arts. It is the third game of the 
          Crysis series, a sequel to the 2011 video game Crysis 2. The multiplayer portion of the game was developed by Crytek UK. Crysis 3's 
          story revolves around Prophet, a Nanosuit holder who is on a quest to take revenge on the Alpha Ceph, the leader of the Ceph alien race.
           The game's story serves as the end of the Crysis trilogy. Gameplay revolves around the use of the Nanosuit, which grants players a
            variety of abilities such as being invisible. New features introduced in Crysis 3 include a new Nanosuit ability called "Rip & Throw",
             a compound bow and hacking, which allows players to hack into enemies' equipment, drones, and security defenses.</p>
           <button>INSTALL</button>
           </div>
      </div>

    </div>




  )

}

export default Dashboard