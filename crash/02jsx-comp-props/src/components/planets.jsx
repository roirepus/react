function Planets() {
	const planets = [

		{ name: 'Mars', isGasPlanet: false },
		{ name: 'Earth', isGasPlanet: false },
		{ name: 'Jupiter', isGasPlanet: true },
		{ name: 'Venus', isGasPlanet: false },
		{ name: 'Neptune', isGasPlanet: true },
		{ name: 'Uranus', isGasPlanet: true }

	]

	return (
		<>
				{
				planets.map((planet)=>
				  	planet.isGasPlanet ? <h1 key ={planet.name}>{planet.name}</h1>:null
				)
			}
		</>
	)

}

export default Planets

