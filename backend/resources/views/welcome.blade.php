<!DOCTYPE html>
<html>
<head>
    <title>CKEditor 5 Integration with Image Upload</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.ckeditor.com/ckeditor5/34.2.0/classic/ckeditor.js"></script>
</head>
<body>
    <div class="container mt-5">
        <form id="contentForm" action="{{ route('submit.content') }}" method="post" enctype="multipart/form-data">
            @csrf
            <div class="form-group">
                <label for="editor">Content:</label>
                <textarea name="content" id="editor" class="form-control ckeditor"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
    <script>
        let uploadedImages = [];

        function SimpleUploadAdapterPlugin(editor) {
            editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
                return {
                    upload() {
                        return loader.file
                            .then(file => new Promise((resolve, reject) => {
                                const reader = new FileReader();
                                reader.readAsDataURL(file);
                                reader.onload = () => {
                                    uploadedImages.push(file);
                                    resolve({ default: reader.result });
                                };
                                reader.onerror = (error) => reject(error);
                            }));
                    }
                };
            };
        }

        ClassicEditor
            .create(document.querySelector('#editor'), {
                extraPlugins: [SimpleUploadAdapterPlugin]
            })
            .catch(error => {
                console.error(error);
            });

        document.getElementById('contentForm').addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(this);
            uploadedImages.forEach((file, index) => {
                formData.append('images[]', file, file.name);
            });

            fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'X-CSRF-TOKEN': '{{ csrf_token() }}'
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Content submitted successfully!');
                } else {
                    alert('Submission failed!');
                }
            })
            .catch(error => {
                console.error('Error submitting form:', error);
            });
        });
    </script>
</body>
</html>
