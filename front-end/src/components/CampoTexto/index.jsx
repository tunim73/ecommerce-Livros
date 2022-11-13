import style from './CampoTexto.module.scss'


export const CampoTexto = ({item}) => {

    return ( 
        <div className={style.container}>
                <label className={style.label}>{item.label}</label> 
                <input className={style.campo} type = {item.type} name = {item.id} 
                placeholder = {item.placeholder} required = {item.required}/> 
        </div>
        )
}


