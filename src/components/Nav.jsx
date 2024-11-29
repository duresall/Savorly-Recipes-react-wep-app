
import style from '../module/nav.module.css'
import image from '../assets/image/recipe.png'

export default function Nav(){
    return <div className={style.nav}>

        <div className={style.container}>

            <img src={image} alt=""  className={style.image}/>
            <div className={style.title}>Savorly Recipes</div>
           
        </div>
              
        

         </div>
}