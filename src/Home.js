const Home = () => {
    

    const handleClick = () =>{
        console.log('hello lads')
    }

    const handleClickAgain = (name) =>{
        console.log('hello' + name)

    }

    return ( 
        <div className="home">
            <h2>Home Page</h2> 
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => {
                handleClickAgain('lam')
            }}>click me again</button>
        </div>
     );
}
  
export default Home;