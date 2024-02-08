$(document).ready(function () {
    // Click event handler for filter-option elements
    $('.filter-option').click(function () {
        $(this).toggleClass('selected');
        var icon = $(this).find('.filter-icon');
        icon.toggleClass('fa-plus fa-check');
        icon.css('font-weight', $(this).hasClass('selected') ? 'bold' : '');
        showAdditionalData();
    });

    // Click event handler for filter-option2 elements
    $('.filter-option2').click(function () {
        $('.filter-option2').removeClass('selected');
        $(this).addClass('selected');
        $('.filter-option2 .filter-icon').removeClass('fa-check').addClass('fa-plus');
        var icon = $(this).find('.filter-icon');
        icon.removeClass('fa-plus').addClass('fa-check');
        icon.css('font-weight', 'bold');
        showAdditionalData();
    });

    // Function to show additional data
    function showAdditionalData() {
        $('#filterContainer').append('<div class="filter-option"><i class="filter-icon fas fa-plus"></i><span>New Option</span></div>');
    }

    $(".prop__inside__collection").click(function(){
        $(this).toggleClass("selected");
        $(this).find(".check__icon__customization").toggle();
    });

    $('.accordion-header3').click(function () {
        var accordionItem = $(this).closest('.accordion-item3');
        accordionItem.toggleClass('active').siblings().removeClass('active');

        var accordionContent = accordionItem.find('.accordion-content3');
        accordionContent.slideToggle();
        accordionContent.siblings('.accordion-content3').slideUp();


        var downArrow = $(this).find('.fa-chevron-down');
        var upArrow = $(this).find('.fa-chevron-up');
        downArrow.toggleClass('d-none', accordionItem.hasClass('active'));
        upArrow.toggleClass('d-none', !accordionItem.hasClass('active'));
    });

    $('.bundle__chuck').click(function () {
        $(this).addClass("d-none");/////option content if it is not required then comment it
        $('.hidden__content').toggle(); 
    });
    
    $('.bundle__chuck2').click(function () {
        $(this).addClass("d-none");/////option content if it is not required then comment it
        $('.hidden__content2').toggle(); 
    });

    $('#toggleButton').change(function () {
        var toggleStatus = $(this).prop('checked');
        $('#toggleStatus').text(toggleStatus ? "true" : "false");
    });

    $('.form-check-input').on('change', function () {
        if ($(this).is(':checked')) {
          console.log('Checkbox is checked.');
        } else {
          console.log('Checkbox is unchecked.');
        }
      });

      
         // Initialize slider
    $("#slider143").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function(event, ui) {
            $(".from").val(ui.values[0]);
            $(".to").val(ui.values[1]);
        }
    });

    // From input change event
    $(".from").change(function() {
        var value = parseInt($(this).val());
        if (isNaN(value)) {
            value = 0;
        }
        $("#slider143").slider("values", 0, value);
    });

    // To input change event
    $(".to").change(function() {
        var value = parseInt($(this).val());
        if (isNaN(value)) {
            value = 0;
        }
        $("#slider143").slider("values", 1, value);
    });

    // Dropdown change event for MinSelect
    $("#minSelect").change(function() {
        var selectedValue = $(this).val();
        // Get the numeric value from the selected option
        var numericValue = parseFloat(selectedValue.match(/(\d+)/)[0]);
        if (!isNaN(numericValue)) {
            $("#slider143").slider("values", 0, numericValue);
        }
    });

    // Dropdown change event for MaxSelect
    $("#maxSelect").change(function() {
        var selectedValue = $(this).val();
        // Get the numeric value from the selected option
        var numericValue = parseFloat(selectedValue.match(/(\d+)/)[0]);
        if (!isNaN(numericValue)) {
            $("#slider143").slider("values", 1, numericValue);
        }
    });

});




// var select = document.getElementById('input-select');

// for (var i = -20; i <= 40; i++) {
//     var option = document.createElement("option");
//     option.text = i;
//     option.value = i;
//     select.appendChild(option);
// }

// var html5Slider = document.getElementById('maxminoptimized');

// noUiSlider.create(html5Slider, {
//     start: [50000, 200000000], 
//     connect: true,
//     range: {
//         'min': 50000, 
//         'max': 200000000 
//     }
// });

// var inputNumber = document.getElementById('input-number');


// html5Slider.noUiSlider.on('update', function (values, handle) {
//     var value = values[handle];
//     if (handle) {
//         inputNumber.value = value;
//     } else {
//         select.value = Math.round(value);
//     }
// });

// select.addEventListener('change', function () {
//     html5Slider.noUiSlider.set([this.value, null]);
// });


// inputNumber.addEventListener('change', function () {
//     html5Slider.noUiSlider.set([null, this.value]);
// });


// var nonLinearSlider = document.getElementById('nonlinear');

// noUiSlider.create(nonLinearSlider, {
//     connect: true,
//     behaviour: 'tap',
//     start: [50000, 200000000],
//     range: {
//         'min': [50000],
//         '10%': [500000, 500000], 
//         '50%': [10000000, 1000000],
//         'max': [200000000]
//     }
// });


// var nodes = [
//     document.getElementById('lower-value'),
//     document.getElementById('upper-value') 
// ];


// nonLinearSlider.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
//     nodes[handle].innerHTML = values[handle] + ', ' + positions[handle].toFixed(2) + '%';
// });
$(document).ready(function() {
    // Populate the select options
    var step = 50000; // Increment value
    var minVal = 50000; // Minimum value
    var maxVal = 200000000; // Maximum value

    for (var i = minVal; i <= maxVal; i += step) {
        $(".from").append("<option value='" + i + "'>" + i + "</option>");
        $(".to").append("<option value='" + i + "'>" + i + "</option>");
    }

    // Update slider when 'from' select changes
    $(".from").change(function() {
        var value = $(this).val();
        $("#slider143").slider("values", 0, value);
    });

    // Update slider when 'to' select changes
    $(".to").change(function() {
        var value = $(this).val();
        $("#slider143").slider("values", 1, value);
    });

    // Update select elements when slider changes
    $("#slider143").slider({
        range: true,
        min: minVal,
        max: maxVal,
        values: [7500000, 30000000],
        slide: function (event, ui) {
            $(".from").val(ui.values[0]);
            $(".to").val(ui.values[1]);
        }
    });
});


$(document).ready(function() {
    // Initialize the slider
    $("#slider").slider({
        range: "min",
        min: 0,
        max: 100,
        value: 0,
        slide: function(event, ui) {
            // Update the selected option value
            $("#slider-select").val(ui.value);
        }
    });

    // Update the slider when the dropdown selection changes
    $("#slider-select").on("change", function() {
        var selectedValue = $(this).val();
        $("#slider").slider("value", selectedValue);
    });
});
