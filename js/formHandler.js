$(document).ready(function(){
 // Contact form handler
    $('#contact-form').validate({
        rules: {
            fullname: {
                required: true,
                minlength: 3,
            },
            email: {
            required: true,
            email: true
            },
            subject: "required",
            message: {
                required: true,
                minlength: 140,
                maxlength: 500,
            },
        },
        messages: {
            fullname: {
                required: "Please enter your fullname",
                minlength: "The name is too short, Please enter your fullname"
            },
            subject: "Please choose the right subject",
            message: {
            required: "Please provide more information about the project",
            minlength: "The project description is too short. Please proivde more details",
            maxlength: "The project description is too much. Only Important details about the project is needed"
            },
            email: {
            required: "Please enter your personal or company email",
            email: "Please enter a valid email address"
            }
        },
        submitHandler: function(form, event) {
            event.preventDefault();

            //Getting the input values
            const fullname = $('#fullname').val();
            const email = $("#email").val();
            const subject = $("#subject").val();
            const message = $("#message").val();
            const compose_message = `${message}, You can contact me through this email ${email}`

            const data = {
                service_id: 'fawumiayodeji@gmail.com',
                template_id: 'template_nmr5tso',
                user_id: 'user_mrvA2w00fLthpiDICdHRY',
                template_params: {
                    fullname,
                    subject,
                    compose_message
                }
            };

            $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
                type: 'POST',
                data: JSON.stringify(data),
                contentType: 'application/json'
            }).done(function(){
                $("#contact-form")[0].reset();
                createModalContainer('success');
            }).fail(function(error) {
                createModalContainer('error');
            });
        }
    });

    //Create Modal Element
    function createModalContainer(status) {
        let modalContaner = $("<div />").attr('class', "modal-container");
        bgColor = window.getComputedStyle(document.body, null).getPropertyValue('background-color');

        if(bgColor === "rgb(0, 0, 0)"){
            modalContaner.css({
                "color": "rgb(0, 0, 0)"
            });
        };

        if(status === "success"){
            modalContaner.html(`
                <div class="modal-body">
                    <div class="modal-header">
                        <button id="close" class="close">&times;</button>
                    </div>
                    <div class="modal-content">
                        <svg fill="#09df5b" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
                            <g>
                                <g id="check_x5F_alt">
                                    <path style="fill:#030104;" d="M16,0C7.164,0,0,7.164,0,16s7.164,16,16,16s16-7.164,16-16S24.836,0,16,0z M13.52,23.383    L6.158,16.02l2.828-2.828l4.533,4.535l9.617-9.617l2.828,2.828L13.52,23.383z"/>
                                </g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                        </svg>
                        <h3>Success</h3>
                        <p>Your message was sent successfully. I will get back to you as soon as possible. Thanks</p>
                    </div>
                </div>
            `);
        };

        if(status === "error"){
            modalContaner.html(`
                <div class="modal-body">
                    <div class="modal-header">
                        <button id="close" class="close">&times;</button>
                    </div>
                    <div class="modal-content">
                        <svg fill="#ff0000" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve">
                            <g id="XMLID_28_">
                                <path id="XMLID_29_" d="M165,0C120.926,0,79.492,17.163,48.328,48.327c-64.334,64.333-64.334,169.011-0.002,233.345   C79.49,312.837,120.926,330,165,330c44.072,0,85.508-17.163,116.672-48.328c64.334-64.334,64.334-169.012,0-233.345   C250.508,17.163,209.072,0,165,0z M239.246,239.245c-2.93,2.929-6.768,4.394-10.607,4.394c-3.838,0-7.678-1.465-10.605-4.394   L165,186.213l-53.033,53.033c-2.93,2.929-6.768,4.394-10.607,4.394c-3.838,0-7.678-1.465-10.605-4.394   c-5.859-5.857-5.859-15.355,0-21.213L143.787,165l-53.033-53.033c-5.859-5.857-5.859-15.355,0-21.213   c5.857-5.857,15.355-5.857,21.213,0L165,143.787l53.031-53.033c5.857-5.857,15.355-5.857,21.213,0   c5.859,5.857,5.859,15.355,0,21.213L186.213,165l53.033,53.032C245.104,223.89,245.104,233.388,239.246,239.245z"/>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                        </svg>
                        <h3>Something went wrong</h3>
                        <p>Please check your network connection, make sure you're connected to the internet and try again</p>
                    </div>
                </div>
            `);
        };

        modalContaner.appendTo('body');

         //Close Modal
        $("button#close").click(function(){
            $('div.modal-container').hide();
        })
    }

});