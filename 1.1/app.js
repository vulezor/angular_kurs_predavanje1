$(document).ready(function(){
    var currentStep = null;

    $('#step1, #step2').hide();
    
    $('#btnStep1').click(function(){
        $('#step1').show();
        $('#step2').hide();
        currentStep = 1;
        //update database ajax
    });

    $('#btnStep2').click(function(){
        $('#step1').hide();
        $('#step2').show();
        currentStep = 2
        //update database ajax
    });
});