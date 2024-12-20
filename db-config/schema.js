module.exports = {

    getfinanceBillDt: {
        spname: 'upr_get_finance_bill_data',
        Schema: [
            {
                type: "VARCHAR", column: "month_name", direction: "IN", alias: "month_name"
            },
            {
                type: "VARCHAR", column: "weekday_name", direction: "IN", alias: "weekday_name"
            },
            {
                type: "BIGINT", column: "hosp_id", direction: "IN", alias: "hosp_id"
            }
        ]


    },
    insUpdCustDet: {
        spname: 'upr_insupd_express_delivery_request',
        Schema: [
            {
                type: "VARCHAR", column: "in_display_name", direction: "IN", alias: "in_display_name"
            },
            {
                type: "VARCHAR", column: "in_email_id", direction: "IN", alias: "in_email_id"
            },
            {
                type: "VARCHAR", column: "in_phone_no", direction: "IN", alias: "in_phone_no"
            },
            {
                type: "VARCHAR", column: "in_postal_cd", direction: "IN", alias: "in_postal_cd"
            },
            {
                type: "TEXT", column: "in_titles", direction: "IN", alias: "in_titles"
            },
            {
                type: "JSON", column: "in_areas", direction: "IN", alias: "in_areas"
            },
            {
                type: "VARCHAR", column: "in_delivery_frequence", direction: "IN", alias: "in_delivery_frequence"
            },
            {
                type: "VARCHAR", column: "in_eligibe", direction: "IN", alias: "in_eligibe"
            },
            {
                type: "VARCHAR", column: "in_lattitude", direction: "IN", alias: "in_lattitude"
            },
            {
                type: "VARCHAR", column: "in_longitude", direction: "IN", alias: "in_longitude"
            }
          
        ]


    },
    validUserLogin : {
        spname: 'insupd_login_user',
        Schema: [
            {
                type: "VARCHAR", column: "in_param", direction: "IN", alias: "in_param"
            }
           
        ]


    },
    checkZipCode : {
        spname: 'upr_get_pincode_check',
        Schema: [
            {
                type: "VARCHAR", column: "in_pincode", direction: "IN", alias: "in_pincode"
            }
           
        ]


    }


}