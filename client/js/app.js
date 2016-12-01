"use strict";
//~~Pet START~~
//~~Pet registration START~~
//console.log(CatsInfo);
//console.log(DogsInfo);

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

chengeBtnActive("pets-species", updateBreedsSearch, "#breed-search");
chengeBtnActive("pets-sex");

$('#breed-search').change(function () {
    $('#breed').val($(this).find("option:selected").val());
})

$('.pets-sex').click(function () {
    $('#sex').val($(this).val());
})


function addBreedsToBreedsSearch(id, items, type){
    $.each(items, function (i, item) {
        $('#' + id).append($('<option>', { 
            value: item,
            text : item,
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
    $('#breed').val($("select#breed-search.form-control.selectpicker").find("option:selected").val());
    $('#species').val($("select#breed-search.form-control.selectpicker").find("option:selected").attr("data-tokens"));
}
updateBreedsSearch("all");

$('.selectpicker').selectpicker({
  style: 'btn-info',
  size: 4
});



//~~Pet registration END~~

//~~Pet other START~~


//~~Pet other END~~
//~~Pet END~~
