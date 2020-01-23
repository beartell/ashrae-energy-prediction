$('#meter-types').on('change',function(){
    console.log($("#b1-m0").is(':checked') ? 1 : 0)
    $.ajax({
        url: "/plot",
        type: "GET",
        contentType: "application/json;charset=UTF-8",
        data: {
            "m0": $("#b1-m0").is(':checked') ? 1 : 0,
            "m1": $("#b1-m1").is(':checked') ? 1 : 0,
            "m2": $("#b1-m2").is(':checked') ? 1 : 0,
            "m3": $("#b1-m3").is(':checked') ? 1 : 0
        },
        dataType:"json",
        success: function (data) {
            Plotly.newPlot("building1", data );
        }
    });
})