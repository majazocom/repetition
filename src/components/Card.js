const Card = (props) => {

    const onAddFave = (e) => {
        console.log(e.target.id);
        props.addFave(e.target.id);
    }

    return ( 
        <article className="card-container">
            <img src={props.img} width="200" height="200" />
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <button id={props.id} onClick={onAddFave}>+</button>
        </article>
     );
}
 
export default Card;