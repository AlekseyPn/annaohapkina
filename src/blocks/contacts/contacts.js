var form = {
    formInput: {
        name: $('#name'),
        email: $('#email'),
        phone: $('#tel'),
        text: $('#question')
    },
    thankyou: $('.contacts__thankyou'),
    form: $('#feedback'),
    submit: $('#feedbackSubmit'),
    init: function () {
        var thankyou = this.thankyou
        var $this = this
        this.form.submit(function (e) {
            e.preventDefault()
            if ($this.validation() === false && $this.validationNumber() === false) {
                return false
            } else {
                var dataString = $this.form.serialize();
                thankyou.append('<img class="contacts__loader" src="image/loader.svg">')
                $.ajax({
                    type: 'POST',
                    url: 'action.php',
                    data: dataString,
                    success: function () {
                        thankyou.remove('.contacts__loader')
                        thankyou.text('Спасибо за ваше сообщение! Вскоре я с вами свяжусь :)')   
                    }
                })
            }
        })

    },
    validation: function () {
        for (key in this.formInput) {
            if (this.formInput[key].val() === "") {
                this.formInput[key].addClass('error');
                this.formInput[key].focus()
                return false
            } else {
                this.formInput[key].removeClass('error')
            }
        }
    },
    convert_to_number: function (phone) {
        var num = Number(phone.replace(/\D+/g, ""));
        var two = String(num).charAt(1);
        var two = Number(two);
        var length = num.toString().length;
        return {
            num: num,
            two: two,
            length: length
        };
    },
    validationNumber: function () {
        var number = this.formInput.tel;
        var number_value = $(number).val();
        var data = this.convert_to_number(number_value);
        if (data.length !== 11) {
            return false
        }
    }
}

form.init();