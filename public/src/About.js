import aboutlogo from './img4.jpg'
import './About.css'
function About()
{
    return(
        <div className="about">
           <div className="about1">
          <img src={aboutlogo} height={680} width="100%"></img>
           </div>
         <div className="about2">
         <h2>
        In the modern era, fashion has taken on a lot of significance,
        as it has become a big business and a social symbol. 
        Girls have overtaken boys when it comes to fashion.
        If you go to any public place or event, where the presence
        of young boys and girls is significant, for example, 
        a university or college, you will see boys walking around
        like dandies and girls like butterflies in their flashy, 
        gorgeous and curious outfits. Now, not only tailors make men, 
        there are specific designers for both men and women. 
        There are many beauty parlours everywhere where special
        attention is paid to people's hair, outfits etc.
         </h2>
         </div>
        </div>
    )
}
export default About