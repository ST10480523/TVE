function showSuccess(msg) {
        statusBox.className = "status success";
        statusBox.textContent = msg;
        statusBox.style.display = "block";
    }

    function showError(msg) {
        statusBox.className = "status error";
        statusBox.textContent = msg;
        statusBox.style.display = "block";
    }
</script>