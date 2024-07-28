$.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });

$('#file').on('change', () => {
    var formData = new FormData();
    var file = $('#file')[0].files[0]
    formData.append('file', file)
    $.ajax({
        url: '/upload',
        processData: false,//illega invocation
        dataType: 'json',
        data: formData,
        method: 'POST',
        contentType: false,// khong hien o preview
        success: function (result) {
            if (result.success) {
                var html = '<img src="' + result.path + '" alt="Product Avatar" style="max-width: 100%; height: auto;">';
                $('#input-file-img').html(html);
                $('#input-file-img-hiden').val(result.path);
            } else {
                alert('Upload failed. ' + (result.message || 'Please try again.'));
            }
        }
    })
})

$('#files').on('change', function() {
    var formData = new FormData();
    var files = $('#files')[0].files;
    for (let index = 0; index < files.length; index++) {
        formData.append('files[]', files[index]);
    }

    $.ajax({
        url: '/uploads',
        method: 'POST',
        dataType: 'JSON',
        data: formData,
        contentType: false,
        processData: false,
        success: function (result) {
            if (result.success && result.urls && result.urls.length) {
                var html = '';
                for (let index = 0; index < result.urls.length; index++) {
                    html += '<img src="' + result.urls[index] + '" alt="Product Image"><input type="hidden" value="' + result.urls[index] + '" class="product-images" name="product_images[]">';
                }
                $('#input-file-imgs').append(html);
            } else {
                alert('Upload failed. ' + (result.message || 'Please try again.'));
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('Error details:', textStatus, errorThrown, jqXHR.responseText);
            alert('An error occurred during the upload. Server encountered an error (status: ' + jqXHR.status + ').');
        }
    });
});
$(document).ready(function() {
    $('.form-repeater').repeater({
        show: function() {
            $(this).slideDown();
            var itemCount = $(this).closest('[data-repeater-list]').find('[data-repeater-item]').length;
            $(this).find('#options').attr('id', 'options-' + itemCount);
            $(this).find('label[for="options"]').attr('for', 'options-' + itemCount);
            $(this).find('#value').attr('id', 'value-' + itemCount);
            $(this).find('label[for="value"]').attr('for', 'value-' + itemCount);
        },
        hide: function(deleteElement) {
            if (confirm('Are you sure you want to delete this element?')) {
                $(this).slideUp(deleteElement);
            }
        }
    });
});