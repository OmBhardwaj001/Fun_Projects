function User(props){
    console.log(props)
    return(
        <>
            <img className="img" src={props.data.picture.large} alt="Loading..."/>
            <h1>{props.data.name.first}</h1>
            <p>{props.data.phone} </p>
            <p>{props.data.location.city} {props.data.location.state}</p>
        </>
    )
}

export default User;