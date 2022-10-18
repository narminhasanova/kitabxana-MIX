
$('#qeydiyyat').submit(function (e) {
    e.preventDefault();

    const txt = `
    <div class="col-2">
        <div class="book-box">
            <img src="book-photo-1.jpeg" alt="">
            <p>Kitabın adı: ${$('#book-name').val()}</p>
            <p>Janr: ${$('#book-genre').val()}</p>
            <p>Qiymət: ${$('#book-price').val()}</p>
            <p>Satıcı: ${$('#book-seller').val()}</p>
        </div>
    </div>`;

    $('.books-section').html($('.books-section').html() + txt);
});