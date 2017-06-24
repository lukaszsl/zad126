var url = 'https://restcountries.eu/rest/v1/name/',
	$table = $('country-table');

$('#search').click(searchCountries);

function searchCountries() {
	var countryName = $('#country-name-input').val();
	if (!countryName.length) countryName = 'Poland';

	$.ajax({
		url: url + countryName,
		method: 'GET',
		success: makeTable
	});
}

function makeTable(resp) {

	resp.forEach(function(item) {
		var $country = $('<div>').addClass('country-table'),
			$countryNameHeader = $('<h2>').addClass('country-name-th'),
			$countryTable = $('<table>'),
			$tableRow = $('<tr>'),
			$nameColumn = $('<td>'),
			$valueColumn = $('<td>');

		$country.appendTo('#body');
		$countryNameHeader.text(item.name).appendTo($country);
		$countryTable.appendTo($country);
		$tableRow.appendTo($countryTable);
		$nameColumn.text('capital: ').appendTo($tableRow);
		$valueColumn.text(item.capital).appendTo($tableRow);
	});


}

/*
function showCountriesList(resp) {
	countriesList.empty();
	resp.forEach(function(item) {
		$('<li>').text(item.name).appendTo(countriesList);
	});
}
*/