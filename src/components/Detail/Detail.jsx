import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from './Detail.module.css'
import gif1 from '../img/rick-and.gif'

const Detail = () => {
   const { id } = useParams();
   const [characters, setCharacter] = useState({});

   useEffect(() => {
      axios(`/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacter(data);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
      return setCharacter({});
   }, [id]);

   return (
      <div className={style.firstDiv}>
         <div className={style.detailTex}>
            <h1>{characters?.name}</h1>
            <h3>Status: {characters?.status}</h3>
            <h3>Specie: {characters?.species}</h3>
            <h3>Gender: {characters?.gender}</h3>
            <h3>Origin: {characters?.origin}</h3>
         </div>
         <div >
            <img src={gif1} alt="" className={style.gif} />
         </div>
         <div className={style.imageDiv}>
            <img src={characters?.image} alt='' className={style.image} />
         </div >
      </div>
   )
};

export default Detail;