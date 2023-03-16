import Card from "./Card";
import CARDS from '../components/Cards.module.css'

export default function Cards(props) {
   const { characters, onClose } = props;
   return (
      <div>
         <div className={CARDS.container}>
            <div>
         {characters.map((p) =><Card
         key={p.id}
         id={p.id}
         name={p.name}
         species={p.species}
         gender={p.gender}
         image={p.image}
         onClose = { () => {onClose(p.id)}}
         />
         )}
         </div>
         </div>
      </div> 

)};
