const Favourites = (props) => {
    return ( 
        <section>
            <h3>My Fav Plants:</h3>
            {
                props.favPlants.map((favPlant) => <section><img src={favPlant.img} width="50" height="50"></img></section>)
            }
        </section>
     );
}
 
export default Favourites;