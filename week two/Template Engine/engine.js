function templateEngine(template,data){
	let name = data.name
	let search = template.replace('{{name}}', name)
	return search
}

const template = "Hello, {{name}}!";
const data = { name: "Mahmoud" };

console.log(templateEngine(template,data))