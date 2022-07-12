

function App() {
	return (
		<div className="wrapper">
			<header>
				<div className="headerLeft">
					<img width={40} height={40} src="/public/img/logo.png" alt="" />
					<div className="headerInfo">
						<h3>React Sneakers</h3>
						<p>Магазин лучших кроссовок</p>
					</div>
				</div>
				<ul className="headerRight">
					<li><img width={18} height={18} src="/public/img/cart.svg" alt="" /><span>150$</span></li>
					<li>
						<img width={18} height={18} src="/public/img/user.png" alt="" />
					</li>
				</ul>
			</header>
			<div className="content">
				<h1>Все кроссовки</h1>
				...
			</div>
		</div>
	);
}

export default App;
