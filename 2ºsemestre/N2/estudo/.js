const user = {
	firstName: "João",
	lastName: "Roberto"
};

function formatName(user) {
	return user.firstName + " " + user.lastName;
}

const element = (
	<h1>
		Olá, {formatName(user)}, o valor de PI é {Math.PI}
	</h1>
);

ReactDOM.render(element, document.getElementById("root"));
