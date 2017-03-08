exports.index = function(req, res) {
  res.render('index');
};


exports.items = function(req, res) {
	res.json({
		items: [
		{
			id: 15001,
			image: "images/dress1.jpg",
			name: "Vestido Azul",
			price: "1295",
			quantity: 2,
			outStock: false
		},
		{
			id: 15002,
			image: "images/dress2.jpg",
			name: "Camiseta Negra",
			price: "1795",
			quantity: 1,
			outStock: true
		},
		{
			id: 15003,
			image: "images/dress3.jpg",
			name: "Pantalón Verde",
			price: "3495",
			quantity: 1,
			outStock: false
		}
		]
	});
};