document.addEventListener('DOMContentLoaded', function () {
    var modalBtns = document.querySelectorAll('.btn-modal');

    modalBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();

            var modalId = btn.getAttribute('data-target');
            var modal = document.querySelector(modalId);

            if (modal) {
                var modalInstance = new bootstrap.Modal(modal);
                modalInstance.show();

                document.body.style.overflow = 'hidden';
            }
        });
    });

    var closeBtns = document.querySelectorAll('.btn-close');

    closeBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var modal = btn.closest('.modal');
            if (modal) {

                var modalInstance = bootstrap.Modal.getInstance(modal);
                modalInstance.hide();

                document.body.style.overflow = '';
            }
        });
    });
});
