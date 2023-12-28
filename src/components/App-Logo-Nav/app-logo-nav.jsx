import './app-logo-nav.css';

const LogoNav = () => {
	return (
		<div className="logo__nav">
			<div className="header__logo">
				<img src="./public/web-logo.svg" alt="" className="header__logo" />
			</div>

			<nav className="nav">
				<ul className="nav__list">
					<li><a href="#" className='nav__listItem link'>Home</a></li>
					<li><a href="#" className='nav__listItem link'>Games</a></li>
					<li><a href="#" className='nav__listItem link'>Store</a></li>
				</ul>
			</nav>
		</div>
	)
}


export default LogoNav;