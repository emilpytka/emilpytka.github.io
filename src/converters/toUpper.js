export class ToUpperValueConverter {
	toView(value){
		return (value || "").toUpperCase();
	}
}
