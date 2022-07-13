

function App() {
	return (
		<div className="wrapper clear">
			<header className="d-flex justify-between align-center p-40">
				<div className="d-flex align-center">
					<img width={40} height={40} src="/public/img/logo.png" alt="" />
					<div>
						<h3 className="text-uppercase">React Sneakers</h3>
						<p>Магазин лучших кроссовок</p>
					</div>
				</div>
				<ul className="d-flex">
					<li className="mr-30">
						<img width={18} height={18} src="/public/img/cart.svg" alt="" /><span>150$</span>
					</li>
					<li>
						<img width={18} height={18} src="/public/img/user.svg" alt="" />
					</li>
				</ul>
			</header>
			<div className="content p-40">
				<h1>Все кроссовки</h1>

				<div className="card">
					<img src="" alt="" />
					<p></p>
					<div>
						<div>
							<span>Цена:</span>
							<b>129$</b>
						</div>
						<button>
							<img width={11} height={11} src="/img/plus.svg" alt="Plus" />
						</button>
					</div>
				</div>

			</div>
		</div>
	);
}

export default App;
