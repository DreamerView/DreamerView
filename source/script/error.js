function removeSpecificErrorParameter() {
    const url = new URL(window.location.href);
    const params = url.searchParams;

    function rewriteHistory(get) {
        params.delete(get);

        const newUrl = url.pathname + (params.toString() ? '?' + params.toString() : '') + url.hash;
        window.history.replaceState(null, '', newUrl);
    }

    if (params.get('error') === 'not-empty') {
        const modal = new bootstrap.Modal(document.getElementById('notEmptyErrorHandlerModal'), {});
        modal.show();
        rewriteHistory("error");
    }

    if (params.get('error') === 'database-error') {
        const modal = new bootstrap.Modal(document.getElementById('databaseErrorHandlerModal'), {});
        modal.show();
        rewriteHistory("error");
    }

    if (params.get('status') === 'success') {
        const success = document.getElementById('successHandlerModal');
        const modal = new bootstrap.Modal(success, {});
        modal.show();
        success.addEventListener("shown.bs.modal",(event)=>{
            setTimeout(()=>modal.hide(),[250])
        })
        rewriteHistory("status");
    }
}

removeSpecificErrorParameter();
console.log("Started");
