"use strict";
//~~Pet START~~
//~~Pet registration START~~
function chengeBtnActive(className, fnc, target){
	$("." + className).click(function(el){
		var that = $(this);
		$("." + className).removeClass(className + "-active active");
		that.addClass(className + "-active active");
		
		if(fnc != null && target !== null){
			// fnc(target, that);
			fnc(that.val());
		}
	});

}
function addBreedsToBreedsSearch(id, items, type){
	$.each(items, function (i, item) {
		$('#' + id).append($('<option>', { 
			value: i,
			text : item.name,
			"data-tokens": type
		}));
	})
}

function updateBreedsSearch(type){
	$("#breed-search").empty();
	if(type === "all"){
		$.each(breeds.petsSpecies, function (i, breed){
			addBreedsToBreedsSearch("breed-search", breeds[breed], breed);
		});
	}
	else{
		addBreedsToBreedsSearch("breed-search", breeds[type], type);        
	}
	// $("#breed-search option:first").attr("selected", true);
	// $(".btn-group.bootstrap-select.form-control.dropup .dropdown-menu.open .dropdown-menu.inner:first").addClass("selected active");
	$(".selectpicker").selectpicker("refresh");
	var currSelected = $("select#breed-search.form-control.selectpicker").find("option:selected");
	var currSelectedSpecie = currSelected.attr("data-tokens");
	var currSelectedBreed = currSelected.val();

	$('#species').val(currSelectedSpecie);
	$('#breed').val(currSelectedBreed);
	$("#breed-image").attr("src", breeds[currSelectedSpecie][currSelectedBreed].imgUrl);
}

if($("form#pet-register").length !== 0){
	chengeBtnActive("pets-species", updateBreedsSearch, "#breed-search");
	chengeBtnActive("pets-sex");

	$('#breed-search').change(function () {
		var currSelected = $(this).find("option:selected");
		var currSelectedSpecie = currSelected.attr("data-tokens");
		var currSelectedBreed = currSelected.val();

		$('#species').val(currSelectedSpecie);
		$('#breed').val(currSelectedBreed);
		$("#breed-image").attr("src", breeds[currSelectedSpecie][currSelectedBreed].imgUrl);
	})

	$('.pets-sex').click(function () {
		$('#sex').val($(this).val());
	})


	
	updateBreedsSearch("all");

	$('.selectpicker').selectpicker({
	style: 'btn-info',
	size: 4
	});
}
if($("form#hotel-register").length !== 0){
	chengeBtnActive("pets-species");
}

//~~Pet registration END~~

//~~Pet hotel START~~
$(document).ready(function() {
	var titleValidators = {
			row: '.col-xs-33',   // The title is placed inside a <div class="col-xs-4"> element
			validators: {
				notEmpty: {
					message: 'The title is required'
				}
			}
		},
		isbnValidators = {
			row: '.col-xs-33',
			validators: {
				notEmpty: {
					message: 'The ISBN is required'
				}
				// isbn: {
				// 	message: 'The ISBN is not valid'
				// }
			}
		},
		priceValidators = {
			row: '.col-xs-2',
			validators: {
				notEmpty: {
					message: 'The price is required'
				},
				numeric: {
					message: 'The price must be a numeric number'
				}
			}
		},
		serviceIndex = 0;

	$('#hotel-register')
		// .formValidation({
		// 	framework: 'bootstrap',
		// 	icon: {
		// 		valid: 'glyphicon glyphicon-ok',
		// 		invalid: 'glyphicon glyphicon-remove',
		// 		validating: 'glyphicon glyphicon-refresh'
		// 	},
		// 	fields: {
		// 		'service[0].title': titleValidators,
		// 		'service[0].isbn': isbnValidators,
		// 		'service[0].price': priceValidators
		// 	}
		// })

		// Add button click handler
		.on('click', '.addButton', function() {
			serviceIndex++;
			var $template = $('#serviceTemplate'),
				$clone    = $template
								.clone()
								.removeClass('hide')
								.removeAttr('id')
								.attr('data-service-index', serviceIndex)
								.insertBefore($template);

			// Update the name attributes
			$clone
				.find('[name="name"]').attr('name', 'service[' + serviceIndex + '].[name]').prop('disabled', false).end()
				.find('[name="detailedInfo"]').attr('name', 'service[' + serviceIndex + '].[detailedInfo]').prop('disabled', false).end()
				.find('[name="isPerDay"]').attr('name', 'service[' + serviceIndex + '].[isPerDay]').prop('disabled', false).end()
				.find('[name="price"]').attr('name', 'service[' + serviceIndex + '].[price]').prop('disabled', false).end();

			// Add new fields
			// Note that we also pass the validator rules for new field as the third parameter
			// $('#hotel-register')
			// 	.formValidation('addField', 'service[' + serviceIndex + '].title', titleValidators)
			// 	.formValidation('addField', 'service[' + serviceIndex + '].isbn', isbnValidators)
			// 	.formValidation('addField', 'service[' + serviceIndex + '].price', priceValidators);
		})

		// Remove button click handler
		.on('click', '.removeButton', function() {
			var $row  = $(this).parents('.form-group'),
				index = $row.attr('data-service-index');

			// Remove fields
			// $('#hotel-register')
			// 	.formValidation('removeField', $row.find('[name="service[' + index + '].title"]'))
			// 	.formValidation('removeField', $row.find('[name="service[' + index + '].isbn"]'))
			// 	.formValidation('removeField', $row.find('[name="service[' + index + '].price"]'));

			// Remove element containing the fields
			$row.remove();
		});
});
		



//~~Pet hotel END~~
//~~Pet END~~
