


(function ($) {
    'use strict'
    $('#form').on('submit', function (e) {
        e.preventDefault();
        var html = prepareHtml($('#newTodo').val());
        createWriteStream($('#todos'), html);
        
    })
    $('#newTodo').on('inut',function () {
        if ($(this).val().length > 3){$('#addTodo').removeAttr(disabled);
    }else{
        $('#addTodo').attr('disabled',true);
    }

        
    })
    $('body').on('click','.deleteBtn',function () {
        deleteItem($(this).parents('li'));

    $('body').on('click','.saveBtn',function () {
        deleteItem($(this).parents('li'));
    
        $('body').on('click','.editBtn',function () {
        deleteItem($(this).parents('li'));
    
        $('body').on('click','.cancelBtn',function () {
        deleteItem($(this).parents('li'));
        
    })
    $('body').on('change','input[type="checkbox"]', function(){
        moveItem()
    })
    function prepareHtml(text) {
        	return `<label><input type="checkbox"> ${text}</label>
			<br>
			<button class="btn btn-warning editBtn">Edit</button>
			<button class="btn btn-danger deleteBtn">Delete</button>
			<button class="btn btn-success saveBtn" hidden>Save</button>
			<button class="btn btn-dark cancelBtn" hidden>Cancel</button>`;

        
    }
    function createItem(list, html) {
        
         list.append(`<li class="lisgroup-item">${html}</li>`);
        
    }


}(jQuery))