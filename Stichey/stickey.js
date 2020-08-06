function getNewNote() {
    return  '<div class="note">' + 
            '<textarea class="expanding" style="width:190px;"></textarea>' +
            '<input class="delete-button" type="button" value="削除">' +
            '<input data-color="#CCFFCC" class="color-button" type="button" value="緑">' +
            '<input data-color="#CCFFFF" class="color-button" type="button" value="青">' +
            '<input data-color="#FFCCFF" class="color-button" type="button" value="赤">' +
            '</div>';
}

function appendFunctions($note) {
    $note.draggable();

    $note.children(".delete-button").on('click', function() {
        $(this).parents('.note').remove();
    });

    $note.children(".color-button").on('click', function() {
        const color = $(this).data('color');
        $(this).parents('.note').css('background-color', color);
  });
}

$(function(){
    $('#add-button').on('click', function(){
        var $note = $(getNewNote());
        appendFunctions($note);
    
        $('#sticky-note-container').append($note);
    });
});