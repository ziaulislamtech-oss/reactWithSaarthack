const  Card=(Props)=> {
    // console.log(props)
  return (
    
      <div className="card">
        <img src={Props.imgPath} alt=""/>
        <h1>{Props.Name}</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,commodi.</p>
        <button>view profile</button>
      
    </div>
  );
}
export default Card;
