

import './app-main.css'


const AppMain = () => {
	return (
		<div className="app__main">
		<div className="container">
			<div className="leftside">
			<h1 className="header__title">
				Welcome To Minecraft World
				</h1>
			<p className="header__text">
			With new games, new updates and new ways to play, join one of the biggest communities in the gaming world and start creating today!
			</p>
			<a href="https://discord.gg/KJPVG6Nh4h"><button className="header__btn">Discord</button></a>
			</div>
			<div className="rightside">
				<img src="./public/steve-and-alex.png" alt="decoration" className="header__img" />
			</div>
		</div>
	</div>
	)
}


export default AppMain