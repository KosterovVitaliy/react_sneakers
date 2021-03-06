
function Drawer() {
	return (
		<div className="overlay" style={{ display: 'none' }}>
			<div className="drawer">
				<h2 className="mb-30 d-flex justify-between">Корзина<img className="cu-p" src="/img/btn-remove.svg" alt="Remove" /></h2>

				<div className="items">
					<div className="cartItem d-flex align-center mb-20">
						<div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }} className="cartItemImg"></div>
						<div className="mr-20 flex">
							<p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
							<b>129$</b>
						</div>
						<img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
					</div>

					<div className="cartItem d-flex align-center mb-20">
						<div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }} className="cartItemImg"></div>
						<div className="mr-20 flex">
							<p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
							<b>129$</b>
						</div>
						<img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
					</div>

				</div>
				<div className="cartTotalBlock">
					<ul>
						<li className="d-flex">
							<span>Итого:</span>
							<div></div>
							<b>249$</b>
						</li>
						<li className="d-flex">
							<span>Налог 5%:</span>
							<div></div>
							<b>17$</b>
						</li>
						<button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow" /></button>
					</ul>
				</div>

			</div>
		</div>
	);
}

export default Drawer;